import { TradeContainer, TraderFeeTiers } from "@gainsnetwork/sdk";
import { ethers } from "ethers";
import { DelegatedTradingActionTxArgs, MulticallTxArgs, State, TradeWithHistory, TradingSdkOptions } from "./types";
import { ModifyPositionTxArgs, OpenTradeTxArgs, CloseTradeMarketTxArgs } from "./types/tx";
export declare class TradingSDK {
    private chainId;
    private signer?;
    private runner;
    private gnsDiamond;
    private multicall3;
    private backend;
    private state;
    lastRefreshedTs: number;
    initialized: boolean;
    constructor({ chainId, signer, rpcProviderUrl }: TradingSdkOptions);
    initialize(): Promise<void>;
    refreshState(): Promise<void>;
    getState(): Promise<State>;
    getUserTrades(account: string): Promise<TradeContainer[]>;
    getTraderFeeTiers(account: string): Promise<TraderFeeTiers>;
    getTraderHistory(account: string): Promise<{
        trades: TradeWithHistory[];
        orders: TradeWithHistory[];
    }>;
    get build(): {
        modifyPosition: (args: ModifyPositionTxArgs) => Promise<import("./types").BuildTransactionOutput | undefined>;
        openTrade: (args: OpenTradeTxArgs) => Promise<import("./types").BuildTransactionOutput>;
        closeTradeMarket: (args: CloseTradeMarketTxArgs) => Promise<import("./types").BuildTransactionOutput>;
        cancelOpenOrder: (index: number) => Promise<import("./types").BuildTransactionOutput>;
        cancelOrderAfterTimeout: (index: number) => Promise<import("./types").BuildTransactionOutput>;
        delegatedTradingAction: (args: DelegatedTradingActionTxArgs) => Promise<import("./types").BuildTransactionOutput>;
        multicall: (calls: MulticallTxArgs) => Promise<import("./types").BuildTransactionOutput>;
    };
    get write(): {
        modifyPosition: (args: ModifyPositionTxArgs) => Promise<ethers.TransactionResponse | undefined>;
        openTrade: (args: OpenTradeTxArgs) => Promise<ethers.TransactionResponse | undefined>;
        closeTradeMarket: (args: CloseTradeMarketTxArgs) => Promise<ethers.TransactionResponse | undefined>;
        cancelOpenOrder: (index: number) => Promise<ethers.TransactionResponse | undefined>;
        cancelOrderAfterTimeout: (index: number) => Promise<ethers.TransactionResponse | undefined>;
        multicall: (calls: MulticallTxArgs) => Promise<ethers.TransactionResponse | undefined>;
        delegatedTradingAction: (args: DelegatedTradingActionTxArgs) => Promise<ethers.TransactionResponse | undefined>;
    };
}
