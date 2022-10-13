import fetch from 'node-fetch';

export const getWeather = async () => {
    return await (await (fetch('https://api.open-meteo.com/v1/forecast?latitude=59.3328&longitude=18.0645&hourly=cloudcover'))).json();
}