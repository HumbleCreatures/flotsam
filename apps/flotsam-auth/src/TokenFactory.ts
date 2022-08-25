import * as jsonwebtoken from 'jsonwebtoken';
import { keystore } from './certificateRetriver';
import * as fs from 'fs';
import * as path from 'path';

type TokenData = {
  pnr: string;
};

const privateCert = fs.readFileSync(path.join(__dirname, '/assets/jwt.key') , 'utf8');
import * as jose from 'node-jose'
const privateKeyPromise = jose.JWK.asKey(privateCert, 'pem');

export const generateAccessToken = async (userData: TokenData) => {
  const privateKey = (await privateKeyPromise).toJSON();

  try {
    return jsonwebtoken.sign(userData, privateCert, {
      algorithm: 'RS256',
      expiresIn: 5 * 60,
      header: { kid: privateKey.kid },
    });
  } catch (error) {
    console.log(error);
  }
};

export const generateRefreshToken = async (userData: TokenData) => {
  const privateKey = (await privateKeyPromise).toJSON();
  return jsonwebtoken.sign(userData, privateKey, {
    algorithm: 'RS256',
    expiresIn: 30 * 60,
    header: { kid: privateKey.kid },
  });
};

export const getJwtPayload = (jwtToken: string) => {
  const jwtTokenHeader = Buffer.from(jwtToken.split('.')[0], 'base64').toString();
  const kid = JSON.parse(jwtTokenHeader).kid;
  const correctPublicCert = keystore.get(kid);
  return jsonwebtoken.verify(jwtToken, correctPublicCert);
};
