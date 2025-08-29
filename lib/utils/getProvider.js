"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProvider = void 0;
const ethers_1 = require("ethers");
const constants_1 = require("../config/constants");
const getProvider = (chainId, providerUrl) => {
    if (providerUrl) {
        return new ethers_1.ethers.JsonRpcProvider(providerUrl);
    }
    // default providers
    if (chainId === constants_1.SupportedChainId.Arbitrum) {
        return new ethers_1.ethers.JsonRpcProvider("https://obsidian-rpc-v2.up.railway.app/rpc");
    }
    if (chainId === constants_1.SupportedChainId.ArbitrumSepolia) {
        return new ethers_1.ethers.JsonRpcProvider("https://sepolia-rollup.arbitrum.io/rpc");
    }
    if (chainId === constants_1.SupportedChainId.Base) {
        return new ethers_1.ethers.JsonRpcProvider("https://base-mainnet.public.blastapi.io");
    }
    return new ethers_1.ethers.JsonRpcProvider("https://polygon-rpc.com");
};
exports.getProvider = getProvider;
