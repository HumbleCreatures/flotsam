import * as express from 'express';

const router = express.Router();

router.get('/:userID', async (req, res) => {
    //res.send("Du vill hämta användare med id: " + req.params["userID"]);
    const catFact = await (await fetch('https://catfact.ninja/fact')).json();
    res.json(catFact);
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.send('Du skickade in en massa data!');
});

export default router;