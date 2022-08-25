/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { keystore, loadKeys } from './certificateRetriver';
import { v4 as uuidv4 } from 'uuid';
import * as crypto from "crypto";
import { generateAccessToken, generateRefreshToken } from './TokenFactory';

const app = express();
const store: LoginSession[] = [];

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

app.get('/api/jwk', async (req, res) => {
  await loadKeys()
  res.send(keystore.toJSON());
});
app.get('/api/jwk/:kid', async (req, res) => {
  const key = keystore.get(req.params.kid);
  res.json(key).status(200);
});

app.post('/api/init', async (req, res) => {
  const { pnr, verificationSecret } = req.body;
  const id =  uuidv4();
  store.push({verificationSecret, status: Status.Init, pnr, id, created: new Date()});
  res.send({ sessionId: id });
});

app.post('/api/status', async (req, res) => {
  const { sessionId } = req.body;
  const session = store.find(s => s.id === sessionId);
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

app.post('/api/token', async (req, res) => {
  const { tokenKey, verifyingString  } = req.body;
  const session = store.find(s => s.tokenKey === tokenKey);
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
  return res.send({ accessToken });

});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
