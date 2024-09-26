import { SupportedChainId } from "../src/config/constants";
import { TradingSDK } from "../src/sdk";
import { getMarkets, getPositions } from "../src/adapters";

async function runTest() {
  const tradingSdk = new TradingSDK(SupportedChainId.ArbitrumSepolia);

  try {
    const USER_ADDRESS = "USER_ADDRESS";

    console.log("[test] Onchain call...");
    await tradingSdk.initialize();

    // getState()
    // const state = await tradingSdk.getState();

    // getUserTrades()
    // const userTrades = await tradingSdk.getUserTrades(USER_ADDRESS);

    // getTraderFeeTiers()
    // const response = await tradingSdk.getTraderFeeTiers(USER_ADDRESS);

    // getMarkets() via Kwenta adapter
    // const markets = getMarkets(state);

    // getPositions() via Kwenta adapter
    // const positions = getPositions(state, userTrades);

    // getTraderHistory() 
    const traderHistory = await tradingSdk.getTraderHistory(USER_ADDRESS);

    console.log("[test] TradingSDK response", traderHistory);
  } catch (error) {
    console.error("Error:", error);
  }
}

runTest();
