import { TradeHistoryRecord } from "@gainsnetwork/sdk";
import { SupportedChainId } from "../config/constants";
export declare class Backend {
    private url;
    constructor(chainId: SupportedChainId);
    getTraderHistory(user: string): Promise<TradeHistoryRecord[]>;
}
