import { BlockTag, Provider, TransactionRequest, TransactionResponse } from "@ethersproject/abstract-provider";
import { ExternallyOwnedAccount } from "@ethersproject/abstract-signer";
import { BytesLike } from "@ethersproject/bytes";
import { Deferrable } from "@ethersproject/properties";
import { SigningKey } from "@ethersproject/signing-key";
import { Wallet } from "@ethersproject/wallet";
import { poll } from "@ethersproject/web";
import { PendingTransactionDetails } from "../types";
import { SupportedChainId } from "../config/constants";

export class ShadowWallet extends Wallet {
  readonly getPendingTransactionDetails: (chainId: number, address: string) => PendingTransactionDetails;
  readonly _chainId: number;

  constructor(
    privateKey: BytesLike | ExternallyOwnedAccount | SigningKey,
    provider: Provider,
    chainId: number,
    getPendingTransactionDetails: (chainId: number, address: string) => PendingTransactionDetails
  ) {
    super(privateKey, provider);
    this.getPendingTransactionDetails = getPendingTransactionDetails;
    this._chainId = chainId;
  }

  async getTransactionCount(blockTag?: BlockTag | undefined): Promise<number> {
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
      } catch (e) {
        console.error("Error getting pending transaction count", e);
        return baseTxCount;
      }
    }
    return super.getTransactionCount(blockTag);
  }

  async sendTransaction(transaction: Deferrable<TransactionRequest>): Promise<TransactionResponse> {
    this._checkProvider("sendTransaction");

    // If on Arbitrum network set type to 0
    if (this._chainId === SupportedChainId.Arbitrum) {
      transaction.type = 0;
    }

    const tx = await this.populateTransaction(transaction);
    const signedTx = await this.signTransaction(tx);

    try {
      const response = await this.provider.sendTransaction(signedTx);
      return response;
    } catch (e: any) {
      if (!e?.error && e?.transactionHash) {
        const hash = e.transactionHash;
        const response = await poll(() => this.provider.getTransaction(hash), { onceBlock: this.provider });
        if (response) {
          return response;
        }
      }
      throw e;
    }
  }
}
