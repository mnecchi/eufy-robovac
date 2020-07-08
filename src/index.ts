import dotenv from 'dotenv';
import RoboVac from './RoboVac';
import { WorkMode } from './types';
import { RSA_NO_PADDING } from 'constants';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

dotenv.config();
const { deviceId, localKey } = process.env;

(async () => {
    const robovac = await RoboVac(deviceId, localKey);

    const status = await robovac.get();
    console.log(status);

    robovac.disconnect();

    // await robovac.find();
    // await robovac.connect();
    // const status = await robovac.get();
    // console.log(status);
    // robovac.disconnect();
})();

// (async () => {
//     const robovac = new RoboVac({ deviceId, localKey });
//     await robovac.startCleaning(true);
//     await sleep(5000);
//     await robovac.goHome();
//     robovac.disconnect();
// })();
