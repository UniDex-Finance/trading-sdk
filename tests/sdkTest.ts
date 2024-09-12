import { SDK } from "../src/sdk";

async function runTest() {
  const sdk = new SDK();

  try {
    const USER_ADDRESS = "0xa110CC27a19f6853e9Aa8Bb8e2C603D7b02ea2df";

    console.log("[test] Onchain call...");

    // getAllTrades()
    // const response = await sdk.getAllTrades(0, 1);

    // getUserTrades()
    // const response = await sdk.getUserTrades(USER_ADDRESS);

    // getMarkets()
    const response = await sdk.getMarkets();

    console.log("[test] Onchain response", response);
  } catch (error) {
    console.error("Error:", error);
  }
}

runTest();
