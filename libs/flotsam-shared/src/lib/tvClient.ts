import fetch from 'node-fetch';

export const getTvPrograms = async () => {
    return await (await (fetch('https://tv-api-k39vq.ondigitalocean.app/SVT%2024.json'))).json();
}