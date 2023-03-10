/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface BrokerWithdrawalFacetInterface extends utils.Interface {
  functions: {
    "brokerWithdrawInit(uint256,uint256)": FunctionFragment;
    "limit(uint256,uint256)": FunctionFragment;
    "limit()": FunctionFragment;
    "withdraw(address,uint256,bool)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "brokerWithdrawInit"
      | "limit(uint256,uint256)"
      | "limit()"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "brokerWithdrawInit",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "limit(uint256,uint256)",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "limit()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "brokerWithdrawInit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "limit(uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "limit()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Withdrew(bool,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Withdrew"): EventFragment;
}

export interface WithdrewEventObject {
  asset_: boolean;
  amount_: BigNumber;
  limitRemaining_: BigNumber;
}
export type WithdrewEvent = TypedEvent<
  [boolean, BigNumber, BigNumber],
  WithdrewEventObject
>;

export type WithdrewEventFilter = TypedEventFilter<WithdrewEvent>;

export interface BrokerWithdrawalFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BrokerWithdrawalFacetInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    brokerWithdrawInit(
      ethLimit_: PromiseOrValue<BigNumberish>,
      assetLimit_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "limit(uint256,uint256)"(
      ethLimit_: PromiseOrValue<BigNumberish>,
      assetLimit_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "limit()"(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    withdraw(
      to_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      asset_: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  brokerWithdrawInit(
    ethLimit_: PromiseOrValue<BigNumberish>,
    assetLimit_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "limit(uint256,uint256)"(
    ethLimit_: PromiseOrValue<BigNumberish>,
    assetLimit_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "limit()"(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

  withdraw(
    to_: PromiseOrValue<string>,
    amount_: PromiseOrValue<BigNumberish>,
    asset_: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    brokerWithdrawInit(
      ethLimit_: PromiseOrValue<BigNumberish>,
      assetLimit_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "limit(uint256,uint256)"(
      ethLimit_: PromiseOrValue<BigNumberish>,
      assetLimit_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "limit()"(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    withdraw(
      to_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      asset_: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "Withdrew(bool,uint256,uint256)"(
      asset_?: PromiseOrValue<boolean> | null,
      amount_?: PromiseOrValue<BigNumberish> | null,
      limitRemaining_?: PromiseOrValue<BigNumberish> | null
    ): WithdrewEventFilter;
    Withdrew(
      asset_?: PromiseOrValue<boolean> | null,
      amount_?: PromiseOrValue<BigNumberish> | null,
      limitRemaining_?: PromiseOrValue<BigNumberish> | null
    ): WithdrewEventFilter;
  };

  estimateGas: {
    brokerWithdrawInit(
      ethLimit_: PromiseOrValue<BigNumberish>,
      assetLimit_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "limit(uint256,uint256)"(
      ethLimit_: PromiseOrValue<BigNumberish>,
      assetLimit_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "limit()"(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      to_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      asset_: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    brokerWithdrawInit(
      ethLimit_: PromiseOrValue<BigNumberish>,
      assetLimit_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "limit(uint256,uint256)"(
      ethLimit_: PromiseOrValue<BigNumberish>,
      assetLimit_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "limit()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      to_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      asset_: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
