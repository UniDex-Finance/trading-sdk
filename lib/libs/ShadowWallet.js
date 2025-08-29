"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShadowWallet = void 0;
const wallet_1 = require("@ethersproject/wallet");
const web_1 = require("@ethersproject/web");
const constants_1 = require("../config/constants");
class ShadowWallet extends wallet_1.Wallet {
    constructor(privateKey, provider, chainId, getPendingTransactionDetails) {
        super(privateKey, provider);
        this.getPendingTransactionDetails = getPendingTransactionDetails;
        this._chainId = chainId;
    }
    async getTransactionCount(blockTag) {
        if (blockTag === "pending") {
            const baseTxCount = await super.getTransactionCount("latest");
            const address = await this.getAddress();
            const chainId = await this.getChainId();
            try {
                const pending = this.getPendingTransactionDetails(chainId, address);
                if (pending.count + baseTxCount !== pending.latestNonce + 1) {
                    console.error("Pending transaction count does not match", pending.count, pending.latestNonce, baseTxCount);
                    return baseTxCount;
                }
                return pending.count + baseTxCount;
            }
            catch (e) {
                console.error("Error getting pending transaction count", e);
                return baseTxCount;
            }
        }
        return super.getTransactionCount(blockTag);
    }
    async sendTransaction(transaction) {
        this._checkProvider("sendTransaction");
        // If on Arbitrum network set type to 0
        if (this._chainId === constants_1.SupportedChainId.Arbitrum) {
            transaction.type = 0;
        }
        const tx = await this.populateTransaction(transaction);
        const signedTx = await this.signTransaction(tx);
        try {
            const response = await this.provider.sendTransaction(signedTx);
            return response;
        }
        catch (e) {
            if (!e?.error && e?.transactionHash) {
                const hash = e.transactionHash;
                const response = await (0, web_1.poll)(() => this.provider.getTransaction(hash), { onceBlock: this.provider });
                if (response) {
                    return response;
                }
            }
            throw e;
        }
    }
}
exports.ShadowWallet = ShadowWallet;
