import * as express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Nu blir du inloggad');
});

export default router;