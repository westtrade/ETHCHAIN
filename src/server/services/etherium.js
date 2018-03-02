import config from 'config';
import Web3 from 'web3';
import db from '../db';

const provider = new Web3.providers.HttpProvider(config.etheriumProvider);
export const instance = new Web3(provider);

export function block(id) {
    return new Promise((resolve, reject) => {
        instance.eth.getBlock(id, (e, result) => e ? reject(e) : resolve(result));
    });
};
