import * as express from 'express';

const router = express.Router();

router.get('/:userID', (req, res) => {
    res.send("Du vill hämta användare med id: " + req.params["userID"]);
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.send('Du skickade in en massa data!');
});

export default router;