
import * as express from 'express';
import * as base64JS from 'base64-js'

const users = [
    { username: "jonatan", password: "bamse" },
    { username: "anna", password: "skalman" },
    { username: "miranda", password: "lille skutt" }
]

const isLoggedIn = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const encodedCredentials = req.headers.authorization.split(" ")[1];
        const [username, password] = Buffer.from(encodedCredentials, 'base64').toString('utf8').split(":");
        const user = users.find(user => user.username === username && user.password === password);

        if (!user) {
            res.send(401);
        } else {
            next();
        }
    } catch (e) {
        console.log('error:', e);
        res.send(401);
    }
}

export default isLoggedIn;