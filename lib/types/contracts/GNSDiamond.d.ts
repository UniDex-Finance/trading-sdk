import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export declare namespace IAddressStore {
    type AddressesStruct = {
        gns: AddressLike;
        gnsStaking: AddressLike;
        treasury: AddressLike;
    };
    type AddressesStructOutput = [
        gns: string,
        gnsStaking: string,
        treasury: string
    ] & {
        gns: string;
        gnsStaking: string;
        treasury: string;
    };
}
export declare namespace IDiamondStorage {
    type FacetCutStruct = {
        facetAddress: AddressLike;
        action: BigNumberish;
        functionSelectors: BytesLike[];
    };
    type FacetCutStructOutput = [
        facetAddress: string,
        action: bigint,
        functionSelectors: string[]
    ] & {
        facetAddress: string;
        action: bigint;
        functionSelectors: string[];
    };
}
export declare namespace IGNSDiamondLoupe {
    type FacetStruct = {
        facetAddress: AddressLike;
        functionSelectors: BytesLike[];
    };
    type FacetStructOutput = [
        facetAddress: string,
        functionSelectors: string[]
    ] & {
        facetAddress: string;
        functionSelectors: string[];
    };
}
export declare namespace IPairsStorage {
    type FeeGroupStruct = {
        totalPositionSizeFeeP: BigNumberish;
        totalLiqCollateralFeeP: BigNumberish;
        oraclePositionSizeFeeP: BigNumberish;
        minPositionSizeUsd: BigNumberish;
        __placeholder: BigNumberish;
    };
    type FeeGroupStructOutput = [
        totalPositionSizeFeeP: bigint,
        totalLiqCollateralFeeP: bigint,
        oraclePositionSizeFeeP: bigint,
        minPositionSizeUsd: bigint,
        __placeholder: bigint
    ] & {
        totalPositionSizeFeeP: bigint;
        totalLiqCollateralFeeP: bigint;
        oraclePositionSizeFeeP: bigint;
        minPositionSizeUsd: bigint;
        __placeholder: bigint;
    };
    type GlobalTradeFeeParamsStruct = {
        referralFeeP: BigNumberish;
        govFeeP: BigNumberish;
        triggerOrderFeeP: BigNumberish;
        gnsOtcFeeP: BigNumberish;
        gTokenFeeP: BigNumberish;
        __placeholder: BigNumberish;
    };
    type GlobalTradeFeeParamsStructOutput = [
        referralFeeP: bigint,
        govFeeP: bigint,
        triggerOrderFeeP: bigint,
        gnsOtcFeeP: bigint,
        gTokenFeeP: bigint,
        __placeholder: bigint
    ] & {
        referralFeeP: bigint;
        govFeeP: bigint;
        triggerOrderFeeP: bigint;
        gnsOtcFeeP: bigint;
        gTokenFeeP: bigint;
        __placeholder: bigint;
    };
    type GroupLiquidationParamsStruct = {
        maxLiqSpreadP: BigNumberish;
        startLiqThresholdP: BigNumberish;
        endLiqThresholdP: BigNumberish;
        startLeverage: BigNumberish;
        endLeverage: BigNumberish;
    };
    type GroupLiquidationParamsStructOutput = [
        maxLiqSpreadP: bigint,
        startLiqThresholdP: bigint,
        endLiqThresholdP: bigint,
        startLeverage: bigint,
        endLeverage: bigint
    ] & {
        maxLiqSpreadP: bigint;
        startLiqThresholdP: bigint;
        endLiqThresholdP: bigint;
        startLeverage: bigint;
        endLeverage: bigint;
    };
    type GroupStruct = {
        name: string;
        job: BytesLike;
        minLeverage: BigNumberish;
        maxLeverage: BigNumberish;
    };
    type GroupStructOutput = [
        name: string,
        job: string,
        minLeverage: bigint,
        maxLeverage: bigint
    ] & {
        name: string;
        job: string;
        minLeverage: bigint;
        maxLeverage: bigint;
    };
    type FeedStruct = {
        feed1: AddressLike;
        feed2: AddressLike;
        feedCalculation: BigNumberish;
        maxDeviationP: BigNumberish;
    };
    type FeedStructOutput = [
        feed1: string,
        feed2: string,
        feedCalculation: bigint,
        maxDeviationP: bigint
    ] & {
        feed1: string;
        feed2: string;
        feedCalculation: bigint;
        maxDeviationP: bigint;
    };
    type PairStruct = {
        from: string;
        to: string;
        feed: IPairsStorage.FeedStruct;
        spreadP: BigNumberish;
        groupIndex: BigNumberish;
        feeIndex: BigNumberish;
    };
    type PairStructOutput = [
        from: string,
        to: string,
        feed: IPairsStorage.FeedStructOutput,
        spreadP: bigint,
        groupIndex: bigint,
        feeIndex: bigint
    ] & {
        from: string;
        to: string;
        feed: IPairsStorage.FeedStructOutput;
        spreadP: bigint;
        groupIndex: bigint;
        feeIndex: bigint;
    };
}
export declare namespace IReferrals {
    type AllyDetailsStruct = {
        referrersReferred: AddressLike[];
        volumeReferredUsd: BigNumberish;
        pendingRewardsGns: BigNumberish;
        totalRewardsGns: BigNumberish;
        totalRewardsValueUsd: BigNumberish;
        active: boolean;
    };
    type AllyDetailsStructOutput = [
        referrersReferred: string[],
        volumeReferredUsd: bigint,
        pendingRewardsGns: bigint,
        totalRewardsGns: bigint,
        totalRewardsValueUsd: bigint,
        active: boolean
    ] & {
        referrersReferred: string[];
        volumeReferredUsd: bigint;
        pendingRewardsGns: bigint;
        totalRewardsGns: bigint;
        totalRewardsValueUsd: bigint;
        active: boolean;
    };
    type ReferralSettingsOverridesStruct = {
        referralFeeOverrideP: BigNumberish;
        allyFeeOverrideP: BigNumberish;
        __placeholder: BigNumberish;
    };
    type ReferralSettingsOverridesStructOutput = [
        referralFeeOverrideP: bigint,
        allyFeeOverrideP: bigint,
        __placeholder: bigint
    ] & {
        referralFeeOverrideP: bigint;
        allyFeeOverrideP: bigint;
        __placeholder: bigint;
    };
    type ReferrerDetailsStruct = {
        ally: AddressLike;
        tradersReferred: AddressLike[];
        volumeReferredUsd: BigNumberish;
        pendingRewardsGns: BigNumberish;
        totalRewardsGns: BigNumberish;
        totalRewardsValueUsd: BigNumberish;
        active: boolean;
    };
    type ReferrerDetailsStructOutput = [
        ally: string,
        tradersReferred: string[],
        volumeReferredUsd: bigint,
        pendingRewardsGns: bigint,
        totalRewardsGns: bigint,
        totalRewardsValueUsd: bigint,
        active: boolean
    ] & {
        ally: string;
        tradersReferred: string[];
        volumeReferredUsd: bigint;
        pendingRewardsGns: bigint;
        totalRewardsGns: bigint;
        totalRewardsValueUsd: bigint;
        active: boolean;
    };
}
export declare namespace IFeeTiers {
    type FeeTierStruct = {
        feeMultiplier: BigNumberish;
        pointsThreshold: BigNumberish;
    };
    type FeeTierStructOutput = [
        feeMultiplier: bigint,
        pointsThreshold: bigint
    ] & {
        feeMultiplier: bigint;
        pointsThreshold: bigint;
    };
    type TraderEnrollmentStruct = {
        status: BigNumberish;
        __placeholder: BigNumberish;
    };
    type TraderEnrollmentStructOutput = [
        status: bigint,
        __placeholder: bigint
    ] & {
        status: bigint;
        __placeholder: bigint;
    };
    type TraderInfoStruct = {
        lastDayUpdated: BigNumberish;
        trailingPoints: BigNumberish;
    };
    type TraderInfoStructOutput = [
        lastDayUpdated: bigint,
        trailingPoints: bigint
    ] & {
        lastDayUpdated: bigint;
        trailingPoints: bigint;
    };
    type TraderDailyInfoStruct = {
        feeMultiplierCache: BigNumberish;
        points: BigNumberish;
    };
    type TraderDailyInfoStructOutput = [
        feeMultiplierCache: bigint,
        points: bigint
    ] & {
        feeMultiplierCache: bigint;
        points: bigint;
    };
}
export declare namespace IPriceImpact {
    type PairOiStruct = {
        oiLongUsd: BigNumberish;
        oiShortUsd: BigNumberish;
    };
    type PairOiStructOutput = [oiLongUsd: bigint, oiShortUsd: bigint] & {
        oiLongUsd: bigint;
        oiShortUsd: bigint;
    };
    type OiWindowUpdateStruct = {
        trader: AddressLike;
        index: BigNumberish;
        windowsDuration: BigNumberish;
        pairIndex: BigNumberish;
        windowId: BigNumberish;
        long: boolean;
        open: boolean;
        isPnlPositive: boolean;
        openInterestUsd: BigNumberish;
    };
    type OiWindowUpdateStructOutput = [
        trader: string,
        index: bigint,
        windowsDuration: bigint,
        pairIndex: bigint,
        windowId: bigint,
        long: boolean,
        open: boolean,
        isPnlPositive: boolean,
        openInterestUsd: bigint
    ] & {
        trader: string;
        index: bigint;
        windowsDuration: bigint;
        pairIndex: bigint;
        windowId: bigint;
        long: boolean;
        open: boolean;
        isPnlPositive: boolean;
        openInterestUsd: bigint;
    };
    type OiWindowsSettingsStruct = {
        startTs: BigNumberish;
        windowsDuration: BigNumberish;
        windowsCount: BigNumberish;
    };
    type OiWindowsSettingsStructOutput = [
        startTs: bigint,
        windowsDuration: bigint,
        windowsCount: bigint
    ] & {
        startTs: bigint;
        windowsDuration: bigint;
        windowsCount: bigint;
    };
    type PairDepthStruct = {
        onePercentDepthAboveUsd: BigNumberish;
        onePercentDepthBelowUsd: BigNumberish;
    };
    type PairDepthStructOutput = [
        onePercentDepthAboveUsd: bigint,
        onePercentDepthBelowUsd: bigint
    ] & {
        onePercentDepthAboveUsd: bigint;
        onePercentDepthBelowUsd: bigint;
    };
    type PairFactorsStruct = {
        protectionCloseFactor: BigNumberish;
        protectionCloseFactorBlocks: BigNumberish;
        cumulativeFactor: BigNumberish;
        exemptOnOpen: boolean;
        exemptAfterProtectionCloseFactor: boolean;
        __placeholder: BigNumberish;
    };
    type PairFactorsStructOutput = [
        protectionCloseFactor: bigint,
        protectionCloseFactorBlocks: bigint,
        cumulativeFactor: bigint,
        exemptOnOpen: boolean,
        exemptAfterProtectionCloseFactor: boolean,
        __placeholder: bigint
    ] & {
        protectionCloseFactor: bigint;
        protectionCloseFactorBlocks: bigint;
        cumulativeFactor: bigint;
        exemptOnOpen: boolean;
        exemptAfterProtectionCloseFactor: boolean;
        __placeholder: bigint;
    };
    type UserPriceImpactStruct = {
        cumulVolPriceImpactMultiplier: BigNumberish;
        fixedSpreadP: BigNumberish;
        __placeholder: BigNumberish;
    };
    type UserPriceImpactStructOutput = [
        cumulVolPriceImpactMultiplier: bigint,
        fixedSpreadP: bigint,
        __placeholder: bigint
    ] & {
        cumulVolPriceImpactMultiplier: bigint;
        fixedSpreadP: bigint;
        __placeholder: bigint;
    };
}
export declare namespace ITradingStorage {
    type IdStruct = {
        user: AddressLike;
        index: BigNumberish;
    };
    type IdStructOutput = [user: string, index: bigint] & {
        user: string;
        index: bigint;
    };
    type TradeStruct = {
        user: AddressLike;
        index: BigNumberish;
        pairIndex: BigNumberish;
        leverage: BigNumberish;
        long: boolean;
        isOpen: boolean;
        collateralIndex: BigNumberish;
        tradeType: BigNumberish;
        collateralAmount: BigNumberish;
        openPrice: BigNumberish;
        tp: BigNumberish;
        sl: BigNumberish;
        __placeholder: BigNumberish;
    };
    type TradeStructOutput = [
        user: string,
        index: bigint,
        pairIndex: bigint,
        leverage: bigint,
        long: boolean,
        isOpen: boolean,
        collateralIndex: bigint,
        tradeType: bigint,
        collateralAmount: bigint,
        openPrice: bigint,
        tp: bigint,
        sl: bigint,
        __placeholder: bigint
    ] & {
        user: string;
        index: bigint;
        pairIndex: bigint;
        leverage: bigint;
        long: boolean;
        isOpen: boolean;
        collateralIndex: bigint;
        tradeType: bigint;
        collateralAmount: bigint;
        openPrice: bigint;
        tp: bigint;
        sl: bigint;
        __placeholder: bigint;
    };
    type PendingOrderStruct = {
        trade: ITradingStorage.TradeStruct;
        user: AddressLike;
        index: BigNumberish;
        isOpen: boolean;
        orderType: BigNumberish;
        createdBlock: BigNumberish;
        maxSlippageP: BigNumberish;
    };
    type PendingOrderStructOutput = [
        trade: ITradingStorage.TradeStructOutput,
        user: string,
        index: bigint,
        isOpen: boolean,
        orderType: bigint,
        createdBlock: bigint,
        maxSlippageP: bigint
    ] & {
        trade: ITradingStorage.TradeStructOutput;
        user: string;
        index: bigint;
        isOpen: boolean;
        orderType: bigint;
        createdBlock: bigint;
        maxSlippageP: bigint;
    };
    type TradeInfoStruct = {
        createdBlock: BigNumberish;
        tpLastUpdatedBlock: BigNumberish;
        slLastUpdatedBlock: BigNumberish;
        maxSlippageP: BigNumberish;
        lastOiUpdateTs: BigNumberish;
        collateralPriceUsd: BigNumberish;
        contractsVersion: BigNumberish;
        lastPosIncreaseBlock: BigNumberish;
        __placeholder: BigNumberish;
    };
    type TradeInfoStructOutput = [
        createdBlock: bigint,
        tpLastUpdatedBlock: bigint,
        slLastUpdatedBlock: bigint,
        maxSlippageP: bigint,
        lastOiUpdateTs: bigint,
        collateralPriceUsd: bigint,
        contractsVersion: bigint,
        lastPosIncreaseBlock: bigint,
        __placeholder: bigint
    ] & {
        createdBlock: bigint;
        tpLastUpdatedBlock: bigint;
        slLastUpdatedBlock: bigint;
        maxSlippageP: bigint;
        lastOiUpdateTs: bigint;
        collateralPriceUsd: bigint;
        contractsVersion: bigint;
        lastPosIncreaseBlock: bigint;
        __placeholder: bigint;
    };
    type CollateralStruct = {
        collateral: AddressLike;
        isActive: boolean;
        __placeholder: BigNumberish;
        precision: BigNumberish;
        precisionDelta: BigNumberish;
    };
    type CollateralStructOutput = [
        collateral: string,
        isActive: boolean,
        __placeholder: bigint,
        precision: bigint,
        precisionDelta: bigint
    ] & {
        collateral: string;
        isActive: boolean;
        __placeholder: bigint;
        precision: bigint;
        precisionDelta: bigint;
    };
    type CounterStruct = {
        currentIndex: BigNumberish;
        openCount: BigNumberish;
        __placeholder: BigNumberish;
    };
    type CounterStructOutput = [
        currentIndex: bigint,
        openCount: bigint,
        __placeholder: bigint
    ] & {
        currentIndex: bigint;
        openCount: bigint;
        __placeholder: bigint;
    };
}
export declare namespace IUpdateLeverage {
    type UpdateLeverageValuesStruct = {
        newLeverage: BigNumberish;
        newCollateralAmount: BigNumberish;
        liqPrice: BigNumberish;
        govFeeCollateral: BigNumberish;
    };
    type UpdateLeverageValuesStructOutput = [
        newLeverage: bigint,
        newCollateralAmount: bigint,
        liqPrice: bigint,
        govFeeCollateral: bigint
    ] & {
        newLeverage: bigint;
        newCollateralAmount: bigint;
        liqPrice: bigint;
        govFeeCollateral: bigint;
    };
}
export declare namespace IUpdatePositionSize {
    type DecreasePositionSizeValuesStruct = {
        positionSizeCollateralDelta: BigNumberish;
        existingPositionSizeCollateral: BigNumberish;
        existingLiqPrice: BigNumberish;
        priceAfterImpact: BigNumberish;
        existingPnlCollateral: BigNumberish;
        borrowingFeeCollateral: BigNumberish;
        closingFeeCollateral: BigNumberish;
        availableCollateralInDiamond: BigNumberish;
        collateralSentToTrader: BigNumberish;
        newCollateralAmount: BigNumberish;
        newLeverage: BigNumberish;
    };
    type DecreasePositionSizeValuesStructOutput = [
        positionSizeCollateralDelta: bigint,
        existingPositionSizeCollateral: bigint,
        existingLiqPrice: bigint,
        priceAfterImpact: bigint,
        existingPnlCollateral: bigint,
        borrowingFeeCollateral: bigint,
        closingFeeCollateral: bigint,
        availableCollateralInDiamond: bigint,
        collateralSentToTrader: bigint,
        newCollateralAmount: bigint,
        newLeverage: bigint
    ] & {
        positionSizeCollateralDelta: bigint;
        existingPositionSizeCollateral: bigint;
        existingLiqPrice: bigint;
        priceAfterImpact: bigint;
        existingPnlCollateral: bigint;
        borrowingFeeCollateral: bigint;
        closingFeeCollateral: bigint;
        availableCollateralInDiamond: bigint;
        collateralSentToTrader: bigint;
        newCollateralAmount: bigint;
        newLeverage: bigint;
    };
    type IncreasePositionSizeValuesStruct = {
        positionSizeCollateralDelta: BigNumberish;
        existingPositionSizeCollateral: BigNumberish;
        newPositionSizeCollateral: BigNumberish;
        newCollateralAmount: BigNumberish;
        newLeverage: BigNumberish;
        priceAfterImpact: BigNumberish;
        existingPnlCollateral: BigNumberish;
        oldPosSizePlusPnlCollateral: BigNumberish;
        newOpenPrice: BigNumberish;
        borrowingFeeCollateral: BigNumberish;
        openingFeesCollateral: BigNumberish;
        existingLiqPrice: BigNumberish;
        newLiqPrice: BigNumberish;
    };
    type IncreasePositionSizeValuesStructOutput = [
        positionSizeCollateralDelta: bigint,
        existingPositionSizeCollateral: bigint,
        newPositionSizeCollateral: bigint,
        newCollateralAmount: bigint,
        newLeverage: bigint,
        priceAfterImpact: bigint,
        existingPnlCollateral: bigint,
        oldPosSizePlusPnlCollateral: bigint,
        newOpenPrice: bigint,
        borrowingFeeCollateral: bigint,
        openingFeesCollateral: bigint,
        existingLiqPrice: bigint,
        newLiqPrice: bigint
    ] & {
        positionSizeCollateralDelta: bigint;
        existingPositionSizeCollateral: bigint;
        newPositionSizeCollateral: bigint;
        newCollateralAmount: bigint;
        newLeverage: bigint;
        priceAfterImpact: bigint;
        existingPnlCollateral: bigint;
        oldPosSizePlusPnlCollateral: bigint;
        newOpenPrice: bigint;
        borrowingFeeCollateral: bigint;
        openingFeesCollateral: bigint;
        existingLiqPrice: bigint;
        newLiqPrice: bigint;
    };
}
export declare namespace ITradingCallbacks {
    type AggregatorAnswerStruct = {
        orderId: ITradingStorage.IdStruct;
        spreadP: BigNumberish;
        price: BigNumberish;
        open: BigNumberish;
        high: BigNumberish;
        low: BigNumberish;
    };
    type AggregatorAnswerStructOutput = [
        orderId: ITradingStorage.IdStructOutput,
        spreadP: bigint,
        price: bigint,
        open: bigint,
        high: bigint,
        low: bigint
    ] & {
        orderId: ITradingStorage.IdStructOutput;
        spreadP: bigint;
        price: bigint;
        open: bigint;
        high: bigint;
        low: bigint;
    };
    type ValuesStruct = {
        profitP: BigNumberish;
        executionPrice: BigNumberish;
        liqPrice: BigNumberish;
        amountSentToTrader: BigNumberish;
        collateralPriceUsd: BigNumberish;
        exactExecution: boolean;
        collateralLeftInStorage: BigNumberish;
        oraclePrice: BigNumberish;
        limitIndex: BigNumberish;
        priceImpactP: BigNumberish;
    };
    type ValuesStructOutput = [
        profitP: bigint,
        executionPrice: bigint,
        liqPrice: bigint,
        amountSentToTrader: bigint,
        collateralPriceUsd: bigint,
        exactExecution: boolean,
        collateralLeftInStorage: bigint,
        oraclePrice: bigint,
        limitIndex: bigint,
        priceImpactP: bigint
    ] & {
        profitP: bigint;
        executionPrice: bigint;
        liqPrice: bigint;
        amountSentToTrader: bigint;
        collateralPriceUsd: bigint;
        exactExecution: boolean;
        collateralLeftInStorage: bigint;
        oraclePrice: bigint;
        limitIndex: bigint;
        priceImpactP: bigint;
    };
}
export declare namespace IBorrowingFees {
    type BorrowingDataStruct = {
        feePerBlock: BigNumberish;
        accFeeLong: BigNumberish;
        accFeeShort: BigNumberish;
        accLastUpdatedBlock: BigNumberish;
        feeExponent: BigNumberish;
    };
    type BorrowingDataStructOutput = [
        feePerBlock: bigint,
        accFeeLong: bigint,
        accFeeShort: bigint,
        accLastUpdatedBlock: bigint,
        feeExponent: bigint
    ] & {
        feePerBlock: bigint;
        accFeeLong: bigint;
        accFeeShort: bigint;
        accLastUpdatedBlock: bigint;
        feeExponent: bigint;
    };
    type OpenInterestStruct = {
        long: BigNumberish;
        short: BigNumberish;
        max: BigNumberish;
        __placeholder: BigNumberish;
    };
    type OpenInterestStructOutput = [
        long: bigint,
        short: bigint,
        max: bigint,
        __placeholder: bigint
    ] & {
        long: bigint;
        short: bigint;
        max: bigint;
        __placeholder: bigint;
    };
    type BorrowingPairGroupStruct = {
        groupIndex: BigNumberish;
        block: BigNumberish;
        initialAccFeeLong: BigNumberish;
        initialAccFeeShort: BigNumberish;
        prevGroupAccFeeLong: BigNumberish;
        prevGroupAccFeeShort: BigNumberish;
        pairAccFeeLong: BigNumberish;
        pairAccFeeShort: BigNumberish;
        __placeholder: BigNumberish;
    };
    type BorrowingPairGroupStructOutput = [
        groupIndex: bigint,
        block: bigint,
        initialAccFeeLong: bigint,
        initialAccFeeShort: bigint,
        prevGroupAccFeeLong: bigint,
        prevGroupAccFeeShort: bigint,
        pairAccFeeLong: bigint,
        pairAccFeeShort: bigint,
        __placeholder: bigint
    ] & {
        groupIndex: bigint;
        block: bigint;
        initialAccFeeLong: bigint;
        initialAccFeeShort: bigint;
        prevGroupAccFeeLong: bigint;
        prevGroupAccFeeShort: bigint;
        pairAccFeeLong: bigint;
        pairAccFeeShort: bigint;
        __placeholder: bigint;
    };
    type BorrowingFeePerBlockCapStruct = {
        minP: BigNumberish;
        maxP: BigNumberish;
    };
    type BorrowingFeePerBlockCapStructOutput = [
        minP: bigint,
        maxP: bigint
    ] & {
        minP: bigint;
        maxP: bigint;
    };
    type BorrowingInitialAccFeesStruct = {
        accPairFee: BigNumberish;
        accGroupFee: BigNumberish;
        block: BigNumberish;
        __placeholder: BigNumberish;
    };
    type BorrowingInitialAccFeesStructOutput = [
        accPairFee: bigint,
        accGroupFee: bigint,
        block: bigint,
        __placeholder: bigint
    ] & {
        accPairFee: bigint;
        accGroupFee: bigint;
        block: bigint;
        __placeholder: bigint;
    };
    type BorrowingFeeInputStruct = {
        collateralIndex: BigNumberish;
        trader: AddressLike;
        pairIndex: BigNumberish;
        index: BigNumberish;
        long: boolean;
        collateral: BigNumberish;
        leverage: BigNumberish;
    };
    type BorrowingFeeInputStructOutput = [
        collateralIndex: bigint,
        trader: string,
        pairIndex: bigint,
        index: bigint,
        long: boolean,
        collateral: bigint,
        leverage: bigint
    ] & {
        collateralIndex: bigint;
        trader: string;
        pairIndex: bigint;
        index: bigint;
        long: boolean;
        collateral: bigint;
        leverage: bigint;
    };
    type LiqPriceInputStruct = {
        collateralIndex: BigNumberish;
        trader: AddressLike;
        pairIndex: BigNumberish;
        index: BigNumberish;
        openPrice: BigNumberish;
        long: boolean;
        collateral: BigNumberish;
        leverage: BigNumberish;
        useBorrowingFees: boolean;
        liquidationParams: IPairsStorage.GroupLiquidationParamsStruct;
    };
    type LiqPriceInputStructOutput = [
        collateralIndex: bigint,
        trader: string,
        pairIndex: bigint,
        index: bigint,
        openPrice: bigint,
        long: boolean,
        collateral: bigint,
        leverage: bigint,
        useBorrowingFees: boolean,
        liquidationParams: IPairsStorage.GroupLiquidationParamsStructOutput
    ] & {
        collateralIndex: bigint;
        trader: string;
        pairIndex: bigint;
        index: bigint;
        openPrice: bigint;
        long: boolean;
        collateral: bigint;
        leverage: bigint;
        useBorrowingFees: boolean;
        liquidationParams: IPairsStorage.GroupLiquidationParamsStructOutput;
    };
    type BorrowingGroupParamsStruct = {
        feePerBlock: BigNumberish;
        maxOi: BigNumberish;
        feeExponent: BigNumberish;
    };
    type BorrowingGroupParamsStructOutput = [
        feePerBlock: bigint,
        maxOi: bigint,
        feeExponent: bigint
    ] & {
        feePerBlock: bigint;
        maxOi: bigint;
        feeExponent: bigint;
    };
    type BorrowingPairParamsStruct = {
        groupIndex: BigNumberish;
        feePerBlock: BigNumberish;
        feeExponent: BigNumberish;
        maxOi: BigNumberish;
    };
    type BorrowingPairParamsStructOutput = [
        groupIndex: bigint,
        feePerBlock: bigint,
        feeExponent: bigint,
        maxOi: bigint
    ] & {
        groupIndex: bigint;
        feePerBlock: bigint;
        feeExponent: bigint;
        maxOi: bigint;
    };
}
export declare namespace IPriceAggregator {
    type LiquidityPoolInfoStruct = {
        pool: AddressLike;
        isGnsToken0InLp: boolean;
        poolType: BigNumberish;
        __placeholder: BigNumberish;
    };
    type LiquidityPoolInfoStructOutput = [
        pool: string,
        isGnsToken0InLp: boolean,
        poolType: bigint,
        __placeholder: bigint
    ] & {
        pool: string;
        isGnsToken0InLp: boolean;
        poolType: bigint;
        __placeholder: bigint;
    };
    type OrderAnswerStruct = {
        open: BigNumberish;
        high: BigNumberish;
        low: BigNumberish;
        ts: BigNumberish;
    };
    type OrderAnswerStructOutput = [
        open: bigint,
        high: bigint,
        low: bigint,
        ts: bigint
    ] & {
        open: bigint;
        high: bigint;
        low: bigint;
        ts: bigint;
    };
    type OrderStruct = {
        user: AddressLike;
        index: BigNumberish;
        orderType: BigNumberish;
        pairIndex: BigNumberish;
        isLookback: boolean;
        __placeholder: BigNumberish;
    };
    type OrderStructOutput = [
        user: string,
        index: bigint,
        orderType: bigint,
        pairIndex: bigint,
        isLookback: boolean,
        __placeholder: bigint
    ] & {
        user: string;
        index: bigint;
        orderType: bigint;
        pairIndex: bigint;
        isLookback: boolean;
        __placeholder: bigint;
    };
    type LiquidityPoolInputStruct = {
        pool: AddressLike;
        poolType: BigNumberish;
    };
    type LiquidityPoolInputStructOutput = [
        pool: string,
        poolType: bigint
    ] & {
        pool: string;
        poolType: bigint;
    };
}
export declare namespace BufferChainlink {
    type BufferStruct = {
        buf: BytesLike;
        capacity: BigNumberish;
    };
    type BufferStructOutput = [buf: string, capacity: bigint] & {
        buf: string;
        capacity: bigint;
    };
}
export declare namespace Chainlink {
    type RequestStruct = {
        id: BytesLike;
        callbackAddress: AddressLike;
        callbackFunctionId: BytesLike;
        nonce: BigNumberish;
        buf: BufferChainlink.BufferStruct;
    };
    type RequestStructOutput = [
        id: string,
        callbackAddress: string,
        callbackFunctionId: string,
        nonce: bigint,
        buf: BufferChainlink.BufferStructOutput
    ] & {
        id: string;
        callbackAddress: string;
        callbackFunctionId: string;
        nonce: bigint;
        buf: BufferChainlink.BufferStructOutput;
    };
}
export declare namespace IOtc {
    type OtcConfigStruct = {
        gnsTreasury: AddressLike;
        treasuryShareP: BigNumberish;
        stakingShareP: BigNumberish;
        burnShareP: BigNumberish;
        premiumP: BigNumberish;
    };
    type OtcConfigStructOutput = [
        gnsTreasury: string,
        treasuryShareP: bigint,
        stakingShareP: bigint,
        burnShareP: bigint,
        premiumP: bigint
    ] & {
        gnsTreasury: string;
        treasuryShareP: bigint;
        stakingShareP: bigint;
        burnShareP: bigint;
        premiumP: bigint;
    };
}
export interface GNSDiamondInterface extends Interface {
    getFunction(nameOrSignature: "diamondCut" | "facetAddress" | "facetAddresses" | "facetFunctionSelectors" | "facets" | "getAddresses" | "hasRole" | "hasRoles" | "initialize" | "setRoles" | "addFees" | "addGroups" | "addPairs" | "fees" | "feesCount" | "getAllPairsRestrictedMaxLeverage" | "getGlobalTradeFeeParams" | "getGroupLiquidationParams" | "getPairLiquidationParams" | "groups" | "groupsCount" | "initializeGroupLiquidationParams" | "initializeNewFees" | "initializeReferralFeeChange" | "isPairIndexListed" | "isPairListed" | "pairCustomMaxLeverage" | "pairJob" | "pairMaxLeverage" | "pairMinFeeUsd" | "pairMinLeverage" | "pairMinPositionSizeUsd" | "pairOraclePositionSizeFeeP" | "pairSpreadP" | "pairSpreadPArray" | "pairTotalLiqCollateralFeeP" | "pairTotalPositionSizeFeeP" | "pairs" | "pairsCount" | "setGlobalTradeFeeParams" | "setGroupLiquidationParams" | "setPairCustomMaxLeverages" | "updateFees" | "updateGroups" | "updatePairs" | "claimAllyRewards" | "claimReferrerRewards" | "distributeReferralReward" | "getAllyDetails" | "getReferralSettingsOverrides" | "getReferralsAllyFeeP" | "getReferralsStartReferrerFeeP" | "getReferralsTargetVolumeUsd" | "getReferrerDetails" | "getReferrerFeeProgressP" | "getReferrersReferred" | "getTraderActiveReferrer" | "getTraderLastReferrer" | "getTradersReferred" | "initializeReferrals" | "overrideAllyFeeP" | "overrideReferralFeeP" | "registerPotentialReferrer" | "unwhitelistAllies" | "unwhitelistReferrers" | "updateAllyFeeP" | "updateReferralsTargetVolumeUsd" | "updateStartReferrerFeeP" | "whitelistAllies" | "whitelistReferrers" | "addTradersUnclaimedPoints" | "calculateFeeAmount" | "getFeeTier" | "getFeeTiersCount" | "getFeeTiersTraderDailyInfo" | "getFeeTiersTraderInfo" | "getGroupVolumeMultiplier" | "getTraderFeeTiersEnrollment" | "getTraderUnclaimedPoints" | "initializeFeeTiers" | "setFeeTiers" | "setGroupVolumeMultipliers" | "setTradersFeeTiersEnrollment" | "updateTraderPoints" | "addPriceImpactOpenInterest" | "getNegPnlCumulVolMultiplier" | "getOiWindow" | "getOiWindows" | "getOiWindowsSettings" | "getPairDepth" | "getPairDepths" | "getPairFactors" | "getPriceImpactOi" | "getProtectionCloseFactorWhitelist" | "getTradePriceImpact" | "getUserPriceImpact" | "initializeNegPnlCumulVolMultiplier" | "initializePairFactors" | "initializePriceImpact" | "setCumulativeFactors" | "setExemptAfterProtectionCloseFactor" | "setExemptOnOpen" | "setNegPnlCumulVolMultiplier" | "setPairDepths" | "setPriceImpactWindowsCount" | "setPriceImpactWindowsDuration" | "setProtectionCloseFactorBlocks" | "setProtectionCloseFactorWhitelist" | "setProtectionCloseFactors" | "setUserPriceImpact" | "addCollateral" | "closePendingOrder" | "closeTrade" | "getAllPendingOrders" | "getAllPendingOrdersForTraders" | "getAllTradeInfos" | "getAllTradeInfosForTraders" | "getAllTrades" | "getAllTradesForTraders" | "getAllTradesLiquidationParams" | "getAllTradesLiquidationParamsForTraders" | "getCollateral" | "getCollateralIndex" | "getCollaterals" | "getCollateralsCount" | "getCounters" | "getCountersForTraders" | "getCurrentContractsVersion" | "getGToken" | "getGnsCollateralIndex" | "getPendingOrder" | "getPendingOrders" | "getTrade" | "getTradeInfo" | "getTradeInfos" | "getTradeLiquidationParams" | "getTradePendingOrderBlock" | "getTraderStored" | "getTraders" | "getTradersCount" | "getTrades" | "getTradesLiquidationParams" | "getTradingActivated" | "initializeTradingStorage" | "isCollateralActive" | "isCollateralGns" | "isCollateralListed" | "storePendingOrder" | "storeTrade" | "toggleCollateralActiveState" | "updateGToken" | "updateOpenOrderDetails" | "updateTradeCollateralAmount" | "updateTradeMaxClosingSlippageP" | "updateTradePosition" | "updateTradeSl" | "updateTradeTp" | "updateTradingActivated" | "claimPendingTriggerRewards" | "distributeTriggerReward" | "getTriggerPendingRewardsGns" | "getTriggerTimeoutBlocks" | "hasActiveOrder" | "initializeTriggerRewards" | "updateTriggerTimeoutBlocks" | "cancelOpenOrder" | "cancelOrderAfterTimeout" | "closeTradeMarket" | "decreasePositionSize" | "delegatedTradingAction" | "getByPassTriggerLink" | "getMarketOrdersTimeoutBlocks" | "getTradingDelegate" | "getWrappedNativeToken" | "increasePositionSize" | "increasePositionSizeNative" | "initializeTrading" | "isWrappedNativeToken" | "openTrade" | "openTradeNative" | "removeTradingDelegate" | "setTradingDelegate" | "triggerOrder" | "updateByPassTriggerLink" | "updateLeverage" | "updateLeverageNative" | "updateMarketOrdersTimeoutBlocks" | "updateMaxClosingSlippageP" | "updateOpenOrder" | "updateSl" | "updateTp" | "claimPendingGovFees" | "closeTradeMarketCallback" | "decreasePositionSizeMarketCallback" | "executeTriggerCloseOrderCallback" | "executeTriggerOpenOrderCallback" | "getPendingGovFeesCollateral" | "getVaultClosingFeeP" | "increasePositionSizeMarketCallback" | "initializeCallbacks" | "initializeTreasuryAddress" | "openTradeMarketCallback" | "updateLeverageCallback" | "updateTreasuryAddress" | "updateVaultClosingFeeP" | "validateTriggerCloseOrderCallback" | "validateTriggerOpenOrderCallback" | "getAllBorrowingPairs" | "getBorrowingFeePerBlockCap" | "getBorrowingGroup" | "getBorrowingGroupOi" | "getBorrowingGroupPendingAccFees" | "getBorrowingGroups" | "getBorrowingInitialAccFees" | "getBorrowingPair" | "getBorrowingPairFeePerBlockCap" | "getBorrowingPairFeePerBlockCaps" | "getBorrowingPairGroupIndex" | "getBorrowingPairGroups" | "getBorrowingPairOi" | "getBorrowingPairPendingAccFees" | "getPairMaxOi" | "getPairMaxOiCollateral" | "getPairOiCollateral" | "getPairOisCollateral" | "getTradeBorrowingFee" | "getTradeLiquidationPrice" | "handleTradeBorrowingCallback" | "initializeBorrowingFeePerBlockCap" | "resetTradeBorrowingFees" | "setBorrowingFeePerBlockCap" | "setBorrowingGroupParams" | "setBorrowingGroupParamsArray" | "setBorrowingPairFeePerBlockCapArray" | "setBorrowingPairParams" | "setBorrowingPairParamsArray" | "withinMaxBorrowingGroupOi" | "addOracle" | "claimBackLink" | "fulfill" | "getChainlinkToken" | "getCollateralFromUsdNormalizedValue" | "getCollateralGnsLiquidityPool" | "getCollateralPriceUsd" | "getCollateralUsdPriceFeed" | "getGnsPriceCollateralAddress" | "getGnsPriceCollateralIndex" | "getGnsPriceUsd" | "getLimitJobCount" | "getLimitJobId" | "getLimitJobIndex" | "getLinkFee" | "getLinkUsdPriceFeed" | "getMarketJobId" | "getMaxLookbackDeviationP" | "getMaxMarketDeviationP" | "getMinAnswers" | "getOracle" | "getOracles" | "getPendingRequest" | "getPrice" | "getPriceAggregatorOrder" | "getPriceAggregatorOrderAnswers" | "getRequestCount" | "getTwapInterval" | "getUsdNormalizedValue" | "initializeLimitJobCount" | "initializeMaxDeviationsP" | "initializePriceAggregator" | "removeOracle" | "replaceOracle" | "setLimitJobCount" | "setLimitJobId" | "setMarketJobId" | "setMaxLookbackDeviationP" | "setMaxMarketDeviationP" | "updateCollateralGnsLiquidityPool" | "updateCollateralUsdPriceFeed" | "updateLinkUsdPriceFeed" | "updateMinAnswers" | "updateTwapInterval" | "addOtcCollateralBalance" | "getOtcBalance" | "getOtcConfig" | "getOtcRate" | "initializeOtc" | "sellGnsForCollateral" | "updateOtcConfig" | "multicall" | "getNativeTransferEnabled" | "getNativeTransferGasLimit" | "getReentrancyLock" | "initializeChainConfig" | "updateNativeTransferEnabled" | "updateNativeTransferGasLimit"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "AccessControlUpdated" | "AddressesUpdated" | "DiamondCut" | "Initialized" | "FeeAdded" | "FeeUpdated" | "GlobalTradeFeeParamsUpdated" | "GroupAdded" | "GroupLiquidationParamsUpdated" | "GroupUpdated" | "PairAdded" | "PairCustomMaxLeverageUpdated" | "PairUpdated" | "AllyRewardDistributed" | "AllyRewardsClaimed" | "AllyUnwhitelisted" | "AllyWhitelisted" | "OverrodeAllyFeeP" | "OverrodeReferralFeeP" | "ReferrerRegistered" | "ReferrerRewardDistributed" | "ReferrerRewardsClaimed" | "ReferrerUnwhitelisted" | "ReferrerWhitelisted" | "UpdatedAllyFeeP" | "UpdatedOpenFeeP" | "UpdatedStartReferrerFeeP" | "UpdatedTargetVolumeUsd" | "FeeTiersUpdated" | "GroupVolumeMultipliersUpdated" | "TraderDailyPointsIncreased" | "TraderEnrollmentUpdated" | "TraderFeeMultiplierCached" | "TraderInfoFirstUpdate" | "TraderInfoUpdated" | "TraderPointsCredited" | "TraderTrailingPointsExpired" | "TraderUnclaimedPointsClaimed" | "CumulativeFactorUpdated" | "ExemptAfterProtectionCloseFactorUpdated" | "ExemptOnOpenUpdated" | "NegPnlCumulVolMultiplierUpdated" | "OiWindowsSettingsInitialized" | "OnePercentDepthUpdated" | "PriceImpactOiTransferredPair" | "PriceImpactOiTransferredPairs" | "PriceImpactOpenInterestAdded" | "PriceImpactWindowsCountUpdated" | "PriceImpactWindowsDurationUpdated" | "ProtectionCloseFactorBlocksUpdated" | "ProtectionCloseFactorUpdated" | "ProtectionCloseFactorWhitelistUpdated" | "UserPriceImpactUpdated" | "CollateralAdded" | "CollateralDisabled" | "CollateralUpdated" | "GTokenUpdated" | "OpenOrderDetailsUpdated" | "PendingOrderClosed" | "PendingOrderStored" | "TradeClosed" | "TradeCollateralUpdated" | "TradeMaxClosingSlippagePUpdated" | "TradePositionUpdated" | "TradeSlUpdated" | "TradeStored" | "TradeTpUpdated" | "TradingActivatedUpdated" | "TriggerRewarded" | "TriggerRewardsClaimed" | "TriggerTimeoutBlocksUpdated" | "ByPassTriggerLinkUpdated" | "ChainlinkCallbackTimeout" | "CouldNotCloseTrade" | "LeverageUpdateExecuted" | "LeverageUpdateInitiated" | "MarketOrderInitiated" | "MarketOrdersTimeoutBlocksUpdated" | "NativeTokenWrapped" | "OpenLimitCanceled" | "OpenLimitUpdated" | "OpenOrderPlaced" | "PositionSizeDecreaseExecuted" | "PositionSizeIncreaseExecuted" | "PositionSizeUpdateInitiated" | "TriggerOrderInitiated" | "BorrowingFeeCharged" | "GTokenFeeCharged" | "GnsOtcFeeCharged" | "GovFeeCharged" | "LimitExecuted" | "MarketCloseCanceled" | "MarketExecuted" | "MarketOpenCanceled" | "PendingGovFeesClaimed" | "ReferralFeeCharged" | "TriggerFeeCharged" | "TriggerOrderCanceled" | "VaultClosingFeePUpdated" | "BorrowingFeePerBlockCapUpdated" | "BorrowingGroupAccFeesUpdated" | "BorrowingGroupOiUpdated" | "BorrowingGroupUpdated" | "BorrowingInitialAccFeesStored" | "BorrowingPairAccFeesUpdated" | "BorrowingPairFeePerBlockCapUpdated" | "BorrowingPairGroupUpdated" | "BorrowingPairOiUpdated" | "BorrowingPairParamsUpdated" | "TradeBorrowingCallbackHandled" | "CollateralGnsLiquidityPoolUpdated" | "CollateralUsdPriceFeedUpdated" | "JobIdUpdated" | "LimitJobCountUpdated" | "LinkClaimedBack" | "LinkRequestCreated" | "LinkUsdPriceFeedUpdated" | "MaxLookbackDeviationPUpdated" | "MaxMarketDeviationPUpdated" | "MinAnswersUpdated" | "OracleAdded" | "OracleRemoved" | "OracleReplaced" | "PriceReceived" | "PriceRequested" | "TradingCallbackExecuted" | "TwapIntervalUpdated" | "OtcBalanceUpdated" | "OtcConfigUpdated" | "OtcExecuted" | "NativeTransferEnabledUpdated" | "NativeTransferGasLimitUpdated"): EventFragment;
    encodeFunctionData(functionFragment: "diamondCut", values: [IDiamondStorage.FacetCutStruct[], AddressLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "facetAddress", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "facetAddresses", values?: undefined): string;
    encodeFunctionData(functionFragment: "facetFunctionSelectors", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "facets", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAddresses", values?: undefined): string;
    encodeFunctionData(functionFragment: "hasRole", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "hasRoles", values: [AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "initialize", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "setRoles", values: [AddressLike[], BigNumberish[], boolean[]]): string;
    encodeFunctionData(functionFragment: "addFees", values: [IPairsStorage.FeeGroupStruct[]]): string;
    encodeFunctionData(functionFragment: "addGroups", values: [IPairsStorage.GroupStruct[]]): string;
    encodeFunctionData(functionFragment: "addPairs", values: [IPairsStorage.PairStruct[]]): string;
    encodeFunctionData(functionFragment: "fees", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "feesCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllPairsRestrictedMaxLeverage", values?: undefined): string;
    encodeFunctionData(functionFragment: "getGlobalTradeFeeParams", values?: undefined): string;
    encodeFunctionData(functionFragment: "getGroupLiquidationParams", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getPairLiquidationParams", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "groups", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "groupsCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "initializeGroupLiquidationParams", values: [IPairsStorage.GroupLiquidationParamsStruct[]]): string;
    encodeFunctionData(functionFragment: "initializeNewFees", values: [IPairsStorage.GlobalTradeFeeParamsStruct]): string;
    encodeFunctionData(functionFragment: "initializeReferralFeeChange", values?: undefined): string;
    encodeFunctionData(functionFragment: "isPairIndexListed", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "isPairListed", values: [string, string]): string;
    encodeFunctionData(functionFragment: "pairCustomMaxLeverage", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "pairJob", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "pairMaxLeverage", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "pairMinFeeUsd", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "pairMinLeverage", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "pairMinPositionSizeUsd", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "pairOraclePositionSizeFeeP", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "pairSpreadP", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "pairSpreadPArray", values: [AddressLike[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "pairTotalLiqCollateralFeeP", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "pairTotalPositionSizeFeeP", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "pairs", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "pairsCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "setGlobalTradeFeeParams", values: [IPairsStorage.GlobalTradeFeeParamsStruct]): string;
    encodeFunctionData(functionFragment: "setGroupLiquidationParams", values: [BigNumberish, IPairsStorage.GroupLiquidationParamsStruct]): string;
    encodeFunctionData(functionFragment: "setPairCustomMaxLeverages", values: [BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "updateFees", values: [BigNumberish[], IPairsStorage.FeeGroupStruct[]]): string;
    encodeFunctionData(functionFragment: "updateGroups", values: [BigNumberish[], IPairsStorage.GroupStruct[]]): string;
    encodeFunctionData(functionFragment: "updatePairs", values: [BigNumberish[], IPairsStorage.PairStruct[]]): string;
    encodeFunctionData(functionFragment: "claimAllyRewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimReferrerRewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "distributeReferralReward", values: [AddressLike, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getAllyDetails", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getReferralSettingsOverrides", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getReferralsAllyFeeP", values?: undefined): string;
    encodeFunctionData(functionFragment: "getReferralsStartReferrerFeeP", values?: undefined): string;
    encodeFunctionData(functionFragment: "getReferralsTargetVolumeUsd", values?: undefined): string;
    encodeFunctionData(functionFragment: "getReferrerDetails", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getReferrerFeeProgressP", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getReferrersReferred", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getTraderActiveReferrer", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getTraderLastReferrer", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getTradersReferred", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "initializeReferrals", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "overrideAllyFeeP", values: [AddressLike[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "overrideReferralFeeP", values: [AddressLike[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "registerPotentialReferrer", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "unwhitelistAllies", values: [AddressLike[]]): string;
    encodeFunctionData(functionFragment: "unwhitelistReferrers", values: [AddressLike[]]): string;
    encodeFunctionData(functionFragment: "updateAllyFeeP", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateReferralsTargetVolumeUsd", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateStartReferrerFeeP", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "whitelistAllies", values: [AddressLike[]]): string;
    encodeFunctionData(functionFragment: "whitelistReferrers", values: [AddressLike[], AddressLike[]]): string;
    encodeFunctionData(functionFragment: "addTradersUnclaimedPoints", values: [AddressLike[], BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "calculateFeeAmount", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getFeeTier", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getFeeTiersCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getFeeTiersTraderDailyInfo", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getFeeTiersTraderInfo", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getGroupVolumeMultiplier", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getTraderFeeTiersEnrollment", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getTraderUnclaimedPoints", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "initializeFeeTiers", values: [
        BigNumberish[],
        BigNumberish[],
        BigNumberish[],
        IFeeTiers.FeeTierStruct[]
    ]): string;
    encodeFunctionData(functionFragment: "setFeeTiers", values: [BigNumberish[], IFeeTiers.FeeTierStruct[]]): string;
    encodeFunctionData(functionFragment: "setGroupVolumeMultipliers", values: [BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "setTradersFeeTiersEnrollment", values: [AddressLike[], IFeeTiers.TraderEnrollmentStruct[]]): string;
    encodeFunctionData(functionFragment: "updateTraderPoints", values: [AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "addPriceImpactOpenInterest", values: [AddressLike, BigNumberish, BigNumberish, boolean, boolean]): string;
    encodeFunctionData(functionFragment: "getNegPnlCumulVolMultiplier", values?: undefined): string;
    encodeFunctionData(functionFragment: "getOiWindow", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getOiWindows", values: [BigNumberish, BigNumberish, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "getOiWindowsSettings", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPairDepth", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getPairDepths", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "getPairFactors", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "getPriceImpactOi", values: [BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "getProtectionCloseFactorWhitelist", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getTradePriceImpact", values: [
        AddressLike,
        BigNumberish,
        BigNumberish,
        boolean,
        BigNumberish,
        boolean,
        boolean,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "getUserPriceImpact", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "initializeNegPnlCumulVolMultiplier", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "initializePairFactors", values: [BigNumberish[], BigNumberish[], BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "initializePriceImpact", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setCumulativeFactors", values: [BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "setExemptAfterProtectionCloseFactor", values: [BigNumberish[], boolean[]]): string;
    encodeFunctionData(functionFragment: "setExemptOnOpen", values: [BigNumberish[], boolean[]]): string;
    encodeFunctionData(functionFragment: "setNegPnlCumulVolMultiplier", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setPairDepths", values: [BigNumberish[], BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "setPriceImpactWindowsCount", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setPriceImpactWindowsDuration", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setProtectionCloseFactorBlocks", values: [BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "setProtectionCloseFactorWhitelist", values: [AddressLike[], boolean[]]): string;
    encodeFunctionData(functionFragment: "setProtectionCloseFactors", values: [BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "setUserPriceImpact", values: [AddressLike[], BigNumberish[], BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "addCollateral", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "closePendingOrder", values: [ITradingStorage.IdStruct]): string;
    encodeFunctionData(functionFragment: "closeTrade", values: [ITradingStorage.IdStruct, boolean]): string;
    encodeFunctionData(functionFragment: "getAllPendingOrders", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getAllPendingOrdersForTraders", values: [AddressLike[], BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getAllTradeInfos", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getAllTradeInfosForTraders", values: [AddressLike[], BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getAllTrades", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getAllTradesForTraders", values: [AddressLike[], BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getAllTradesLiquidationParams", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getAllTradesLiquidationParamsForTraders", values: [AddressLike[], BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getCollateral", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getCollateralIndex", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getCollaterals", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCollateralsCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCounters", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getCountersForTraders", values: [AddressLike[], BigNumberish]): string;
    encodeFunctionData(functionFragment: "getCurrentContractsVersion", values?: undefined): string;
    encodeFunctionData(functionFragment: "getGToken", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getGnsCollateralIndex", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPendingOrder", values: [ITradingStorage.IdStruct]): string;
    encodeFunctionData(functionFragment: "getPendingOrders", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getTrade", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getTradeInfo", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getTradeInfos", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getTradeLiquidationParams", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getTradePendingOrderBlock", values: [ITradingStorage.IdStruct, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getTraderStored", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getTraders", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getTradersCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTrades", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getTradesLiquidationParams", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getTradingActivated", values?: undefined): string;
    encodeFunctionData(functionFragment: "initializeTradingStorage", values: [AddressLike, AddressLike, AddressLike[], AddressLike[]]): string;
    encodeFunctionData(functionFragment: "isCollateralActive", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "isCollateralGns", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "isCollateralListed", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "storePendingOrder", values: [ITradingStorage.PendingOrderStruct]): string;
    encodeFunctionData(functionFragment: "storeTrade", values: [ITradingStorage.TradeStruct, ITradingStorage.TradeInfoStruct]): string;
    encodeFunctionData(functionFragment: "toggleCollateralActiveState", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateGToken", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "updateOpenOrderDetails", values: [
        ITradingStorage.IdStruct,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "updateTradeCollateralAmount", values: [ITradingStorage.IdStruct, BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateTradeMaxClosingSlippageP", values: [ITradingStorage.IdStruct, BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateTradePosition", values: [
        ITradingStorage.IdStruct,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        boolean,
        boolean
    ]): string;
    encodeFunctionData(functionFragment: "updateTradeSl", values: [ITradingStorage.IdStruct, BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateTradeTp", values: [ITradingStorage.IdStruct, BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateTradingActivated", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "claimPendingTriggerRewards", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "distributeTriggerReward", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getTriggerPendingRewardsGns", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getTriggerTimeoutBlocks", values?: undefined): string;
    encodeFunctionData(functionFragment: "hasActiveOrder", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "initializeTriggerRewards", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateTriggerTimeoutBlocks", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "cancelOpenOrder", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "cancelOrderAfterTimeout", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "closeTradeMarket", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "decreasePositionSize", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "delegatedTradingAction", values: [AddressLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "getByPassTriggerLink", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getMarketOrdersTimeoutBlocks", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTradingDelegate", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getWrappedNativeToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "increasePositionSize", values: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "increasePositionSizeNative", values: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "initializeTrading", values: [BigNumberish, AddressLike[]]): string;
    encodeFunctionData(functionFragment: "isWrappedNativeToken", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "openTrade", values: [ITradingStorage.TradeStruct, BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "openTradeNative", values: [ITradingStorage.TradeStruct, BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "removeTradingDelegate", values?: undefined): string;
    encodeFunctionData(functionFragment: "setTradingDelegate", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "triggerOrder", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateByPassTriggerLink", values: [AddressLike[], boolean[]]): string;
    encodeFunctionData(functionFragment: "updateLeverage", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateLeverageNative", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateMarketOrdersTimeoutBlocks", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateMaxClosingSlippageP", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateOpenOrder", values: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "updateSl", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateTp", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "claimPendingGovFees", values?: undefined): string;
    encodeFunctionData(functionFragment: "closeTradeMarketCallback", values: [ITradingCallbacks.AggregatorAnswerStruct]): string;
    encodeFunctionData(functionFragment: "decreasePositionSizeMarketCallback", values: [ITradingCallbacks.AggregatorAnswerStruct]): string;
    encodeFunctionData(functionFragment: "executeTriggerCloseOrderCallback", values: [ITradingCallbacks.AggregatorAnswerStruct]): string;
    encodeFunctionData(functionFragment: "executeTriggerOpenOrderCallback", values: [ITradingCallbacks.AggregatorAnswerStruct]): string;
    encodeFunctionData(functionFragment: "getPendingGovFeesCollateral", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getVaultClosingFeeP", values?: undefined): string;
    encodeFunctionData(functionFragment: "increasePositionSizeMarketCallback", values: [ITradingCallbacks.AggregatorAnswerStruct]): string;
    encodeFunctionData(functionFragment: "initializeCallbacks", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "initializeTreasuryAddress", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "openTradeMarketCallback", values: [ITradingCallbacks.AggregatorAnswerStruct]): string;
    encodeFunctionData(functionFragment: "updateLeverageCallback", values: [ITradingCallbacks.AggregatorAnswerStruct]): string;
    encodeFunctionData(functionFragment: "updateTreasuryAddress", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "updateVaultClosingFeeP", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "validateTriggerCloseOrderCallback", values: [
        ITradingStorage.IdStruct,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "validateTriggerOpenOrderCallback", values: [
        ITradingStorage.IdStruct,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "getAllBorrowingPairs", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getBorrowingFeePerBlockCap", values?: undefined): string;
    encodeFunctionData(functionFragment: "getBorrowingGroup", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getBorrowingGroupOi", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getBorrowingGroupPendingAccFees", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getBorrowingGroups", values: [BigNumberish, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "getBorrowingInitialAccFees", values: [BigNumberish, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getBorrowingPair", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getBorrowingPairFeePerBlockCap", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getBorrowingPairFeePerBlockCaps", values: [BigNumberish, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "getBorrowingPairGroupIndex", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getBorrowingPairGroups", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getBorrowingPairOi", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getBorrowingPairPendingAccFees", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getPairMaxOi", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getPairMaxOiCollateral", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getPairOiCollateral", values: [BigNumberish, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "getPairOisCollateral", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getTradeBorrowingFee", values: [IBorrowingFees.BorrowingFeeInputStruct]): string;
    encodeFunctionData(functionFragment: "getTradeLiquidationPrice", values: [IBorrowingFees.LiqPriceInputStruct]): string;
    encodeFunctionData(functionFragment: "handleTradeBorrowingCallback", values: [
        BigNumberish,
        AddressLike,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        boolean,
        boolean
    ]): string;
    encodeFunctionData(functionFragment: "initializeBorrowingFeePerBlockCap", values: [IBorrowingFees.BorrowingFeePerBlockCapStruct]): string;
    encodeFunctionData(functionFragment: "resetTradeBorrowingFees", values: [BigNumberish, AddressLike, BigNumberish, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "setBorrowingFeePerBlockCap", values: [IBorrowingFees.BorrowingFeePerBlockCapStruct]): string;
    encodeFunctionData(functionFragment: "setBorrowingGroupParams", values: [
        BigNumberish,
        BigNumberish,
        IBorrowingFees.BorrowingGroupParamsStruct
    ]): string;
    encodeFunctionData(functionFragment: "setBorrowingGroupParamsArray", values: [
        BigNumberish,
        BigNumberish[],
        IBorrowingFees.BorrowingGroupParamsStruct[]
    ]): string;
    encodeFunctionData(functionFragment: "setBorrowingPairFeePerBlockCapArray", values: [
        BigNumberish,
        BigNumberish[],
        IBorrowingFees.BorrowingFeePerBlockCapStruct[]
    ]): string;
    encodeFunctionData(functionFragment: "setBorrowingPairParams", values: [
        BigNumberish,
        BigNumberish,
        IBorrowingFees.BorrowingPairParamsStruct
    ]): string;
    encodeFunctionData(functionFragment: "setBorrowingPairParamsArray", values: [
        BigNumberish,
        BigNumberish[],
        IBorrowingFees.BorrowingPairParamsStruct[]
    ]): string;
    encodeFunctionData(functionFragment: "withinMaxBorrowingGroupOi", values: [BigNumberish, BigNumberish, boolean, BigNumberish]): string;
    encodeFunctionData(functionFragment: "addOracle", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "claimBackLink", values?: undefined): string;
    encodeFunctionData(functionFragment: "fulfill", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getChainlinkToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCollateralFromUsdNormalizedValue", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getCollateralGnsLiquidityPool", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getCollateralPriceUsd", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getCollateralUsdPriceFeed", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getGnsPriceCollateralAddress", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getGnsPriceCollateralIndex", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getGnsPriceUsd", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getLimitJobCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getLimitJobId", values?: undefined): string;
    encodeFunctionData(functionFragment: "getLimitJobIndex", values?: undefined): string;
    encodeFunctionData(functionFragment: "getLinkFee", values: [BigNumberish, AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getLinkUsdPriceFeed", values?: undefined): string;
    encodeFunctionData(functionFragment: "getMarketJobId", values?: undefined): string;
    encodeFunctionData(functionFragment: "getMaxLookbackDeviationP", values?: undefined): string;
    encodeFunctionData(functionFragment: "getMaxMarketDeviationP", values?: undefined): string;
    encodeFunctionData(functionFragment: "getMinAnswers", values?: undefined): string;
    encodeFunctionData(functionFragment: "getOracle", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getOracles", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPendingRequest", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getPrice", values: [
        BigNumberish,
        BigNumberish,
        ITradingStorage.PendingOrderStruct,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "getPriceAggregatorOrder", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getPriceAggregatorOrderAnswers", values: [ITradingStorage.IdStruct]): string;
    encodeFunctionData(functionFragment: "getRequestCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTwapInterval", values?: undefined): string;
    encodeFunctionData(functionFragment: "getUsdNormalizedValue", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "initializeLimitJobCount", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "initializeMaxDeviationsP", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "initializePriceAggregator", values: [
        AddressLike,
        AddressLike,
        BigNumberish,
        BigNumberish,
        AddressLike[],
        [
            BytesLike,
            BytesLike
        ],
        BigNumberish[],
        IPriceAggregator.LiquidityPoolInputStruct[],
        AddressLike[]
    ]): string;
    encodeFunctionData(functionFragment: "removeOracle", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "replaceOracle", values: [BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "setLimitJobCount", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setLimitJobId", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "setMarketJobId", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "setMaxLookbackDeviationP", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMaxMarketDeviationP", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateCollateralGnsLiquidityPool", values: [BigNumberish, IPriceAggregator.LiquidityPoolInputStruct]): string;
    encodeFunctionData(functionFragment: "updateCollateralUsdPriceFeed", values: [BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "updateLinkUsdPriceFeed", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "updateMinAnswers", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateTwapInterval", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "addOtcCollateralBalance", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getOtcBalance", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getOtcConfig", values?: undefined): string;
    encodeFunctionData(functionFragment: "getOtcRate", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "initializeOtc", values: [IOtc.OtcConfigStruct]): string;
    encodeFunctionData(functionFragment: "sellGnsForCollateral", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateOtcConfig", values: [IOtc.OtcConfigStruct]): string;
    encodeFunctionData(functionFragment: "multicall", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "getNativeTransferEnabled", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNativeTransferGasLimit", values?: undefined): string;
    encodeFunctionData(functionFragment: "getReentrancyLock", values?: undefined): string;
    encodeFunctionData(functionFragment: "initializeChainConfig", values: [BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "updateNativeTransferEnabled", values: [boolean]): string;
    encodeFunctionData(functionFragment: "updateNativeTransferGasLimit", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "diamondCut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "facetAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "facetAddresses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "facetFunctionSelectors", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "facets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAddresses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRoles", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRoles", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addGroups", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addPairs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feesCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllPairsRestrictedMaxLeverage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGlobalTradeFeeParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGroupLiquidationParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPairLiquidationParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "groups", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "groupsCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeGroupLiquidationParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeNewFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeReferralFeeChange", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPairIndexListed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPairListed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairCustomMaxLeverage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairJob", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairMaxLeverage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairMinFeeUsd", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairMinLeverage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairMinPositionSizeUsd", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairOraclePositionSizeFeeP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairSpreadP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairSpreadPArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairTotalLiqCollateralFeeP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairTotalPositionSizeFeeP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairsCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGlobalTradeFeeParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGroupLiquidationParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPairCustomMaxLeverages", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateGroups", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updatePairs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimAllyRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimReferrerRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "distributeReferralReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllyDetails", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReferralSettingsOverrides", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReferralsAllyFeeP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReferralsStartReferrerFeeP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReferralsTargetVolumeUsd", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReferrerDetails", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReferrerFeeProgressP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReferrersReferred", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTraderActiveReferrer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTraderLastReferrer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTradersReferred", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeReferrals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "overrideAllyFeeP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "overrideReferralFeeP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerPotentialReferrer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unwhitelistAllies", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unwhitelistReferrers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateAllyFeeP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateReferralsTargetVolumeUsd", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateStartReferrerFeeP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelistAllies", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelistReferrers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addTradersUnclaimedPoints", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateFeeAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFeeTier", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFeeTiersCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFeeTiersTraderDailyInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFeeTiersTraderInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGroupVolumeMultiplier", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTraderFeeTiersEnrollment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTraderUnclaimedPoints", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeFeeTiers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFeeTiers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGroupVolumeMultipliers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTradersFeeTiersEnrollment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateTraderPoints", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addPriceImpactOpenInterest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNegPnlCumulVolMultiplier", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOiWindow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOiWindows", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOiWindowsSettings", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPairDepth", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPairDepths", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPairFactors", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPriceImpactOi", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProtectionCloseFactorWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTradePriceImpact", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserPriceImpact", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeNegPnlCumulVolMultiplier", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializePairFactors", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializePriceImpact", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCumulativeFactors", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setExemptAfterProtectionCloseFactor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setExemptOnOpen", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setNegPnlCumulVolMultiplier", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPairDepths", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPriceImpactWindowsCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPriceImpactWindowsDuration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setProtectionCloseFactorBlocks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setProtectionCloseFactorWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setProtectionCloseFactors", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUserPriceImpact", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "closePendingOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "closeTrade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllPendingOrders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllPendingOrdersForTraders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllTradeInfos", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllTradeInfosForTraders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllTrades", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllTradesForTraders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllTradesLiquidationParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllTradesLiquidationParamsForTraders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCollateralIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCollaterals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCollateralsCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCounters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCountersForTraders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentContractsVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGnsCollateralIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPendingOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPendingOrders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTrade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTradeInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTradeInfos", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTradeLiquidationParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTradePendingOrderBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTraderStored", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTraders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTradersCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTrades", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTradesLiquidationParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTradingActivated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeTradingStorage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isCollateralActive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isCollateralGns", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isCollateralListed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "storePendingOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "storeTrade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toggleCollateralActiveState", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateGToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateOpenOrderDetails", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateTradeCollateralAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateTradeMaxClosingSlippageP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateTradePosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateTradeSl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateTradeTp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateTradingActivated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimPendingTriggerRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "distributeTriggerReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTriggerPendingRewardsGns", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTriggerTimeoutBlocks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasActiveOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeTriggerRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateTriggerTimeoutBlocks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelOpenOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelOrderAfterTimeout", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "closeTradeMarket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreasePositionSize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegatedTradingAction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getByPassTriggerLink", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMarketOrdersTimeoutBlocks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTradingDelegate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getWrappedNativeToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increasePositionSize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increasePositionSizeNative", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeTrading", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isWrappedNativeToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "openTrade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "openTradeNative", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeTradingDelegate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTradingDelegate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "triggerOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateByPassTriggerLink", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateLeverage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateLeverageNative", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateMarketOrdersTimeoutBlocks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateMaxClosingSlippageP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateOpenOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateSl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateTp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimPendingGovFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "closeTradeMarketCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreasePositionSizeMarketCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeTriggerCloseOrderCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeTriggerOpenOrderCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPendingGovFeesCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVaultClosingFeeP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increasePositionSizeMarketCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeCallbacks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeTreasuryAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "openTradeMarketCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateLeverageCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateTreasuryAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateVaultClosingFeeP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateTriggerCloseOrderCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateTriggerOpenOrderCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllBorrowingPairs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBorrowingFeePerBlockCap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBorrowingGroup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBorrowingGroupOi", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBorrowingGroupPendingAccFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBorrowingGroups", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBorrowingInitialAccFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBorrowingPair", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBorrowingPairFeePerBlockCap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBorrowingPairFeePerBlockCaps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBorrowingPairGroupIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBorrowingPairGroups", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBorrowingPairOi", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBorrowingPairPendingAccFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPairMaxOi", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPairMaxOiCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPairOiCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPairOisCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTradeBorrowingFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTradeLiquidationPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "handleTradeBorrowingCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeBorrowingFeePerBlockCap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resetTradeBorrowingFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBorrowingFeePerBlockCap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBorrowingGroupParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBorrowingGroupParamsArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBorrowingPairFeePerBlockCapArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBorrowingPairParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBorrowingPairParamsArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withinMaxBorrowingGroupOi", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimBackLink", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fulfill", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getChainlinkToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCollateralFromUsdNormalizedValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCollateralGnsLiquidityPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCollateralPriceUsd", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCollateralUsdPriceFeed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGnsPriceCollateralAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGnsPriceCollateralIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGnsPriceUsd", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLimitJobCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLimitJobId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLimitJobIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLinkFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLinkUsdPriceFeed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMarketJobId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMaxLookbackDeviationP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMaxMarketDeviationP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMinAnswers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOracles", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPendingRequest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPriceAggregatorOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPriceAggregatorOrderAnswers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRequestCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTwapInterval", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUsdNormalizedValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeLimitJobCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeMaxDeviationsP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializePriceAggregator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "replaceOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLimitJobCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLimitJobId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMarketJobId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxLookbackDeviationP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxMarketDeviationP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateCollateralGnsLiquidityPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateCollateralUsdPriceFeed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateLinkUsdPriceFeed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateMinAnswers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateTwapInterval", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addOtcCollateralBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOtcBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOtcConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOtcRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeOtc", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sellGnsForCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateOtcConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNativeTransferEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNativeTransferGasLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReentrancyLock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeChainConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateNativeTransferEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateNativeTransferGasLimit", data: BytesLike): Result;
}
export declare namespace AccessControlUpdatedEvent {
    type InputTuple = [
        target: AddressLike,
        role: BigNumberish,
        access: boolean
    ];
    type OutputTuple = [target: string, role: bigint, access: boolean];
    interface OutputObject {
        target: string;
        role: bigint;
        access: boolean;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace AddressesUpdatedEvent {
    type InputTuple = [addresses: IAddressStore.AddressesStruct];
    type OutputTuple = [addresses: IAddressStore.AddressesStructOutput];
    interface OutputObject {
        addresses: IAddressStore.AddressesStructOutput;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace DiamondCutEvent {
    type InputTuple = [
        _diamondCut: IDiamondStorage.FacetCutStruct[],
        _init: AddressLike,
        _calldata: BytesLike
    ];
    type OutputTuple = [
        _diamondCut: IDiamondStorage.FacetCutStructOutput[],
        _init: string,
        _calldata: string
    ];
    interface OutputObject {
        _diamondCut: IDiamondStorage.FacetCutStructOutput[];
        _init: string;
        _calldata: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace InitializedEvent {
    type InputTuple = [version: BigNumberish];
    type OutputTuple = [version: bigint];
    interface OutputObject {
        version: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace FeeAddedEvent {
    type InputTuple = [
        index: BigNumberish,
        feeGroup: IPairsStorage.FeeGroupStruct
    ];
    type OutputTuple = [
        index: bigint,
        feeGroup: IPairsStorage.FeeGroupStructOutput
    ];
    interface OutputObject {
        index: bigint;
        feeGroup: IPairsStorage.FeeGroupStructOutput;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace FeeUpdatedEvent {
    type InputTuple = [
        index: BigNumberish,
        feeGroup: IPairsStorage.FeeGroupStruct
    ];
    type OutputTuple = [
        index: bigint,
        feeGroup: IPairsStorage.FeeGroupStructOutput
    ];
    interface OutputObject {
        index: bigint;
        feeGroup: IPairsStorage.FeeGroupStructOutput;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace GlobalTradeFeeParamsUpdatedEvent {
    type InputTuple = [
        feeParams: IPairsStorage.GlobalTradeFeeParamsStruct
    ];
    type OutputTuple = [
        feeParams: IPairsStorage.GlobalTradeFeeParamsStructOutput
    ];
    interface OutputObject {
        feeParams: IPairsStorage.GlobalTradeFeeParamsStructOutput;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace GroupAddedEvent {
    type InputTuple = [index: BigNumberish, name: string];
    type OutputTuple = [index: bigint, name: string];
    interface OutputObject {
        index: bigint;
        name: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace GroupLiquidationParamsUpdatedEvent {
    type InputTuple = [
        index: BigNumberish,
        params: IPairsStorage.GroupLiquidationParamsStruct
    ];
    type OutputTuple = [
        index: bigint,
        params: IPairsStorage.GroupLiquidationParamsStructOutput
    ];
    interface OutputObject {
        index: bigint;
        params: IPairsStorage.GroupLiquidationParamsStructOutput;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace GroupUpdatedEvent {
    type InputTuple = [index: BigNumberish];
    type OutputTuple = [index: bigint];
    interface OutputObject {
        index: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PairAddedEvent {
    type InputTuple = [index: BigNumberish, from: string, to: string];
    type OutputTuple = [index: bigint, from: string, to: string];
    interface OutputObject {
        index: bigint;
        from: string;
        to: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PairCustomMaxLeverageUpdatedEvent {
    type InputTuple = [index: BigNumberish, maxLeverage: BigNumberish];
    type OutputTuple = [index: bigint, maxLeverage: bigint];
    interface OutputObject {
        index: bigint;
        maxLeverage: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PairUpdatedEvent {
    type InputTuple = [index: BigNumberish];
    type OutputTuple = [index: bigint];
    interface OutputObject {
        index: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace AllyRewardDistributedEvent {
    type InputTuple = [
        ally: AddressLike,
        trader: AddressLike,
        volumeUsd: BigNumberish,
        amountGns: BigNumberish,
        amountValueUsd: BigNumberish
    ];
    type OutputTuple = [
        ally: string,
        trader: string,
        volumeUsd: bigint,
        amountGns: bigint,
        amountValueUsd: bigint
    ];
    interface OutputObject {
        ally: string;
        trader: string;
        volumeUsd: bigint;
        amountGns: bigint;
        amountValueUsd: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace AllyRewardsClaimedEvent {
    type InputTuple = [ally: AddressLike, amountGns: BigNumberish];
    type OutputTuple = [ally: string, amountGns: bigint];
    interface OutputObject {
        ally: string;
        amountGns: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace AllyUnwhitelistedEvent {
    type InputTuple = [ally: AddressLike];
    type OutputTuple = [ally: string];
    interface OutputObject {
        ally: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace AllyWhitelistedEvent {
    type InputTuple = [ally: AddressLike];
    type OutputTuple = [ally: string];
    interface OutputObject {
        ally: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace OverrodeAllyFeePEvent {
    type InputTuple = [ally: AddressLike, allyFeeP: BigNumberish];
    type OutputTuple = [ally: string, allyFeeP: bigint];
    interface OutputObject {
        ally: string;
        allyFeeP: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace OverrodeReferralFeePEvent {
    type InputTuple = [referrer: AddressLike, referralFeeP: BigNumberish];
    type OutputTuple = [referrer: string, referralFeeP: bigint];
    interface OutputObject {
        referrer: string;
        referralFeeP: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ReferrerRegisteredEvent {
    type InputTuple = [trader: AddressLike, referrer: AddressLike];
    type OutputTuple = [trader: string, referrer: string];
    interface OutputObject {
        trader: string;
        referrer: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ReferrerRewardDistributedEvent {
    type InputTuple = [
        referrer: AddressLike,
        trader: AddressLike,
        volumeUsd: BigNumberish,
        amountGns: BigNumberish,
        amountValueUsd: BigNumberish
    ];
    type OutputTuple = [
        referrer: string,
        trader: string,
        volumeUsd: bigint,
        amountGns: bigint,
        amountValueUsd: bigint
    ];
    interface OutputObject {
        referrer: string;
        trader: string;
        volumeUsd: bigint;
        amountGns: bigint;
        amountValueUsd: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ReferrerRewardsClaimedEvent {
    type InputTuple = [referrer: AddressLike, amountGns: BigNumberish];
    type OutputTuple = [referrer: string, amountGns: bigint];
    interface OutputObject {
        referrer: string;
        amountGns: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ReferrerUnwhitelistedEvent {
    type InputTuple = [referrer: AddressLike];
    type OutputTuple = [referrer: string];
    interface OutputObject {
        referrer: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ReferrerWhitelistedEvent {
    type InputTuple = [referrer: AddressLike, ally: AddressLike];
    type OutputTuple = [referrer: string, ally: string];
    interface OutputObject {
        referrer: string;
        ally: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UpdatedAllyFeePEvent {
    type InputTuple = [value: BigNumberish];
    type OutputTuple = [value: bigint];
    interface OutputObject {
        value: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UpdatedOpenFeePEvent {
    type InputTuple = [value: BigNumberish];
    type OutputTuple = [value: bigint];
    interface OutputObject {
        value: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UpdatedStartReferrerFeePEvent {
    type InputTuple = [value: BigNumberish];
    type OutputTuple = [value: bigint];
    interface OutputObject {
        value: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UpdatedTargetVolumeUsdEvent {
    type InputTuple = [value: BigNumberish];
    type OutputTuple = [value: bigint];
    interface OutputObject {
        value: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace FeeTiersUpdatedEvent {
    type InputTuple = [
        feeTiersIndices: BigNumberish[],
        feeTiers: IFeeTiers.FeeTierStruct[]
    ];
    type OutputTuple = [
        feeTiersIndices: bigint[],
        feeTiers: IFeeTiers.FeeTierStructOutput[]
    ];
    interface OutputObject {
        feeTiersIndices: bigint[];
        feeTiers: IFeeTiers.FeeTierStructOutput[];
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace GroupVolumeMultipliersUpdatedEvent {
    type InputTuple = [
        groupIndices: BigNumberish[],
        groupVolumeMultipliers: BigNumberish[]
    ];
    type OutputTuple = [
        groupIndices: bigint[],
        groupVolumeMultipliers: bigint[]
    ];
    interface OutputObject {
        groupIndices: bigint[];
        groupVolumeMultipliers: bigint[];
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TraderDailyPointsIncreasedEvent {
    type InputTuple = [
        trader: AddressLike,
        day: BigNumberish,
        points: BigNumberish
    ];
    type OutputTuple = [trader: string, day: bigint, points: bigint];
    interface OutputObject {
        trader: string;
        day: bigint;
        points: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TraderEnrollmentUpdatedEvent {
    type InputTuple = [
        trader: AddressLike,
        enrollment: IFeeTiers.TraderEnrollmentStruct
    ];
    type OutputTuple = [
        trader: string,
        enrollment: IFeeTiers.TraderEnrollmentStructOutput
    ];
    interface OutputObject {
        trader: string;
        enrollment: IFeeTiers.TraderEnrollmentStructOutput;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TraderFeeMultiplierCachedEvent {
    type InputTuple = [
        trader: AddressLike,
        day: BigNumberish,
        feeMultiplier: BigNumberish
    ];
    type OutputTuple = [
        trader: string,
        day: bigint,
        feeMultiplier: bigint
    ];
    interface OutputObject {
        trader: string;
        day: bigint;
        feeMultiplier: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TraderInfoFirstUpdateEvent {
    type InputTuple = [trader: AddressLike, day: BigNumberish];
    type OutputTuple = [trader: string, day: bigint];
    interface OutputObject {
        trader: string;
        day: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TraderInfoUpdatedEvent {
    type InputTuple = [
        trader: AddressLike,
        traderInfo: IFeeTiers.TraderInfoStruct
    ];
    type OutputTuple = [
        trader: string,
        traderInfo: IFeeTiers.TraderInfoStructOutput
    ];
    interface OutputObject {
        trader: string;
        traderInfo: IFeeTiers.TraderInfoStructOutput;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TraderPointsCreditedEvent {
    type InputTuple = [
        trader: AddressLike,
        day: BigNumberish,
        creditType: BigNumberish,
        points: BigNumberish
    ];
    type OutputTuple = [
        trader: string,
        day: bigint,
        creditType: bigint,
        points: bigint
    ];
    interface OutputObject {
        trader: string;
        day: bigint;
        creditType: bigint;
        points: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TraderTrailingPointsExpiredEvent {
    type InputTuple = [
        trader: AddressLike,
        fromDay: BigNumberish,
        toDay: BigNumberish,
        expiredPoints: BigNumberish
    ];
    type OutputTuple = [
        trader: string,
        fromDay: bigint,
        toDay: bigint,
        expiredPoints: bigint
    ];
    interface OutputObject {
        trader: string;
        fromDay: bigint;
        toDay: bigint;
        expiredPoints: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TraderUnclaimedPointsClaimedEvent {
    type InputTuple = [
        trader: AddressLike,
        day: BigNumberish,
        points: BigNumberish
    ];
    type OutputTuple = [trader: string, day: bigint, points: bigint];
    interface OutputObject {
        trader: string;
        day: bigint;
        points: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace CumulativeFactorUpdatedEvent {
    type InputTuple = [
        pairIndex: BigNumberish,
        cumulativeFactor: BigNumberish
    ];
    type OutputTuple = [pairIndex: bigint, cumulativeFactor: bigint];
    interface OutputObject {
        pairIndex: bigint;
        cumulativeFactor: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ExemptAfterProtectionCloseFactorUpdatedEvent {
    type InputTuple = [
        pairIndex: BigNumberish,
        exemptAfterProtectionCloseFactor: boolean
    ];
    type OutputTuple = [
        pairIndex: bigint,
        exemptAfterProtectionCloseFactor: boolean
    ];
    interface OutputObject {
        pairIndex: bigint;
        exemptAfterProtectionCloseFactor: boolean;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ExemptOnOpenUpdatedEvent {
    type InputTuple = [pairIndex: BigNumberish, exemptOnOpen: boolean];
    type OutputTuple = [pairIndex: bigint, exemptOnOpen: boolean];
    interface OutputObject {
        pairIndex: bigint;
        exemptOnOpen: boolean;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace NegPnlCumulVolMultiplierUpdatedEvent {
    type InputTuple = [negPnlCumulVolMultiplier: BigNumberish];
    type OutputTuple = [negPnlCumulVolMultiplier: bigint];
    interface OutputObject {
        negPnlCumulVolMultiplier: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace OiWindowsSettingsInitializedEvent {
    type InputTuple = [
        windowsDuration: BigNumberish,
        windowsCount: BigNumberish
    ];
    type OutputTuple = [windowsDuration: bigint, windowsCount: bigint];
    interface OutputObject {
        windowsDuration: bigint;
        windowsCount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace OnePercentDepthUpdatedEvent {
    type InputTuple = [
        pairIndex: BigNumberish,
        valueAboveUsd: BigNumberish,
        valueBelowUsd: BigNumberish
    ];
    type OutputTuple = [
        pairIndex: bigint,
        valueAboveUsd: bigint,
        valueBelowUsd: bigint
    ];
    interface OutputObject {
        pairIndex: bigint;
        valueAboveUsd: bigint;
        valueBelowUsd: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PriceImpactOiTransferredPairEvent {
    type InputTuple = [
        pairIndex: BigNumberish,
        totalPairOi: IPriceImpact.PairOiStruct
    ];
    type OutputTuple = [
        pairIndex: bigint,
        totalPairOi: IPriceImpact.PairOiStructOutput
    ];
    interface OutputObject {
        pairIndex: bigint;
        totalPairOi: IPriceImpact.PairOiStructOutput;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PriceImpactOiTransferredPairsEvent {
    type InputTuple = [
        pairsCount: BigNumberish,
        prevCurrentWindowId: BigNumberish,
        prevEarliestWindowId: BigNumberish,
        newCurrentWindowId: BigNumberish
    ];
    type OutputTuple = [
        pairsCount: bigint,
        prevCurrentWindowId: bigint,
        prevEarliestWindowId: bigint,
        newCurrentWindowId: bigint
    ];
    interface OutputObject {
        pairsCount: bigint;
        prevCurrentWindowId: bigint;
        prevEarliestWindowId: bigint;
        newCurrentWindowId: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PriceImpactOpenInterestAddedEvent {
    type InputTuple = [oiWindowUpdate: IPriceImpact.OiWindowUpdateStruct];
    type OutputTuple = [
        oiWindowUpdate: IPriceImpact.OiWindowUpdateStructOutput
    ];
    interface OutputObject {
        oiWindowUpdate: IPriceImpact.OiWindowUpdateStructOutput;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PriceImpactWindowsCountUpdatedEvent {
    type InputTuple = [windowsCount: BigNumberish];
    type OutputTuple = [windowsCount: bigint];
    interface OutputObject {
        windowsCount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PriceImpactWindowsDurationUpdatedEvent {
    type InputTuple = [windowsDuration: BigNumberish];
    type OutputTuple = [windowsDuration: bigint];
    interface OutputObject {
        windowsDuration: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ProtectionCloseFactorBlocksUpdatedEvent {
    type InputTuple = [
        pairIndex: BigNumberish,
        protectionCloseFactorBlocks: BigNumberish
    ];
    type OutputTuple = [
        pairIndex: bigint,
        protectionCloseFactorBlocks: bigint
    ];
    interface OutputObject {
        pairIndex: bigint;
        protectionCloseFactorBlocks: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ProtectionCloseFactorUpdatedEvent {
    type InputTuple = [
        pairIndex: BigNumberish,
        protectionCloseFactor: BigNumberish
    ];
    type OutputTuple = [pairIndex: bigint, protectionCloseFactor: bigint];
    interface OutputObject {
        pairIndex: bigint;
        protectionCloseFactor: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ProtectionCloseFactorWhitelistUpdatedEvent {
    type InputTuple = [trader: AddressLike, whitelisted: boolean];
    type OutputTuple = [trader: string, whitelisted: boolean];
    interface OutputObject {
        trader: string;
        whitelisted: boolean;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UserPriceImpactUpdatedEvent {
    type InputTuple = [
        trader: AddressLike,
        pairIndex: BigNumberish,
        cumulVolPriceImpactMultiplier: BigNumberish,
        fixedSpreadP: BigNumberish
    ];
    type OutputTuple = [
        trader: string,
        pairIndex: bigint,
        cumulVolPriceImpactMultiplier: bigint,
        fixedSpreadP: bigint
    ];
    interface OutputObject {
        trader: string;
        pairIndex: bigint;
        cumulVolPriceImpactMultiplier: bigint;
        fixedSpreadP: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace CollateralAddedEvent {
    type InputTuple = [
        collateral: AddressLike,
        index: BigNumberish,
        gToken: AddressLike
    ];
    type OutputTuple = [collateral: string, index: bigint, gToken: string];
    interface OutputObject {
        collateral: string;
        index: bigint;
        gToken: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace CollateralDisabledEvent {
    type InputTuple = [index: BigNumberish];
    type OutputTuple = [index: bigint];
    interface OutputObject {
        index: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace CollateralUpdatedEvent {
    type InputTuple = [index: BigNumberish, isActive: boolean];
    type OutputTuple = [index: bigint, isActive: boolean];
    interface OutputObject {
        index: bigint;
        isActive: boolean;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace GTokenUpdatedEvent {
    type InputTuple = [
        collateral: AddressLike,
        index: BigNumberish,
        gToken: AddressLike
    ];
    type OutputTuple = [collateral: string, index: bigint, gToken: string];
    interface OutputObject {
        collateral: string;
        index: bigint;
        gToken: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace OpenOrderDetailsUpdatedEvent {
    type InputTuple = [
        user: AddressLike,
        index: BigNumberish,
        openPrice: BigNumberish,
        tp: BigNumberish,
        sl: BigNumberish,
        maxSlippageP: BigNumberish
    ];
    type OutputTuple = [
        user: string,
        index: bigint,
        openPrice: bigint,
        tp: bigint,
        sl: bigint,
        maxSlippageP: bigint
    ];
    interface OutputObject {
        user: string;
        index: bigint;
        openPrice: bigint;
        tp: bigint;
        sl: bigint;
        maxSlippageP: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PendingOrderClosedEvent {
    type InputTuple = [orderId: ITradingStorage.IdStruct];
    type OutputTuple = [orderId: ITradingStorage.IdStructOutput];
    interface OutputObject {
        orderId: ITradingStorage.IdStructOutput;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PendingOrderStoredEvent {
    type InputTuple = [pendingOrder: ITradingStorage.PendingOrderStruct];
    type OutputTuple = [
        pendingOrder: ITradingStorage.PendingOrderStructOutput
    ];
    interface OutputObject {
        pendingOrder: ITradingStorage.PendingOrderStructOutput;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TradeClosedEvent {
    type InputTuple = [
        user: AddressLike,
        index: BigNumberish,
        isPnlPositive: boolean
    ];
    type OutputTuple = [
        user: string,
        index: bigint,
        isPnlPositive: boolean
    ];
    interface OutputObject {
        user: string;
        index: bigint;
        isPnlPositive: boolean;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TradeCollateralUpdatedEvent {
    type InputTuple = [
        user: AddressLike,
        index: BigNumberish,
        collateralAmount: BigNumberish
    ];
    type OutputTuple = [
        user: string,
        index: bigint,
        collateralAmount: bigint
    ];
    interface OutputObject {
        user: string;
        index: bigint;
        collateralAmount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TradeMaxClosingSlippagePUpdatedEvent {
    type InputTuple = [
        user: AddressLike,
        index: BigNumberish,
        maxClosingSlippageP: BigNumberish
    ];
    type OutputTuple = [
        user: string,
        index: bigint,
        maxClosingSlippageP: bigint
    ];
    interface OutputObject {
        user: string;
        index: bigint;
        maxClosingSlippageP: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TradePositionUpdatedEvent {
    type InputTuple = [
        user: AddressLike,
        index: BigNumberish,
        collateralAmount: BigNumberish,
        leverage: BigNumberish,
        openPrice: BigNumberish,
        newTp: BigNumberish,
        newSl: BigNumberish,
        isPartialIncrease: boolean,
        isPnlPositive: boolean
    ];
    type OutputTuple = [
        user: string,
        index: bigint,
        collateralAmount: bigint,
        leverage: bigint,
        openPrice: bigint,
        newTp: bigint,
        newSl: bigint,
        isPartialIncrease: boolean,
        isPnlPositive: boolean
    ];
    interface OutputObject {
        user: string;
        index: bigint;
        collateralAmount: bigint;
        leverage: bigint;
        openPrice: bigint;
        newTp: bigint;
        newSl: bigint;
        isPartialIncrease: boolean;
        isPnlPositive: boolean;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TradeSlUpdatedEvent {
    type InputTuple = [
        user: AddressLike,
        index: BigNumberish,
        newSl: BigNumberish
    ];
    type OutputTuple = [user: string, index: bigint, newSl: bigint];
    interface OutputObject {
        user: string;
        index: bigint;
        newSl: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TradeStoredEvent {
    type InputTuple = [
        user: AddressLike,
        index: BigNumberish,
        trade: ITradingStorage.TradeStruct,
        tradeInfo: ITradingStorage.TradeInfoStruct,
        liquidationParams: IPairsStorage.GroupLiquidationParamsStruct
    ];
    type OutputTuple = [
        user: string,
        index: bigint,
        trade: ITradingStorage.TradeStructOutput,
        tradeInfo: ITradingStorage.TradeInfoStructOutput,
        liquidationParams: IPairsStorage.GroupLiquidationParamsStructOutput
    ];
    interface OutputObject {
        user: string;
        index: bigint;
        trade: ITradingStorage.TradeStructOutput;
        tradeInfo: ITradingStorage.TradeInfoStructOutput;
        liquidationParams: IPairsStorage.GroupLiquidationParamsStructOutput;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TradeTpUpdatedEvent {
    type InputTuple = [
        user: AddressLike,
        index: BigNumberish,
        newTp: BigNumberish
    ];
    type OutputTuple = [user: string, index: bigint, newTp: bigint];
    interface OutputObject {
        user: string;
        index: bigint;
        newTp: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TradingActivatedUpdatedEvent {
    type InputTuple = [activated: BigNumberish];
    type OutputTuple = [activated: bigint];
    interface OutputObject {
        activated: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TriggerRewardedEvent {
    type InputTuple = [
        rewardsPerOracleGns: BigNumberish,
        oraclesCount: BigNumberish
    ];
    type OutputTuple = [rewardsPerOracleGns: bigint, oraclesCount: bigint];
    interface OutputObject {
        rewardsPerOracleGns: bigint;
        oraclesCount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TriggerRewardsClaimedEvent {
    type InputTuple = [oracle: AddressLike, rewardsGns: BigNumberish];
    type OutputTuple = [oracle: string, rewardsGns: bigint];
    interface OutputObject {
        oracle: string;
        rewardsGns: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TriggerTimeoutBlocksUpdatedEvent {
    type InputTuple = [timeoutBlocks: BigNumberish];
    type OutputTuple = [timeoutBlocks: bigint];
    interface OutputObject {
        timeoutBlocks: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ByPassTriggerLinkUpdatedEvent {
    type InputTuple = [user: AddressLike, bypass: boolean];
    type OutputTuple = [user: string, bypass: boolean];
    interface OutputObject {
        user: string;
        bypass: boolean;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ChainlinkCallbackTimeoutEvent {
    type InputTuple = [
        pendingOrderId: ITradingStorage.IdStruct,
        pairIndex: BigNumberish
    ];
    type OutputTuple = [
        pendingOrderId: ITradingStorage.IdStructOutput,
        pairIndex: bigint
    ];
    interface OutputObject {
        pendingOrderId: ITradingStorage.IdStructOutput;
        pairIndex: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace CouldNotCloseTradeEvent {
    type InputTuple = [
        trader: AddressLike,
        pairIndex: BigNumberish,
        index: BigNumberish
    ];
    type OutputTuple = [trader: string, pairIndex: bigint, index: bigint];
    interface OutputObject {
        trader: string;
        pairIndex: bigint;
        index: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace LeverageUpdateExecutedEvent {
    type InputTuple = [
        orderId: ITradingStorage.IdStruct,
        isIncrease: boolean,
        cancelReason: BigNumberish,
        collateralIndex: BigNumberish,
        trader: AddressLike,
        pairIndex: BigNumberish,
        index: BigNumberish,
        oraclePrice: BigNumberish,
        collateralDelta: BigNumberish,
        values: IUpdateLeverage.UpdateLeverageValuesStruct
    ];
    type OutputTuple = [
        orderId: ITradingStorage.IdStructOutput,
        isIncrease: boolean,
        cancelReason: bigint,
        collateralIndex: bigint,
        trader: string,
        pairIndex: bigint,
        index: bigint,
        oraclePrice: bigint,
        collateralDelta: bigint,
        values: IUpdateLeverage.UpdateLeverageValuesStructOutput
    ];
    interface OutputObject {
        orderId: ITradingStorage.IdStructOutput;
        isIncrease: boolean;
        cancelReason: bigint;
        collateralIndex: bigint;
        trader: string;
        pairIndex: bigint;
        index: bigint;
        oraclePrice: bigint;
        collateralDelta: bigint;
        values: IUpdateLeverage.UpdateLeverageValuesStructOutput;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace LeverageUpdateInitiatedEvent {
    type InputTuple = [
        orderId: ITradingStorage.IdStruct,
        trader: AddressLike,
        pairIndex: BigNumberish,
        index: BigNumberish,
        isIncrease: boolean,
        newLeverage: BigNumberish
    ];
    type OutputTuple = [
        orderId: ITradingStorage.IdStructOutput,
        trader: string,
        pairIndex: bigint,
        index: bigint,
        isIncrease: boolean,
        newLeverage: bigint
    ];
    interface OutputObject {
        orderId: ITradingStorage.IdStructOutput;
        trader: string;
        pairIndex: bigint;
        index: bigint;
        isIncrease: boolean;
        newLeverage: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace MarketOrderInitiatedEvent {
    type InputTuple = [
        orderId: ITradingStorage.IdStruct,
        trader: AddressLike,
        pairIndex: BigNumberish,
        open: boolean
    ];
    type OutputTuple = [
        orderId: ITradingStorage.IdStructOutput,
        trader: string,
        pairIndex: bigint,
        open: boolean
    ];
    interface OutputObject {
        orderId: ITradingStorage.IdStructOutput;
        trader: string;
        pairIndex: bigint;
        open: boolean;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace MarketOrdersTimeoutBlocksUpdatedEvent {
    type InputTuple = [newValueBlocks: BigNumberish];
    type OutputTuple = [newValueBlocks: bigint];
    interface OutputObject {
        newValueBlocks: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace NativeTokenWrappedEvent {
    type InputTuple = [
        trader: AddressLike,
        nativeTokenAmount: BigNumberish
    ];
    type OutputTuple = [trader: string, nativeTokenAmount: bigint];
    interface OutputObject {
        trader: string;
        nativeTokenAmount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace OpenLimitCanceledEvent {
    type InputTuple = [
        trader: AddressLike,
        pairIndex: BigNumberish,
        index: BigNumberish
    ];
    type OutputTuple = [trader: string, pairIndex: bigint, index: bigint];
    interface OutputObject {
        trader: string;
        pairIndex: bigint;
        index: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace OpenLimitUpdatedEvent {
    type InputTuple = [
        trader: AddressLike,
        pairIndex: BigNumberish,
        index: BigNumberish,
        newPrice: BigNumberish,
        newTp: BigNumberish,
        newSl: BigNumberish,
        maxSlippageP: BigNumberish
    ];
    type OutputTuple = [
        trader: string,
        pairIndex: bigint,
        index: bigint,
        newPrice: bigint,
        newTp: bigint,
        newSl: bigint,
        maxSlippageP: bigint
    ];
    interface OutputObject {
        trader: string;
        pairIndex: bigint;
        index: bigint;
        newPrice: bigint;
        newTp: bigint;
        newSl: bigint;
        maxSlippageP: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace OpenOrderPlacedEvent {
    type InputTuple = [
        trader: AddressLike,
        pairIndex: BigNumberish,
        index: BigNumberish
    ];
    type OutputTuple = [trader: string, pairIndex: bigint, index: bigint];
    interface OutputObject {
        trader: string;
        pairIndex: bigint;
        index: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PositionSizeDecreaseExecutedEvent {
    type InputTuple = [
        orderId: ITradingStorage.IdStruct,
        cancelReason: BigNumberish,
        collateralIndex: BigNumberish,
        trader: AddressLike,
        pairIndex: BigNumberish,
        index: BigNumberish,
        long: boolean,
        oraclePrice: BigNumberish,
        collateralPriceUsd: BigNumberish,
        collateralDelta: BigNumberish,
        leverageDelta: BigNumberish,
        values: IUpdatePositionSize.DecreasePositionSizeValuesStruct
    ];
    type OutputTuple = [
        orderId: ITradingStorage.IdStructOutput,
        cancelReason: bigint,
        collateralIndex: bigint,
        trader: string,
        pairIndex: bigint,
        index: bigint,
        long: boolean,
        oraclePrice: bigint,
        collateralPriceUsd: bigint,
        collateralDelta: bigint,
        leverageDelta: bigint,
        values: IUpdatePositionSize.DecreasePositionSizeValuesStructOutput
    ];
    interface OutputObject {
        orderId: ITradingStorage.IdStructOutput;
        cancelReason: bigint;
        collateralIndex: bigint;
        trader: string;
        pairIndex: bigint;
        index: bigint;
        long: boolean;
        oraclePrice: bigint;
        collateralPriceUsd: bigint;
        collateralDelta: bigint;
        leverageDelta: bigint;
        values: IUpdatePositionSize.DecreasePositionSizeValuesStructOutput;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PositionSizeIncreaseExecutedEvent {
    type InputTuple = [
        orderId: ITradingStorage.IdStruct,
        cancelReason: BigNumberish,
        collateralIndex: BigNumberish,
        trader: AddressLike,
        pairIndex: BigNumberish,
        index: BigNumberish,
        long: boolean,
        oraclePrice: BigNumberish,
        collateralPriceUsd: BigNumberish,
        collateralDelta: BigNumberish,
        leverageDelta: BigNumberish,
        values: IUpdatePositionSize.IncreasePositionSizeValuesStruct
    ];
    type OutputTuple = [
        orderId: ITradingStorage.IdStructOutput,
        cancelReason: bigint,
        collateralIndex: bigint,
        trader: string,
        pairIndex: bigint,
        index: bigint,
        long: boolean,
        oraclePrice: bigint,
        collateralPriceUsd: bigint,
        collateralDelta: bigint,
        leverageDelta: bigint,
        values: IUpdatePositionSize.IncreasePositionSizeValuesStructOutput
    ];
    interface OutputObject {
        orderId: ITradingStorage.IdStructOutput;
        cancelReason: bigint;
        collateralIndex: bigint;
        trader: string;
        pairIndex: bigint;
        index: bigint;
        long: boolean;
        oraclePrice: bigint;
        collateralPriceUsd: bigint;
        collateralDelta: bigint;
        leverageDelta: bigint;
        values: IUpdatePositionSize.IncreasePositionSizeValuesStructOutput;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PositionSizeUpdateInitiatedEvent {
    type InputTuple = [
        orderId: ITradingStorage.IdStruct,
        trader: AddressLike,
        pairIndex: BigNumberish,
        index: BigNumberish,
        isIncrease: boolean,
        collateralDelta: BigNumberish,
        leverageDelta: BigNumberish
    ];
    type OutputTuple = [
        orderId: ITradingStorage.IdStructOutput,
        trader: string,
        pairIndex: bigint,
        index: bigint,
        isIncrease: boolean,
        collateralDelta: bigint,
        leverageDelta: bigint
    ];
    interface OutputObject {
        orderId: ITradingStorage.IdStructOutput;
        trader: string;
        pairIndex: bigint;
        index: bigint;
        isIncrease: boolean;
        collateralDelta: bigint;
        leverageDelta: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TriggerOrderInitiatedEvent {
    type InputTuple = [
        orderId: ITradingStorage.IdStruct,
        trader: AddressLike,
        pairIndex: BigNumberish,
        byPassesLinkCost: boolean
    ];
    type OutputTuple = [
        orderId: ITradingStorage.IdStructOutput,
        trader: string,
        pairIndex: bigint,
        byPassesLinkCost: boolean
    ];
    interface OutputObject {
        orderId: ITradingStorage.IdStructOutput;
        trader: string;
        pairIndex: bigint;
        byPassesLinkCost: boolean;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace BorrowingFeeChargedEvent {
    type InputTuple = [
        trader: AddressLike,
        index: BigNumberish,
        collateralIndex: BigNumberish,
        amountCollateral: BigNumberish
    ];
    type OutputTuple = [
        trader: string,
        index: bigint,
        collateralIndex: bigint,
        amountCollateral: bigint
    ];
    interface OutputObject {
        trader: string;
        index: bigint;
        collateralIndex: bigint;
        amountCollateral: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace GTokenFeeChargedEvent {
    type InputTuple = [
        trader: AddressLike,
        collateralIndex: BigNumberish,
        amountCollateral: BigNumberish
    ];
    type OutputTuple = [
        trader: string,
        collateralIndex: bigint,
        amountCollateral: bigint
    ];
    interface OutputObject {
        trader: string;
        collateralIndex: bigint;
        amountCollateral: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace GnsOtcFeeChargedEvent {
    type InputTuple = [
        trader: AddressLike,
        collateralIndex: BigNumberish,
        amountCollateral: BigNumberish
    ];
    type OutputTuple = [
        trader: string,
        collateralIndex: bigint,
        amountCollateral: bigint
    ];
    interface OutputObject {
        trader: string;
        collateralIndex: bigint;
        amountCollateral: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace GovFeeChargedEvent {
    type InputTuple = [
        trader: AddressLike,
        collateralIndex: BigNumberish,
        amountCollateral: BigNumberish
    ];
    type OutputTuple = [
        trader: string,
        collateralIndex: bigint,
        amountCollateral: bigint
    ];
    interface OutputObject {
        trader: string;
        collateralIndex: bigint;
        amountCollateral: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace LimitExecutedEvent {
    type InputTuple = [
        orderId: ITradingStorage.IdStruct,
        user: AddressLike,
        index: BigNumberish,
        limitIndex: BigNumberish,
        t: ITradingStorage.TradeStruct,
        triggerCaller: AddressLike,
        orderType: BigNumberish,
        oraclePrice: BigNumberish,
        marketPrice: BigNumberish,
        liqPrice: BigNumberish,
        priceImpactP: BigNumberish,
        percentProfit: BigNumberish,
        amountSentToTrader: BigNumberish,
        collateralPriceUsd: BigNumberish,
        exactExecution: boolean
    ];
    type OutputTuple = [
        orderId: ITradingStorage.IdStructOutput,
        user: string,
        index: bigint,
        limitIndex: bigint,
        t: ITradingStorage.TradeStructOutput,
        triggerCaller: string,
        orderType: bigint,
        oraclePrice: bigint,
        marketPrice: bigint,
        liqPrice: bigint,
        priceImpactP: bigint,
        percentProfit: bigint,
        amountSentToTrader: bigint,
        collateralPriceUsd: bigint,
        exactExecution: boolean
    ];
    interface OutputObject {
        orderId: ITradingStorage.IdStructOutput;
        user: string;
        index: bigint;
        limitIndex: bigint;
        t: ITradingStorage.TradeStructOutput;
        triggerCaller: string;
        orderType: bigint;
        oraclePrice: bigint;
        marketPrice: bigint;
        liqPrice: bigint;
        priceImpactP: bigint;
        percentProfit: bigint;
        amountSentToTrader: bigint;
        collateralPriceUsd: bigint;
        exactExecution: boolean;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace MarketCloseCanceledEvent {
    type InputTuple = [
        orderId: ITradingStorage.IdStruct,
        trader: AddressLike,
        pairIndex: BigNumberish,
        index: BigNumberish,
        cancelReason: BigNumberish
    ];
    type OutputTuple = [
        orderId: ITradingStorage.IdStructOutput,
        trader: string,
        pairIndex: bigint,
        index: bigint,
        cancelReason: bigint
    ];
    interface OutputObject {
        orderId: ITradingStorage.IdStructOutput;
        trader: string;
        pairIndex: bigint;
        index: bigint;
        cancelReason: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace MarketExecutedEvent {
    type InputTuple = [
        orderId: ITradingStorage.IdStruct,
        user: AddressLike,
        index: BigNumberish,
        t: ITradingStorage.TradeStruct,
        open: boolean,
        oraclePrice: BigNumberish,
        marketPrice: BigNumberish,
        liqPrice: BigNumberish,
        priceImpactP: BigNumberish,
        percentProfit: BigNumberish,
        amountSentToTrader: BigNumberish,
        collateralPriceUsd: BigNumberish
    ];
    type OutputTuple = [
        orderId: ITradingStorage.IdStructOutput,
        user: string,
        index: bigint,
        t: ITradingStorage.TradeStructOutput,
        open: boolean,
        oraclePrice: bigint,
        marketPrice: bigint,
        liqPrice: bigint,
        priceImpactP: bigint,
        percentProfit: bigint,
        amountSentToTrader: bigint,
        collateralPriceUsd: bigint
    ];
    interface OutputObject {
        orderId: ITradingStorage.IdStructOutput;
        user: string;
        index: bigint;
        t: ITradingStorage.TradeStructOutput;
        open: boolean;
        oraclePrice: bigint;
        marketPrice: bigint;
        liqPrice: bigint;
        priceImpactP: bigint;
        percentProfit: bigint;
        amountSentToTrader: bigint;
        collateralPriceUsd: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace MarketOpenCanceledEvent {
    type InputTuple = [
        orderId: ITradingStorage.IdStruct,
        trader: AddressLike,
        pairIndex: BigNumberish,
        cancelReason: BigNumberish
    ];
    type OutputTuple = [
        orderId: ITradingStorage.IdStructOutput,
        trader: string,
        pairIndex: bigint,
        cancelReason: bigint
    ];
    interface OutputObject {
        orderId: ITradingStorage.IdStructOutput;
        trader: string;
        pairIndex: bigint;
        cancelReason: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PendingGovFeesClaimedEvent {
    type InputTuple = [
        collateralIndex: BigNumberish,
        amountCollateral: BigNumberish
    ];
    type OutputTuple = [collateralIndex: bigint, amountCollateral: bigint];
    interface OutputObject {
        collateralIndex: bigint;
        amountCollateral: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ReferralFeeChargedEvent {
    type InputTuple = [
        trader: AddressLike,
        collateralIndex: BigNumberish,
        amountCollateral: BigNumberish
    ];
    type OutputTuple = [
        trader: string,
        collateralIndex: bigint,
        amountCollateral: bigint
    ];
    interface OutputObject {
        trader: string;
        collateralIndex: bigint;
        amountCollateral: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TriggerFeeChargedEvent {
    type InputTuple = [
        trader: AddressLike,
        collateralIndex: BigNumberish,
        amountCollateral: BigNumberish
    ];
    type OutputTuple = [
        trader: string,
        collateralIndex: bigint,
        amountCollateral: bigint
    ];
    interface OutputObject {
        trader: string;
        collateralIndex: bigint;
        amountCollateral: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TriggerOrderCanceledEvent {
    type InputTuple = [
        orderId: ITradingStorage.IdStruct,
        triggerCaller: AddressLike,
        orderType: BigNumberish,
        cancelReason: BigNumberish
    ];
    type OutputTuple = [
        orderId: ITradingStorage.IdStructOutput,
        triggerCaller: string,
        orderType: bigint,
        cancelReason: bigint
    ];
    interface OutputObject {
        orderId: ITradingStorage.IdStructOutput;
        triggerCaller: string;
        orderType: bigint;
        cancelReason: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace VaultClosingFeePUpdatedEvent {
    type InputTuple = [valueP: BigNumberish];
    type OutputTuple = [valueP: bigint];
    interface OutputObject {
        valueP: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace BorrowingFeePerBlockCapUpdatedEvent {
    type InputTuple = [minP: BigNumberish, maxP: BigNumberish];
    type OutputTuple = [minP: bigint, maxP: bigint];
    interface OutputObject {
        minP: bigint;
        maxP: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace BorrowingGroupAccFeesUpdatedEvent {
    type InputTuple = [
        collateralIndex: BigNumberish,
        groupIndex: BigNumberish,
        currentBlock: BigNumberish,
        accFeeLong: BigNumberish,
        accFeeShort: BigNumberish
    ];
    type OutputTuple = [
        collateralIndex: bigint,
        groupIndex: bigint,
        currentBlock: bigint,
        accFeeLong: bigint,
        accFeeShort: bigint
    ];
    interface OutputObject {
        collateralIndex: bigint;
        groupIndex: bigint;
        currentBlock: bigint;
        accFeeLong: bigint;
        accFeeShort: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace BorrowingGroupOiUpdatedEvent {
    type InputTuple = [
        collateralIndex: BigNumberish,
        groupIndex: BigNumberish,
        long: boolean,
        increase: boolean,
        delta: BigNumberish,
        newOiLong: BigNumberish,
        newOiShort: BigNumberish
    ];
    type OutputTuple = [
        collateralIndex: bigint,
        groupIndex: bigint,
        long: boolean,
        increase: boolean,
        delta: bigint,
        newOiLong: bigint,
        newOiShort: bigint
    ];
    interface OutputObject {
        collateralIndex: bigint;
        groupIndex: bigint;
        long: boolean;
        increase: boolean;
        delta: bigint;
        newOiLong: bigint;
        newOiShort: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace BorrowingGroupUpdatedEvent {
    type InputTuple = [
        collateralIndex: BigNumberish,
        groupIndex: BigNumberish,
        feePerBlock: BigNumberish,
        maxOi: BigNumberish,
        feeExponent: BigNumberish
    ];
    type OutputTuple = [
        collateralIndex: bigint,
        groupIndex: bigint,
        feePerBlock: bigint,
        maxOi: bigint,
        feeExponent: bigint
    ];
    interface OutputObject {
        collateralIndex: bigint;
        groupIndex: bigint;
        feePerBlock: bigint;
        maxOi: bigint;
        feeExponent: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace BorrowingInitialAccFeesStoredEvent {
    type InputTuple = [
        collateralIndex: BigNumberish,
        trader: AddressLike,
        pairIndex: BigNumberish,
        index: BigNumberish,
        long: boolean,
        initialPairAccFee: BigNumberish,
        initialGroupAccFee: BigNumberish
    ];
    type OutputTuple = [
        collateralIndex: bigint,
        trader: string,
        pairIndex: bigint,
        index: bigint,
        long: boolean,
        initialPairAccFee: bigint,
        initialGroupAccFee: bigint
    ];
    interface OutputObject {
        collateralIndex: bigint;
        trader: string;
        pairIndex: bigint;
        index: bigint;
        long: boolean;
        initialPairAccFee: bigint;
        initialGroupAccFee: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace BorrowingPairAccFeesUpdatedEvent {
    type InputTuple = [
        collateralIndex: BigNumberish,
        pairIndex: BigNumberish,
        currentBlock: BigNumberish,
        accFeeLong: BigNumberish,
        accFeeShort: BigNumberish
    ];
    type OutputTuple = [
        collateralIndex: bigint,
        pairIndex: bigint,
        currentBlock: bigint,
        accFeeLong: bigint,
        accFeeShort: bigint
    ];
    interface OutputObject {
        collateralIndex: bigint;
        pairIndex: bigint;
        currentBlock: bigint;
        accFeeLong: bigint;
        accFeeShort: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace BorrowingPairFeePerBlockCapUpdatedEvent {
    type InputTuple = [
        collateralIndex: BigNumberish,
        pairIndex: BigNumberish,
        minP: BigNumberish,
        maxP: BigNumberish
    ];
    type OutputTuple = [
        collateralIndex: bigint,
        pairIndex: bigint,
        minP: bigint,
        maxP: bigint
    ];
    interface OutputObject {
        collateralIndex: bigint;
        pairIndex: bigint;
        minP: bigint;
        maxP: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace BorrowingPairGroupUpdatedEvent {
    type InputTuple = [
        collateralIndex: BigNumberish,
        pairIndex: BigNumberish,
        prevGroupIndex: BigNumberish,
        newGroupIndex: BigNumberish
    ];
    type OutputTuple = [
        collateralIndex: bigint,
        pairIndex: bigint,
        prevGroupIndex: bigint,
        newGroupIndex: bigint
    ];
    interface OutputObject {
        collateralIndex: bigint;
        pairIndex: bigint;
        prevGroupIndex: bigint;
        newGroupIndex: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace BorrowingPairOiUpdatedEvent {
    type InputTuple = [
        collateralIndex: BigNumberish,
        pairIndex: BigNumberish,
        long: boolean,
        increase: boolean,
        delta: BigNumberish,
        newOiLong: BigNumberish,
        newOiShort: BigNumberish
    ];
    type OutputTuple = [
        collateralIndex: bigint,
        pairIndex: bigint,
        long: boolean,
        increase: boolean,
        delta: bigint,
        newOiLong: bigint,
        newOiShort: bigint
    ];
    interface OutputObject {
        collateralIndex: bigint;
        pairIndex: bigint;
        long: boolean;
        increase: boolean;
        delta: bigint;
        newOiLong: bigint;
        newOiShort: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace BorrowingPairParamsUpdatedEvent {
    type InputTuple = [
        collateralIndex: BigNumberish,
        pairIndex: BigNumberish,
        groupIndex: BigNumberish,
        feePerBlock: BigNumberish,
        feeExponent: BigNumberish,
        maxOi: BigNumberish
    ];
    type OutputTuple = [
        collateralIndex: bigint,
        pairIndex: bigint,
        groupIndex: bigint,
        feePerBlock: bigint,
        feeExponent: bigint,
        maxOi: bigint
    ];
    interface OutputObject {
        collateralIndex: bigint;
        pairIndex: bigint;
        groupIndex: bigint;
        feePerBlock: bigint;
        feeExponent: bigint;
        maxOi: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TradeBorrowingCallbackHandledEvent {
    type InputTuple = [
        collateralIndex: BigNumberish,
        trader: AddressLike,
        pairIndex: BigNumberish,
        index: BigNumberish,
        open: boolean,
        long: boolean,
        positionSizeCollateral: BigNumberish
    ];
    type OutputTuple = [
        collateralIndex: bigint,
        trader: string,
        pairIndex: bigint,
        index: bigint,
        open: boolean,
        long: boolean,
        positionSizeCollateral: bigint
    ];
    interface OutputObject {
        collateralIndex: bigint;
        trader: string;
        pairIndex: bigint;
        index: bigint;
        open: boolean;
        long: boolean;
        positionSizeCollateral: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace CollateralGnsLiquidityPoolUpdatedEvent {
    type InputTuple = [
        collateralIndex: BigNumberish,
        newValue: IPriceAggregator.LiquidityPoolInfoStruct
    ];
    type OutputTuple = [
        collateralIndex: bigint,
        newValue: IPriceAggregator.LiquidityPoolInfoStructOutput
    ];
    interface OutputObject {
        collateralIndex: bigint;
        newValue: IPriceAggregator.LiquidityPoolInfoStructOutput;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace CollateralUsdPriceFeedUpdatedEvent {
    type InputTuple = [collateralIndex: BigNumberish, value: AddressLike];
    type OutputTuple = [collateralIndex: bigint, value: string];
    interface OutputObject {
        collateralIndex: bigint;
        value: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace JobIdUpdatedEvent {
    type InputTuple = [index: BigNumberish, jobId: BytesLike];
    type OutputTuple = [index: bigint, jobId: string];
    interface OutputObject {
        index: bigint;
        jobId: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace LimitJobCountUpdatedEvent {
    type InputTuple = [limitJobCount: BigNumberish];
    type OutputTuple = [limitJobCount: bigint];
    interface OutputObject {
        limitJobCount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace LinkClaimedBackEvent {
    type InputTuple = [amountLink: BigNumberish];
    type OutputTuple = [amountLink: bigint];
    interface OutputObject {
        amountLink: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace LinkRequestCreatedEvent {
    type InputTuple = [request: Chainlink.RequestStruct];
    type OutputTuple = [request: Chainlink.RequestStructOutput];
    interface OutputObject {
        request: Chainlink.RequestStructOutput;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace LinkUsdPriceFeedUpdatedEvent {
    type InputTuple = [value: AddressLike];
    type OutputTuple = [value: string];
    interface OutputObject {
        value: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace MaxLookbackDeviationPUpdatedEvent {
    type InputTuple = [maxLookbackDeviationP: BigNumberish];
    type OutputTuple = [maxLookbackDeviationP: bigint];
    interface OutputObject {
        maxLookbackDeviationP: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace MaxMarketDeviationPUpdatedEvent {
    type InputTuple = [maxMarketDeviationP: BigNumberish];
    type OutputTuple = [maxMarketDeviationP: bigint];
    interface OutputObject {
        maxMarketDeviationP: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace MinAnswersUpdatedEvent {
    type InputTuple = [value: BigNumberish];
    type OutputTuple = [value: bigint];
    interface OutputObject {
        value: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace OracleAddedEvent {
    type InputTuple = [index: BigNumberish, value: AddressLike];
    type OutputTuple = [index: bigint, value: string];
    interface OutputObject {
        index: bigint;
        value: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace OracleRemovedEvent {
    type InputTuple = [index: BigNumberish, oldOracle: AddressLike];
    type OutputTuple = [index: bigint, oldOracle: string];
    interface OutputObject {
        index: bigint;
        oldOracle: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace OracleReplacedEvent {
    type InputTuple = [
        index: BigNumberish,
        oldOracle: AddressLike,
        newOracle: AddressLike
    ];
    type OutputTuple = [
        index: bigint,
        oldOracle: string,
        newOracle: string
    ];
    interface OutputObject {
        index: bigint;
        oldOracle: string;
        newOracle: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PriceReceivedEvent {
    type InputTuple = [
        orderId: ITradingStorage.IdStruct,
        pairIndex: BigNumberish,
        request: BytesLike,
        priceData: BigNumberish,
        isLookback: boolean,
        usedInMedian: boolean,
        minAnswersReached: boolean,
        minFilteredAnswersReached: boolean,
        unfilteredAnswers: IPriceAggregator.OrderAnswerStruct[],
        filteredAnswers: IPriceAggregator.OrderAnswerStruct[]
    ];
    type OutputTuple = [
        orderId: ITradingStorage.IdStructOutput,
        pairIndex: bigint,
        request: string,
        priceData: bigint,
        isLookback: boolean,
        usedInMedian: boolean,
        minAnswersReached: boolean,
        minFilteredAnswersReached: boolean,
        unfilteredAnswers: IPriceAggregator.OrderAnswerStructOutput[],
        filteredAnswers: IPriceAggregator.OrderAnswerStructOutput[]
    ];
    interface OutputObject {
        orderId: ITradingStorage.IdStructOutput;
        pairIndex: bigint;
        request: string;
        priceData: bigint;
        isLookback: boolean;
        usedInMedian: boolean;
        minAnswersReached: boolean;
        minFilteredAnswersReached: boolean;
        unfilteredAnswers: IPriceAggregator.OrderAnswerStructOutput[];
        filteredAnswers: IPriceAggregator.OrderAnswerStructOutput[];
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PriceRequestedEvent {
    type InputTuple = [
        collateralIndex: BigNumberish,
        pairIndex: BigNumberish,
        pendingOrder: ITradingStorage.PendingOrderStruct,
        fromBlock: BigNumberish,
        isLookback: boolean,
        job: BytesLike,
        linkFeePerNode: BigNumberish,
        nodesCount: BigNumberish
    ];
    type OutputTuple = [
        collateralIndex: bigint,
        pairIndex: bigint,
        pendingOrder: ITradingStorage.PendingOrderStructOutput,
        fromBlock: bigint,
        isLookback: boolean,
        job: string,
        linkFeePerNode: bigint,
        nodesCount: bigint
    ];
    interface OutputObject {
        collateralIndex: bigint;
        pairIndex: bigint;
        pendingOrder: ITradingStorage.PendingOrderStructOutput;
        fromBlock: bigint;
        isLookback: boolean;
        job: string;
        linkFeePerNode: bigint;
        nodesCount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TradingCallbackExecutedEvent {
    type InputTuple = [
        a: ITradingCallbacks.AggregatorAnswerStruct,
        orderType: BigNumberish
    ];
    type OutputTuple = [
        a: ITradingCallbacks.AggregatorAnswerStructOutput,
        orderType: bigint
    ];
    interface OutputObject {
        a: ITradingCallbacks.AggregatorAnswerStructOutput;
        orderType: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TwapIntervalUpdatedEvent {
    type InputTuple = [newValue: BigNumberish];
    type OutputTuple = [newValue: bigint];
    interface OutputObject {
        newValue: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace OtcBalanceUpdatedEvent {
    type InputTuple = [
        collateralIndex: BigNumberish,
        balanceCollateral: BigNumberish
    ];
    type OutputTuple = [
        collateralIndex: bigint,
        balanceCollateral: bigint
    ];
    interface OutputObject {
        collateralIndex: bigint;
        balanceCollateral: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace OtcConfigUpdatedEvent {
    type InputTuple = [config: IOtc.OtcConfigStruct];
    type OutputTuple = [config: IOtc.OtcConfigStructOutput];
    interface OutputObject {
        config: IOtc.OtcConfigStructOutput;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace OtcExecutedEvent {
    type InputTuple = [
        collateralIndex: BigNumberish,
        collateralAmount: BigNumberish,
        gnsPriceCollateral: BigNumberish,
        treasuryAmountGns: BigNumberish,
        stakingAmountGns: BigNumberish,
        burnAmountGns: BigNumberish
    ];
    type OutputTuple = [
        collateralIndex: bigint,
        collateralAmount: bigint,
        gnsPriceCollateral: bigint,
        treasuryAmountGns: bigint,
        stakingAmountGns: bigint,
        burnAmountGns: bigint
    ];
    interface OutputObject {
        collateralIndex: bigint;
        collateralAmount: bigint;
        gnsPriceCollateral: bigint;
        treasuryAmountGns: bigint;
        stakingAmountGns: bigint;
        burnAmountGns: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace NativeTransferEnabledUpdatedEvent {
    type InputTuple = [enabled: boolean];
    type OutputTuple = [enabled: boolean];
    interface OutputObject {
        enabled: boolean;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace NativeTransferGasLimitUpdatedEvent {
    type InputTuple = [newLimit: BigNumberish];
    type OutputTuple = [newLimit: bigint];
    interface OutputObject {
        newLimit: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface GNSDiamond extends BaseContract {
    connect(runner?: ContractRunner | null): GNSDiamond;
    waitForDeployment(): Promise<this>;
    interface: GNSDiamondInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    diamondCut: TypedContractMethod<[
        _faceCut: IDiamondStorage.FacetCutStruct[],
        _init: AddressLike,
        _calldata: BytesLike
    ], [
        void
    ], "nonpayable">;
    facetAddress: TypedContractMethod<[
        _functionSelector: BytesLike
    ], [
        string
    ], "view">;
    facetAddresses: TypedContractMethod<[], [string[]], "view">;
    facetFunctionSelectors: TypedContractMethod<[
        _facet: AddressLike
    ], [
        string[]
    ], "view">;
    facets: TypedContractMethod<[
    ], [
        IGNSDiamondLoupe.FacetStructOutput[]
    ], "view">;
    getAddresses: TypedContractMethod<[
    ], [
        IAddressStore.AddressesStructOutput
    ], "view">;
    hasRole: TypedContractMethod<[
        _account: AddressLike,
        _role: BigNumberish
    ], [
        boolean
    ], "view">;
    hasRoles: TypedContractMethod<[
        _account: AddressLike,
        _roleA: BigNumberish,
        _roleB: BigNumberish
    ], [
        boolean
    ], "view">;
    initialize: TypedContractMethod<[
        _govTimelock: AddressLike
    ], [
        void
    ], "nonpayable">;
    setRoles: TypedContractMethod<[
        _accounts: AddressLike[],
        _roles: BigNumberish[],
        _values: boolean[]
    ], [
        void
    ], "nonpayable">;
    addFees: TypedContractMethod<[
        _fees: IPairsStorage.FeeGroupStruct[]
    ], [
        void
    ], "nonpayable">;
    addGroups: TypedContractMethod<[
        _groups: IPairsStorage.GroupStruct[]
    ], [
        void
    ], "nonpayable">;
    addPairs: TypedContractMethod<[
        _pairs: IPairsStorage.PairStruct[]
    ], [
        void
    ], "nonpayable">;
    fees: TypedContractMethod<[
        _index: BigNumberish
    ], [
        IPairsStorage.FeeGroupStructOutput
    ], "view">;
    feesCount: TypedContractMethod<[], [bigint], "view">;
    getAllPairsRestrictedMaxLeverage: TypedContractMethod<[], [bigint[]], "view">;
    getGlobalTradeFeeParams: TypedContractMethod<[
    ], [
        IPairsStorage.GlobalTradeFeeParamsStructOutput
    ], "view">;
    getGroupLiquidationParams: TypedContractMethod<[
        _groupIndex: BigNumberish
    ], [
        IPairsStorage.GroupLiquidationParamsStructOutput
    ], "view">;
    getPairLiquidationParams: TypedContractMethod<[
        _pairIndex: BigNumberish
    ], [
        IPairsStorage.GroupLiquidationParamsStructOutput
    ], "view">;
    groups: TypedContractMethod<[
        _index: BigNumberish
    ], [
        IPairsStorage.GroupStructOutput
    ], "view">;
    groupsCount: TypedContractMethod<[], [bigint], "view">;
    initializeGroupLiquidationParams: TypedContractMethod<[
        _groupLiquidationParams: IPairsStorage.GroupLiquidationParamsStruct[]
    ], [
        void
    ], "nonpayable">;
    initializeNewFees: TypedContractMethod<[
        _tradeFeeParams: IPairsStorage.GlobalTradeFeeParamsStruct
    ], [
        void
    ], "nonpayable">;
    initializeReferralFeeChange: TypedContractMethod<[], [void], "nonpayable">;
    isPairIndexListed: TypedContractMethod<[
        _pairIndex: BigNumberish
    ], [
        boolean
    ], "view">;
    isPairListed: TypedContractMethod<[
        _from: string,
        _to: string
    ], [
        boolean
    ], "view">;
    pairCustomMaxLeverage: TypedContractMethod<[
        _pairIndex: BigNumberish
    ], [
        bigint
    ], "view">;
    pairJob: TypedContractMethod<[
        _pairIndex: BigNumberish
    ], [
        [string, string]
    ], "view">;
    pairMaxLeverage: TypedContractMethod<[
        _pairIndex: BigNumberish
    ], [
        bigint
    ], "view">;
    pairMinFeeUsd: TypedContractMethod<[
        _pairIndex: BigNumberish
    ], [
        bigint
    ], "view">;
    pairMinLeverage: TypedContractMethod<[
        _pairIndex: BigNumberish
    ], [
        bigint
    ], "view">;
    pairMinPositionSizeUsd: TypedContractMethod<[
        _pairIndex: BigNumberish
    ], [
        bigint
    ], "view">;
    pairOraclePositionSizeFeeP: TypedContractMethod<[
        _pairIndex: BigNumberish
    ], [
        bigint
    ], "view">;
    pairSpreadP: TypedContractMethod<[
        _trader: AddressLike,
        _pairIndex: BigNumberish
    ], [
        bigint
    ], "view">;
    pairSpreadPArray: TypedContractMethod<[
        _trader: AddressLike[],
        _pairIndex: BigNumberish[]
    ], [
        bigint[]
    ], "view">;
    pairTotalLiqCollateralFeeP: TypedContractMethod<[
        _pairIndex: BigNumberish
    ], [
        bigint
    ], "view">;
    pairTotalPositionSizeFeeP: TypedContractMethod<[
        _pairIndex: BigNumberish
    ], [
        bigint
    ], "view">;
    pairs: TypedContractMethod<[
        _index: BigNumberish
    ], [
        IPairsStorage.PairStructOutput
    ], "view">;
    pairsCount: TypedContractMethod<[], [bigint], "view">;
    setGlobalTradeFeeParams: TypedContractMethod<[
        _feeParams: IPairsStorage.GlobalTradeFeeParamsStruct
    ], [
        void
    ], "nonpayable">;
    setGroupLiquidationParams: TypedContractMethod<[
        _groupIndex: BigNumberish,
        _params: IPairsStorage.GroupLiquidationParamsStruct
    ], [
        void
    ], "nonpayable">;
    setPairCustomMaxLeverages: TypedContractMethod<[
        _indices: BigNumberish[],
        _values: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    updateFees: TypedContractMethod<[
        _ids: BigNumberish[],
        _fees: IPairsStorage.FeeGroupStruct[]
    ], [
        void
    ], "nonpayable">;
    updateGroups: TypedContractMethod<[
        _ids: BigNumberish[],
        _groups: IPairsStorage.GroupStruct[]
    ], [
        void
    ], "nonpayable">;
    updatePairs: TypedContractMethod<[
        _pairIndices: BigNumberish[],
        _pairs: IPairsStorage.PairStruct[]
    ], [
        void
    ], "nonpayable">;
    claimAllyRewards: TypedContractMethod<[], [void], "nonpayable">;
    claimReferrerRewards: TypedContractMethod<[], [void], "nonpayable">;
    distributeReferralReward: TypedContractMethod<[
        _trader: AddressLike,
        _volumeUsd: BigNumberish,
        _referrerFeeUsd: BigNumberish,
        _gnsPriceUsd: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getAllyDetails: TypedContractMethod<[
        _ally: AddressLike
    ], [
        IReferrals.AllyDetailsStructOutput
    ], "view">;
    getReferralSettingsOverrides: TypedContractMethod<[
        _address: AddressLike
    ], [
        IReferrals.ReferralSettingsOverridesStructOutput
    ], "view">;
    getReferralsAllyFeeP: TypedContractMethod<[], [bigint], "view">;
    getReferralsStartReferrerFeeP: TypedContractMethod<[], [bigint], "view">;
    getReferralsTargetVolumeUsd: TypedContractMethod<[], [bigint], "view">;
    getReferrerDetails: TypedContractMethod<[
        _referrer: AddressLike
    ], [
        IReferrals.ReferrerDetailsStructOutput
    ], "view">;
    getReferrerFeeProgressP: TypedContractMethod<[
        _referrer: AddressLike
    ], [
        bigint
    ], "view">;
    getReferrersReferred: TypedContractMethod<[
        _ally: AddressLike
    ], [
        string[]
    ], "view">;
    getTraderActiveReferrer: TypedContractMethod<[
        _trader: AddressLike
    ], [
        string
    ], "view">;
    getTraderLastReferrer: TypedContractMethod<[
        _trader: AddressLike
    ], [
        string
    ], "view">;
    getTradersReferred: TypedContractMethod<[
        _referrer: AddressLike
    ], [
        string[]
    ], "view">;
    initializeReferrals: TypedContractMethod<[
        _allyFeeP: BigNumberish,
        _startReferrerFeeP: BigNumberish,
        _targetVolumeUsd: BigNumberish
    ], [
        void
    ], "nonpayable">;
    overrideAllyFeeP: TypedContractMethod<[
        _allies: AddressLike[],
        _allyFeeP: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    overrideReferralFeeP: TypedContractMethod<[
        _referrers: AddressLike[],
        _referralFeeP: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    registerPotentialReferrer: TypedContractMethod<[
        _trader: AddressLike,
        _referrer: AddressLike
    ], [
        void
    ], "nonpayable">;
    unwhitelistAllies: TypedContractMethod<[
        _allies: AddressLike[]
    ], [
        void
    ], "nonpayable">;
    unwhitelistReferrers: TypedContractMethod<[
        _referrers: AddressLike[]
    ], [
        void
    ], "nonpayable">;
    updateAllyFeeP: TypedContractMethod<[
        _value: BigNumberish
    ], [
        void
    ], "nonpayable">;
    updateReferralsTargetVolumeUsd: TypedContractMethod<[
        _value: BigNumberish
    ], [
        void
    ], "nonpayable">;
    updateStartReferrerFeeP: TypedContractMethod<[
        _value: BigNumberish
    ], [
        void
    ], "nonpayable">;
    whitelistAllies: TypedContractMethod<[
        _allies: AddressLike[]
    ], [
        void
    ], "nonpayable">;
    whitelistReferrers: TypedContractMethod<[
        _referrers: AddressLike[],
        _allies: AddressLike[]
    ], [
        void
    ], "nonpayable">;
    addTradersUnclaimedPoints: TypedContractMethod<[
        _traders: AddressLike[],
        _creditTypes: BigNumberish[],
        _points: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    calculateFeeAmount: TypedContractMethod<[
        _trader: AddressLike,
        _normalFeeAmountCollateral: BigNumberish
    ], [
        bigint
    ], "view">;
    getFeeTier: TypedContractMethod<[
        _feeTierIndex: BigNumberish
    ], [
        IFeeTiers.FeeTierStructOutput
    ], "view">;
    getFeeTiersCount: TypedContractMethod<[], [bigint], "view">;
    getFeeTiersTraderDailyInfo: TypedContractMethod<[
        _trader: AddressLike,
        _day: BigNumberish
    ], [
        IFeeTiers.TraderDailyInfoStructOutput
    ], "view">;
    getFeeTiersTraderInfo: TypedContractMethod<[
        _trader: AddressLike
    ], [
        IFeeTiers.TraderInfoStructOutput
    ], "view">;
    getGroupVolumeMultiplier: TypedContractMethod<[
        _groupIndex: BigNumberish
    ], [
        bigint
    ], "view">;
    getTraderFeeTiersEnrollment: TypedContractMethod<[
        _trader: AddressLike
    ], [
        IFeeTiers.TraderEnrollmentStructOutput
    ], "view">;
    getTraderUnclaimedPoints: TypedContractMethod<[
        _trader: AddressLike
    ], [
        bigint
    ], "view">;
    initializeFeeTiers: TypedContractMethod<[
        _groupIndices: BigNumberish[],
        _groupVolumeMultipliers: BigNumberish[],
        _feeTiersIndices: BigNumberish[],
        _feeTiers: IFeeTiers.FeeTierStruct[]
    ], [
        void
    ], "nonpayable">;
    setFeeTiers: TypedContractMethod<[
        _feeTiersIndices: BigNumberish[],
        _feeTiers: IFeeTiers.FeeTierStruct[]
    ], [
        void
    ], "nonpayable">;
    setGroupVolumeMultipliers: TypedContractMethod<[
        _groupIndices: BigNumberish[],
        _groupVolumeMultipliers: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    setTradersFeeTiersEnrollment: TypedContractMethod<[
        _traders: AddressLike[],
        _values: IFeeTiers.TraderEnrollmentStruct[]
    ], [
        void
    ], "nonpayable">;
    updateTraderPoints: TypedContractMethod<[
        _trader: AddressLike,
        _volumeUsd: BigNumberish,
        _pairIndex: BigNumberish
    ], [
        void
    ], "nonpayable">;
    addPriceImpactOpenInterest: TypedContractMethod<[
        _trader: AddressLike,
        _index: BigNumberish,
        _oiDeltaCollateral: BigNumberish,
        _open: boolean,
        _isPnlPositive: boolean
    ], [
        void
    ], "nonpayable">;
    getNegPnlCumulVolMultiplier: TypedContractMethod<[], [bigint], "view">;
    getOiWindow: TypedContractMethod<[
        _windowsDuration: BigNumberish,
        _pairIndex: BigNumberish,
        _windowId: BigNumberish
    ], [
        IPriceImpact.PairOiStructOutput
    ], "view">;
    getOiWindows: TypedContractMethod<[
        _windowsDuration: BigNumberish,
        _pairIndex: BigNumberish,
        _windowIds: BigNumberish[]
    ], [
        IPriceImpact.PairOiStructOutput[]
    ], "view">;
    getOiWindowsSettings: TypedContractMethod<[
    ], [
        IPriceImpact.OiWindowsSettingsStructOutput
    ], "view">;
    getPairDepth: TypedContractMethod<[
        _pairIndex: BigNumberish
    ], [
        IPriceImpact.PairDepthStructOutput
    ], "view">;
    getPairDepths: TypedContractMethod<[
        _indices: BigNumberish[]
    ], [
        IPriceImpact.PairDepthStructOutput[]
    ], "view">;
    getPairFactors: TypedContractMethod<[
        _indices: BigNumberish[]
    ], [
        IPriceImpact.PairFactorsStructOutput[]
    ], "view">;
    getPriceImpactOi: TypedContractMethod<[
        _pairIndex: BigNumberish,
        _long: boolean
    ], [
        bigint
    ], "view">;
    getProtectionCloseFactorWhitelist: TypedContractMethod<[
        _trader: AddressLike
    ], [
        boolean
    ], "view">;
    getTradePriceImpact: TypedContractMethod<[
        _trader: AddressLike,
        _marketPrice: BigNumberish,
        _pairIndex: BigNumberish,
        _long: boolean,
        _tradeOpenInterestUsd: BigNumberish,
        _isPnlPositive: boolean,
        _open: boolean,
        _lastPosIncreaseBlock: BigNumberish,
        _contractsVersion: BigNumberish
    ], [
        [bigint, bigint] & {
            priceImpactP: bigint;
            priceAfterImpact: bigint;
        }
    ], "view">;
    getUserPriceImpact: TypedContractMethod<[
        _trader: AddressLike,
        _pairIndex: BigNumberish
    ], [
        IPriceImpact.UserPriceImpactStructOutput
    ], "view">;
    initializeNegPnlCumulVolMultiplier: TypedContractMethod<[
        _negPnlCumulVolMultiplier: BigNumberish
    ], [
        void
    ], "nonpayable">;
    initializePairFactors: TypedContractMethod<[
        _pairIndices: BigNumberish[],
        _protectionCloseFactors: BigNumberish[],
        _protectionCloseFactorBlocks: BigNumberish[],
        _cumulativeFactors: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    initializePriceImpact: TypedContractMethod<[
        _windowsDuration: BigNumberish,
        _windowsCount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setCumulativeFactors: TypedContractMethod<[
        _pairIndices: BigNumberish[],
        _cumulativeFactors: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    setExemptAfterProtectionCloseFactor: TypedContractMethod<[
        _pairIndices: BigNumberish[],
        _exemptAfterProtectionCloseFactor: boolean[]
    ], [
        void
    ], "nonpayable">;
    setExemptOnOpen: TypedContractMethod<[
        _pairIndices: BigNumberish[],
        _exemptOnOpen: boolean[]
    ], [
        void
    ], "nonpayable">;
    setNegPnlCumulVolMultiplier: TypedContractMethod<[
        _negPnlCumulVolMultiplier: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setPairDepths: TypedContractMethod<[
        _indices: BigNumberish[],
        _depthsAboveUsd: BigNumberish[],
        _depthsBelowUsd: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    setPriceImpactWindowsCount: TypedContractMethod<[
        _newWindowsCount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setPriceImpactWindowsDuration: TypedContractMethod<[
        _newWindowsDuration: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setProtectionCloseFactorBlocks: TypedContractMethod<[
        _pairIndices: BigNumberish[],
        _protectionCloseFactorBlocks: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    setProtectionCloseFactorWhitelist: TypedContractMethod<[
        _traders: AddressLike[],
        _whitelisted: boolean[]
    ], [
        void
    ], "nonpayable">;
    setProtectionCloseFactors: TypedContractMethod<[
        _pairIndices: BigNumberish[],
        _protectionCloseFactors: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    setUserPriceImpact: TypedContractMethod<[
        _traders: AddressLike[],
        _pairIndices: BigNumberish[],
        _cumulVolPriceImpactMultipliers: BigNumberish[],
        _fixedSpreadPs: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    addCollateral: TypedContractMethod<[
        _collateral: AddressLike,
        _gToken: AddressLike
    ], [
        void
    ], "nonpayable">;
    closePendingOrder: TypedContractMethod<[
        _orderId: ITradingStorage.IdStruct
    ], [
        void
    ], "nonpayable">;
    closeTrade: TypedContractMethod<[
        _tradeId: ITradingStorage.IdStruct,
        _isPnlPositive: boolean
    ], [
        void
    ], "nonpayable">;
    getAllPendingOrders: TypedContractMethod<[
        _offset: BigNumberish,
        _limit: BigNumberish
    ], [
        ITradingStorage.PendingOrderStructOutput[]
    ], "view">;
    getAllPendingOrdersForTraders: TypedContractMethod<[
        _traders: AddressLike[],
        _offset: BigNumberish,
        _limit: BigNumberish
    ], [
        ITradingStorage.PendingOrderStructOutput[]
    ], "view">;
    getAllTradeInfos: TypedContractMethod<[
        _offset: BigNumberish,
        _limit: BigNumberish
    ], [
        ITradingStorage.TradeInfoStructOutput[]
    ], "view">;
    getAllTradeInfosForTraders: TypedContractMethod<[
        _traders: AddressLike[],
        _offset: BigNumberish,
        _limit: BigNumberish
    ], [
        ITradingStorage.TradeInfoStructOutput[]
    ], "view">;
    getAllTrades: TypedContractMethod<[
        _offset: BigNumberish,
        _limit: BigNumberish
    ], [
        ITradingStorage.TradeStructOutput[]
    ], "view">;
    getAllTradesForTraders: TypedContractMethod<[
        _traders: AddressLike[],
        _offset: BigNumberish,
        _limit: BigNumberish
    ], [
        ITradingStorage.TradeStructOutput[]
    ], "view">;
    getAllTradesLiquidationParams: TypedContractMethod<[
        _offset: BigNumberish,
        _limit: BigNumberish
    ], [
        IPairsStorage.GroupLiquidationParamsStructOutput[]
    ], "view">;
    getAllTradesLiquidationParamsForTraders: TypedContractMethod<[
        _traders: AddressLike[],
        _offset: BigNumberish,
        _limit: BigNumberish
    ], [
        IPairsStorage.GroupLiquidationParamsStructOutput[]
    ], "view">;
    getCollateral: TypedContractMethod<[
        _index: BigNumberish
    ], [
        ITradingStorage.CollateralStructOutput
    ], "view">;
    getCollateralIndex: TypedContractMethod<[
        _collateral: AddressLike
    ], [
        bigint
    ], "view">;
    getCollaterals: TypedContractMethod<[
    ], [
        ITradingStorage.CollateralStructOutput[]
    ], "view">;
    getCollateralsCount: TypedContractMethod<[], [bigint], "view">;
    getCounters: TypedContractMethod<[
        _trader: AddressLike,
        _type: BigNumberish
    ], [
        ITradingStorage.CounterStructOutput
    ], "view">;
    getCountersForTraders: TypedContractMethod<[
        _traders: AddressLike[],
        _type: BigNumberish
    ], [
        ITradingStorage.CounterStructOutput[]
    ], "view">;
    getCurrentContractsVersion: TypedContractMethod<[], [bigint], "view">;
    getGToken: TypedContractMethod<[
        _collateralIndex: BigNumberish
    ], [
        string
    ], "view">;
    getGnsCollateralIndex: TypedContractMethod<[], [bigint], "view">;
    getPendingOrder: TypedContractMethod<[
        _orderId: ITradingStorage.IdStruct
    ], [
        ITradingStorage.PendingOrderStructOutput
    ], "view">;
    getPendingOrders: TypedContractMethod<[
        _user: AddressLike
    ], [
        ITradingStorage.PendingOrderStructOutput[]
    ], "view">;
    getTrade: TypedContractMethod<[
        _trader: AddressLike,
        _index: BigNumberish
    ], [
        ITradingStorage.TradeStructOutput
    ], "view">;
    getTradeInfo: TypedContractMethod<[
        _trader: AddressLike,
        _index: BigNumberish
    ], [
        ITradingStorage.TradeInfoStructOutput
    ], "view">;
    getTradeInfos: TypedContractMethod<[
        _trader: AddressLike
    ], [
        ITradingStorage.TradeInfoStructOutput[]
    ], "view">;
    getTradeLiquidationParams: TypedContractMethod<[
        _trader: AddressLike,
        _index: BigNumberish
    ], [
        IPairsStorage.GroupLiquidationParamsStructOutput
    ], "view">;
    getTradePendingOrderBlock: TypedContractMethod<[
        _tradeId: ITradingStorage.IdStruct,
        _orderType: BigNumberish
    ], [
        bigint
    ], "view">;
    getTraderStored: TypedContractMethod<[
        _trader: AddressLike
    ], [
        boolean
    ], "view">;
    getTraders: TypedContractMethod<[
        _offset: BigNumberish,
        _limit: BigNumberish
    ], [
        string[]
    ], "view">;
    getTradersCount: TypedContractMethod<[], [bigint], "view">;
    getTrades: TypedContractMethod<[
        _trader: AddressLike
    ], [
        ITradingStorage.TradeStructOutput[]
    ], "view">;
    getTradesLiquidationParams: TypedContractMethod<[
        _trader: AddressLike
    ], [
        IPairsStorage.GroupLiquidationParamsStructOutput[]
    ], "view">;
    getTradingActivated: TypedContractMethod<[], [bigint], "view">;
    initializeTradingStorage: TypedContractMethod<[
        _gns: AddressLike,
        _gnsStaking: AddressLike,
        _collaterals: AddressLike[],
        _gTokens: AddressLike[]
    ], [
        void
    ], "nonpayable">;
    isCollateralActive: TypedContractMethod<[
        _index: BigNumberish
    ], [
        boolean
    ], "view">;
    isCollateralGns: TypedContractMethod<[
        _index: BigNumberish
    ], [
        boolean
    ], "view">;
    isCollateralListed: TypedContractMethod<[
        _index: BigNumberish
    ], [
        boolean
    ], "view">;
    storePendingOrder: TypedContractMethod<[
        _pendingOrder: ITradingStorage.PendingOrderStruct
    ], [
        ITradingStorage.PendingOrderStructOutput
    ], "nonpayable">;
    storeTrade: TypedContractMethod<[
        _trade: ITradingStorage.TradeStruct,
        _tradeInfo: ITradingStorage.TradeInfoStruct
    ], [
        ITradingStorage.TradeStructOutput
    ], "nonpayable">;
    toggleCollateralActiveState: TypedContractMethod<[
        _collateralIndex: BigNumberish
    ], [
        void
    ], "nonpayable">;
    updateGToken: TypedContractMethod<[
        _collateral: AddressLike,
        _gToken: AddressLike
    ], [
        void
    ], "nonpayable">;
    updateOpenOrderDetails: TypedContractMethod<[
        _tradeId: ITradingStorage.IdStruct,
        _openPrice: BigNumberish,
        _tp: BigNumberish,
        _sl: BigNumberish,
        _maxSlippageP: BigNumberish
    ], [
        void
    ], "nonpayable">;
    updateTradeCollateralAmount: TypedContractMethod<[
        _tradeId: ITradingStorage.IdStruct,
        _collateralAmount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    updateTradeMaxClosingSlippageP: TypedContractMethod<[
        _tradeId: ITradingStorage.IdStruct,
        _maxSlippageP: BigNumberish
    ], [
        void
    ], "nonpayable">;
    updateTradePosition: TypedContractMethod<[
        _tradeId: ITradingStorage.IdStruct,
        _collateralAmount: BigNumberish,
        _leverage: BigNumberish,
        _openPrice: BigNumberish,
        _isPartialIncrease: boolean,
        _isPnlPositive: boolean
    ], [
        void
    ], "nonpayable">;
    updateTradeSl: TypedContractMethod<[
        _tradeId: ITradingStorage.IdStruct,
        _newSl: BigNumberish
    ], [
        void
    ], "nonpayable">;
    updateTradeTp: TypedContractMethod<[
        _tradeId: ITradingStorage.IdStruct,
        _newTp: BigNumberish
    ], [
        void
    ], "nonpayable">;
    updateTradingActivated: TypedContractMethod<[
        _activated: BigNumberish
    ], [
        void
    ], "nonpayable">;
    claimPendingTriggerRewards: TypedContractMethod<[
        _oracle: AddressLike
    ], [
        void
    ], "nonpayable">;
    distributeTriggerReward: TypedContractMethod<[
        _rewardGns: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getTriggerPendingRewardsGns: TypedContractMethod<[
        _oracle: AddressLike
    ], [
        bigint
    ], "view">;
    getTriggerTimeoutBlocks: TypedContractMethod<[], [bigint], "view">;
    hasActiveOrder: TypedContractMethod<[
        _orderBlock: BigNumberish
    ], [
        boolean
    ], "view">;
    initializeTriggerRewards: TypedContractMethod<[
        _timeoutBlocks: BigNumberish
    ], [
        void
    ], "nonpayable">;
    updateTriggerTimeoutBlocks: TypedContractMethod<[
        _timeoutBlocks: BigNumberish
    ], [
        void
    ], "nonpayable">;
    cancelOpenOrder: TypedContractMethod<[
        _index: BigNumberish
    ], [
        void
    ], "nonpayable">;
    cancelOrderAfterTimeout: TypedContractMethod<[
        _orderIndex: BigNumberish
    ], [
        void
    ], "nonpayable">;
    closeTradeMarket: TypedContractMethod<[
        _index: BigNumberish,
        _expectedPrice: BigNumberish
    ], [
        void
    ], "nonpayable">;
    decreasePositionSize: TypedContractMethod<[
        _index: BigNumberish,
        _collateralDelta: BigNumberish,
        _leverageDelta: BigNumberish,
        _expectedPrice: BigNumberish
    ], [
        void
    ], "nonpayable">;
    delegatedTradingAction: TypedContractMethod<[
        _trader: AddressLike,
        _callData: BytesLike
    ], [
        string
    ], "nonpayable">;
    getByPassTriggerLink: TypedContractMethod<[
        _user: AddressLike
    ], [
        boolean
    ], "view">;
    getMarketOrdersTimeoutBlocks: TypedContractMethod<[], [bigint], "view">;
    getTradingDelegate: TypedContractMethod<[
        _trader: AddressLike
    ], [
        string
    ], "view">;
    getWrappedNativeToken: TypedContractMethod<[], [string], "view">;
    increasePositionSize: TypedContractMethod<[
        _index: BigNumberish,
        _collateralDelta: BigNumberish,
        _leverageDelta: BigNumberish,
        _expectedPrice: BigNumberish,
        _maxSlippageP: BigNumberish
    ], [
        void
    ], "nonpayable">;
    increasePositionSizeNative: TypedContractMethod<[
        _index: BigNumberish,
        _collateralDelta: BigNumberish,
        _leverageDelta: BigNumberish,
        _expectedPrice: BigNumberish,
        _maxSlippageP: BigNumberish
    ], [
        void
    ], "payable">;
    initializeTrading: TypedContractMethod<[
        _marketOrdersTimeoutBlocks: BigNumberish,
        _usersByPassTriggerLink: AddressLike[]
    ], [
        void
    ], "nonpayable">;
    isWrappedNativeToken: TypedContractMethod<[
        _token: AddressLike
    ], [
        boolean
    ], "view">;
    openTrade: TypedContractMethod<[
        _trade: ITradingStorage.TradeStruct,
        _maxSlippageP: BigNumberish,
        _referrer: AddressLike
    ], [
        void
    ], "nonpayable">;
    openTradeNative: TypedContractMethod<[
        _trade: ITradingStorage.TradeStruct,
        _maxSlippageP: BigNumberish,
        _referrer: AddressLike
    ], [
        void
    ], "payable">;
    removeTradingDelegate: TypedContractMethod<[], [void], "nonpayable">;
    setTradingDelegate: TypedContractMethod<[
        _delegate: AddressLike
    ], [
        void
    ], "nonpayable">;
    triggerOrder: TypedContractMethod<[
        _packed: BigNumberish
    ], [
        void
    ], "nonpayable">;
    updateByPassTriggerLink: TypedContractMethod<[
        _users: AddressLike[],
        _shouldByPass: boolean[]
    ], [
        void
    ], "nonpayable">;
    updateLeverage: TypedContractMethod<[
        _index: BigNumberish,
        _newLeverage: BigNumberish
    ], [
        void
    ], "nonpayable">;
    updateLeverageNative: TypedContractMethod<[
        _index: BigNumberish,
        _newLeverage: BigNumberish
    ], [
        void
    ], "payable">;
    updateMarketOrdersTimeoutBlocks: TypedContractMethod<[
        _valueBlocks: BigNumberish
    ], [
        void
    ], "nonpayable">;
    updateMaxClosingSlippageP: TypedContractMethod<[
        _index: BigNumberish,
        _maxSlippageP: BigNumberish
    ], [
        void
    ], "nonpayable">;
    updateOpenOrder: TypedContractMethod<[
        _index: BigNumberish,
        _triggerPrice: BigNumberish,
        _tp: BigNumberish,
        _sl: BigNumberish,
        _maxSlippageP: BigNumberish
    ], [
        void
    ], "nonpayable">;
    updateSl: TypedContractMethod<[
        _index: BigNumberish,
        _newSl: BigNumberish
    ], [
        void
    ], "nonpayable">;
    updateTp: TypedContractMethod<[
        _index: BigNumberish,
        _newTp: BigNumberish
    ], [
        void
    ], "nonpayable">;
    claimPendingGovFees: TypedContractMethod<[], [void], "nonpayable">;
    closeTradeMarketCallback: TypedContractMethod<[
        _a: ITradingCallbacks.AggregatorAnswerStruct
    ], [
        void
    ], "nonpayable">;
    decreasePositionSizeMarketCallback: TypedContractMethod<[
        _a: ITradingCallbacks.AggregatorAnswerStruct
    ], [
        void
    ], "nonpayable">;
    executeTriggerCloseOrderCallback: TypedContractMethod<[
        _a: ITradingCallbacks.AggregatorAnswerStruct
    ], [
        void
    ], "nonpayable">;
    executeTriggerOpenOrderCallback: TypedContractMethod<[
        _a: ITradingCallbacks.AggregatorAnswerStruct
    ], [
        void
    ], "nonpayable">;
    getPendingGovFeesCollateral: TypedContractMethod<[
        _collateralIndex: BigNumberish
    ], [
        bigint
    ], "view">;
    getVaultClosingFeeP: TypedContractMethod<[], [bigint], "view">;
    increasePositionSizeMarketCallback: TypedContractMethod<[
        _a: ITradingCallbacks.AggregatorAnswerStruct
    ], [
        void
    ], "nonpayable">;
    initializeCallbacks: TypedContractMethod<[
        _vaultClosingFeeP: BigNumberish
    ], [
        void
    ], "nonpayable">;
    initializeTreasuryAddress: TypedContractMethod<[
        _treasury: AddressLike
    ], [
        void
    ], "nonpayable">;
    openTradeMarketCallback: TypedContractMethod<[
        _a: ITradingCallbacks.AggregatorAnswerStruct
    ], [
        void
    ], "nonpayable">;
    updateLeverageCallback: TypedContractMethod<[
        _a: ITradingCallbacks.AggregatorAnswerStruct
    ], [
        void
    ], "nonpayable">;
    updateTreasuryAddress: TypedContractMethod<[
        _treasury: AddressLike
    ], [
        void
    ], "nonpayable">;
    updateVaultClosingFeeP: TypedContractMethod<[
        _valueP: BigNumberish
    ], [
        void
    ], "nonpayable">;
    validateTriggerCloseOrderCallback: TypedContractMethod<[
        _tradeId: ITradingStorage.IdStruct,
        _orderType: BigNumberish,
        _open: BigNumberish,
        _high: BigNumberish,
        _low: BigNumberish
    ], [
        [
            ITradingStorage.TradeStructOutput,
            bigint,
            ITradingCallbacks.ValuesStructOutput
        ] & {
            t: ITradingStorage.TradeStructOutput;
            cancelReason: bigint;
            v: ITradingCallbacks.ValuesStructOutput;
        }
    ], "view">;
    validateTriggerOpenOrderCallback: TypedContractMethod<[
        _tradeId: ITradingStorage.IdStruct,
        _orderType: BigNumberish,
        _open: BigNumberish,
        _high: BigNumberish,
        _low: BigNumberish
    ], [
        [
            ITradingStorage.TradeStructOutput,
            bigint,
            ITradingCallbacks.ValuesStructOutput
        ] & {
            t: ITradingStorage.TradeStructOutput;
            cancelReason: bigint;
            v: ITradingCallbacks.ValuesStructOutput;
        }
    ], "view">;
    getAllBorrowingPairs: TypedContractMethod<[
        _collateralIndex: BigNumberish
    ], [
        [
            IBorrowingFees.BorrowingDataStructOutput[],
            IBorrowingFees.OpenInterestStructOutput[],
            IBorrowingFees.BorrowingPairGroupStructOutput[][]
        ]
    ], "view">;
    getBorrowingFeePerBlockCap: TypedContractMethod<[
    ], [
        IBorrowingFees.BorrowingFeePerBlockCapStructOutput
    ], "view">;
    getBorrowingGroup: TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _groupIndex: BigNumberish
    ], [
        IBorrowingFees.BorrowingDataStructOutput
    ], "view">;
    getBorrowingGroupOi: TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _groupIndex: BigNumberish
    ], [
        IBorrowingFees.OpenInterestStructOutput
    ], "view">;
    getBorrowingGroupPendingAccFees: TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _groupIndex: BigNumberish,
        _currentBlock: BigNumberish
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            accFeeLong: bigint;
            accFeeShort: bigint;
            groupAccFeeLongDelta: bigint;
            groupAccFeeShortDelta: bigint;
        }
    ], "view">;
    getBorrowingGroups: TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _indices: BigNumberish[]
    ], [
        [
            IBorrowingFees.BorrowingDataStructOutput[],
            IBorrowingFees.OpenInterestStructOutput[]
        ]
    ], "view">;
    getBorrowingInitialAccFees: TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _trader: AddressLike,
        _index: BigNumberish
    ], [
        IBorrowingFees.BorrowingInitialAccFeesStructOutput
    ], "view">;
    getBorrowingPair: TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _pairIndex: BigNumberish
    ], [
        IBorrowingFees.BorrowingDataStructOutput
    ], "view">;
    getBorrowingPairFeePerBlockCap: TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _pairIndex: BigNumberish
    ], [
        IBorrowingFees.BorrowingFeePerBlockCapStructOutput
    ], "view">;
    getBorrowingPairFeePerBlockCaps: TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _indices: BigNumberish[]
    ], [
        IBorrowingFees.BorrowingFeePerBlockCapStructOutput[]
    ], "view">;
    getBorrowingPairGroupIndex: TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _pairIndex: BigNumberish
    ], [
        bigint
    ], "view">;
    getBorrowingPairGroups: TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _pairIndex: BigNumberish
    ], [
        IBorrowingFees.BorrowingPairGroupStructOutput[]
    ], "view">;
    getBorrowingPairOi: TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _pairIndex: BigNumberish
    ], [
        IBorrowingFees.OpenInterestStructOutput
    ], "view">;
    getBorrowingPairPendingAccFees: TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _pairIndex: BigNumberish,
        _currentBlock: BigNumberish
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            accFeeLong: bigint;
            accFeeShort: bigint;
            pairAccFeeLongDelta: bigint;
            pairAccFeeShortDelta: bigint;
        }
    ], "view">;
    getPairMaxOi: TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _pairIndex: BigNumberish
    ], [
        bigint
    ], "view">;
    getPairMaxOiCollateral: TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _pairIndex: BigNumberish
    ], [
        bigint
    ], "view">;
    getPairOiCollateral: TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _pairIndex: BigNumberish,
        _long: boolean
    ], [
        bigint
    ], "view">;
    getPairOisCollateral: TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _pairIndex: BigNumberish
    ], [
        [bigint, bigint] & {
            longOi: bigint;
            shortOi: bigint;
        }
    ], "view">;
    getTradeBorrowingFee: TypedContractMethod<[
        _input: IBorrowingFees.BorrowingFeeInputStruct
    ], [
        bigint
    ], "view">;
    getTradeLiquidationPrice: TypedContractMethod<[
        _input: IBorrowingFees.LiqPriceInputStruct
    ], [
        bigint
    ], "view">;
    handleTradeBorrowingCallback: TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _trader: AddressLike,
        _pairIndex: BigNumberish,
        _index: BigNumberish,
        _positionSizeCollateral: BigNumberish,
        _open: boolean,
        _long: boolean
    ], [
        void
    ], "nonpayable">;
    initializeBorrowingFeePerBlockCap: TypedContractMethod<[
        _feePerBlockCap: IBorrowingFees.BorrowingFeePerBlockCapStruct
    ], [
        void
    ], "nonpayable">;
    resetTradeBorrowingFees: TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _trader: AddressLike,
        _pairIndex: BigNumberish,
        _index: BigNumberish,
        _long: boolean
    ], [
        void
    ], "nonpayable">;
    setBorrowingFeePerBlockCap: TypedContractMethod<[
        _feePerBlockCap: IBorrowingFees.BorrowingFeePerBlockCapStruct
    ], [
        void
    ], "nonpayable">;
    setBorrowingGroupParams: TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _groupIndex: BigNumberish,
        _value: IBorrowingFees.BorrowingGroupParamsStruct
    ], [
        void
    ], "nonpayable">;
    setBorrowingGroupParamsArray: TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _indices: BigNumberish[],
        _values: IBorrowingFees.BorrowingGroupParamsStruct[]
    ], [
        void
    ], "nonpayable">;
    setBorrowingPairFeePerBlockCapArray: TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _indices: BigNumberish[],
        _values: IBorrowingFees.BorrowingFeePerBlockCapStruct[]
    ], [
        void
    ], "nonpayable">;
    setBorrowingPairParams: TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _pairIndex: BigNumberish,
        _value: IBorrowingFees.BorrowingPairParamsStruct
    ], [
        void
    ], "nonpayable">;
    setBorrowingPairParamsArray: TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _indices: BigNumberish[],
        _values: IBorrowingFees.BorrowingPairParamsStruct[]
    ], [
        void
    ], "nonpayable">;
    withinMaxBorrowingGroupOi: TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _pairIndex: BigNumberish,
        _long: boolean,
        _positionSizeCollateral: BigNumberish
    ], [
        boolean
    ], "view">;
    addOracle: TypedContractMethod<[_a: AddressLike], [void], "nonpayable">;
    claimBackLink: TypedContractMethod<[], [void], "nonpayable">;
    fulfill: TypedContractMethod<[
        _requestId: BytesLike,
        _priceData: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getChainlinkToken: TypedContractMethod<[], [string], "view">;
    getCollateralFromUsdNormalizedValue: TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _normalizedValue: BigNumberish
    ], [
        bigint
    ], "view">;
    getCollateralGnsLiquidityPool: TypedContractMethod<[
        _collateralIndex: BigNumberish
    ], [
        IPriceAggregator.LiquidityPoolInfoStructOutput
    ], "view">;
    getCollateralPriceUsd: TypedContractMethod<[
        _collateralIndex: BigNumberish
    ], [
        bigint
    ], "view">;
    getCollateralUsdPriceFeed: TypedContractMethod<[
        _collateralIndex: BigNumberish
    ], [
        string
    ], "view">;
    getGnsPriceCollateralAddress: TypedContractMethod<[
        _collateral: AddressLike
    ], [
        bigint
    ], "view">;
    getGnsPriceCollateralIndex: TypedContractMethod<[
        _collateralIndex: BigNumberish
    ], [
        bigint
    ], "view">;
    getGnsPriceUsd: TypedContractMethod<[
        _collateralIndex: BigNumberish
    ], [
        bigint
    ], "view">;
    getLimitJobCount: TypedContractMethod<[], [bigint], "view">;
    getLimitJobId: TypedContractMethod<[], [string], "view">;
    getLimitJobIndex: TypedContractMethod<[], [bigint], "view">;
    getLinkFee: TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _trader: AddressLike,
        _pairIndex: BigNumberish,
        _positionSizeCollateral: BigNumberish
    ], [
        bigint
    ], "view">;
    getLinkUsdPriceFeed: TypedContractMethod<[], [string], "view">;
    getMarketJobId: TypedContractMethod<[], [string], "view">;
    getMaxLookbackDeviationP: TypedContractMethod<[], [bigint], "view">;
    getMaxMarketDeviationP: TypedContractMethod<[], [bigint], "view">;
    getMinAnswers: TypedContractMethod<[], [bigint], "view">;
    getOracle: TypedContractMethod<[_index: BigNumberish], [string], "view">;
    getOracles: TypedContractMethod<[], [string[]], "view">;
    getPendingRequest: TypedContractMethod<[_id: BytesLike], [string], "view">;
    getPrice: TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _pairIndex: BigNumberish,
        _pendingOrder: ITradingStorage.PendingOrderStruct,
        _positionSizeCollateral: BigNumberish,
        _fromBlock: BigNumberish
    ], [
        ITradingStorage.IdStructOutput
    ], "nonpayable">;
    getPriceAggregatorOrder: TypedContractMethod<[
        _requestId: BytesLike
    ], [
        IPriceAggregator.OrderStructOutput
    ], "view">;
    getPriceAggregatorOrderAnswers: TypedContractMethod<[
        _orderId: ITradingStorage.IdStruct
    ], [
        IPriceAggregator.OrderAnswerStructOutput[]
    ], "view">;
    getRequestCount: TypedContractMethod<[], [bigint], "view">;
    getTwapInterval: TypedContractMethod<[], [bigint], "view">;
    getUsdNormalizedValue: TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _collateralValue: BigNumberish
    ], [
        bigint
    ], "view">;
    initializeLimitJobCount: TypedContractMethod<[
        _limitJobCount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    initializeMaxDeviationsP: TypedContractMethod<[
        _maxMarketDeviationP: BigNumberish,
        _maxLookbackDeviationP: BigNumberish
    ], [
        void
    ], "nonpayable">;
    initializePriceAggregator: TypedContractMethod<[
        _linkToken: AddressLike,
        _linkUsdPriceFeed: AddressLike,
        _twapInterval: BigNumberish,
        _minAnswers: BigNumberish,
        _nodes: AddressLike[],
        _jobIds: [BytesLike, BytesLike],
        _collateralIndices: BigNumberish[],
        _gnsCollateralLiquidityPools: IPriceAggregator.LiquidityPoolInputStruct[],
        _collateralUsdPriceFeeds: AddressLike[]
    ], [
        void
    ], "nonpayable">;
    removeOracle: TypedContractMethod<[
        _index: BigNumberish
    ], [
        void
    ], "nonpayable">;
    replaceOracle: TypedContractMethod<[
        _index: BigNumberish,
        _a: AddressLike
    ], [
        void
    ], "nonpayable">;
    setLimitJobCount: TypedContractMethod<[
        _limitJobCount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setLimitJobId: TypedContractMethod<[_jobId: BytesLike], [void], "nonpayable">;
    setMarketJobId: TypedContractMethod<[
        _jobId: BytesLike
    ], [
        void
    ], "nonpayable">;
    setMaxLookbackDeviationP: TypedContractMethod<[
        _maxLookbackDeviationP: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setMaxMarketDeviationP: TypedContractMethod<[
        _maxMarketDeviationP: BigNumberish
    ], [
        void
    ], "nonpayable">;
    updateCollateralGnsLiquidityPool: TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _liquidityPoolInput: IPriceAggregator.LiquidityPoolInputStruct
    ], [
        void
    ], "nonpayable">;
    updateCollateralUsdPriceFeed: TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _value: AddressLike
    ], [
        void
    ], "nonpayable">;
    updateLinkUsdPriceFeed: TypedContractMethod<[
        _value: AddressLike
    ], [
        void
    ], "nonpayable">;
    updateMinAnswers: TypedContractMethod<[
        _value: BigNumberish
    ], [
        void
    ], "nonpayable">;
    updateTwapInterval: TypedContractMethod<[
        _twapInterval: BigNumberish
    ], [
        void
    ], "nonpayable">;
    addOtcCollateralBalance: TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _collateralAmount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getOtcBalance: TypedContractMethod<[
        _collateralIndex: BigNumberish
    ], [
        bigint
    ], "view">;
    getOtcConfig: TypedContractMethod<[], [IOtc.OtcConfigStructOutput], "view">;
    getOtcRate: TypedContractMethod<[
        _collateralIndex: BigNumberish
    ], [
        bigint
    ], "view">;
    initializeOtc: TypedContractMethod<[
        _config: IOtc.OtcConfigStruct
    ], [
        void
    ], "nonpayable">;
    sellGnsForCollateral: TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _collateralAmount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    updateOtcConfig: TypedContractMethod<[
        _config: IOtc.OtcConfigStruct
    ], [
        void
    ], "nonpayable">;
    multicall: TypedContractMethod<[data: BytesLike[]], [string[]], "nonpayable">;
    getNativeTransferEnabled: TypedContractMethod<[], [boolean], "view">;
    getNativeTransferGasLimit: TypedContractMethod<[], [bigint], "view">;
    getReentrancyLock: TypedContractMethod<[], [bigint], "view">;
    initializeChainConfig: TypedContractMethod<[
        _nativeTransferGasLimit: BigNumberish,
        _nativeTransferEnabled: boolean
    ], [
        void
    ], "nonpayable">;
    updateNativeTransferEnabled: TypedContractMethod<[
        _nativeTransferEnabled: boolean
    ], [
        void
    ], "nonpayable">;
    updateNativeTransferGasLimit: TypedContractMethod<[
        _nativeTransferGasLimit: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "diamondCut"): TypedContractMethod<[
        _faceCut: IDiamondStorage.FacetCutStruct[],
        _init: AddressLike,
        _calldata: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "facetAddress"): TypedContractMethod<[_functionSelector: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "facetAddresses"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "facetFunctionSelectors"): TypedContractMethod<[_facet: AddressLike], [string[]], "view">;
    getFunction(nameOrSignature: "facets"): TypedContractMethod<[], [IGNSDiamondLoupe.FacetStructOutput[]], "view">;
    getFunction(nameOrSignature: "getAddresses"): TypedContractMethod<[], [IAddressStore.AddressesStructOutput], "view">;
    getFunction(nameOrSignature: "hasRole"): TypedContractMethod<[
        _account: AddressLike,
        _role: BigNumberish
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "hasRoles"): TypedContractMethod<[
        _account: AddressLike,
        _roleA: BigNumberish,
        _roleB: BigNumberish
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "initialize"): TypedContractMethod<[_govTimelock: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "setRoles"): TypedContractMethod<[
        _accounts: AddressLike[],
        _roles: BigNumberish[],
        _values: boolean[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "addFees"): TypedContractMethod<[
        _fees: IPairsStorage.FeeGroupStruct[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "addGroups"): TypedContractMethod<[
        _groups: IPairsStorage.GroupStruct[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "addPairs"): TypedContractMethod<[
        _pairs: IPairsStorage.PairStruct[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "fees"): TypedContractMethod<[
        _index: BigNumberish
    ], [
        IPairsStorage.FeeGroupStructOutput
    ], "view">;
    getFunction(nameOrSignature: "feesCount"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getAllPairsRestrictedMaxLeverage"): TypedContractMethod<[], [bigint[]], "view">;
    getFunction(nameOrSignature: "getGlobalTradeFeeParams"): TypedContractMethod<[
    ], [
        IPairsStorage.GlobalTradeFeeParamsStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getGroupLiquidationParams"): TypedContractMethod<[
        _groupIndex: BigNumberish
    ], [
        IPairsStorage.GroupLiquidationParamsStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getPairLiquidationParams"): TypedContractMethod<[
        _pairIndex: BigNumberish
    ], [
        IPairsStorage.GroupLiquidationParamsStructOutput
    ], "view">;
    getFunction(nameOrSignature: "groups"): TypedContractMethod<[
        _index: BigNumberish
    ], [
        IPairsStorage.GroupStructOutput
    ], "view">;
    getFunction(nameOrSignature: "groupsCount"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "initializeGroupLiquidationParams"): TypedContractMethod<[
        _groupLiquidationParams: IPairsStorage.GroupLiquidationParamsStruct[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "initializeNewFees"): TypedContractMethod<[
        _tradeFeeParams: IPairsStorage.GlobalTradeFeeParamsStruct
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "initializeReferralFeeChange"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "isPairIndexListed"): TypedContractMethod<[_pairIndex: BigNumberish], [boolean], "view">;
    getFunction(nameOrSignature: "isPairListed"): TypedContractMethod<[_from: string, _to: string], [boolean], "view">;
    getFunction(nameOrSignature: "pairCustomMaxLeverage"): TypedContractMethod<[_pairIndex: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "pairJob"): TypedContractMethod<[
        _pairIndex: BigNumberish
    ], [
        [string, string]
    ], "view">;
    getFunction(nameOrSignature: "pairMaxLeverage"): TypedContractMethod<[_pairIndex: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "pairMinFeeUsd"): TypedContractMethod<[_pairIndex: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "pairMinLeverage"): TypedContractMethod<[_pairIndex: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "pairMinPositionSizeUsd"): TypedContractMethod<[_pairIndex: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "pairOraclePositionSizeFeeP"): TypedContractMethod<[_pairIndex: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "pairSpreadP"): TypedContractMethod<[
        _trader: AddressLike,
        _pairIndex: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "pairSpreadPArray"): TypedContractMethod<[
        _trader: AddressLike[],
        _pairIndex: BigNumberish[]
    ], [
        bigint[]
    ], "view">;
    getFunction(nameOrSignature: "pairTotalLiqCollateralFeeP"): TypedContractMethod<[_pairIndex: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "pairTotalPositionSizeFeeP"): TypedContractMethod<[_pairIndex: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "pairs"): TypedContractMethod<[
        _index: BigNumberish
    ], [
        IPairsStorage.PairStructOutput
    ], "view">;
    getFunction(nameOrSignature: "pairsCount"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "setGlobalTradeFeeParams"): TypedContractMethod<[
        _feeParams: IPairsStorage.GlobalTradeFeeParamsStruct
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setGroupLiquidationParams"): TypedContractMethod<[
        _groupIndex: BigNumberish,
        _params: IPairsStorage.GroupLiquidationParamsStruct
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setPairCustomMaxLeverages"): TypedContractMethod<[
        _indices: BigNumberish[],
        _values: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateFees"): TypedContractMethod<[
        _ids: BigNumberish[],
        _fees: IPairsStorage.FeeGroupStruct[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateGroups"): TypedContractMethod<[
        _ids: BigNumberish[],
        _groups: IPairsStorage.GroupStruct[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updatePairs"): TypedContractMethod<[
        _pairIndices: BigNumberish[],
        _pairs: IPairsStorage.PairStruct[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "claimAllyRewards"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "claimReferrerRewards"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "distributeReferralReward"): TypedContractMethod<[
        _trader: AddressLike,
        _volumeUsd: BigNumberish,
        _referrerFeeUsd: BigNumberish,
        _gnsPriceUsd: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "getAllyDetails"): TypedContractMethod<[
        _ally: AddressLike
    ], [
        IReferrals.AllyDetailsStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getReferralSettingsOverrides"): TypedContractMethod<[
        _address: AddressLike
    ], [
        IReferrals.ReferralSettingsOverridesStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getReferralsAllyFeeP"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getReferralsStartReferrerFeeP"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getReferralsTargetVolumeUsd"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getReferrerDetails"): TypedContractMethod<[
        _referrer: AddressLike
    ], [
        IReferrals.ReferrerDetailsStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getReferrerFeeProgressP"): TypedContractMethod<[_referrer: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getReferrersReferred"): TypedContractMethod<[_ally: AddressLike], [string[]], "view">;
    getFunction(nameOrSignature: "getTraderActiveReferrer"): TypedContractMethod<[_trader: AddressLike], [string], "view">;
    getFunction(nameOrSignature: "getTraderLastReferrer"): TypedContractMethod<[_trader: AddressLike], [string], "view">;
    getFunction(nameOrSignature: "getTradersReferred"): TypedContractMethod<[_referrer: AddressLike], [string[]], "view">;
    getFunction(nameOrSignature: "initializeReferrals"): TypedContractMethod<[
        _allyFeeP: BigNumberish,
        _startReferrerFeeP: BigNumberish,
        _targetVolumeUsd: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "overrideAllyFeeP"): TypedContractMethod<[
        _allies: AddressLike[],
        _allyFeeP: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "overrideReferralFeeP"): TypedContractMethod<[
        _referrers: AddressLike[],
        _referralFeeP: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "registerPotentialReferrer"): TypedContractMethod<[
        _trader: AddressLike,
        _referrer: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "unwhitelistAllies"): TypedContractMethod<[_allies: AddressLike[]], [void], "nonpayable">;
    getFunction(nameOrSignature: "unwhitelistReferrers"): TypedContractMethod<[_referrers: AddressLike[]], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateAllyFeeP"): TypedContractMethod<[_value: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateReferralsTargetVolumeUsd"): TypedContractMethod<[_value: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateStartReferrerFeeP"): TypedContractMethod<[_value: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "whitelistAllies"): TypedContractMethod<[_allies: AddressLike[]], [void], "nonpayable">;
    getFunction(nameOrSignature: "whitelistReferrers"): TypedContractMethod<[
        _referrers: AddressLike[],
        _allies: AddressLike[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "addTradersUnclaimedPoints"): TypedContractMethod<[
        _traders: AddressLike[],
        _creditTypes: BigNumberish[],
        _points: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "calculateFeeAmount"): TypedContractMethod<[
        _trader: AddressLike,
        _normalFeeAmountCollateral: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "getFeeTier"): TypedContractMethod<[
        _feeTierIndex: BigNumberish
    ], [
        IFeeTiers.FeeTierStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getFeeTiersCount"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getFeeTiersTraderDailyInfo"): TypedContractMethod<[
        _trader: AddressLike,
        _day: BigNumberish
    ], [
        IFeeTiers.TraderDailyInfoStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getFeeTiersTraderInfo"): TypedContractMethod<[
        _trader: AddressLike
    ], [
        IFeeTiers.TraderInfoStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getGroupVolumeMultiplier"): TypedContractMethod<[_groupIndex: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "getTraderFeeTiersEnrollment"): TypedContractMethod<[
        _trader: AddressLike
    ], [
        IFeeTiers.TraderEnrollmentStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getTraderUnclaimedPoints"): TypedContractMethod<[_trader: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "initializeFeeTiers"): TypedContractMethod<[
        _groupIndices: BigNumberish[],
        _groupVolumeMultipliers: BigNumberish[],
        _feeTiersIndices: BigNumberish[],
        _feeTiers: IFeeTiers.FeeTierStruct[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setFeeTiers"): TypedContractMethod<[
        _feeTiersIndices: BigNumberish[],
        _feeTiers: IFeeTiers.FeeTierStruct[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setGroupVolumeMultipliers"): TypedContractMethod<[
        _groupIndices: BigNumberish[],
        _groupVolumeMultipliers: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setTradersFeeTiersEnrollment"): TypedContractMethod<[
        _traders: AddressLike[],
        _values: IFeeTiers.TraderEnrollmentStruct[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateTraderPoints"): TypedContractMethod<[
        _trader: AddressLike,
        _volumeUsd: BigNumberish,
        _pairIndex: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "addPriceImpactOpenInterest"): TypedContractMethod<[
        _trader: AddressLike,
        _index: BigNumberish,
        _oiDeltaCollateral: BigNumberish,
        _open: boolean,
        _isPnlPositive: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "getNegPnlCumulVolMultiplier"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getOiWindow"): TypedContractMethod<[
        _windowsDuration: BigNumberish,
        _pairIndex: BigNumberish,
        _windowId: BigNumberish
    ], [
        IPriceImpact.PairOiStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getOiWindows"): TypedContractMethod<[
        _windowsDuration: BigNumberish,
        _pairIndex: BigNumberish,
        _windowIds: BigNumberish[]
    ], [
        IPriceImpact.PairOiStructOutput[]
    ], "view">;
    getFunction(nameOrSignature: "getOiWindowsSettings"): TypedContractMethod<[
    ], [
        IPriceImpact.OiWindowsSettingsStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getPairDepth"): TypedContractMethod<[
        _pairIndex: BigNumberish
    ], [
        IPriceImpact.PairDepthStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getPairDepths"): TypedContractMethod<[
        _indices: BigNumberish[]
    ], [
        IPriceImpact.PairDepthStructOutput[]
    ], "view">;
    getFunction(nameOrSignature: "getPairFactors"): TypedContractMethod<[
        _indices: BigNumberish[]
    ], [
        IPriceImpact.PairFactorsStructOutput[]
    ], "view">;
    getFunction(nameOrSignature: "getPriceImpactOi"): TypedContractMethod<[
        _pairIndex: BigNumberish,
        _long: boolean
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "getProtectionCloseFactorWhitelist"): TypedContractMethod<[_trader: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "getTradePriceImpact"): TypedContractMethod<[
        _trader: AddressLike,
        _marketPrice: BigNumberish,
        _pairIndex: BigNumberish,
        _long: boolean,
        _tradeOpenInterestUsd: BigNumberish,
        _isPnlPositive: boolean,
        _open: boolean,
        _lastPosIncreaseBlock: BigNumberish,
        _contractsVersion: BigNumberish
    ], [
        [bigint, bigint] & {
            priceImpactP: bigint;
            priceAfterImpact: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "getUserPriceImpact"): TypedContractMethod<[
        _trader: AddressLike,
        _pairIndex: BigNumberish
    ], [
        IPriceImpact.UserPriceImpactStructOutput
    ], "view">;
    getFunction(nameOrSignature: "initializeNegPnlCumulVolMultiplier"): TypedContractMethod<[
        _negPnlCumulVolMultiplier: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "initializePairFactors"): TypedContractMethod<[
        _pairIndices: BigNumberish[],
        _protectionCloseFactors: BigNumberish[],
        _protectionCloseFactorBlocks: BigNumberish[],
        _cumulativeFactors: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "initializePriceImpact"): TypedContractMethod<[
        _windowsDuration: BigNumberish,
        _windowsCount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setCumulativeFactors"): TypedContractMethod<[
        _pairIndices: BigNumberish[],
        _cumulativeFactors: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setExemptAfterProtectionCloseFactor"): TypedContractMethod<[
        _pairIndices: BigNumberish[],
        _exemptAfterProtectionCloseFactor: boolean[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setExemptOnOpen"): TypedContractMethod<[
        _pairIndices: BigNumberish[],
        _exemptOnOpen: boolean[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setNegPnlCumulVolMultiplier"): TypedContractMethod<[
        _negPnlCumulVolMultiplier: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setPairDepths"): TypedContractMethod<[
        _indices: BigNumberish[],
        _depthsAboveUsd: BigNumberish[],
        _depthsBelowUsd: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setPriceImpactWindowsCount"): TypedContractMethod<[
        _newWindowsCount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setPriceImpactWindowsDuration"): TypedContractMethod<[
        _newWindowsDuration: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setProtectionCloseFactorBlocks"): TypedContractMethod<[
        _pairIndices: BigNumberish[],
        _protectionCloseFactorBlocks: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setProtectionCloseFactorWhitelist"): TypedContractMethod<[
        _traders: AddressLike[],
        _whitelisted: boolean[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setProtectionCloseFactors"): TypedContractMethod<[
        _pairIndices: BigNumberish[],
        _protectionCloseFactors: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setUserPriceImpact"): TypedContractMethod<[
        _traders: AddressLike[],
        _pairIndices: BigNumberish[],
        _cumulVolPriceImpactMultipliers: BigNumberish[],
        _fixedSpreadPs: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "addCollateral"): TypedContractMethod<[
        _collateral: AddressLike,
        _gToken: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "closePendingOrder"): TypedContractMethod<[
        _orderId: ITradingStorage.IdStruct
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "closeTrade"): TypedContractMethod<[
        _tradeId: ITradingStorage.IdStruct,
        _isPnlPositive: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "getAllPendingOrders"): TypedContractMethod<[
        _offset: BigNumberish,
        _limit: BigNumberish
    ], [
        ITradingStorage.PendingOrderStructOutput[]
    ], "view">;
    getFunction(nameOrSignature: "getAllPendingOrdersForTraders"): TypedContractMethod<[
        _traders: AddressLike[],
        _offset: BigNumberish,
        _limit: BigNumberish
    ], [
        ITradingStorage.PendingOrderStructOutput[]
    ], "view">;
    getFunction(nameOrSignature: "getAllTradeInfos"): TypedContractMethod<[
        _offset: BigNumberish,
        _limit: BigNumberish
    ], [
        ITradingStorage.TradeInfoStructOutput[]
    ], "view">;
    getFunction(nameOrSignature: "getAllTradeInfosForTraders"): TypedContractMethod<[
        _traders: AddressLike[],
        _offset: BigNumberish,
        _limit: BigNumberish
    ], [
        ITradingStorage.TradeInfoStructOutput[]
    ], "view">;
    getFunction(nameOrSignature: "getAllTrades"): TypedContractMethod<[
        _offset: BigNumberish,
        _limit: BigNumberish
    ], [
        ITradingStorage.TradeStructOutput[]
    ], "view">;
    getFunction(nameOrSignature: "getAllTradesForTraders"): TypedContractMethod<[
        _traders: AddressLike[],
        _offset: BigNumberish,
        _limit: BigNumberish
    ], [
        ITradingStorage.TradeStructOutput[]
    ], "view">;
    getFunction(nameOrSignature: "getAllTradesLiquidationParams"): TypedContractMethod<[
        _offset: BigNumberish,
        _limit: BigNumberish
    ], [
        IPairsStorage.GroupLiquidationParamsStructOutput[]
    ], "view">;
    getFunction(nameOrSignature: "getAllTradesLiquidationParamsForTraders"): TypedContractMethod<[
        _traders: AddressLike[],
        _offset: BigNumberish,
        _limit: BigNumberish
    ], [
        IPairsStorage.GroupLiquidationParamsStructOutput[]
    ], "view">;
    getFunction(nameOrSignature: "getCollateral"): TypedContractMethod<[
        _index: BigNumberish
    ], [
        ITradingStorage.CollateralStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getCollateralIndex"): TypedContractMethod<[_collateral: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getCollaterals"): TypedContractMethod<[
    ], [
        ITradingStorage.CollateralStructOutput[]
    ], "view">;
    getFunction(nameOrSignature: "getCollateralsCount"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getCounters"): TypedContractMethod<[
        _trader: AddressLike,
        _type: BigNumberish
    ], [
        ITradingStorage.CounterStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getCountersForTraders"): TypedContractMethod<[
        _traders: AddressLike[],
        _type: BigNumberish
    ], [
        ITradingStorage.CounterStructOutput[]
    ], "view">;
    getFunction(nameOrSignature: "getCurrentContractsVersion"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getGToken"): TypedContractMethod<[_collateralIndex: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "getGnsCollateralIndex"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getPendingOrder"): TypedContractMethod<[
        _orderId: ITradingStorage.IdStruct
    ], [
        ITradingStorage.PendingOrderStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getPendingOrders"): TypedContractMethod<[
        _user: AddressLike
    ], [
        ITradingStorage.PendingOrderStructOutput[]
    ], "view">;
    getFunction(nameOrSignature: "getTrade"): TypedContractMethod<[
        _trader: AddressLike,
        _index: BigNumberish
    ], [
        ITradingStorage.TradeStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getTradeInfo"): TypedContractMethod<[
        _trader: AddressLike,
        _index: BigNumberish
    ], [
        ITradingStorage.TradeInfoStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getTradeInfos"): TypedContractMethod<[
        _trader: AddressLike
    ], [
        ITradingStorage.TradeInfoStructOutput[]
    ], "view">;
    getFunction(nameOrSignature: "getTradeLiquidationParams"): TypedContractMethod<[
        _trader: AddressLike,
        _index: BigNumberish
    ], [
        IPairsStorage.GroupLiquidationParamsStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getTradePendingOrderBlock"): TypedContractMethod<[
        _tradeId: ITradingStorage.IdStruct,
        _orderType: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "getTraderStored"): TypedContractMethod<[_trader: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "getTraders"): TypedContractMethod<[
        _offset: BigNumberish,
        _limit: BigNumberish
    ], [
        string[]
    ], "view">;
    getFunction(nameOrSignature: "getTradersCount"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getTrades"): TypedContractMethod<[
        _trader: AddressLike
    ], [
        ITradingStorage.TradeStructOutput[]
    ], "view">;
    getFunction(nameOrSignature: "getTradesLiquidationParams"): TypedContractMethod<[
        _trader: AddressLike
    ], [
        IPairsStorage.GroupLiquidationParamsStructOutput[]
    ], "view">;
    getFunction(nameOrSignature: "getTradingActivated"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "initializeTradingStorage"): TypedContractMethod<[
        _gns: AddressLike,
        _gnsStaking: AddressLike,
        _collaterals: AddressLike[],
        _gTokens: AddressLike[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "isCollateralActive"): TypedContractMethod<[_index: BigNumberish], [boolean], "view">;
    getFunction(nameOrSignature: "isCollateralGns"): TypedContractMethod<[_index: BigNumberish], [boolean], "view">;
    getFunction(nameOrSignature: "isCollateralListed"): TypedContractMethod<[_index: BigNumberish], [boolean], "view">;
    getFunction(nameOrSignature: "storePendingOrder"): TypedContractMethod<[
        _pendingOrder: ITradingStorage.PendingOrderStruct
    ], [
        ITradingStorage.PendingOrderStructOutput
    ], "nonpayable">;
    getFunction(nameOrSignature: "storeTrade"): TypedContractMethod<[
        _trade: ITradingStorage.TradeStruct,
        _tradeInfo: ITradingStorage.TradeInfoStruct
    ], [
        ITradingStorage.TradeStructOutput
    ], "nonpayable">;
    getFunction(nameOrSignature: "toggleCollateralActiveState"): TypedContractMethod<[
        _collateralIndex: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateGToken"): TypedContractMethod<[
        _collateral: AddressLike,
        _gToken: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateOpenOrderDetails"): TypedContractMethod<[
        _tradeId: ITradingStorage.IdStruct,
        _openPrice: BigNumberish,
        _tp: BigNumberish,
        _sl: BigNumberish,
        _maxSlippageP: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateTradeCollateralAmount"): TypedContractMethod<[
        _tradeId: ITradingStorage.IdStruct,
        _collateralAmount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateTradeMaxClosingSlippageP"): TypedContractMethod<[
        _tradeId: ITradingStorage.IdStruct,
        _maxSlippageP: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateTradePosition"): TypedContractMethod<[
        _tradeId: ITradingStorage.IdStruct,
        _collateralAmount: BigNumberish,
        _leverage: BigNumberish,
        _openPrice: BigNumberish,
        _isPartialIncrease: boolean,
        _isPnlPositive: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateTradeSl"): TypedContractMethod<[
        _tradeId: ITradingStorage.IdStruct,
        _newSl: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateTradeTp"): TypedContractMethod<[
        _tradeId: ITradingStorage.IdStruct,
        _newTp: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateTradingActivated"): TypedContractMethod<[_activated: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "claimPendingTriggerRewards"): TypedContractMethod<[_oracle: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "distributeTriggerReward"): TypedContractMethod<[_rewardGns: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "getTriggerPendingRewardsGns"): TypedContractMethod<[_oracle: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getTriggerTimeoutBlocks"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "hasActiveOrder"): TypedContractMethod<[_orderBlock: BigNumberish], [boolean], "view">;
    getFunction(nameOrSignature: "initializeTriggerRewards"): TypedContractMethod<[_timeoutBlocks: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateTriggerTimeoutBlocks"): TypedContractMethod<[_timeoutBlocks: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "cancelOpenOrder"): TypedContractMethod<[_index: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "cancelOrderAfterTimeout"): TypedContractMethod<[_orderIndex: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "closeTradeMarket"): TypedContractMethod<[
        _index: BigNumberish,
        _expectedPrice: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "decreasePositionSize"): TypedContractMethod<[
        _index: BigNumberish,
        _collateralDelta: BigNumberish,
        _leverageDelta: BigNumberish,
        _expectedPrice: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "delegatedTradingAction"): TypedContractMethod<[
        _trader: AddressLike,
        _callData: BytesLike
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "getByPassTriggerLink"): TypedContractMethod<[_user: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "getMarketOrdersTimeoutBlocks"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getTradingDelegate"): TypedContractMethod<[_trader: AddressLike], [string], "view">;
    getFunction(nameOrSignature: "getWrappedNativeToken"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "increasePositionSize"): TypedContractMethod<[
        _index: BigNumberish,
        _collateralDelta: BigNumberish,
        _leverageDelta: BigNumberish,
        _expectedPrice: BigNumberish,
        _maxSlippageP: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "increasePositionSizeNative"): TypedContractMethod<[
        _index: BigNumberish,
        _collateralDelta: BigNumberish,
        _leverageDelta: BigNumberish,
        _expectedPrice: BigNumberish,
        _maxSlippageP: BigNumberish
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "initializeTrading"): TypedContractMethod<[
        _marketOrdersTimeoutBlocks: BigNumberish,
        _usersByPassTriggerLink: AddressLike[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "isWrappedNativeToken"): TypedContractMethod<[_token: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "openTrade"): TypedContractMethod<[
        _trade: ITradingStorage.TradeStruct,
        _maxSlippageP: BigNumberish,
        _referrer: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "openTradeNative"): TypedContractMethod<[
        _trade: ITradingStorage.TradeStruct,
        _maxSlippageP: BigNumberish,
        _referrer: AddressLike
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "removeTradingDelegate"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "setTradingDelegate"): TypedContractMethod<[_delegate: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "triggerOrder"): TypedContractMethod<[_packed: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateByPassTriggerLink"): TypedContractMethod<[
        _users: AddressLike[],
        _shouldByPass: boolean[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateLeverage"): TypedContractMethod<[
        _index: BigNumberish,
        _newLeverage: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateLeverageNative"): TypedContractMethod<[
        _index: BigNumberish,
        _newLeverage: BigNumberish
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "updateMarketOrdersTimeoutBlocks"): TypedContractMethod<[_valueBlocks: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateMaxClosingSlippageP"): TypedContractMethod<[
        _index: BigNumberish,
        _maxSlippageP: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateOpenOrder"): TypedContractMethod<[
        _index: BigNumberish,
        _triggerPrice: BigNumberish,
        _tp: BigNumberish,
        _sl: BigNumberish,
        _maxSlippageP: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateSl"): TypedContractMethod<[
        _index: BigNumberish,
        _newSl: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateTp"): TypedContractMethod<[
        _index: BigNumberish,
        _newTp: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "claimPendingGovFees"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "closeTradeMarketCallback"): TypedContractMethod<[
        _a: ITradingCallbacks.AggregatorAnswerStruct
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "decreasePositionSizeMarketCallback"): TypedContractMethod<[
        _a: ITradingCallbacks.AggregatorAnswerStruct
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "executeTriggerCloseOrderCallback"): TypedContractMethod<[
        _a: ITradingCallbacks.AggregatorAnswerStruct
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "executeTriggerOpenOrderCallback"): TypedContractMethod<[
        _a: ITradingCallbacks.AggregatorAnswerStruct
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "getPendingGovFeesCollateral"): TypedContractMethod<[_collateralIndex: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "getVaultClosingFeeP"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "increasePositionSizeMarketCallback"): TypedContractMethod<[
        _a: ITradingCallbacks.AggregatorAnswerStruct
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "initializeCallbacks"): TypedContractMethod<[
        _vaultClosingFeeP: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "initializeTreasuryAddress"): TypedContractMethod<[_treasury: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "openTradeMarketCallback"): TypedContractMethod<[
        _a: ITradingCallbacks.AggregatorAnswerStruct
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateLeverageCallback"): TypedContractMethod<[
        _a: ITradingCallbacks.AggregatorAnswerStruct
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateTreasuryAddress"): TypedContractMethod<[_treasury: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateVaultClosingFeeP"): TypedContractMethod<[_valueP: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "validateTriggerCloseOrderCallback"): TypedContractMethod<[
        _tradeId: ITradingStorage.IdStruct,
        _orderType: BigNumberish,
        _open: BigNumberish,
        _high: BigNumberish,
        _low: BigNumberish
    ], [
        [
            ITradingStorage.TradeStructOutput,
            bigint,
            ITradingCallbacks.ValuesStructOutput
        ] & {
            t: ITradingStorage.TradeStructOutput;
            cancelReason: bigint;
            v: ITradingCallbacks.ValuesStructOutput;
        }
    ], "view">;
    getFunction(nameOrSignature: "validateTriggerOpenOrderCallback"): TypedContractMethod<[
        _tradeId: ITradingStorage.IdStruct,
        _orderType: BigNumberish,
        _open: BigNumberish,
        _high: BigNumberish,
        _low: BigNumberish
    ], [
        [
            ITradingStorage.TradeStructOutput,
            bigint,
            ITradingCallbacks.ValuesStructOutput
        ] & {
            t: ITradingStorage.TradeStructOutput;
            cancelReason: bigint;
            v: ITradingCallbacks.ValuesStructOutput;
        }
    ], "view">;
    getFunction(nameOrSignature: "getAllBorrowingPairs"): TypedContractMethod<[
        _collateralIndex: BigNumberish
    ], [
        [
            IBorrowingFees.BorrowingDataStructOutput[],
            IBorrowingFees.OpenInterestStructOutput[],
            IBorrowingFees.BorrowingPairGroupStructOutput[][]
        ]
    ], "view">;
    getFunction(nameOrSignature: "getBorrowingFeePerBlockCap"): TypedContractMethod<[
    ], [
        IBorrowingFees.BorrowingFeePerBlockCapStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getBorrowingGroup"): TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _groupIndex: BigNumberish
    ], [
        IBorrowingFees.BorrowingDataStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getBorrowingGroupOi"): TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _groupIndex: BigNumberish
    ], [
        IBorrowingFees.OpenInterestStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getBorrowingGroupPendingAccFees"): TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _groupIndex: BigNumberish,
        _currentBlock: BigNumberish
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            accFeeLong: bigint;
            accFeeShort: bigint;
            groupAccFeeLongDelta: bigint;
            groupAccFeeShortDelta: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "getBorrowingGroups"): TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _indices: BigNumberish[]
    ], [
        [
            IBorrowingFees.BorrowingDataStructOutput[],
            IBorrowingFees.OpenInterestStructOutput[]
        ]
    ], "view">;
    getFunction(nameOrSignature: "getBorrowingInitialAccFees"): TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _trader: AddressLike,
        _index: BigNumberish
    ], [
        IBorrowingFees.BorrowingInitialAccFeesStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getBorrowingPair"): TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _pairIndex: BigNumberish
    ], [
        IBorrowingFees.BorrowingDataStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getBorrowingPairFeePerBlockCap"): TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _pairIndex: BigNumberish
    ], [
        IBorrowingFees.BorrowingFeePerBlockCapStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getBorrowingPairFeePerBlockCaps"): TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _indices: BigNumberish[]
    ], [
        IBorrowingFees.BorrowingFeePerBlockCapStructOutput[]
    ], "view">;
    getFunction(nameOrSignature: "getBorrowingPairGroupIndex"): TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _pairIndex: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "getBorrowingPairGroups"): TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _pairIndex: BigNumberish
    ], [
        IBorrowingFees.BorrowingPairGroupStructOutput[]
    ], "view">;
    getFunction(nameOrSignature: "getBorrowingPairOi"): TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _pairIndex: BigNumberish
    ], [
        IBorrowingFees.OpenInterestStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getBorrowingPairPendingAccFees"): TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _pairIndex: BigNumberish,
        _currentBlock: BigNumberish
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            accFeeLong: bigint;
            accFeeShort: bigint;
            pairAccFeeLongDelta: bigint;
            pairAccFeeShortDelta: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "getPairMaxOi"): TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _pairIndex: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "getPairMaxOiCollateral"): TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _pairIndex: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "getPairOiCollateral"): TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _pairIndex: BigNumberish,
        _long: boolean
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "getPairOisCollateral"): TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _pairIndex: BigNumberish
    ], [
        [bigint, bigint] & {
            longOi: bigint;
            shortOi: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "getTradeBorrowingFee"): TypedContractMethod<[
        _input: IBorrowingFees.BorrowingFeeInputStruct
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "getTradeLiquidationPrice"): TypedContractMethod<[
        _input: IBorrowingFees.LiqPriceInputStruct
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "handleTradeBorrowingCallback"): TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _trader: AddressLike,
        _pairIndex: BigNumberish,
        _index: BigNumberish,
        _positionSizeCollateral: BigNumberish,
        _open: boolean,
        _long: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "initializeBorrowingFeePerBlockCap"): TypedContractMethod<[
        _feePerBlockCap: IBorrowingFees.BorrowingFeePerBlockCapStruct
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "resetTradeBorrowingFees"): TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _trader: AddressLike,
        _pairIndex: BigNumberish,
        _index: BigNumberish,
        _long: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setBorrowingFeePerBlockCap"): TypedContractMethod<[
        _feePerBlockCap: IBorrowingFees.BorrowingFeePerBlockCapStruct
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setBorrowingGroupParams"): TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _groupIndex: BigNumberish,
        _value: IBorrowingFees.BorrowingGroupParamsStruct
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setBorrowingGroupParamsArray"): TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _indices: BigNumberish[],
        _values: IBorrowingFees.BorrowingGroupParamsStruct[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setBorrowingPairFeePerBlockCapArray"): TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _indices: BigNumberish[],
        _values: IBorrowingFees.BorrowingFeePerBlockCapStruct[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setBorrowingPairParams"): TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _pairIndex: BigNumberish,
        _value: IBorrowingFees.BorrowingPairParamsStruct
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setBorrowingPairParamsArray"): TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _indices: BigNumberish[],
        _values: IBorrowingFees.BorrowingPairParamsStruct[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "withinMaxBorrowingGroupOi"): TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _pairIndex: BigNumberish,
        _long: boolean,
        _positionSizeCollateral: BigNumberish
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "addOracle"): TypedContractMethod<[_a: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "claimBackLink"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "fulfill"): TypedContractMethod<[
        _requestId: BytesLike,
        _priceData: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "getChainlinkToken"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getCollateralFromUsdNormalizedValue"): TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _normalizedValue: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "getCollateralGnsLiquidityPool"): TypedContractMethod<[
        _collateralIndex: BigNumberish
    ], [
        IPriceAggregator.LiquidityPoolInfoStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getCollateralPriceUsd"): TypedContractMethod<[_collateralIndex: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "getCollateralUsdPriceFeed"): TypedContractMethod<[_collateralIndex: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "getGnsPriceCollateralAddress"): TypedContractMethod<[_collateral: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getGnsPriceCollateralIndex"): TypedContractMethod<[_collateralIndex: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "getGnsPriceUsd"): TypedContractMethod<[_collateralIndex: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "getLimitJobCount"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getLimitJobId"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getLimitJobIndex"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getLinkFee"): TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _trader: AddressLike,
        _pairIndex: BigNumberish,
        _positionSizeCollateral: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "getLinkUsdPriceFeed"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getMarketJobId"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getMaxLookbackDeviationP"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getMaxMarketDeviationP"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getMinAnswers"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getOracle"): TypedContractMethod<[_index: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "getOracles"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "getPendingRequest"): TypedContractMethod<[_id: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "getPrice"): TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _pairIndex: BigNumberish,
        _pendingOrder: ITradingStorage.PendingOrderStruct,
        _positionSizeCollateral: BigNumberish,
        _fromBlock: BigNumberish
    ], [
        ITradingStorage.IdStructOutput
    ], "nonpayable">;
    getFunction(nameOrSignature: "getPriceAggregatorOrder"): TypedContractMethod<[
        _requestId: BytesLike
    ], [
        IPriceAggregator.OrderStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getPriceAggregatorOrderAnswers"): TypedContractMethod<[
        _orderId: ITradingStorage.IdStruct
    ], [
        IPriceAggregator.OrderAnswerStructOutput[]
    ], "view">;
    getFunction(nameOrSignature: "getRequestCount"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getTwapInterval"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getUsdNormalizedValue"): TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _collateralValue: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "initializeLimitJobCount"): TypedContractMethod<[_limitJobCount: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "initializeMaxDeviationsP"): TypedContractMethod<[
        _maxMarketDeviationP: BigNumberish,
        _maxLookbackDeviationP: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "initializePriceAggregator"): TypedContractMethod<[
        _linkToken: AddressLike,
        _linkUsdPriceFeed: AddressLike,
        _twapInterval: BigNumberish,
        _minAnswers: BigNumberish,
        _nodes: AddressLike[],
        _jobIds: [BytesLike, BytesLike],
        _collateralIndices: BigNumberish[],
        _gnsCollateralLiquidityPools: IPriceAggregator.LiquidityPoolInputStruct[],
        _collateralUsdPriceFeeds: AddressLike[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "removeOracle"): TypedContractMethod<[_index: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "replaceOracle"): TypedContractMethod<[
        _index: BigNumberish,
        _a: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setLimitJobCount"): TypedContractMethod<[_limitJobCount: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "setLimitJobId"): TypedContractMethod<[_jobId: BytesLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "setMarketJobId"): TypedContractMethod<[_jobId: BytesLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "setMaxLookbackDeviationP"): TypedContractMethod<[
        _maxLookbackDeviationP: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setMaxMarketDeviationP"): TypedContractMethod<[
        _maxMarketDeviationP: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateCollateralGnsLiquidityPool"): TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _liquidityPoolInput: IPriceAggregator.LiquidityPoolInputStruct
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateCollateralUsdPriceFeed"): TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _value: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateLinkUsdPriceFeed"): TypedContractMethod<[_value: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateMinAnswers"): TypedContractMethod<[_value: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateTwapInterval"): TypedContractMethod<[_twapInterval: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "addOtcCollateralBalance"): TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _collateralAmount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "getOtcBalance"): TypedContractMethod<[_collateralIndex: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "getOtcConfig"): TypedContractMethod<[], [IOtc.OtcConfigStructOutput], "view">;
    getFunction(nameOrSignature: "getOtcRate"): TypedContractMethod<[_collateralIndex: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "initializeOtc"): TypedContractMethod<[_config: IOtc.OtcConfigStruct], [void], "nonpayable">;
    getFunction(nameOrSignature: "sellGnsForCollateral"): TypedContractMethod<[
        _collateralIndex: BigNumberish,
        _collateralAmount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateOtcConfig"): TypedContractMethod<[_config: IOtc.OtcConfigStruct], [void], "nonpayable">;
    getFunction(nameOrSignature: "multicall"): TypedContractMethod<[data: BytesLike[]], [string[]], "nonpayable">;
    getFunction(nameOrSignature: "getNativeTransferEnabled"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "getNativeTransferGasLimit"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getReentrancyLock"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "initializeChainConfig"): TypedContractMethod<[
        _nativeTransferGasLimit: BigNumberish,
        _nativeTransferEnabled: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateNativeTransferEnabled"): TypedContractMethod<[
        _nativeTransferEnabled: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateNativeTransferGasLimit"): TypedContractMethod<[
        _nativeTransferGasLimit: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getEvent(key: "AccessControlUpdated"): TypedContractEvent<AccessControlUpdatedEvent.InputTuple, AccessControlUpdatedEvent.OutputTuple, AccessControlUpdatedEvent.OutputObject>;
    getEvent(key: "AddressesUpdated"): TypedContractEvent<AddressesUpdatedEvent.InputTuple, AddressesUpdatedEvent.OutputTuple, AddressesUpdatedEvent.OutputObject>;
    getEvent(key: "DiamondCut"): TypedContractEvent<DiamondCutEvent.InputTuple, DiamondCutEvent.OutputTuple, DiamondCutEvent.OutputObject>;
    getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    getEvent(key: "FeeAdded"): TypedContractEvent<FeeAddedEvent.InputTuple, FeeAddedEvent.OutputTuple, FeeAddedEvent.OutputObject>;
    getEvent(key: "FeeUpdated"): TypedContractEvent<FeeUpdatedEvent.InputTuple, FeeUpdatedEvent.OutputTuple, FeeUpdatedEvent.OutputObject>;
    getEvent(key: "GlobalTradeFeeParamsUpdated"): TypedContractEvent<GlobalTradeFeeParamsUpdatedEvent.InputTuple, GlobalTradeFeeParamsUpdatedEvent.OutputTuple, GlobalTradeFeeParamsUpdatedEvent.OutputObject>;
    getEvent(key: "GroupAdded"): TypedContractEvent<GroupAddedEvent.InputTuple, GroupAddedEvent.OutputTuple, GroupAddedEvent.OutputObject>;
    getEvent(key: "GroupLiquidationParamsUpdated"): TypedContractEvent<GroupLiquidationParamsUpdatedEvent.InputTuple, GroupLiquidationParamsUpdatedEvent.OutputTuple, GroupLiquidationParamsUpdatedEvent.OutputObject>;
    getEvent(key: "GroupUpdated"): TypedContractEvent<GroupUpdatedEvent.InputTuple, GroupUpdatedEvent.OutputTuple, GroupUpdatedEvent.OutputObject>;
    getEvent(key: "PairAdded"): TypedContractEvent<PairAddedEvent.InputTuple, PairAddedEvent.OutputTuple, PairAddedEvent.OutputObject>;
    getEvent(key: "PairCustomMaxLeverageUpdated"): TypedContractEvent<PairCustomMaxLeverageUpdatedEvent.InputTuple, PairCustomMaxLeverageUpdatedEvent.OutputTuple, PairCustomMaxLeverageUpdatedEvent.OutputObject>;
    getEvent(key: "PairUpdated"): TypedContractEvent<PairUpdatedEvent.InputTuple, PairUpdatedEvent.OutputTuple, PairUpdatedEvent.OutputObject>;
    getEvent(key: "AllyRewardDistributed"): TypedContractEvent<AllyRewardDistributedEvent.InputTuple, AllyRewardDistributedEvent.OutputTuple, AllyRewardDistributedEvent.OutputObject>;
    getEvent(key: "AllyRewardsClaimed"): TypedContractEvent<AllyRewardsClaimedEvent.InputTuple, AllyRewardsClaimedEvent.OutputTuple, AllyRewardsClaimedEvent.OutputObject>;
    getEvent(key: "AllyUnwhitelisted"): TypedContractEvent<AllyUnwhitelistedEvent.InputTuple, AllyUnwhitelistedEvent.OutputTuple, AllyUnwhitelistedEvent.OutputObject>;
    getEvent(key: "AllyWhitelisted"): TypedContractEvent<AllyWhitelistedEvent.InputTuple, AllyWhitelistedEvent.OutputTuple, AllyWhitelistedEvent.OutputObject>;
    getEvent(key: "OverrodeAllyFeeP"): TypedContractEvent<OverrodeAllyFeePEvent.InputTuple, OverrodeAllyFeePEvent.OutputTuple, OverrodeAllyFeePEvent.OutputObject>;
    getEvent(key: "OverrodeReferralFeeP"): TypedContractEvent<OverrodeReferralFeePEvent.InputTuple, OverrodeReferralFeePEvent.OutputTuple, OverrodeReferralFeePEvent.OutputObject>;
    getEvent(key: "ReferrerRegistered"): TypedContractEvent<ReferrerRegisteredEvent.InputTuple, ReferrerRegisteredEvent.OutputTuple, ReferrerRegisteredEvent.OutputObject>;
    getEvent(key: "ReferrerRewardDistributed"): TypedContractEvent<ReferrerRewardDistributedEvent.InputTuple, ReferrerRewardDistributedEvent.OutputTuple, ReferrerRewardDistributedEvent.OutputObject>;
    getEvent(key: "ReferrerRewardsClaimed"): TypedContractEvent<ReferrerRewardsClaimedEvent.InputTuple, ReferrerRewardsClaimedEvent.OutputTuple, ReferrerRewardsClaimedEvent.OutputObject>;
    getEvent(key: "ReferrerUnwhitelisted"): TypedContractEvent<ReferrerUnwhitelistedEvent.InputTuple, ReferrerUnwhitelistedEvent.OutputTuple, ReferrerUnwhitelistedEvent.OutputObject>;
    getEvent(key: "ReferrerWhitelisted"): TypedContractEvent<ReferrerWhitelistedEvent.InputTuple, ReferrerWhitelistedEvent.OutputTuple, ReferrerWhitelistedEvent.OutputObject>;
    getEvent(key: "UpdatedAllyFeeP"): TypedContractEvent<UpdatedAllyFeePEvent.InputTuple, UpdatedAllyFeePEvent.OutputTuple, UpdatedAllyFeePEvent.OutputObject>;
    getEvent(key: "UpdatedOpenFeeP"): TypedContractEvent<UpdatedOpenFeePEvent.InputTuple, UpdatedOpenFeePEvent.OutputTuple, UpdatedOpenFeePEvent.OutputObject>;
    getEvent(key: "UpdatedStartReferrerFeeP"): TypedContractEvent<UpdatedStartReferrerFeePEvent.InputTuple, UpdatedStartReferrerFeePEvent.OutputTuple, UpdatedStartReferrerFeePEvent.OutputObject>;
    getEvent(key: "UpdatedTargetVolumeUsd"): TypedContractEvent<UpdatedTargetVolumeUsdEvent.InputTuple, UpdatedTargetVolumeUsdEvent.OutputTuple, UpdatedTargetVolumeUsdEvent.OutputObject>;
    getEvent(key: "FeeTiersUpdated"): TypedContractEvent<FeeTiersUpdatedEvent.InputTuple, FeeTiersUpdatedEvent.OutputTuple, FeeTiersUpdatedEvent.OutputObject>;
    getEvent(key: "GroupVolumeMultipliersUpdated"): TypedContractEvent<GroupVolumeMultipliersUpdatedEvent.InputTuple, GroupVolumeMultipliersUpdatedEvent.OutputTuple, GroupVolumeMultipliersUpdatedEvent.OutputObject>;
    getEvent(key: "TraderDailyPointsIncreased"): TypedContractEvent<TraderDailyPointsIncreasedEvent.InputTuple, TraderDailyPointsIncreasedEvent.OutputTuple, TraderDailyPointsIncreasedEvent.OutputObject>;
    getEvent(key: "TraderEnrollmentUpdated"): TypedContractEvent<TraderEnrollmentUpdatedEvent.InputTuple, TraderEnrollmentUpdatedEvent.OutputTuple, TraderEnrollmentUpdatedEvent.OutputObject>;
    getEvent(key: "TraderFeeMultiplierCached"): TypedContractEvent<TraderFeeMultiplierCachedEvent.InputTuple, TraderFeeMultiplierCachedEvent.OutputTuple, TraderFeeMultiplierCachedEvent.OutputObject>;
    getEvent(key: "TraderInfoFirstUpdate"): TypedContractEvent<TraderInfoFirstUpdateEvent.InputTuple, TraderInfoFirstUpdateEvent.OutputTuple, TraderInfoFirstUpdateEvent.OutputObject>;
    getEvent(key: "TraderInfoUpdated"): TypedContractEvent<TraderInfoUpdatedEvent.InputTuple, TraderInfoUpdatedEvent.OutputTuple, TraderInfoUpdatedEvent.OutputObject>;
    getEvent(key: "TraderPointsCredited"): TypedContractEvent<TraderPointsCreditedEvent.InputTuple, TraderPointsCreditedEvent.OutputTuple, TraderPointsCreditedEvent.OutputObject>;
    getEvent(key: "TraderTrailingPointsExpired"): TypedContractEvent<TraderTrailingPointsExpiredEvent.InputTuple, TraderTrailingPointsExpiredEvent.OutputTuple, TraderTrailingPointsExpiredEvent.OutputObject>;
    getEvent(key: "TraderUnclaimedPointsClaimed"): TypedContractEvent<TraderUnclaimedPointsClaimedEvent.InputTuple, TraderUnclaimedPointsClaimedEvent.OutputTuple, TraderUnclaimedPointsClaimedEvent.OutputObject>;
    getEvent(key: "CumulativeFactorUpdated"): TypedContractEvent<CumulativeFactorUpdatedEvent.InputTuple, CumulativeFactorUpdatedEvent.OutputTuple, CumulativeFactorUpdatedEvent.OutputObject>;
    getEvent(key: "ExemptAfterProtectionCloseFactorUpdated"): TypedContractEvent<ExemptAfterProtectionCloseFactorUpdatedEvent.InputTuple, ExemptAfterProtectionCloseFactorUpdatedEvent.OutputTuple, ExemptAfterProtectionCloseFactorUpdatedEvent.OutputObject>;
    getEvent(key: "ExemptOnOpenUpdated"): TypedContractEvent<ExemptOnOpenUpdatedEvent.InputTuple, ExemptOnOpenUpdatedEvent.OutputTuple, ExemptOnOpenUpdatedEvent.OutputObject>;
    getEvent(key: "NegPnlCumulVolMultiplierUpdated"): TypedContractEvent<NegPnlCumulVolMultiplierUpdatedEvent.InputTuple, NegPnlCumulVolMultiplierUpdatedEvent.OutputTuple, NegPnlCumulVolMultiplierUpdatedEvent.OutputObject>;
    getEvent(key: "OiWindowsSettingsInitialized"): TypedContractEvent<OiWindowsSettingsInitializedEvent.InputTuple, OiWindowsSettingsInitializedEvent.OutputTuple, OiWindowsSettingsInitializedEvent.OutputObject>;
    getEvent(key: "OnePercentDepthUpdated"): TypedContractEvent<OnePercentDepthUpdatedEvent.InputTuple, OnePercentDepthUpdatedEvent.OutputTuple, OnePercentDepthUpdatedEvent.OutputObject>;
    getEvent(key: "PriceImpactOiTransferredPair"): TypedContractEvent<PriceImpactOiTransferredPairEvent.InputTuple, PriceImpactOiTransferredPairEvent.OutputTuple, PriceImpactOiTransferredPairEvent.OutputObject>;
    getEvent(key: "PriceImpactOiTransferredPairs"): TypedContractEvent<PriceImpactOiTransferredPairsEvent.InputTuple, PriceImpactOiTransferredPairsEvent.OutputTuple, PriceImpactOiTransferredPairsEvent.OutputObject>;
    getEvent(key: "PriceImpactOpenInterestAdded"): TypedContractEvent<PriceImpactOpenInterestAddedEvent.InputTuple, PriceImpactOpenInterestAddedEvent.OutputTuple, PriceImpactOpenInterestAddedEvent.OutputObject>;
    getEvent(key: "PriceImpactWindowsCountUpdated"): TypedContractEvent<PriceImpactWindowsCountUpdatedEvent.InputTuple, PriceImpactWindowsCountUpdatedEvent.OutputTuple, PriceImpactWindowsCountUpdatedEvent.OutputObject>;
    getEvent(key: "PriceImpactWindowsDurationUpdated"): TypedContractEvent<PriceImpactWindowsDurationUpdatedEvent.InputTuple, PriceImpactWindowsDurationUpdatedEvent.OutputTuple, PriceImpactWindowsDurationUpdatedEvent.OutputObject>;
    getEvent(key: "ProtectionCloseFactorBlocksUpdated"): TypedContractEvent<ProtectionCloseFactorBlocksUpdatedEvent.InputTuple, ProtectionCloseFactorBlocksUpdatedEvent.OutputTuple, ProtectionCloseFactorBlocksUpdatedEvent.OutputObject>;
    getEvent(key: "ProtectionCloseFactorUpdated"): TypedContractEvent<ProtectionCloseFactorUpdatedEvent.InputTuple, ProtectionCloseFactorUpdatedEvent.OutputTuple, ProtectionCloseFactorUpdatedEvent.OutputObject>;
    getEvent(key: "ProtectionCloseFactorWhitelistUpdated"): TypedContractEvent<ProtectionCloseFactorWhitelistUpdatedEvent.InputTuple, ProtectionCloseFactorWhitelistUpdatedEvent.OutputTuple, ProtectionCloseFactorWhitelistUpdatedEvent.OutputObject>;
    getEvent(key: "UserPriceImpactUpdated"): TypedContractEvent<UserPriceImpactUpdatedEvent.InputTuple, UserPriceImpactUpdatedEvent.OutputTuple, UserPriceImpactUpdatedEvent.OutputObject>;
    getEvent(key: "CollateralAdded"): TypedContractEvent<CollateralAddedEvent.InputTuple, CollateralAddedEvent.OutputTuple, CollateralAddedEvent.OutputObject>;
    getEvent(key: "CollateralDisabled"): TypedContractEvent<CollateralDisabledEvent.InputTuple, CollateralDisabledEvent.OutputTuple, CollateralDisabledEvent.OutputObject>;
    getEvent(key: "CollateralUpdated"): TypedContractEvent<CollateralUpdatedEvent.InputTuple, CollateralUpdatedEvent.OutputTuple, CollateralUpdatedEvent.OutputObject>;
    getEvent(key: "GTokenUpdated"): TypedContractEvent<GTokenUpdatedEvent.InputTuple, GTokenUpdatedEvent.OutputTuple, GTokenUpdatedEvent.OutputObject>;
    getEvent(key: "OpenOrderDetailsUpdated"): TypedContractEvent<OpenOrderDetailsUpdatedEvent.InputTuple, OpenOrderDetailsUpdatedEvent.OutputTuple, OpenOrderDetailsUpdatedEvent.OutputObject>;
    getEvent(key: "PendingOrderClosed"): TypedContractEvent<PendingOrderClosedEvent.InputTuple, PendingOrderClosedEvent.OutputTuple, PendingOrderClosedEvent.OutputObject>;
    getEvent(key: "PendingOrderStored"): TypedContractEvent<PendingOrderStoredEvent.InputTuple, PendingOrderStoredEvent.OutputTuple, PendingOrderStoredEvent.OutputObject>;
    getEvent(key: "TradeClosed"): TypedContractEvent<TradeClosedEvent.InputTuple, TradeClosedEvent.OutputTuple, TradeClosedEvent.OutputObject>;
    getEvent(key: "TradeCollateralUpdated"): TypedContractEvent<TradeCollateralUpdatedEvent.InputTuple, TradeCollateralUpdatedEvent.OutputTuple, TradeCollateralUpdatedEvent.OutputObject>;
    getEvent(key: "TradeMaxClosingSlippagePUpdated"): TypedContractEvent<TradeMaxClosingSlippagePUpdatedEvent.InputTuple, TradeMaxClosingSlippagePUpdatedEvent.OutputTuple, TradeMaxClosingSlippagePUpdatedEvent.OutputObject>;
    getEvent(key: "TradePositionUpdated"): TypedContractEvent<TradePositionUpdatedEvent.InputTuple, TradePositionUpdatedEvent.OutputTuple, TradePositionUpdatedEvent.OutputObject>;
    getEvent(key: "TradeSlUpdated"): TypedContractEvent<TradeSlUpdatedEvent.InputTuple, TradeSlUpdatedEvent.OutputTuple, TradeSlUpdatedEvent.OutputObject>;
    getEvent(key: "TradeStored"): TypedContractEvent<TradeStoredEvent.InputTuple, TradeStoredEvent.OutputTuple, TradeStoredEvent.OutputObject>;
    getEvent(key: "TradeTpUpdated"): TypedContractEvent<TradeTpUpdatedEvent.InputTuple, TradeTpUpdatedEvent.OutputTuple, TradeTpUpdatedEvent.OutputObject>;
    getEvent(key: "TradingActivatedUpdated"): TypedContractEvent<TradingActivatedUpdatedEvent.InputTuple, TradingActivatedUpdatedEvent.OutputTuple, TradingActivatedUpdatedEvent.OutputObject>;
    getEvent(key: "TriggerRewarded"): TypedContractEvent<TriggerRewardedEvent.InputTuple, TriggerRewardedEvent.OutputTuple, TriggerRewardedEvent.OutputObject>;
    getEvent(key: "TriggerRewardsClaimed"): TypedContractEvent<TriggerRewardsClaimedEvent.InputTuple, TriggerRewardsClaimedEvent.OutputTuple, TriggerRewardsClaimedEvent.OutputObject>;
    getEvent(key: "TriggerTimeoutBlocksUpdated"): TypedContractEvent<TriggerTimeoutBlocksUpdatedEvent.InputTuple, TriggerTimeoutBlocksUpdatedEvent.OutputTuple, TriggerTimeoutBlocksUpdatedEvent.OutputObject>;
    getEvent(key: "ByPassTriggerLinkUpdated"): TypedContractEvent<ByPassTriggerLinkUpdatedEvent.InputTuple, ByPassTriggerLinkUpdatedEvent.OutputTuple, ByPassTriggerLinkUpdatedEvent.OutputObject>;
    getEvent(key: "ChainlinkCallbackTimeout"): TypedContractEvent<ChainlinkCallbackTimeoutEvent.InputTuple, ChainlinkCallbackTimeoutEvent.OutputTuple, ChainlinkCallbackTimeoutEvent.OutputObject>;
    getEvent(key: "CouldNotCloseTrade"): TypedContractEvent<CouldNotCloseTradeEvent.InputTuple, CouldNotCloseTradeEvent.OutputTuple, CouldNotCloseTradeEvent.OutputObject>;
    getEvent(key: "LeverageUpdateExecuted"): TypedContractEvent<LeverageUpdateExecutedEvent.InputTuple, LeverageUpdateExecutedEvent.OutputTuple, LeverageUpdateExecutedEvent.OutputObject>;
    getEvent(key: "LeverageUpdateInitiated"): TypedContractEvent<LeverageUpdateInitiatedEvent.InputTuple, LeverageUpdateInitiatedEvent.OutputTuple, LeverageUpdateInitiatedEvent.OutputObject>;
    getEvent(key: "MarketOrderInitiated"): TypedContractEvent<MarketOrderInitiatedEvent.InputTuple, MarketOrderInitiatedEvent.OutputTuple, MarketOrderInitiatedEvent.OutputObject>;
    getEvent(key: "MarketOrdersTimeoutBlocksUpdated"): TypedContractEvent<MarketOrdersTimeoutBlocksUpdatedEvent.InputTuple, MarketOrdersTimeoutBlocksUpdatedEvent.OutputTuple, MarketOrdersTimeoutBlocksUpdatedEvent.OutputObject>;
    getEvent(key: "NativeTokenWrapped"): TypedContractEvent<NativeTokenWrappedEvent.InputTuple, NativeTokenWrappedEvent.OutputTuple, NativeTokenWrappedEvent.OutputObject>;
    getEvent(key: "OpenLimitCanceled"): TypedContractEvent<OpenLimitCanceledEvent.InputTuple, OpenLimitCanceledEvent.OutputTuple, OpenLimitCanceledEvent.OutputObject>;
    getEvent(key: "OpenLimitUpdated"): TypedContractEvent<OpenLimitUpdatedEvent.InputTuple, OpenLimitUpdatedEvent.OutputTuple, OpenLimitUpdatedEvent.OutputObject>;
    getEvent(key: "OpenOrderPlaced"): TypedContractEvent<OpenOrderPlacedEvent.InputTuple, OpenOrderPlacedEvent.OutputTuple, OpenOrderPlacedEvent.OutputObject>;
    getEvent(key: "PositionSizeDecreaseExecuted"): TypedContractEvent<PositionSizeDecreaseExecutedEvent.InputTuple, PositionSizeDecreaseExecutedEvent.OutputTuple, PositionSizeDecreaseExecutedEvent.OutputObject>;
    getEvent(key: "PositionSizeIncreaseExecuted"): TypedContractEvent<PositionSizeIncreaseExecutedEvent.InputTuple, PositionSizeIncreaseExecutedEvent.OutputTuple, PositionSizeIncreaseExecutedEvent.OutputObject>;
    getEvent(key: "PositionSizeUpdateInitiated"): TypedContractEvent<PositionSizeUpdateInitiatedEvent.InputTuple, PositionSizeUpdateInitiatedEvent.OutputTuple, PositionSizeUpdateInitiatedEvent.OutputObject>;
    getEvent(key: "TriggerOrderInitiated"): TypedContractEvent<TriggerOrderInitiatedEvent.InputTuple, TriggerOrderInitiatedEvent.OutputTuple, TriggerOrderInitiatedEvent.OutputObject>;
    getEvent(key: "BorrowingFeeCharged"): TypedContractEvent<BorrowingFeeChargedEvent.InputTuple, BorrowingFeeChargedEvent.OutputTuple, BorrowingFeeChargedEvent.OutputObject>;
    getEvent(key: "GTokenFeeCharged"): TypedContractEvent<GTokenFeeChargedEvent.InputTuple, GTokenFeeChargedEvent.OutputTuple, GTokenFeeChargedEvent.OutputObject>;
    getEvent(key: "GnsOtcFeeCharged"): TypedContractEvent<GnsOtcFeeChargedEvent.InputTuple, GnsOtcFeeChargedEvent.OutputTuple, GnsOtcFeeChargedEvent.OutputObject>;
    getEvent(key: "GovFeeCharged"): TypedContractEvent<GovFeeChargedEvent.InputTuple, GovFeeChargedEvent.OutputTuple, GovFeeChargedEvent.OutputObject>;
    getEvent(key: "LimitExecuted"): TypedContractEvent<LimitExecutedEvent.InputTuple, LimitExecutedEvent.OutputTuple, LimitExecutedEvent.OutputObject>;
    getEvent(key: "MarketCloseCanceled"): TypedContractEvent<MarketCloseCanceledEvent.InputTuple, MarketCloseCanceledEvent.OutputTuple, MarketCloseCanceledEvent.OutputObject>;
    getEvent(key: "MarketExecuted"): TypedContractEvent<MarketExecutedEvent.InputTuple, MarketExecutedEvent.OutputTuple, MarketExecutedEvent.OutputObject>;
    getEvent(key: "MarketOpenCanceled"): TypedContractEvent<MarketOpenCanceledEvent.InputTuple, MarketOpenCanceledEvent.OutputTuple, MarketOpenCanceledEvent.OutputObject>;
    getEvent(key: "PendingGovFeesClaimed"): TypedContractEvent<PendingGovFeesClaimedEvent.InputTuple, PendingGovFeesClaimedEvent.OutputTuple, PendingGovFeesClaimedEvent.OutputObject>;
    getEvent(key: "ReferralFeeCharged"): TypedContractEvent<ReferralFeeChargedEvent.InputTuple, ReferralFeeChargedEvent.OutputTuple, ReferralFeeChargedEvent.OutputObject>;
    getEvent(key: "TriggerFeeCharged"): TypedContractEvent<TriggerFeeChargedEvent.InputTuple, TriggerFeeChargedEvent.OutputTuple, TriggerFeeChargedEvent.OutputObject>;
    getEvent(key: "TriggerOrderCanceled"): TypedContractEvent<TriggerOrderCanceledEvent.InputTuple, TriggerOrderCanceledEvent.OutputTuple, TriggerOrderCanceledEvent.OutputObject>;
    getEvent(key: "VaultClosingFeePUpdated"): TypedContractEvent<VaultClosingFeePUpdatedEvent.InputTuple, VaultClosingFeePUpdatedEvent.OutputTuple, VaultClosingFeePUpdatedEvent.OutputObject>;
    getEvent(key: "BorrowingFeePerBlockCapUpdated"): TypedContractEvent<BorrowingFeePerBlockCapUpdatedEvent.InputTuple, BorrowingFeePerBlockCapUpdatedEvent.OutputTuple, BorrowingFeePerBlockCapUpdatedEvent.OutputObject>;
    getEvent(key: "BorrowingGroupAccFeesUpdated"): TypedContractEvent<BorrowingGroupAccFeesUpdatedEvent.InputTuple, BorrowingGroupAccFeesUpdatedEvent.OutputTuple, BorrowingGroupAccFeesUpdatedEvent.OutputObject>;
    getEvent(key: "BorrowingGroupOiUpdated"): TypedContractEvent<BorrowingGroupOiUpdatedEvent.InputTuple, BorrowingGroupOiUpdatedEvent.OutputTuple, BorrowingGroupOiUpdatedEvent.OutputObject>;
    getEvent(key: "BorrowingGroupUpdated"): TypedContractEvent<BorrowingGroupUpdatedEvent.InputTuple, BorrowingGroupUpdatedEvent.OutputTuple, BorrowingGroupUpdatedEvent.OutputObject>;
    getEvent(key: "BorrowingInitialAccFeesStored"): TypedContractEvent<BorrowingInitialAccFeesStoredEvent.InputTuple, BorrowingInitialAccFeesStoredEvent.OutputTuple, BorrowingInitialAccFeesStoredEvent.OutputObject>;
    getEvent(key: "BorrowingPairAccFeesUpdated"): TypedContractEvent<BorrowingPairAccFeesUpdatedEvent.InputTuple, BorrowingPairAccFeesUpdatedEvent.OutputTuple, BorrowingPairAccFeesUpdatedEvent.OutputObject>;
    getEvent(key: "BorrowingPairFeePerBlockCapUpdated"): TypedContractEvent<BorrowingPairFeePerBlockCapUpdatedEvent.InputTuple, BorrowingPairFeePerBlockCapUpdatedEvent.OutputTuple, BorrowingPairFeePerBlockCapUpdatedEvent.OutputObject>;
    getEvent(key: "BorrowingPairGroupUpdated"): TypedContractEvent<BorrowingPairGroupUpdatedEvent.InputTuple, BorrowingPairGroupUpdatedEvent.OutputTuple, BorrowingPairGroupUpdatedEvent.OutputObject>;
    getEvent(key: "BorrowingPairOiUpdated"): TypedContractEvent<BorrowingPairOiUpdatedEvent.InputTuple, BorrowingPairOiUpdatedEvent.OutputTuple, BorrowingPairOiUpdatedEvent.OutputObject>;
    getEvent(key: "BorrowingPairParamsUpdated"): TypedContractEvent<BorrowingPairParamsUpdatedEvent.InputTuple, BorrowingPairParamsUpdatedEvent.OutputTuple, BorrowingPairParamsUpdatedEvent.OutputObject>;
    getEvent(key: "TradeBorrowingCallbackHandled"): TypedContractEvent<TradeBorrowingCallbackHandledEvent.InputTuple, TradeBorrowingCallbackHandledEvent.OutputTuple, TradeBorrowingCallbackHandledEvent.OutputObject>;
    getEvent(key: "CollateralGnsLiquidityPoolUpdated"): TypedContractEvent<CollateralGnsLiquidityPoolUpdatedEvent.InputTuple, CollateralGnsLiquidityPoolUpdatedEvent.OutputTuple, CollateralGnsLiquidityPoolUpdatedEvent.OutputObject>;
    getEvent(key: "CollateralUsdPriceFeedUpdated"): TypedContractEvent<CollateralUsdPriceFeedUpdatedEvent.InputTuple, CollateralUsdPriceFeedUpdatedEvent.OutputTuple, CollateralUsdPriceFeedUpdatedEvent.OutputObject>;
    getEvent(key: "JobIdUpdated"): TypedContractEvent<JobIdUpdatedEvent.InputTuple, JobIdUpdatedEvent.OutputTuple, JobIdUpdatedEvent.OutputObject>;
    getEvent(key: "LimitJobCountUpdated"): TypedContractEvent<LimitJobCountUpdatedEvent.InputTuple, LimitJobCountUpdatedEvent.OutputTuple, LimitJobCountUpdatedEvent.OutputObject>;
    getEvent(key: "LinkClaimedBack"): TypedContractEvent<LinkClaimedBackEvent.InputTuple, LinkClaimedBackEvent.OutputTuple, LinkClaimedBackEvent.OutputObject>;
    getEvent(key: "LinkRequestCreated"): TypedContractEvent<LinkRequestCreatedEvent.InputTuple, LinkRequestCreatedEvent.OutputTuple, LinkRequestCreatedEvent.OutputObject>;
    getEvent(key: "LinkUsdPriceFeedUpdated"): TypedContractEvent<LinkUsdPriceFeedUpdatedEvent.InputTuple, LinkUsdPriceFeedUpdatedEvent.OutputTuple, LinkUsdPriceFeedUpdatedEvent.OutputObject>;
    getEvent(key: "MaxLookbackDeviationPUpdated"): TypedContractEvent<MaxLookbackDeviationPUpdatedEvent.InputTuple, MaxLookbackDeviationPUpdatedEvent.OutputTuple, MaxLookbackDeviationPUpdatedEvent.OutputObject>;
    getEvent(key: "MaxMarketDeviationPUpdated"): TypedContractEvent<MaxMarketDeviationPUpdatedEvent.InputTuple, MaxMarketDeviationPUpdatedEvent.OutputTuple, MaxMarketDeviationPUpdatedEvent.OutputObject>;
    getEvent(key: "MinAnswersUpdated"): TypedContractEvent<MinAnswersUpdatedEvent.InputTuple, MinAnswersUpdatedEvent.OutputTuple, MinAnswersUpdatedEvent.OutputObject>;
    getEvent(key: "OracleAdded"): TypedContractEvent<OracleAddedEvent.InputTuple, OracleAddedEvent.OutputTuple, OracleAddedEvent.OutputObject>;
    getEvent(key: "OracleRemoved"): TypedContractEvent<OracleRemovedEvent.InputTuple, OracleRemovedEvent.OutputTuple, OracleRemovedEvent.OutputObject>;
    getEvent(key: "OracleReplaced"): TypedContractEvent<OracleReplacedEvent.InputTuple, OracleReplacedEvent.OutputTuple, OracleReplacedEvent.OutputObject>;
    getEvent(key: "PriceReceived"): TypedContractEvent<PriceReceivedEvent.InputTuple, PriceReceivedEvent.OutputTuple, PriceReceivedEvent.OutputObject>;
    getEvent(key: "PriceRequested"): TypedContractEvent<PriceRequestedEvent.InputTuple, PriceRequestedEvent.OutputTuple, PriceRequestedEvent.OutputObject>;
    getEvent(key: "TradingCallbackExecuted"): TypedContractEvent<TradingCallbackExecutedEvent.InputTuple, TradingCallbackExecutedEvent.OutputTuple, TradingCallbackExecutedEvent.OutputObject>;
    getEvent(key: "TwapIntervalUpdated"): TypedContractEvent<TwapIntervalUpdatedEvent.InputTuple, TwapIntervalUpdatedEvent.OutputTuple, TwapIntervalUpdatedEvent.OutputObject>;
    getEvent(key: "OtcBalanceUpdated"): TypedContractEvent<OtcBalanceUpdatedEvent.InputTuple, OtcBalanceUpdatedEvent.OutputTuple, OtcBalanceUpdatedEvent.OutputObject>;
    getEvent(key: "OtcConfigUpdated"): TypedContractEvent<OtcConfigUpdatedEvent.InputTuple, OtcConfigUpdatedEvent.OutputTuple, OtcConfigUpdatedEvent.OutputObject>;
    getEvent(key: "OtcExecuted"): TypedContractEvent<OtcExecutedEvent.InputTuple, OtcExecutedEvent.OutputTuple, OtcExecutedEvent.OutputObject>;
    getEvent(key: "NativeTransferEnabledUpdated"): TypedContractEvent<NativeTransferEnabledUpdatedEvent.InputTuple, NativeTransferEnabledUpdatedEvent.OutputTuple, NativeTransferEnabledUpdatedEvent.OutputObject>;
    getEvent(key: "NativeTransferGasLimitUpdated"): TypedContractEvent<NativeTransferGasLimitUpdatedEvent.InputTuple, NativeTransferGasLimitUpdatedEvent.OutputTuple, NativeTransferGasLimitUpdatedEvent.OutputObject>;
    filters: {
        "AccessControlUpdated(address,uint8,bool)": TypedContractEvent<AccessControlUpdatedEvent.InputTuple, AccessControlUpdatedEvent.OutputTuple, AccessControlUpdatedEvent.OutputObject>;
        AccessControlUpdated: TypedContractEvent<AccessControlUpdatedEvent.InputTuple, AccessControlUpdatedEvent.OutputTuple, AccessControlUpdatedEvent.OutputObject>;
        "AddressesUpdated(tuple)": TypedContractEvent<AddressesUpdatedEvent.InputTuple, AddressesUpdatedEvent.OutputTuple, AddressesUpdatedEvent.OutputObject>;
        AddressesUpdated: TypedContractEvent<AddressesUpdatedEvent.InputTuple, AddressesUpdatedEvent.OutputTuple, AddressesUpdatedEvent.OutputObject>;
        "DiamondCut(tuple[],address,bytes)": TypedContractEvent<DiamondCutEvent.InputTuple, DiamondCutEvent.OutputTuple, DiamondCutEvent.OutputObject>;
        DiamondCut: TypedContractEvent<DiamondCutEvent.InputTuple, DiamondCutEvent.OutputTuple, DiamondCutEvent.OutputObject>;
        "Initialized(uint8)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        "FeeAdded(uint256,tuple)": TypedContractEvent<FeeAddedEvent.InputTuple, FeeAddedEvent.OutputTuple, FeeAddedEvent.OutputObject>;
        FeeAdded: TypedContractEvent<FeeAddedEvent.InputTuple, FeeAddedEvent.OutputTuple, FeeAddedEvent.OutputObject>;
        "FeeUpdated(uint256,tuple)": TypedContractEvent<FeeUpdatedEvent.InputTuple, FeeUpdatedEvent.OutputTuple, FeeUpdatedEvent.OutputObject>;
        FeeUpdated: TypedContractEvent<FeeUpdatedEvent.InputTuple, FeeUpdatedEvent.OutputTuple, FeeUpdatedEvent.OutputObject>;
        "GlobalTradeFeeParamsUpdated(tuple)": TypedContractEvent<GlobalTradeFeeParamsUpdatedEvent.InputTuple, GlobalTradeFeeParamsUpdatedEvent.OutputTuple, GlobalTradeFeeParamsUpdatedEvent.OutputObject>;
        GlobalTradeFeeParamsUpdated: TypedContractEvent<GlobalTradeFeeParamsUpdatedEvent.InputTuple, GlobalTradeFeeParamsUpdatedEvent.OutputTuple, GlobalTradeFeeParamsUpdatedEvent.OutputObject>;
        "GroupAdded(uint256,string)": TypedContractEvent<GroupAddedEvent.InputTuple, GroupAddedEvent.OutputTuple, GroupAddedEvent.OutputObject>;
        GroupAdded: TypedContractEvent<GroupAddedEvent.InputTuple, GroupAddedEvent.OutputTuple, GroupAddedEvent.OutputObject>;
        "GroupLiquidationParamsUpdated(uint256,tuple)": TypedContractEvent<GroupLiquidationParamsUpdatedEvent.InputTuple, GroupLiquidationParamsUpdatedEvent.OutputTuple, GroupLiquidationParamsUpdatedEvent.OutputObject>;
        GroupLiquidationParamsUpdated: TypedContractEvent<GroupLiquidationParamsUpdatedEvent.InputTuple, GroupLiquidationParamsUpdatedEvent.OutputTuple, GroupLiquidationParamsUpdatedEvent.OutputObject>;
        "GroupUpdated(uint256)": TypedContractEvent<GroupUpdatedEvent.InputTuple, GroupUpdatedEvent.OutputTuple, GroupUpdatedEvent.OutputObject>;
        GroupUpdated: TypedContractEvent<GroupUpdatedEvent.InputTuple, GroupUpdatedEvent.OutputTuple, GroupUpdatedEvent.OutputObject>;
        "PairAdded(uint256,string,string)": TypedContractEvent<PairAddedEvent.InputTuple, PairAddedEvent.OutputTuple, PairAddedEvent.OutputObject>;
        PairAdded: TypedContractEvent<PairAddedEvent.InputTuple, PairAddedEvent.OutputTuple, PairAddedEvent.OutputObject>;
        "PairCustomMaxLeverageUpdated(uint256,uint256)": TypedContractEvent<PairCustomMaxLeverageUpdatedEvent.InputTuple, PairCustomMaxLeverageUpdatedEvent.OutputTuple, PairCustomMaxLeverageUpdatedEvent.OutputObject>;
        PairCustomMaxLeverageUpdated: TypedContractEvent<PairCustomMaxLeverageUpdatedEvent.InputTuple, PairCustomMaxLeverageUpdatedEvent.OutputTuple, PairCustomMaxLeverageUpdatedEvent.OutputObject>;
        "PairUpdated(uint256)": TypedContractEvent<PairUpdatedEvent.InputTuple, PairUpdatedEvent.OutputTuple, PairUpdatedEvent.OutputObject>;
        PairUpdated: TypedContractEvent<PairUpdatedEvent.InputTuple, PairUpdatedEvent.OutputTuple, PairUpdatedEvent.OutputObject>;
        "AllyRewardDistributed(address,address,uint256,uint256,uint256)": TypedContractEvent<AllyRewardDistributedEvent.InputTuple, AllyRewardDistributedEvent.OutputTuple, AllyRewardDistributedEvent.OutputObject>;
        AllyRewardDistributed: TypedContractEvent<AllyRewardDistributedEvent.InputTuple, AllyRewardDistributedEvent.OutputTuple, AllyRewardDistributedEvent.OutputObject>;
        "AllyRewardsClaimed(address,uint256)": TypedContractEvent<AllyRewardsClaimedEvent.InputTuple, AllyRewardsClaimedEvent.OutputTuple, AllyRewardsClaimedEvent.OutputObject>;
        AllyRewardsClaimed: TypedContractEvent<AllyRewardsClaimedEvent.InputTuple, AllyRewardsClaimedEvent.OutputTuple, AllyRewardsClaimedEvent.OutputObject>;
        "AllyUnwhitelisted(address)": TypedContractEvent<AllyUnwhitelistedEvent.InputTuple, AllyUnwhitelistedEvent.OutputTuple, AllyUnwhitelistedEvent.OutputObject>;
        AllyUnwhitelisted: TypedContractEvent<AllyUnwhitelistedEvent.InputTuple, AllyUnwhitelistedEvent.OutputTuple, AllyUnwhitelistedEvent.OutputObject>;
        "AllyWhitelisted(address)": TypedContractEvent<AllyWhitelistedEvent.InputTuple, AllyWhitelistedEvent.OutputTuple, AllyWhitelistedEvent.OutputObject>;
        AllyWhitelisted: TypedContractEvent<AllyWhitelistedEvent.InputTuple, AllyWhitelistedEvent.OutputTuple, AllyWhitelistedEvent.OutputObject>;
        "OverrodeAllyFeeP(address,uint24)": TypedContractEvent<OverrodeAllyFeePEvent.InputTuple, OverrodeAllyFeePEvent.OutputTuple, OverrodeAllyFeePEvent.OutputObject>;
        OverrodeAllyFeeP: TypedContractEvent<OverrodeAllyFeePEvent.InputTuple, OverrodeAllyFeePEvent.OutputTuple, OverrodeAllyFeePEvent.OutputObject>;
        "OverrodeReferralFeeP(address,uint24)": TypedContractEvent<OverrodeReferralFeePEvent.InputTuple, OverrodeReferralFeePEvent.OutputTuple, OverrodeReferralFeePEvent.OutputObject>;
        OverrodeReferralFeeP: TypedContractEvent<OverrodeReferralFeePEvent.InputTuple, OverrodeReferralFeePEvent.OutputTuple, OverrodeReferralFeePEvent.OutputObject>;
        "ReferrerRegistered(address,address)": TypedContractEvent<ReferrerRegisteredEvent.InputTuple, ReferrerRegisteredEvent.OutputTuple, ReferrerRegisteredEvent.OutputObject>;
        ReferrerRegistered: TypedContractEvent<ReferrerRegisteredEvent.InputTuple, ReferrerRegisteredEvent.OutputTuple, ReferrerRegisteredEvent.OutputObject>;
        "ReferrerRewardDistributed(address,address,uint256,uint256,uint256)": TypedContractEvent<ReferrerRewardDistributedEvent.InputTuple, ReferrerRewardDistributedEvent.OutputTuple, ReferrerRewardDistributedEvent.OutputObject>;
        ReferrerRewardDistributed: TypedContractEvent<ReferrerRewardDistributedEvent.InputTuple, ReferrerRewardDistributedEvent.OutputTuple, ReferrerRewardDistributedEvent.OutputObject>;
        "ReferrerRewardsClaimed(address,uint256)": TypedContractEvent<ReferrerRewardsClaimedEvent.InputTuple, ReferrerRewardsClaimedEvent.OutputTuple, ReferrerRewardsClaimedEvent.OutputObject>;
        ReferrerRewardsClaimed: TypedContractEvent<ReferrerRewardsClaimedEvent.InputTuple, ReferrerRewardsClaimedEvent.OutputTuple, ReferrerRewardsClaimedEvent.OutputObject>;
        "ReferrerUnwhitelisted(address)": TypedContractEvent<ReferrerUnwhitelistedEvent.InputTuple, ReferrerUnwhitelistedEvent.OutputTuple, ReferrerUnwhitelistedEvent.OutputObject>;
        ReferrerUnwhitelisted: TypedContractEvent<ReferrerUnwhitelistedEvent.InputTuple, ReferrerUnwhitelistedEvent.OutputTuple, ReferrerUnwhitelistedEvent.OutputObject>;
        "ReferrerWhitelisted(address,address)": TypedContractEvent<ReferrerWhitelistedEvent.InputTuple, ReferrerWhitelistedEvent.OutputTuple, ReferrerWhitelistedEvent.OutputObject>;
        ReferrerWhitelisted: TypedContractEvent<ReferrerWhitelistedEvent.InputTuple, ReferrerWhitelistedEvent.OutputTuple, ReferrerWhitelistedEvent.OutputObject>;
        "UpdatedAllyFeeP(uint256)": TypedContractEvent<UpdatedAllyFeePEvent.InputTuple, UpdatedAllyFeePEvent.OutputTuple, UpdatedAllyFeePEvent.OutputObject>;
        UpdatedAllyFeeP: TypedContractEvent<UpdatedAllyFeePEvent.InputTuple, UpdatedAllyFeePEvent.OutputTuple, UpdatedAllyFeePEvent.OutputObject>;
        "UpdatedOpenFeeP(uint256)": TypedContractEvent<UpdatedOpenFeePEvent.InputTuple, UpdatedOpenFeePEvent.OutputTuple, UpdatedOpenFeePEvent.OutputObject>;
        UpdatedOpenFeeP: TypedContractEvent<UpdatedOpenFeePEvent.InputTuple, UpdatedOpenFeePEvent.OutputTuple, UpdatedOpenFeePEvent.OutputObject>;
        "UpdatedStartReferrerFeeP(uint256)": TypedContractEvent<UpdatedStartReferrerFeePEvent.InputTuple, UpdatedStartReferrerFeePEvent.OutputTuple, UpdatedStartReferrerFeePEvent.OutputObject>;
        UpdatedStartReferrerFeeP: TypedContractEvent<UpdatedStartReferrerFeePEvent.InputTuple, UpdatedStartReferrerFeePEvent.OutputTuple, UpdatedStartReferrerFeePEvent.OutputObject>;
        "UpdatedTargetVolumeUsd(uint256)": TypedContractEvent<UpdatedTargetVolumeUsdEvent.InputTuple, UpdatedTargetVolumeUsdEvent.OutputTuple, UpdatedTargetVolumeUsdEvent.OutputObject>;
        UpdatedTargetVolumeUsd: TypedContractEvent<UpdatedTargetVolumeUsdEvent.InputTuple, UpdatedTargetVolumeUsdEvent.OutputTuple, UpdatedTargetVolumeUsdEvent.OutputObject>;
        "FeeTiersUpdated(uint256[],tuple[])": TypedContractEvent<FeeTiersUpdatedEvent.InputTuple, FeeTiersUpdatedEvent.OutputTuple, FeeTiersUpdatedEvent.OutputObject>;
        FeeTiersUpdated: TypedContractEvent<FeeTiersUpdatedEvent.InputTuple, FeeTiersUpdatedEvent.OutputTuple, FeeTiersUpdatedEvent.OutputObject>;
        "GroupVolumeMultipliersUpdated(uint256[],uint256[])": TypedContractEvent<GroupVolumeMultipliersUpdatedEvent.InputTuple, GroupVolumeMultipliersUpdatedEvent.OutputTuple, GroupVolumeMultipliersUpdatedEvent.OutputObject>;
        GroupVolumeMultipliersUpdated: TypedContractEvent<GroupVolumeMultipliersUpdatedEvent.InputTuple, GroupVolumeMultipliersUpdatedEvent.OutputTuple, GroupVolumeMultipliersUpdatedEvent.OutputObject>;
        "TraderDailyPointsIncreased(address,uint32,uint224)": TypedContractEvent<TraderDailyPointsIncreasedEvent.InputTuple, TraderDailyPointsIncreasedEvent.OutputTuple, TraderDailyPointsIncreasedEvent.OutputObject>;
        TraderDailyPointsIncreased: TypedContractEvent<TraderDailyPointsIncreasedEvent.InputTuple, TraderDailyPointsIncreasedEvent.OutputTuple, TraderDailyPointsIncreasedEvent.OutputObject>;
        "TraderEnrollmentUpdated(address,tuple)": TypedContractEvent<TraderEnrollmentUpdatedEvent.InputTuple, TraderEnrollmentUpdatedEvent.OutputTuple, TraderEnrollmentUpdatedEvent.OutputObject>;
        TraderEnrollmentUpdated: TypedContractEvent<TraderEnrollmentUpdatedEvent.InputTuple, TraderEnrollmentUpdatedEvent.OutputTuple, TraderEnrollmentUpdatedEvent.OutputObject>;
        "TraderFeeMultiplierCached(address,uint32,uint32)": TypedContractEvent<TraderFeeMultiplierCachedEvent.InputTuple, TraderFeeMultiplierCachedEvent.OutputTuple, TraderFeeMultiplierCachedEvent.OutputObject>;
        TraderFeeMultiplierCached: TypedContractEvent<TraderFeeMultiplierCachedEvent.InputTuple, TraderFeeMultiplierCachedEvent.OutputTuple, TraderFeeMultiplierCachedEvent.OutputObject>;
        "TraderInfoFirstUpdate(address,uint32)": TypedContractEvent<TraderInfoFirstUpdateEvent.InputTuple, TraderInfoFirstUpdateEvent.OutputTuple, TraderInfoFirstUpdateEvent.OutputObject>;
        TraderInfoFirstUpdate: TypedContractEvent<TraderInfoFirstUpdateEvent.InputTuple, TraderInfoFirstUpdateEvent.OutputTuple, TraderInfoFirstUpdateEvent.OutputObject>;
        "TraderInfoUpdated(address,tuple)": TypedContractEvent<TraderInfoUpdatedEvent.InputTuple, TraderInfoUpdatedEvent.OutputTuple, TraderInfoUpdatedEvent.OutputObject>;
        TraderInfoUpdated: TypedContractEvent<TraderInfoUpdatedEvent.InputTuple, TraderInfoUpdatedEvent.OutputTuple, TraderInfoUpdatedEvent.OutputObject>;
        "TraderPointsCredited(address,uint32,uint8,uint224)": TypedContractEvent<TraderPointsCreditedEvent.InputTuple, TraderPointsCreditedEvent.OutputTuple, TraderPointsCreditedEvent.OutputObject>;
        TraderPointsCredited: TypedContractEvent<TraderPointsCreditedEvent.InputTuple, TraderPointsCreditedEvent.OutputTuple, TraderPointsCreditedEvent.OutputObject>;
        "TraderTrailingPointsExpired(address,uint32,uint32,uint224)": TypedContractEvent<TraderTrailingPointsExpiredEvent.InputTuple, TraderTrailingPointsExpiredEvent.OutputTuple, TraderTrailingPointsExpiredEvent.OutputObject>;
        TraderTrailingPointsExpired: TypedContractEvent<TraderTrailingPointsExpiredEvent.InputTuple, TraderTrailingPointsExpiredEvent.OutputTuple, TraderTrailingPointsExpiredEvent.OutputObject>;
        "TraderUnclaimedPointsClaimed(address,uint32,uint224)": TypedContractEvent<TraderUnclaimedPointsClaimedEvent.InputTuple, TraderUnclaimedPointsClaimedEvent.OutputTuple, TraderUnclaimedPointsClaimedEvent.OutputObject>;
        TraderUnclaimedPointsClaimed: TypedContractEvent<TraderUnclaimedPointsClaimedEvent.InputTuple, TraderUnclaimedPointsClaimedEvent.OutputTuple, TraderUnclaimedPointsClaimedEvent.OutputObject>;
        "CumulativeFactorUpdated(uint256,uint40)": TypedContractEvent<CumulativeFactorUpdatedEvent.InputTuple, CumulativeFactorUpdatedEvent.OutputTuple, CumulativeFactorUpdatedEvent.OutputObject>;
        CumulativeFactorUpdated: TypedContractEvent<CumulativeFactorUpdatedEvent.InputTuple, CumulativeFactorUpdatedEvent.OutputTuple, CumulativeFactorUpdatedEvent.OutputObject>;
        "ExemptAfterProtectionCloseFactorUpdated(uint256,bool)": TypedContractEvent<ExemptAfterProtectionCloseFactorUpdatedEvent.InputTuple, ExemptAfterProtectionCloseFactorUpdatedEvent.OutputTuple, ExemptAfterProtectionCloseFactorUpdatedEvent.OutputObject>;
        ExemptAfterProtectionCloseFactorUpdated: TypedContractEvent<ExemptAfterProtectionCloseFactorUpdatedEvent.InputTuple, ExemptAfterProtectionCloseFactorUpdatedEvent.OutputTuple, ExemptAfterProtectionCloseFactorUpdatedEvent.OutputObject>;
        "ExemptOnOpenUpdated(uint256,bool)": TypedContractEvent<ExemptOnOpenUpdatedEvent.InputTuple, ExemptOnOpenUpdatedEvent.OutputTuple, ExemptOnOpenUpdatedEvent.OutputObject>;
        ExemptOnOpenUpdated: TypedContractEvent<ExemptOnOpenUpdatedEvent.InputTuple, ExemptOnOpenUpdatedEvent.OutputTuple, ExemptOnOpenUpdatedEvent.OutputObject>;
        "NegPnlCumulVolMultiplierUpdated(uint40)": TypedContractEvent<NegPnlCumulVolMultiplierUpdatedEvent.InputTuple, NegPnlCumulVolMultiplierUpdatedEvent.OutputTuple, NegPnlCumulVolMultiplierUpdatedEvent.OutputObject>;
        NegPnlCumulVolMultiplierUpdated: TypedContractEvent<NegPnlCumulVolMultiplierUpdatedEvent.InputTuple, NegPnlCumulVolMultiplierUpdatedEvent.OutputTuple, NegPnlCumulVolMultiplierUpdatedEvent.OutputObject>;
        "OiWindowsSettingsInitialized(uint48,uint48)": TypedContractEvent<OiWindowsSettingsInitializedEvent.InputTuple, OiWindowsSettingsInitializedEvent.OutputTuple, OiWindowsSettingsInitializedEvent.OutputObject>;
        OiWindowsSettingsInitialized: TypedContractEvent<OiWindowsSettingsInitializedEvent.InputTuple, OiWindowsSettingsInitializedEvent.OutputTuple, OiWindowsSettingsInitializedEvent.OutputObject>;
        "OnePercentDepthUpdated(uint256,uint128,uint128)": TypedContractEvent<OnePercentDepthUpdatedEvent.InputTuple, OnePercentDepthUpdatedEvent.OutputTuple, OnePercentDepthUpdatedEvent.OutputObject>;
        OnePercentDepthUpdated: TypedContractEvent<OnePercentDepthUpdatedEvent.InputTuple, OnePercentDepthUpdatedEvent.OutputTuple, OnePercentDepthUpdatedEvent.OutputObject>;
        "PriceImpactOiTransferredPair(uint256,tuple)": TypedContractEvent<PriceImpactOiTransferredPairEvent.InputTuple, PriceImpactOiTransferredPairEvent.OutputTuple, PriceImpactOiTransferredPairEvent.OutputObject>;
        PriceImpactOiTransferredPair: TypedContractEvent<PriceImpactOiTransferredPairEvent.InputTuple, PriceImpactOiTransferredPairEvent.OutputTuple, PriceImpactOiTransferredPairEvent.OutputObject>;
        "PriceImpactOiTransferredPairs(uint256,uint256,uint256,uint256)": TypedContractEvent<PriceImpactOiTransferredPairsEvent.InputTuple, PriceImpactOiTransferredPairsEvent.OutputTuple, PriceImpactOiTransferredPairsEvent.OutputObject>;
        PriceImpactOiTransferredPairs: TypedContractEvent<PriceImpactOiTransferredPairsEvent.InputTuple, PriceImpactOiTransferredPairsEvent.OutputTuple, PriceImpactOiTransferredPairsEvent.OutputObject>;
        "PriceImpactOpenInterestAdded(tuple)": TypedContractEvent<PriceImpactOpenInterestAddedEvent.InputTuple, PriceImpactOpenInterestAddedEvent.OutputTuple, PriceImpactOpenInterestAddedEvent.OutputObject>;
        PriceImpactOpenInterestAdded: TypedContractEvent<PriceImpactOpenInterestAddedEvent.InputTuple, PriceImpactOpenInterestAddedEvent.OutputTuple, PriceImpactOpenInterestAddedEvent.OutputObject>;
        "PriceImpactWindowsCountUpdated(uint48)": TypedContractEvent<PriceImpactWindowsCountUpdatedEvent.InputTuple, PriceImpactWindowsCountUpdatedEvent.OutputTuple, PriceImpactWindowsCountUpdatedEvent.OutputObject>;
        PriceImpactWindowsCountUpdated: TypedContractEvent<PriceImpactWindowsCountUpdatedEvent.InputTuple, PriceImpactWindowsCountUpdatedEvent.OutputTuple, PriceImpactWindowsCountUpdatedEvent.OutputObject>;
        "PriceImpactWindowsDurationUpdated(uint48)": TypedContractEvent<PriceImpactWindowsDurationUpdatedEvent.InputTuple, PriceImpactWindowsDurationUpdatedEvent.OutputTuple, PriceImpactWindowsDurationUpdatedEvent.OutputObject>;
        PriceImpactWindowsDurationUpdated: TypedContractEvent<PriceImpactWindowsDurationUpdatedEvent.InputTuple, PriceImpactWindowsDurationUpdatedEvent.OutputTuple, PriceImpactWindowsDurationUpdatedEvent.OutputObject>;
        "ProtectionCloseFactorBlocksUpdated(uint256,uint32)": TypedContractEvent<ProtectionCloseFactorBlocksUpdatedEvent.InputTuple, ProtectionCloseFactorBlocksUpdatedEvent.OutputTuple, ProtectionCloseFactorBlocksUpdatedEvent.OutputObject>;
        ProtectionCloseFactorBlocksUpdated: TypedContractEvent<ProtectionCloseFactorBlocksUpdatedEvent.InputTuple, ProtectionCloseFactorBlocksUpdatedEvent.OutputTuple, ProtectionCloseFactorBlocksUpdatedEvent.OutputObject>;
        "ProtectionCloseFactorUpdated(uint256,uint40)": TypedContractEvent<ProtectionCloseFactorUpdatedEvent.InputTuple, ProtectionCloseFactorUpdatedEvent.OutputTuple, ProtectionCloseFactorUpdatedEvent.OutputObject>;
        ProtectionCloseFactorUpdated: TypedContractEvent<ProtectionCloseFactorUpdatedEvent.InputTuple, ProtectionCloseFactorUpdatedEvent.OutputTuple, ProtectionCloseFactorUpdatedEvent.OutputObject>;
        "ProtectionCloseFactorWhitelistUpdated(address,bool)": TypedContractEvent<ProtectionCloseFactorWhitelistUpdatedEvent.InputTuple, ProtectionCloseFactorWhitelistUpdatedEvent.OutputTuple, ProtectionCloseFactorWhitelistUpdatedEvent.OutputObject>;
        ProtectionCloseFactorWhitelistUpdated: TypedContractEvent<ProtectionCloseFactorWhitelistUpdatedEvent.InputTuple, ProtectionCloseFactorWhitelistUpdatedEvent.OutputTuple, ProtectionCloseFactorWhitelistUpdatedEvent.OutputObject>;
        "UserPriceImpactUpdated(address,uint16,uint16,uint16)": TypedContractEvent<UserPriceImpactUpdatedEvent.InputTuple, UserPriceImpactUpdatedEvent.OutputTuple, UserPriceImpactUpdatedEvent.OutputObject>;
        UserPriceImpactUpdated: TypedContractEvent<UserPriceImpactUpdatedEvent.InputTuple, UserPriceImpactUpdatedEvent.OutputTuple, UserPriceImpactUpdatedEvent.OutputObject>;
        "CollateralAdded(address,uint8,address)": TypedContractEvent<CollateralAddedEvent.InputTuple, CollateralAddedEvent.OutputTuple, CollateralAddedEvent.OutputObject>;
        CollateralAdded: TypedContractEvent<CollateralAddedEvent.InputTuple, CollateralAddedEvent.OutputTuple, CollateralAddedEvent.OutputObject>;
        "CollateralDisabled(uint8)": TypedContractEvent<CollateralDisabledEvent.InputTuple, CollateralDisabledEvent.OutputTuple, CollateralDisabledEvent.OutputObject>;
        CollateralDisabled: TypedContractEvent<CollateralDisabledEvent.InputTuple, CollateralDisabledEvent.OutputTuple, CollateralDisabledEvent.OutputObject>;
        "CollateralUpdated(uint8,bool)": TypedContractEvent<CollateralUpdatedEvent.InputTuple, CollateralUpdatedEvent.OutputTuple, CollateralUpdatedEvent.OutputObject>;
        CollateralUpdated: TypedContractEvent<CollateralUpdatedEvent.InputTuple, CollateralUpdatedEvent.OutputTuple, CollateralUpdatedEvent.OutputObject>;
        "GTokenUpdated(address,uint8,address)": TypedContractEvent<GTokenUpdatedEvent.InputTuple, GTokenUpdatedEvent.OutputTuple, GTokenUpdatedEvent.OutputObject>;
        GTokenUpdated: TypedContractEvent<GTokenUpdatedEvent.InputTuple, GTokenUpdatedEvent.OutputTuple, GTokenUpdatedEvent.OutputObject>;
        "OpenOrderDetailsUpdated(address,uint32,uint64,uint64,uint64,uint16)": TypedContractEvent<OpenOrderDetailsUpdatedEvent.InputTuple, OpenOrderDetailsUpdatedEvent.OutputTuple, OpenOrderDetailsUpdatedEvent.OutputObject>;
        OpenOrderDetailsUpdated: TypedContractEvent<OpenOrderDetailsUpdatedEvent.InputTuple, OpenOrderDetailsUpdatedEvent.OutputTuple, OpenOrderDetailsUpdatedEvent.OutputObject>;
        "PendingOrderClosed(tuple)": TypedContractEvent<PendingOrderClosedEvent.InputTuple, PendingOrderClosedEvent.OutputTuple, PendingOrderClosedEvent.OutputObject>;
        PendingOrderClosed: TypedContractEvent<PendingOrderClosedEvent.InputTuple, PendingOrderClosedEvent.OutputTuple, PendingOrderClosedEvent.OutputObject>;
        "PendingOrderStored(tuple)": TypedContractEvent<PendingOrderStoredEvent.InputTuple, PendingOrderStoredEvent.OutputTuple, PendingOrderStoredEvent.OutputObject>;
        PendingOrderStored: TypedContractEvent<PendingOrderStoredEvent.InputTuple, PendingOrderStoredEvent.OutputTuple, PendingOrderStoredEvent.OutputObject>;
        "TradeClosed(address,uint32,bool)": TypedContractEvent<TradeClosedEvent.InputTuple, TradeClosedEvent.OutputTuple, TradeClosedEvent.OutputObject>;
        TradeClosed: TypedContractEvent<TradeClosedEvent.InputTuple, TradeClosedEvent.OutputTuple, TradeClosedEvent.OutputObject>;
        "TradeCollateralUpdated(address,uint32,uint120)": TypedContractEvent<TradeCollateralUpdatedEvent.InputTuple, TradeCollateralUpdatedEvent.OutputTuple, TradeCollateralUpdatedEvent.OutputObject>;
        TradeCollateralUpdated: TypedContractEvent<TradeCollateralUpdatedEvent.InputTuple, TradeCollateralUpdatedEvent.OutputTuple, TradeCollateralUpdatedEvent.OutputObject>;
        "TradeMaxClosingSlippagePUpdated(address,uint32,uint16)": TypedContractEvent<TradeMaxClosingSlippagePUpdatedEvent.InputTuple, TradeMaxClosingSlippagePUpdatedEvent.OutputTuple, TradeMaxClosingSlippagePUpdatedEvent.OutputObject>;
        TradeMaxClosingSlippagePUpdated: TypedContractEvent<TradeMaxClosingSlippagePUpdatedEvent.InputTuple, TradeMaxClosingSlippagePUpdatedEvent.OutputTuple, TradeMaxClosingSlippagePUpdatedEvent.OutputObject>;
        "TradePositionUpdated(address,uint32,uint120,uint24,uint64,uint64,uint64,bool,bool)": TypedContractEvent<TradePositionUpdatedEvent.InputTuple, TradePositionUpdatedEvent.OutputTuple, TradePositionUpdatedEvent.OutputObject>;
        TradePositionUpdated: TypedContractEvent<TradePositionUpdatedEvent.InputTuple, TradePositionUpdatedEvent.OutputTuple, TradePositionUpdatedEvent.OutputObject>;
        "TradeSlUpdated(address,uint32,uint64)": TypedContractEvent<TradeSlUpdatedEvent.InputTuple, TradeSlUpdatedEvent.OutputTuple, TradeSlUpdatedEvent.OutputObject>;
        TradeSlUpdated: TypedContractEvent<TradeSlUpdatedEvent.InputTuple, TradeSlUpdatedEvent.OutputTuple, TradeSlUpdatedEvent.OutputObject>;
        "TradeStored(address,uint32,tuple,tuple,tuple)": TypedContractEvent<TradeStoredEvent.InputTuple, TradeStoredEvent.OutputTuple, TradeStoredEvent.OutputObject>;
        TradeStored: TypedContractEvent<TradeStoredEvent.InputTuple, TradeStoredEvent.OutputTuple, TradeStoredEvent.OutputObject>;
        "TradeTpUpdated(address,uint32,uint64)": TypedContractEvent<TradeTpUpdatedEvent.InputTuple, TradeTpUpdatedEvent.OutputTuple, TradeTpUpdatedEvent.OutputObject>;
        TradeTpUpdated: TypedContractEvent<TradeTpUpdatedEvent.InputTuple, TradeTpUpdatedEvent.OutputTuple, TradeTpUpdatedEvent.OutputObject>;
        "TradingActivatedUpdated(uint8)": TypedContractEvent<TradingActivatedUpdatedEvent.InputTuple, TradingActivatedUpdatedEvent.OutputTuple, TradingActivatedUpdatedEvent.OutputObject>;
        TradingActivatedUpdated: TypedContractEvent<TradingActivatedUpdatedEvent.InputTuple, TradingActivatedUpdatedEvent.OutputTuple, TradingActivatedUpdatedEvent.OutputObject>;
        "TriggerRewarded(uint256,uint256)": TypedContractEvent<TriggerRewardedEvent.InputTuple, TriggerRewardedEvent.OutputTuple, TriggerRewardedEvent.OutputObject>;
        TriggerRewarded: TypedContractEvent<TriggerRewardedEvent.InputTuple, TriggerRewardedEvent.OutputTuple, TriggerRewardedEvent.OutputObject>;
        "TriggerRewardsClaimed(address,uint256)": TypedContractEvent<TriggerRewardsClaimedEvent.InputTuple, TriggerRewardsClaimedEvent.OutputTuple, TriggerRewardsClaimedEvent.OutputObject>;
        TriggerRewardsClaimed: TypedContractEvent<TriggerRewardsClaimedEvent.InputTuple, TriggerRewardsClaimedEvent.OutputTuple, TriggerRewardsClaimedEvent.OutputObject>;
        "TriggerTimeoutBlocksUpdated(uint16)": TypedContractEvent<TriggerTimeoutBlocksUpdatedEvent.InputTuple, TriggerTimeoutBlocksUpdatedEvent.OutputTuple, TriggerTimeoutBlocksUpdatedEvent.OutputObject>;
        TriggerTimeoutBlocksUpdated: TypedContractEvent<TriggerTimeoutBlocksUpdatedEvent.InputTuple, TriggerTimeoutBlocksUpdatedEvent.OutputTuple, TriggerTimeoutBlocksUpdatedEvent.OutputObject>;
        "ByPassTriggerLinkUpdated(address,bool)": TypedContractEvent<ByPassTriggerLinkUpdatedEvent.InputTuple, ByPassTriggerLinkUpdatedEvent.OutputTuple, ByPassTriggerLinkUpdatedEvent.OutputObject>;
        ByPassTriggerLinkUpdated: TypedContractEvent<ByPassTriggerLinkUpdatedEvent.InputTuple, ByPassTriggerLinkUpdatedEvent.OutputTuple, ByPassTriggerLinkUpdatedEvent.OutputObject>;
        "ChainlinkCallbackTimeout(tuple,uint256)": TypedContractEvent<ChainlinkCallbackTimeoutEvent.InputTuple, ChainlinkCallbackTimeoutEvent.OutputTuple, ChainlinkCallbackTimeoutEvent.OutputObject>;
        ChainlinkCallbackTimeout: TypedContractEvent<ChainlinkCallbackTimeoutEvent.InputTuple, ChainlinkCallbackTimeoutEvent.OutputTuple, ChainlinkCallbackTimeoutEvent.OutputObject>;
        "CouldNotCloseTrade(address,uint16,uint32)": TypedContractEvent<CouldNotCloseTradeEvent.InputTuple, CouldNotCloseTradeEvent.OutputTuple, CouldNotCloseTradeEvent.OutputObject>;
        CouldNotCloseTrade: TypedContractEvent<CouldNotCloseTradeEvent.InputTuple, CouldNotCloseTradeEvent.OutputTuple, CouldNotCloseTradeEvent.OutputObject>;
        "LeverageUpdateExecuted(tuple,bool,uint8,uint8,address,uint256,uint256,uint256,uint256,tuple)": TypedContractEvent<LeverageUpdateExecutedEvent.InputTuple, LeverageUpdateExecutedEvent.OutputTuple, LeverageUpdateExecutedEvent.OutputObject>;
        LeverageUpdateExecuted: TypedContractEvent<LeverageUpdateExecutedEvent.InputTuple, LeverageUpdateExecutedEvent.OutputTuple, LeverageUpdateExecutedEvent.OutputObject>;
        "LeverageUpdateInitiated(tuple,address,uint256,uint256,bool,uint256)": TypedContractEvent<LeverageUpdateInitiatedEvent.InputTuple, LeverageUpdateInitiatedEvent.OutputTuple, LeverageUpdateInitiatedEvent.OutputObject>;
        LeverageUpdateInitiated: TypedContractEvent<LeverageUpdateInitiatedEvent.InputTuple, LeverageUpdateInitiatedEvent.OutputTuple, LeverageUpdateInitiatedEvent.OutputObject>;
        "MarketOrderInitiated(tuple,address,uint16,bool)": TypedContractEvent<MarketOrderInitiatedEvent.InputTuple, MarketOrderInitiatedEvent.OutputTuple, MarketOrderInitiatedEvent.OutputObject>;
        MarketOrderInitiated: TypedContractEvent<MarketOrderInitiatedEvent.InputTuple, MarketOrderInitiatedEvent.OutputTuple, MarketOrderInitiatedEvent.OutputObject>;
        "MarketOrdersTimeoutBlocksUpdated(uint256)": TypedContractEvent<MarketOrdersTimeoutBlocksUpdatedEvent.InputTuple, MarketOrdersTimeoutBlocksUpdatedEvent.OutputTuple, MarketOrdersTimeoutBlocksUpdatedEvent.OutputObject>;
        MarketOrdersTimeoutBlocksUpdated: TypedContractEvent<MarketOrdersTimeoutBlocksUpdatedEvent.InputTuple, MarketOrdersTimeoutBlocksUpdatedEvent.OutputTuple, MarketOrdersTimeoutBlocksUpdatedEvent.OutputObject>;
        "NativeTokenWrapped(address,uint256)": TypedContractEvent<NativeTokenWrappedEvent.InputTuple, NativeTokenWrappedEvent.OutputTuple, NativeTokenWrappedEvent.OutputObject>;
        NativeTokenWrapped: TypedContractEvent<NativeTokenWrappedEvent.InputTuple, NativeTokenWrappedEvent.OutputTuple, NativeTokenWrappedEvent.OutputObject>;
        "OpenLimitCanceled(address,uint16,uint32)": TypedContractEvent<OpenLimitCanceledEvent.InputTuple, OpenLimitCanceledEvent.OutputTuple, OpenLimitCanceledEvent.OutputObject>;
        OpenLimitCanceled: TypedContractEvent<OpenLimitCanceledEvent.InputTuple, OpenLimitCanceledEvent.OutputTuple, OpenLimitCanceledEvent.OutputObject>;
        "OpenLimitUpdated(address,uint16,uint32,uint64,uint64,uint64,uint64)": TypedContractEvent<OpenLimitUpdatedEvent.InputTuple, OpenLimitUpdatedEvent.OutputTuple, OpenLimitUpdatedEvent.OutputObject>;
        OpenLimitUpdated: TypedContractEvent<OpenLimitUpdatedEvent.InputTuple, OpenLimitUpdatedEvent.OutputTuple, OpenLimitUpdatedEvent.OutputObject>;
        "OpenOrderPlaced(address,uint16,uint32)": TypedContractEvent<OpenOrderPlacedEvent.InputTuple, OpenOrderPlacedEvent.OutputTuple, OpenOrderPlacedEvent.OutputObject>;
        OpenOrderPlaced: TypedContractEvent<OpenOrderPlacedEvent.InputTuple, OpenOrderPlacedEvent.OutputTuple, OpenOrderPlacedEvent.OutputObject>;
        "PositionSizeDecreaseExecuted(tuple,uint8,uint8,address,uint256,uint256,bool,uint256,uint256,uint256,uint256,tuple)": TypedContractEvent<PositionSizeDecreaseExecutedEvent.InputTuple, PositionSizeDecreaseExecutedEvent.OutputTuple, PositionSizeDecreaseExecutedEvent.OutputObject>;
        PositionSizeDecreaseExecuted: TypedContractEvent<PositionSizeDecreaseExecutedEvent.InputTuple, PositionSizeDecreaseExecutedEvent.OutputTuple, PositionSizeDecreaseExecutedEvent.OutputObject>;
        "PositionSizeIncreaseExecuted(tuple,uint8,uint8,address,uint256,uint256,bool,uint256,uint256,uint256,uint256,tuple)": TypedContractEvent<PositionSizeIncreaseExecutedEvent.InputTuple, PositionSizeIncreaseExecutedEvent.OutputTuple, PositionSizeIncreaseExecutedEvent.OutputObject>;
        PositionSizeIncreaseExecuted: TypedContractEvent<PositionSizeIncreaseExecutedEvent.InputTuple, PositionSizeIncreaseExecutedEvent.OutputTuple, PositionSizeIncreaseExecutedEvent.OutputObject>;
        "PositionSizeUpdateInitiated(tuple,address,uint256,uint256,bool,uint256,uint256)": TypedContractEvent<PositionSizeUpdateInitiatedEvent.InputTuple, PositionSizeUpdateInitiatedEvent.OutputTuple, PositionSizeUpdateInitiatedEvent.OutputObject>;
        PositionSizeUpdateInitiated: TypedContractEvent<PositionSizeUpdateInitiatedEvent.InputTuple, PositionSizeUpdateInitiatedEvent.OutputTuple, PositionSizeUpdateInitiatedEvent.OutputObject>;
        "TriggerOrderInitiated(tuple,address,uint16,bool)": TypedContractEvent<TriggerOrderInitiatedEvent.InputTuple, TriggerOrderInitiatedEvent.OutputTuple, TriggerOrderInitiatedEvent.OutputObject>;
        TriggerOrderInitiated: TypedContractEvent<TriggerOrderInitiatedEvent.InputTuple, TriggerOrderInitiatedEvent.OutputTuple, TriggerOrderInitiatedEvent.OutputObject>;
        "BorrowingFeeCharged(address,uint32,uint8,uint256)": TypedContractEvent<BorrowingFeeChargedEvent.InputTuple, BorrowingFeeChargedEvent.OutputTuple, BorrowingFeeChargedEvent.OutputObject>;
        BorrowingFeeCharged: TypedContractEvent<BorrowingFeeChargedEvent.InputTuple, BorrowingFeeChargedEvent.OutputTuple, BorrowingFeeChargedEvent.OutputObject>;
        "GTokenFeeCharged(address,uint8,uint256)": TypedContractEvent<GTokenFeeChargedEvent.InputTuple, GTokenFeeChargedEvent.OutputTuple, GTokenFeeChargedEvent.OutputObject>;
        GTokenFeeCharged: TypedContractEvent<GTokenFeeChargedEvent.InputTuple, GTokenFeeChargedEvent.OutputTuple, GTokenFeeChargedEvent.OutputObject>;
        "GnsOtcFeeCharged(address,uint8,uint256)": TypedContractEvent<GnsOtcFeeChargedEvent.InputTuple, GnsOtcFeeChargedEvent.OutputTuple, GnsOtcFeeChargedEvent.OutputObject>;
        GnsOtcFeeCharged: TypedContractEvent<GnsOtcFeeChargedEvent.InputTuple, GnsOtcFeeChargedEvent.OutputTuple, GnsOtcFeeChargedEvent.OutputObject>;
        "GovFeeCharged(address,uint8,uint256)": TypedContractEvent<GovFeeChargedEvent.InputTuple, GovFeeChargedEvent.OutputTuple, GovFeeChargedEvent.OutputObject>;
        GovFeeCharged: TypedContractEvent<GovFeeChargedEvent.InputTuple, GovFeeChargedEvent.OutputTuple, GovFeeChargedEvent.OutputObject>;
        "LimitExecuted(tuple,address,uint32,uint32,tuple,address,uint8,uint256,uint256,uint256,uint256,int256,uint256,uint256,bool)": TypedContractEvent<LimitExecutedEvent.InputTuple, LimitExecutedEvent.OutputTuple, LimitExecutedEvent.OutputObject>;
        LimitExecuted: TypedContractEvent<LimitExecutedEvent.InputTuple, LimitExecutedEvent.OutputTuple, LimitExecutedEvent.OutputObject>;
        "MarketCloseCanceled(tuple,address,uint256,uint256,uint8)": TypedContractEvent<MarketCloseCanceledEvent.InputTuple, MarketCloseCanceledEvent.OutputTuple, MarketCloseCanceledEvent.OutputObject>;
        MarketCloseCanceled: TypedContractEvent<MarketCloseCanceledEvent.InputTuple, MarketCloseCanceledEvent.OutputTuple, MarketCloseCanceledEvent.OutputObject>;
        "MarketExecuted(tuple,address,uint32,tuple,bool,uint256,uint256,uint256,uint256,int256,uint256,uint256)": TypedContractEvent<MarketExecutedEvent.InputTuple, MarketExecutedEvent.OutputTuple, MarketExecutedEvent.OutputObject>;
        MarketExecuted: TypedContractEvent<MarketExecutedEvent.InputTuple, MarketExecutedEvent.OutputTuple, MarketExecutedEvent.OutputObject>;
        "MarketOpenCanceled(tuple,address,uint256,uint8)": TypedContractEvent<MarketOpenCanceledEvent.InputTuple, MarketOpenCanceledEvent.OutputTuple, MarketOpenCanceledEvent.OutputObject>;
        MarketOpenCanceled: TypedContractEvent<MarketOpenCanceledEvent.InputTuple, MarketOpenCanceledEvent.OutputTuple, MarketOpenCanceledEvent.OutputObject>;
        "PendingGovFeesClaimed(uint8,uint256)": TypedContractEvent<PendingGovFeesClaimedEvent.InputTuple, PendingGovFeesClaimedEvent.OutputTuple, PendingGovFeesClaimedEvent.OutputObject>;
        PendingGovFeesClaimed: TypedContractEvent<PendingGovFeesClaimedEvent.InputTuple, PendingGovFeesClaimedEvent.OutputTuple, PendingGovFeesClaimedEvent.OutputObject>;
        "ReferralFeeCharged(address,uint8,uint256)": TypedContractEvent<ReferralFeeChargedEvent.InputTuple, ReferralFeeChargedEvent.OutputTuple, ReferralFeeChargedEvent.OutputObject>;
        ReferralFeeCharged: TypedContractEvent<ReferralFeeChargedEvent.InputTuple, ReferralFeeChargedEvent.OutputTuple, ReferralFeeChargedEvent.OutputObject>;
        "TriggerFeeCharged(address,uint8,uint256)": TypedContractEvent<TriggerFeeChargedEvent.InputTuple, TriggerFeeChargedEvent.OutputTuple, TriggerFeeChargedEvent.OutputObject>;
        TriggerFeeCharged: TypedContractEvent<TriggerFeeChargedEvent.InputTuple, TriggerFeeChargedEvent.OutputTuple, TriggerFeeChargedEvent.OutputObject>;
        "TriggerOrderCanceled(tuple,address,uint8,uint8)": TypedContractEvent<TriggerOrderCanceledEvent.InputTuple, TriggerOrderCanceledEvent.OutputTuple, TriggerOrderCanceledEvent.OutputObject>;
        TriggerOrderCanceled: TypedContractEvent<TriggerOrderCanceledEvent.InputTuple, TriggerOrderCanceledEvent.OutputTuple, TriggerOrderCanceledEvent.OutputObject>;
        "VaultClosingFeePUpdated(uint8)": TypedContractEvent<VaultClosingFeePUpdatedEvent.InputTuple, VaultClosingFeePUpdatedEvent.OutputTuple, VaultClosingFeePUpdatedEvent.OutputObject>;
        VaultClosingFeePUpdated: TypedContractEvent<VaultClosingFeePUpdatedEvent.InputTuple, VaultClosingFeePUpdatedEvent.OutputTuple, VaultClosingFeePUpdatedEvent.OutputObject>;
        "BorrowingFeePerBlockCapUpdated(uint32,uint32)": TypedContractEvent<BorrowingFeePerBlockCapUpdatedEvent.InputTuple, BorrowingFeePerBlockCapUpdatedEvent.OutputTuple, BorrowingFeePerBlockCapUpdatedEvent.OutputObject>;
        BorrowingFeePerBlockCapUpdated: TypedContractEvent<BorrowingFeePerBlockCapUpdatedEvent.InputTuple, BorrowingFeePerBlockCapUpdatedEvent.OutputTuple, BorrowingFeePerBlockCapUpdatedEvent.OutputObject>;
        "BorrowingGroupAccFeesUpdated(uint8,uint16,uint256,uint64,uint64)": TypedContractEvent<BorrowingGroupAccFeesUpdatedEvent.InputTuple, BorrowingGroupAccFeesUpdatedEvent.OutputTuple, BorrowingGroupAccFeesUpdatedEvent.OutputObject>;
        BorrowingGroupAccFeesUpdated: TypedContractEvent<BorrowingGroupAccFeesUpdatedEvent.InputTuple, BorrowingGroupAccFeesUpdatedEvent.OutputTuple, BorrowingGroupAccFeesUpdatedEvent.OutputObject>;
        "BorrowingGroupOiUpdated(uint8,uint16,bool,bool,uint72,uint72,uint72)": TypedContractEvent<BorrowingGroupOiUpdatedEvent.InputTuple, BorrowingGroupOiUpdatedEvent.OutputTuple, BorrowingGroupOiUpdatedEvent.OutputObject>;
        BorrowingGroupOiUpdated: TypedContractEvent<BorrowingGroupOiUpdatedEvent.InputTuple, BorrowingGroupOiUpdatedEvent.OutputTuple, BorrowingGroupOiUpdatedEvent.OutputObject>;
        "BorrowingGroupUpdated(uint8,uint16,uint32,uint72,uint48)": TypedContractEvent<BorrowingGroupUpdatedEvent.InputTuple, BorrowingGroupUpdatedEvent.OutputTuple, BorrowingGroupUpdatedEvent.OutputObject>;
        BorrowingGroupUpdated: TypedContractEvent<BorrowingGroupUpdatedEvent.InputTuple, BorrowingGroupUpdatedEvent.OutputTuple, BorrowingGroupUpdatedEvent.OutputObject>;
        "BorrowingInitialAccFeesStored(uint8,address,uint16,uint32,bool,uint64,uint64)": TypedContractEvent<BorrowingInitialAccFeesStoredEvent.InputTuple, BorrowingInitialAccFeesStoredEvent.OutputTuple, BorrowingInitialAccFeesStoredEvent.OutputObject>;
        BorrowingInitialAccFeesStored: TypedContractEvent<BorrowingInitialAccFeesStoredEvent.InputTuple, BorrowingInitialAccFeesStoredEvent.OutputTuple, BorrowingInitialAccFeesStoredEvent.OutputObject>;
        "BorrowingPairAccFeesUpdated(uint8,uint16,uint256,uint64,uint64)": TypedContractEvent<BorrowingPairAccFeesUpdatedEvent.InputTuple, BorrowingPairAccFeesUpdatedEvent.OutputTuple, BorrowingPairAccFeesUpdatedEvent.OutputObject>;
        BorrowingPairAccFeesUpdated: TypedContractEvent<BorrowingPairAccFeesUpdatedEvent.InputTuple, BorrowingPairAccFeesUpdatedEvent.OutputTuple, BorrowingPairAccFeesUpdatedEvent.OutputObject>;
        "BorrowingPairFeePerBlockCapUpdated(uint8,uint16,uint32,uint32)": TypedContractEvent<BorrowingPairFeePerBlockCapUpdatedEvent.InputTuple, BorrowingPairFeePerBlockCapUpdatedEvent.OutputTuple, BorrowingPairFeePerBlockCapUpdatedEvent.OutputObject>;
        BorrowingPairFeePerBlockCapUpdated: TypedContractEvent<BorrowingPairFeePerBlockCapUpdatedEvent.InputTuple, BorrowingPairFeePerBlockCapUpdatedEvent.OutputTuple, BorrowingPairFeePerBlockCapUpdatedEvent.OutputObject>;
        "BorrowingPairGroupUpdated(uint8,uint16,uint16,uint16)": TypedContractEvent<BorrowingPairGroupUpdatedEvent.InputTuple, BorrowingPairGroupUpdatedEvent.OutputTuple, BorrowingPairGroupUpdatedEvent.OutputObject>;
        BorrowingPairGroupUpdated: TypedContractEvent<BorrowingPairGroupUpdatedEvent.InputTuple, BorrowingPairGroupUpdatedEvent.OutputTuple, BorrowingPairGroupUpdatedEvent.OutputObject>;
        "BorrowingPairOiUpdated(uint8,uint16,bool,bool,uint72,uint72,uint72)": TypedContractEvent<BorrowingPairOiUpdatedEvent.InputTuple, BorrowingPairOiUpdatedEvent.OutputTuple, BorrowingPairOiUpdatedEvent.OutputObject>;
        BorrowingPairOiUpdated: TypedContractEvent<BorrowingPairOiUpdatedEvent.InputTuple, BorrowingPairOiUpdatedEvent.OutputTuple, BorrowingPairOiUpdatedEvent.OutputObject>;
        "BorrowingPairParamsUpdated(uint8,uint16,uint16,uint32,uint48,uint72)": TypedContractEvent<BorrowingPairParamsUpdatedEvent.InputTuple, BorrowingPairParamsUpdatedEvent.OutputTuple, BorrowingPairParamsUpdatedEvent.OutputObject>;
        BorrowingPairParamsUpdated: TypedContractEvent<BorrowingPairParamsUpdatedEvent.InputTuple, BorrowingPairParamsUpdatedEvent.OutputTuple, BorrowingPairParamsUpdatedEvent.OutputObject>;
        "TradeBorrowingCallbackHandled(uint8,address,uint16,uint32,bool,bool,uint256)": TypedContractEvent<TradeBorrowingCallbackHandledEvent.InputTuple, TradeBorrowingCallbackHandledEvent.OutputTuple, TradeBorrowingCallbackHandledEvent.OutputObject>;
        TradeBorrowingCallbackHandled: TypedContractEvent<TradeBorrowingCallbackHandledEvent.InputTuple, TradeBorrowingCallbackHandledEvent.OutputTuple, TradeBorrowingCallbackHandledEvent.OutputObject>;
        "CollateralGnsLiquidityPoolUpdated(uint8,tuple)": TypedContractEvent<CollateralGnsLiquidityPoolUpdatedEvent.InputTuple, CollateralGnsLiquidityPoolUpdatedEvent.OutputTuple, CollateralGnsLiquidityPoolUpdatedEvent.OutputObject>;
        CollateralGnsLiquidityPoolUpdated: TypedContractEvent<CollateralGnsLiquidityPoolUpdatedEvent.InputTuple, CollateralGnsLiquidityPoolUpdatedEvent.OutputTuple, CollateralGnsLiquidityPoolUpdatedEvent.OutputObject>;
        "CollateralUsdPriceFeedUpdated(uint8,address)": TypedContractEvent<CollateralUsdPriceFeedUpdatedEvent.InputTuple, CollateralUsdPriceFeedUpdatedEvent.OutputTuple, CollateralUsdPriceFeedUpdatedEvent.OutputObject>;
        CollateralUsdPriceFeedUpdated: TypedContractEvent<CollateralUsdPriceFeedUpdatedEvent.InputTuple, CollateralUsdPriceFeedUpdatedEvent.OutputTuple, CollateralUsdPriceFeedUpdatedEvent.OutputObject>;
        "JobIdUpdated(uint256,bytes32)": TypedContractEvent<JobIdUpdatedEvent.InputTuple, JobIdUpdatedEvent.OutputTuple, JobIdUpdatedEvent.OutputObject>;
        JobIdUpdated: TypedContractEvent<JobIdUpdatedEvent.InputTuple, JobIdUpdatedEvent.OutputTuple, JobIdUpdatedEvent.OutputObject>;
        "LimitJobCountUpdated(uint8)": TypedContractEvent<LimitJobCountUpdatedEvent.InputTuple, LimitJobCountUpdatedEvent.OutputTuple, LimitJobCountUpdatedEvent.OutputObject>;
        LimitJobCountUpdated: TypedContractEvent<LimitJobCountUpdatedEvent.InputTuple, LimitJobCountUpdatedEvent.OutputTuple, LimitJobCountUpdatedEvent.OutputObject>;
        "LinkClaimedBack(uint256)": TypedContractEvent<LinkClaimedBackEvent.InputTuple, LinkClaimedBackEvent.OutputTuple, LinkClaimedBackEvent.OutputObject>;
        LinkClaimedBack: TypedContractEvent<LinkClaimedBackEvent.InputTuple, LinkClaimedBackEvent.OutputTuple, LinkClaimedBackEvent.OutputObject>;
        "LinkRequestCreated(tuple)": TypedContractEvent<LinkRequestCreatedEvent.InputTuple, LinkRequestCreatedEvent.OutputTuple, LinkRequestCreatedEvent.OutputObject>;
        LinkRequestCreated: TypedContractEvent<LinkRequestCreatedEvent.InputTuple, LinkRequestCreatedEvent.OutputTuple, LinkRequestCreatedEvent.OutputObject>;
        "LinkUsdPriceFeedUpdated(address)": TypedContractEvent<LinkUsdPriceFeedUpdatedEvent.InputTuple, LinkUsdPriceFeedUpdatedEvent.OutputTuple, LinkUsdPriceFeedUpdatedEvent.OutputObject>;
        LinkUsdPriceFeedUpdated: TypedContractEvent<LinkUsdPriceFeedUpdatedEvent.InputTuple, LinkUsdPriceFeedUpdatedEvent.OutputTuple, LinkUsdPriceFeedUpdatedEvent.OutputObject>;
        "MaxLookbackDeviationPUpdated(uint24)": TypedContractEvent<MaxLookbackDeviationPUpdatedEvent.InputTuple, MaxLookbackDeviationPUpdatedEvent.OutputTuple, MaxLookbackDeviationPUpdatedEvent.OutputObject>;
        MaxLookbackDeviationPUpdated: TypedContractEvent<MaxLookbackDeviationPUpdatedEvent.InputTuple, MaxLookbackDeviationPUpdatedEvent.OutputTuple, MaxLookbackDeviationPUpdatedEvent.OutputObject>;
        "MaxMarketDeviationPUpdated(uint24)": TypedContractEvent<MaxMarketDeviationPUpdatedEvent.InputTuple, MaxMarketDeviationPUpdatedEvent.OutputTuple, MaxMarketDeviationPUpdatedEvent.OutputObject>;
        MaxMarketDeviationPUpdated: TypedContractEvent<MaxMarketDeviationPUpdatedEvent.InputTuple, MaxMarketDeviationPUpdatedEvent.OutputTuple, MaxMarketDeviationPUpdatedEvent.OutputObject>;
        "MinAnswersUpdated(uint8)": TypedContractEvent<MinAnswersUpdatedEvent.InputTuple, MinAnswersUpdatedEvent.OutputTuple, MinAnswersUpdatedEvent.OutputObject>;
        MinAnswersUpdated: TypedContractEvent<MinAnswersUpdatedEvent.InputTuple, MinAnswersUpdatedEvent.OutputTuple, MinAnswersUpdatedEvent.OutputObject>;
        "OracleAdded(uint256,address)": TypedContractEvent<OracleAddedEvent.InputTuple, OracleAddedEvent.OutputTuple, OracleAddedEvent.OutputObject>;
        OracleAdded: TypedContractEvent<OracleAddedEvent.InputTuple, OracleAddedEvent.OutputTuple, OracleAddedEvent.OutputObject>;
        "OracleRemoved(uint256,address)": TypedContractEvent<OracleRemovedEvent.InputTuple, OracleRemovedEvent.OutputTuple, OracleRemovedEvent.OutputObject>;
        OracleRemoved: TypedContractEvent<OracleRemovedEvent.InputTuple, OracleRemovedEvent.OutputTuple, OracleRemovedEvent.OutputObject>;
        "OracleReplaced(uint256,address,address)": TypedContractEvent<OracleReplacedEvent.InputTuple, OracleReplacedEvent.OutputTuple, OracleReplacedEvent.OutputObject>;
        OracleReplaced: TypedContractEvent<OracleReplacedEvent.InputTuple, OracleReplacedEvent.OutputTuple, OracleReplacedEvent.OutputObject>;
        "PriceReceived(tuple,uint16,bytes32,uint256,bool,bool,bool,bool,tuple[],tuple[])": TypedContractEvent<PriceReceivedEvent.InputTuple, PriceReceivedEvent.OutputTuple, PriceReceivedEvent.OutputObject>;
        PriceReceived: TypedContractEvent<PriceReceivedEvent.InputTuple, PriceReceivedEvent.OutputTuple, PriceReceivedEvent.OutputObject>;
        "PriceRequested(uint8,uint256,tuple,uint256,bool,bytes32,uint256,uint256)": TypedContractEvent<PriceRequestedEvent.InputTuple, PriceRequestedEvent.OutputTuple, PriceRequestedEvent.OutputObject>;
        PriceRequested: TypedContractEvent<PriceRequestedEvent.InputTuple, PriceRequestedEvent.OutputTuple, PriceRequestedEvent.OutputObject>;
        "TradingCallbackExecuted(tuple,uint8)": TypedContractEvent<TradingCallbackExecutedEvent.InputTuple, TradingCallbackExecutedEvent.OutputTuple, TradingCallbackExecutedEvent.OutputObject>;
        TradingCallbackExecuted: TypedContractEvent<TradingCallbackExecutedEvent.InputTuple, TradingCallbackExecutedEvent.OutputTuple, TradingCallbackExecutedEvent.OutputObject>;
        "TwapIntervalUpdated(uint32)": TypedContractEvent<TwapIntervalUpdatedEvent.InputTuple, TwapIntervalUpdatedEvent.OutputTuple, TwapIntervalUpdatedEvent.OutputObject>;
        TwapIntervalUpdated: TypedContractEvent<TwapIntervalUpdatedEvent.InputTuple, TwapIntervalUpdatedEvent.OutputTuple, TwapIntervalUpdatedEvent.OutputObject>;
        "OtcBalanceUpdated(uint8,uint256)": TypedContractEvent<OtcBalanceUpdatedEvent.InputTuple, OtcBalanceUpdatedEvent.OutputTuple, OtcBalanceUpdatedEvent.OutputObject>;
        OtcBalanceUpdated: TypedContractEvent<OtcBalanceUpdatedEvent.InputTuple, OtcBalanceUpdatedEvent.OutputTuple, OtcBalanceUpdatedEvent.OutputObject>;
        "OtcConfigUpdated(tuple)": TypedContractEvent<OtcConfigUpdatedEvent.InputTuple, OtcConfigUpdatedEvent.OutputTuple, OtcConfigUpdatedEvent.OutputObject>;
        OtcConfigUpdated: TypedContractEvent<OtcConfigUpdatedEvent.InputTuple, OtcConfigUpdatedEvent.OutputTuple, OtcConfigUpdatedEvent.OutputObject>;
        "OtcExecuted(uint8,uint256,uint256,uint256,uint256,uint256)": TypedContractEvent<OtcExecutedEvent.InputTuple, OtcExecutedEvent.OutputTuple, OtcExecutedEvent.OutputObject>;
        OtcExecuted: TypedContractEvent<OtcExecutedEvent.InputTuple, OtcExecutedEvent.OutputTuple, OtcExecutedEvent.OutputObject>;
        "NativeTransferEnabledUpdated(bool)": TypedContractEvent<NativeTransferEnabledUpdatedEvent.InputTuple, NativeTransferEnabledUpdatedEvent.OutputTuple, NativeTransferEnabledUpdatedEvent.OutputObject>;
        NativeTransferEnabledUpdated: TypedContractEvent<NativeTransferEnabledUpdatedEvent.InputTuple, NativeTransferEnabledUpdatedEvent.OutputTuple, NativeTransferEnabledUpdatedEvent.OutputObject>;
        "NativeTransferGasLimitUpdated(uint16)": TypedContractEvent<NativeTransferGasLimitUpdatedEvent.InputTuple, NativeTransferGasLimitUpdatedEvent.OutputTuple, NativeTransferGasLimitUpdatedEvent.OutputObject>;
        NativeTransferGasLimitUpdated: TypedContractEvent<NativeTransferGasLimitUpdatedEvent.InputTuple, NativeTransferGasLimitUpdatedEvent.OutputTuple, NativeTransferGasLimitUpdatedEvent.OutputObject>;
    };
}
