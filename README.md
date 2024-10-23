# Gains Network Trading SDK

## Install

```bash
npm i --save @gainsnetwork/trading-sdk
```

## Usage

### Read methods
```typescript
// import and initialize
import { TradingSDK, SupportedChainId } from "@gainsnetwork/trading-sdk";

const tradingSdk = new TradingSDK({ chainId: SupportedChainId.ArbitrumSepolia });
await tradingSdk.initialize();

// use tradingSdk methods
const state = await tradingSdk.getState();
const userTrades = await tradingSdk.getUserTrades("USER_ADDRESS");
```

### Build methods
```typescript
// import and initialize
import { TradingSDK, SupportedChainId } from "@gainsnetwork/trading-sdk";

const tradingSdk = new TradingSDK({ chainId: SupportedChainId.ArbitrumSepolia });
await tradingSdk.initialize();

// openTrade transaction arguments
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

// build openTrade transaction data
const tx = await tradingSdk.build.openTrade(args);
```

### Write methods
```typescript
// import and initialize
import { Wallet } from "ethers";
import { TradingSDK, SupportedChainId } from "@gainsnetwork/trading-sdk";

const wallet = new Wallet("YOUR_PRIVATE_KEY");
const tradingSdk = new TradingSDK({
  chainId: SupportedChainId.ArbitrumSepolia,
  signer: wallet
});
await tradingSdk.initialize();

// openTrade transaction arguments
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

// send openTrade transaction
const hash = await tradingSdk.write.openTrade(args);
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
