import * as jose from 'node-jose'
import * as fs from 'fs';
import * as path from 'path';

export const keystore = jose.JWK.createKeyStore();

export async function loadKeys () {
  const privatepem = fs.readFileSync(path.join(__dirname, '/assets/jwt.key') , 'utf8');
  await keystore.add(privatepem, 'pem');
  const privateExtraPem = fs.readFileSync(path.join(__dirname, '/assets/jwt-extra.key') , 'utf8');
  await keystore.add(privateExtraPem, 'pem');
}
