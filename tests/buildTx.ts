import { parseUnits } from "ethers";
import { SupportedChainId } from "../src/config/constants";
import { TradingSDK } from "../src/sdk";
import { ModifyPositionTxType, UpdatePositionSizeTxType } from "../src/types/tx";

async function runTest() {
  const tradingSdk = new TradingSDK({ chainId: SupportedChainId.ArbitrumSepolia });

  try {
    {
      const args = {
        user: "0x73b3A111C5BCCf9086c97B96e0AbAad69Dc4f523",
        pairIndex: 0, // BTC/USD
        collateralAmount: parseUnits("100", 6), // 100 USDC
        openPrice: 66108.8,
        long: true, // Long
        leverage: 2, // 2x
        tp: 363598.4,
        sl: 0,
        collateralIndex: 3, // USDC
        tradeType: 0, // Market
        maxSlippage: 1.02,
      };
      console.log(`\nOpen Trade`);
      const tx = await tradingSdk.build.openTrade(args);
      console.log(tx);
    }

    {
      const args = {
        type: ModifyPositionTxType.INCREASE_POSITION_SIZE as UpdatePositionSizeTxType,
        index: 1,
        collateralDelta: parseUnits("1000", 6), // 1000 USDC
        leverageDelta: 3.1, // 3.1x
        maxSlippageP: 1.5, // 1.5%
        expectedPrice: 10.1, // $10.1
      };
      console.log(`\nModify position (increase position size)`);
      const tx = await tradingSdk.build.modifyPosition(args);
      console.log(tx);
    }

    {
      const args = {
        type: ModifyPositionTxType.DECREASE_POSITION_SIZE as UpdatePositionSizeTxType,
        index: 1,
        collateralDelta: parseUnits("1000", 6), // 1000 USDC
        leverageDelta: 3.1, // 3.1x
        maxSlippageP: 1.5, // 1.5%
        expectedPrice: 10.1, // $10.1
        updateMaxClosingSlippageP: true,
      };
      console.log(`\nModify position (decrease position size)`);
      const tx = await tradingSdk.build.modifyPosition(args);
      console.log(tx);
    }

    {
      const args = {
        index: 1,
        expectedPrice: 10.1,
        maxSlippageP: 1.5,
      };
      console.log(`\ncloseTradeMarket - ${JSON.stringify(args)}`);
      const tx = await tradingSdk.build.closeTradeMarket(args);
      console.log(tx);
    }

    {
      const index = 1;
      console.log(`\ncancelOpenOrder - index ${index}`);
      const tx = await tradingSdk.build.cancelOpenOrder(index);
      console.log(tx);
    }

    {
      const index = 1;
      console.log(`\ncancelOrderAfterTimeout - index ${index}`);
      const tx = await tradingSdk.build.cancelOrderAfterTimeout(index);
      console.log(tx);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

runTest();
