import * as express from 'express';
import { getTvPrograms } from '@flotsam/flotsam-shared';
import { getWeather } from '@flotsam/flotsam-shared';

const router = express.Router();

router.get('/programsAndWeather', async (req, res) => {
    const [tvPrograms, weather] = await Promise.all([getTvPrograms(), getWeather()]);
    const response = tvPrograms.map(program => {
        const weatherIndex = weather.hourly.time.findIndex(time => program.start.substring(0, 13) === time.substring(0, 13));
        const cloudCover = weather.hourly.cloudcover[weatherIndex];
        return { ...program, cloudCover };
    });
    res.json(response);
});

export default router;