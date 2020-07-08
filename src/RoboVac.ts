import TuyAPI from 'tuyapi';
import { STATUS_DPS } from './types';

export default async (deviceId: string, localKey: string) => {
    let isConnected = false;

    const api = new TuyAPI({ id: deviceId, key: localKey });

    api.on('connected', () => { isConnected = true });
    api.on('disconnected', () => { isConnected = false });

    const connect = async () => {
        if (!api.device.id || !api.device.ip) {
            await api.find();
        }
        if (!isConnected) {
            await api.connect();
        }
    }

    const disconnect = () => api.disconnect();

    const get = async () => {
        await connect();
        return api.get({ schema: true });
    };

    return {
        get,
        disconnect
    };
};