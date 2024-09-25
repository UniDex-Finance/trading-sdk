## Install

```bash
npm install @gainsnetwork/trading-sdk
```

## Usage

```typescript
// import and initialize
import { TradingSDK } from "@gainsnetwork/trading-sdk";
const tradingSdk = new TradingSDK(SupportedChainId.ArbitrumSepolia);
await tradingSdk.initialize();

// use tradingSdk methods
const state = await tradingSdk.getState();
const userTrades = await tradingSdk.getUserTrades("USER_ADDRESS");
```

## Adapters

Use adapters when working with supported integrations.

```typescript
// import and initialize
import { getMarkets } from "@gainsnetwork/trading-sdk/adapters/kwenta";
import { TradingSDK } from "@gainsnetwork/trading-sdk";
const tradingSdk = new TradingSDK(SupportedChainId.ArbitrumSepolia);
await tradingSdk.initialize();

// use tradingSdk methods
const state = await tradingSdk.getState();

// use adapter to get integration ready data structure
const markets = getMarkets(state);
```