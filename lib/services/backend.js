"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Backend = void 0;
const constants_1 = require("../config/constants");
class Backend {
    constructor(chainId) {
        if (!constants_1.BACKEND_ADDRESSES[chainId]) {
            throw new Error(`Unsupported chainId: ${chainId}`);
        }
        this.url = constants_1.BACKEND_ADDRESSES[chainId];
    }
    async getTraderHistory(user) {
        const endpoint = `${this.url}/personal-trading-history-table/${user}`;
        try {
            const response = await fetch(endpoint);
            if (!response.ok) {
                throw new Error(`Failed to fetch trader history. Status: ${response.status} - ${response.statusText}`);
            }
            const data = await response.json();
            return data;
        }
        catch (error) {
            console.error(`Error fetching trader history for user ${user}:`, error);
            throw new Error(`Unable to fetch trader history for user ${user}.`);
        }
    }
}
exports.Backend = Backend;
