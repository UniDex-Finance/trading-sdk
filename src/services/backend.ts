import { TradeHistoryRecord } from "@gainsnetwork/sdk";
import { BACKEND_ADDRESSES, SupportedChainId } from "../config/constants";

export class Backend {
  private url: string;

  constructor(chainId: SupportedChainId) {
    if (!BACKEND_ADDRESSES[chainId]) {
      throw new Error(`Unsupported chainId: ${chainId}`);
    }
    this.url = BACKEND_ADDRESSES[chainId];
  }

  public async getTraderHistory(user: string): Promise<TradeHistoryRecord[]> {
    const endpoint = `${this.url}/personal-trading-history-table/${user}`;

    try {
      const response = await fetch(endpoint);

      if (!response.ok) {
        throw new Error(`Failed to fetch trader history. Status: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching trader history for user ${user}:`, error);
      throw new Error(`Unable to fetch trader history for user ${user}.`);
    }
  }
}
