/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  ERC20AllowanceFacet,
  ERC20AllowanceFacetInterface,
} from "../../facets/ERC20AllowanceFacet";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender_",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from_",
        type: "address",
      },
      {
        internalType: "address",
        name: "to_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610910806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063095ea7b31461004657806323b872dd14610076578063dd62ed3e146100a6575b600080fd5b610060600480360381019061005b9190610627565b6100d6565b60405161006d9190610682565b60405180910390f35b610090600480360381019061008b919061069d565b6100eb565b60405161009d9190610682565b60405180910390f35b6100c060048036038101906100bb91906106f0565b61010c565b6040516100cd919061073f565b60405180910390f35b60006100e333848461019c565b905092915050565b60006100f88484846102a2565b6101038484846102f1565b90509392505050565b600061011661042a565b60060160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60006101a88483610457565b816101b161042a565b60060160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161028f919061073f565b60405180910390a3600190509392505050565b6102ad8383836104a4565b6102ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102e3906107b7565b60405180910390fd5b505050565b60006102fd8483610457565b600061030761042a565b9050828160050160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461035a9190610806565b92505081905550828160050160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546103b2919061083a565b925050819055508373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef85604051610416919061073f565b60405180910390a360019150509392505050565b6000807fd625622b8b695b0700ebaee84f5619cbdf87b4e616110b3186a34ca682144b1590508091505090565b6104618282610538565b6104a0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610497906108ba565b60405180910390fd5b5050565b6000816104af61042a565b60060160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101590509392505050565b60008161054361042a565b60050160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006105be82610593565b9050919050565b6105ce816105b3565b81146105d957600080fd5b50565b6000813590506105eb816105c5565b92915050565b6000819050919050565b610604816105f1565b811461060f57600080fd5b50565b600081359050610621816105fb565b92915050565b6000806040838503121561063e5761063d61058e565b5b600061064c858286016105dc565b925050602061065d85828601610612565b9150509250929050565b60008115159050919050565b61067c81610667565b82525050565b60006020820190506106976000830184610673565b92915050565b6000806000606084860312156106b6576106b561058e565b5b60006106c4868287016105dc565b93505060206106d5868287016105dc565b92505060406106e686828701610612565b9150509250925092565b600080604083850312156107075761070661058e565b5b6000610715858286016105dc565b9250506020610726858286016105dc565b9150509250929050565b610739816105f1565b82525050565b60006020820190506107546000830184610730565b92915050565b600082825260208201905092915050565b7f45524332303a20496e73756666696369656e7420416c6c6f77616e6365000000600082015250565b60006107a1601d8361075a565b91506107ac8261076b565b602082019050919050565b600060208201905081810360008301526107d081610794565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610811826105f1565b915061081c836105f1565b9250828203905081811115610834576108336107d7565b5b92915050565b6000610845826105f1565b9150610850836105f1565b9250828201905080821115610868576108676107d7565b5b92915050565b7f45524332303a20496e73756666696369656e742046756e647300000000000000600082015250565b60006108a460198361075a565b91506108af8261086e565b602082019050919050565b600060208201905081810360008301526108d381610897565b905091905056fea26469706673582212207062a6a0f5b488391b2902dba88df1bf4d8be61a2f323669addc29ad956f473064736f6c63430008100033";

type ERC20AllowanceFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20AllowanceFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20AllowanceFacet__factory extends ContractFactory {
  constructor(...args: ERC20AllowanceFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20AllowanceFacet> {
    return super.deploy(overrides || {}) as Promise<ERC20AllowanceFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC20AllowanceFacet {
    return super.attach(address) as ERC20AllowanceFacet;
  }
  override connect(signer: Signer): ERC20AllowanceFacet__factory {
    return super.connect(signer) as ERC20AllowanceFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20AllowanceFacetInterface {
    return new utils.Interface(_abi) as ERC20AllowanceFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20AllowanceFacet {
    return new Contract(address, _abi, signerOrProvider) as ERC20AllowanceFacet;
  }
}
