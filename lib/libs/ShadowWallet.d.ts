import { BlockTag, Provider, TransactionRequest, TransactionResponse } from "@ethersproject/abstract-provider";
import { ExternallyOwnedAccount } from "@ethersproject/abstract-signer";
import { BytesLike } from "@ethersproject/bytes";
import { Deferrable } from "@ethersproject/properties";
import { SigningKey } from "@ethersproject/signing-key";
import { Wallet } from "@ethersproject/wallet";
import { PendingTransactionDetails } from "../types";
export declare class ShadowWallet extends Wallet {
    readonly getPendingTransactionDetails: (chainId: number, address: string) => PendingTransactionDetails;
    readonly _chainId: number;
    constructor(privateKey: BytesLike | ExternallyOwnedAccount | SigningKey, provider: Provider, chainId: number, getPendingTransactionDetails: (chainId: number, address: string) => PendingTransactionDetails);
    getTransactionCount(blockTag?: BlockTag | undefined): Promise<number>;
    sendTransaction(transaction: Deferrable<TransactionRequest>): Promise<TransactionResponse>;
}
