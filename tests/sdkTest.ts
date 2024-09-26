import { SupportedChainId } from "../src/config/constants";
import { TradingSDK } from "../src/sdk";

async function runTest() {
  const tradingSdk = new TradingSDK(SupportedChainId.ArbitrumSepolia);

  try {
    const USER_ADDRESS = "USER_ADDRESS";

    console.log("[test] Onchain call...");
    await tradingSdk.initialize();

    // getState()
    const response = await tradingSdk.getState();

    // getMarkets()
    // const response = await tradingSdk.getMarkets();

    // getUserTrades()
    // const response = await tradingSdk.getUserTrades(USER_ADDRESS);

    // getTraderFeeTiers()
    // const response = await tradingSdk.getTraderFeeTiers(USER_ADDRESS);

    console.log("[test] TradingSDK response", response);
  } catch (error) {
    console.error("Error:", error);
  }
}

runTest();
