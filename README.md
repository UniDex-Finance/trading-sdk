# Gains Network Trading SDK

## Install

```bash
npm i --save @gainsnetwork/trading-sdk
```

## Usage

```typescript
// import and initialize
import { TradingSDK, SupportedChainId } from "@gainsnetwork/trading-sdk";
const tradingSdk = new TradingSDK(SupportedChainId.ArbitrumSepolia);
await tradingSdk.initialize();

// use tradingSdk methods
const state = await tradingSdk.getState();
const userTrades = await tradingSdk.getUserTrades("USER_ADDRESS");
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
