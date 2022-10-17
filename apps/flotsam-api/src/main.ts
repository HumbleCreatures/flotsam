/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import isLoggedIn from './app/middleware/isLoggedIn';
import userRouter from './app/routes/userRouter';
import loginRouter from './app/routes/loginRouter';

const app = express();

app.use(express.json());

app.use('/user', isLoggedIn, userRouter);
app.use('/login', loginRouter);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);