/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { keystore, loadKeys } from './certificateRetriver';
import { v4 as uuidv4 } from 'uuid';
import * as crypto from "crypto";
import { generateAccessToken, generateRefreshToken } from './tokenFactory';

const app = express();
const sessionStore: LoginSession[] = [];
const tokenStore: RefreshToken[] = [];

type RefreshToken = {
  id: string;
  pnr: string;
  created: Date;
  consumed: boolean;
}

type LoginSession = {
  id: string;
  pnr: string;
  status: Status;
  verificationSecret: string;
  created: Date;
  tokenKey?: string;
}

enum Status {
  Init = 'init',
  Open = 'open',
  Accepted = 'accepted',
  Closed = 'closed',
  Canceled = 'canceled'
}

app.get('/jwk', async (req, res) => {
  await loadKeys()
  res.send(keystore.toJSON());
});
app.get('/jwk/:kid', async (req, res) => {
  const key = keystore.get(req.params.kid);
  res.json(key).status(200);
});

app.post('/init', async (req, res) => {
  const { pnr, verificationSecret } = req.body;
  const id =  uuidv4();
  sessionStore.push({verificationSecret, status: Status.Init, pnr, id, created: new Date()});
  res.send({ sessionId: id });
});

app.post('/status', async (req, res) => {
  const { sessionId } = req.body;
  const session = sessionStore.find(s => s.id === sessionId);
  if (!session) { return res.status(404).send({ error: 'Session not found' }); };
  if(session.status === Status.Init) {
    session.status = Status.Open;
    return res.send({ status: Status.Open });
  }

  if(session.status === Status.Open) {
    session.status = Status.Accepted;
    session.tokenKey = uuidv4();
    return res.send({ status: Status.Accepted, tokenKey: session.tokenKey });
  }

  res.send({ status: session.status });
});

const getCookieOptions = (): express.CookieOptions => ({
  httpOnly: true,
  maxAge: 60 * 1000 * 60,
  sameSite: 'none',
  secure: true,
});

app.get('/healthz', async (req, res) => {
  res.send('ok');
});

app.get('/', async (req, res) => {
  res.send('Welcome to flotsam auth!');
});

app.post('/token', async (req, res) => {
  const { tokenKey, verifyingString  } = req.body;

  if(!tokenKey) {
    const refreshToken = req.cookies[`refreshToken`];
    if(!refreshToken) {
      return res.status(401).send({ error: 'No refresh token' });
    }

    const token = tokenStore.find(t => t.id === refreshToken);
    token.consumed = true;
    tokenStore.push({...token, created: new Date(), consumed: false, id: uuidv4()});

  }

  const session = sessionStore.find(s => s.tokenKey === tokenKey);
  if (!session) { return res.status(404).send({ error: 'Token key not found' }); };

  if(session.status !== Status.Accepted) {
    return res.status(404).send({ error: 'Token key already consumed.' });
  }

  const hash = crypto.createHash('sha256');
  hash.update(verifyingString);
  const codedVerifyingString = hash.digest('hex');

  if(codedVerifyingString !== session.verificationSecret) {
    return res.status(400).send({ error: 'Token key already consumed.' });
  }

  const accessToken =  await generateAccessToken({ pnr: session.pnr });
  const refreshToken = await generateRefreshToken({ pnr: session.pnr });
  session.status = Status.Closed;

  res.cookie(`refreshToken`, refreshToken, getCookieOptions());
  return res.send({ accessToken });

});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

server.on('error', console.error);
