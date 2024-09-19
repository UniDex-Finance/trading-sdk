import { SupportedChainId } from "../src/config/constants";
import { SDK } from "../src/sdk";

async function runTest() {
  const sdk = new SDK(SupportedChainId.ArbitrumSepolia);

  try {
    const USER_ADDRESS = "0xa110CC27a19f6853e9Aa8Bb8e2C603D7b02ea2df";

    console.log("[test] Onchain call...");
    await sdk.initialize();

    // getState()
    const response = await sdk.getState();

    // getMarkets()
    // const response = await sdk.getMarkets();

    // getPositions()
    // const response = await sdk.getPositions(USER_ADDRESS);

    console.log("[test] Onchain response", response);
  } catch (error) {
    console.error("Error:", error);
  }
}

runTest();
