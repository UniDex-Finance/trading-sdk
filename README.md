# Gains Network Trading SDK

## Install

```bash
npm i --save @gainsnetwork/trading-sdk
```

## Usage

```typescript
// import and initialize
import { TradingSDK, SupportedChainId } from "@gainsnetwork/trading-sdk";

// To execute write transactions, it is necessary to pass the signer parameter. However, this can be omitted if you only need to generate the transaction data.
const tradingSdk = new TradingSDK({ chainId: SupportedChainId.ArbitrumSepolia, signer });
await tradingSdk.initialize();

// use tradingSdk methods
const state = await tradingSdk.getState();
const userTrades = await tradingSdk.getUserTrades("USER_ADDRESS");

// build openTrade transaction data
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
const tx = await tradingSdk.build.openTrade(args);

// send openTrade transaction
await tradingSdk.write.openTrade(args);
```

## Adapters

Use adapters when working with supported integrations:

```typescript
// import and initialize
import { TradingSDK, SupportedChainId } from "@gainsnetwork/trading-sdk";
import { getMarkets, getPositions } from "@gainsnetwork/trading-sdk/lib/adapters/kwenta";
const tradingSdk = new TradingSDK(SupportedChainId.ArbitrumSepolia);
await tradingSdk.initialize();

// use tradingSdk methods
const state = await tradingSdk.getState();
const userTrades = await tradingSdk.getUserTrades("USER_ADDRESS");

// use adapter to get integration-ready data
const markets = getMarkets(state);
const positions = getPositions(state, userTrades);
```
