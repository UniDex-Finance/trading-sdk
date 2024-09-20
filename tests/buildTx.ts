import { parseUnits } from "ethers";
import { SupportedChainId } from "../src/config/constants";
import { SDK } from "../src/sdk";
import { ModifyPositionTxType, UpdatePositionSizeTxType } from "../src/types/tx";

async function runTest() {
  const sdk = new SDK(SupportedChainId.ArbitrumSepolia);

  try {
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
      const tx = await sdk.build.modifyPosition(args);
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
      const tx = await sdk.build.modifyPosition(args);
      console.log(tx);
    }

    {
      const args = {
        index: 1,
        expectedPrice: 10.1,
        maxSlippageP: 1.5,
      };
      console.log(`\ncloseTradeMarket - ${JSON.stringify(args)}`);
      const tx = await sdk.build.closeTradeMarket(args);
      console.log(tx);
    }

    {
      const index = 1;
      console.log(`\ncancelOpenOrder - index ${index}`);
      const tx = await sdk.build.cancelOpenOrder(index);
      console.log(tx);
    }

    {
      const index = 1;
      console.log(`\ncancelOrderAfterTimeout - index ${index}`);
      const tx = await sdk.build.cancelOrderAfterTimeout(index);
      console.log(tx);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

runTest();
