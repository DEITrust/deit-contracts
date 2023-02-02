/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  BrokerWithdrawalFacet,
  BrokerWithdrawalFacetInterface,
} from "../../facets/BrokerWithdrawalFacet";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bool",
        name: "asset_",
        type: "bool",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "limitRemaining_",
        type: "uint256",
      },
    ],
    name: "Withdrew",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "ethLimit_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "assetLimit_",
        type: "uint256",
      },
    ],
    name: "brokerWithdrawInit",
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
        internalType: "uint256",
        name: "ethLimit_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "assetLimit_",
        type: "uint256",
      },
    ],
    name: "limit",
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
    inputs: [],
    name: "limit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
        name: "to_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "asset_",
        type: "bool",
      },
    ],
    name: "withdraw",
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
  "0x608060405234801561001057600080fd5b50610c99806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80631916d1f5146100515780633c3c475e14610081578063a4d66daf146100b1578063ead5d359146100d0575b600080fd5b61006b60048036038101906100669190610714565b610100565b604051610078919061076f565b60405180910390f35b61009b60048036038101906100969190610714565b610134565b6040516100a8919061076f565b60405180910390f35b6100b9610150565b6040516100c7929190610799565b60405180910390f35b6100ea60048036038101906100e5919061084c565b610173565b6040516100f7919061076f565b60405180910390f35b600061010a6103a3565b8261011361043e565b600001819055508161012361043e565b600101819055506001905092915050565b600061013e6103a3565b6101488383610100565b905092915050565b60008061015b61043e565b6000015461016761043e565b60010154915091509091565b600061017d6103a3565b60008054906101000a900460ff161561019557600080fd5b60016000806101000a81548160ff021916908315150217905550600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff160361021e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610215906108fc565b60405180910390fd5b600080831561028757600061023161043e565b60010154146102615761024261043e565b6001015461024e61046b565b6002015461025c919061097a565b610264565b60005b90508461026f61043e565b6003015461027d91906109ab565b81101591506102e3565b600061029161043e565b60000154146102c1576102a261043e565b600001546102ae61046b565b600301546102bc919061097a565b6102c4565b60005b9050846102cf61043e565b600201546102dd91906109ab565b81101591505b81610323576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031a90610a51565b60405180910390fd5b848161032f9190610a71565b905061033d86868684610498565b61037c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037390610af1565b60405180910390fd5b60019250505060008060006101000a81548160ff0219169083151502179055509392505050565b6103ab61067f565b60040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461043c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161043390610b83565b60405180910390fd5b565b6000807f0c84eeb7c722f69642e0fb29eedd8c0f98cfd2a385883126c429004591ca068290508091505090565b6000807fe81aed516d085c209edd69067e2f32248087ae8ed4f342af0078c6780df30d8e90508091505090565b60006104a26103a3565b600083156105b35760006104b46106ac565b60010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050856104e361043e565b60030160008282546104f591906109ab565b9250508190555083868615157fc1a58bfb3bc19e94a1464b24e1ec62f3c8b7ed47262c3a4770f7fa754358811e60405160405180910390a48073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb88886040518363ffffffff1660e01b8152600401610568929190610bb2565b6020604051808303816000875af1158015610587573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ab9190610bf0565b915050610673565b846105bc61043e565b60020160008282546105ce91906109ab565b9250508190555082858515157fc1a58bfb3bc19e94a1464b24e1ec62f3c8b7ed47262c3a4770f7fa754358811e60405160405180910390a48573ffffffffffffffffffffffffffffffffffffffff168560405161062a90610c4e565b60006040518083038185875af1925050503d8060008114610667576040519150601f19603f3d011682016040523d82523d6000602084013e61066c565b606091505b5050809150505b80915050949350505050565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b6000807f24b0e1f5977fca2c09daf3a5a3da902abb74fecaf1a06fb9303e8c5419cf523290508091505090565b600080fd5b6000819050919050565b6106f1816106de565b81146106fc57600080fd5b50565b60008135905061070e816106e8565b92915050565b6000806040838503121561072b5761072a6106d9565b5b6000610739858286016106ff565b925050602061074a858286016106ff565b9150509250929050565b60008115159050919050565b61076981610754565b82525050565b60006020820190506107846000830184610760565b92915050565b610793816106de565b82525050565b60006040820190506107ae600083018561078a565b6107bb602083018461078a565b9392505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006107ed826107c2565b9050919050565b6107fd816107e2565b811461080857600080fd5b50565b60008135905061081a816107f4565b92915050565b61082981610754565b811461083457600080fd5b50565b60008135905061084681610820565b92915050565b600080600060608486031215610865576108646106d9565b5b60006108738682870161080b565b9350506020610884868287016106ff565b925050604061089586828701610837565b9150509250925092565b600082825260208201905092915050565b7f43616e6e6f7420776974686472617720746f2074686520302061646472657373600082015250565b60006108e660208361089f565b91506108f1826108b0565b602082019050919050565b60006020820190508181036000830152610915816108d9565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610985826106de565b9150610990836106de565b9250826109a05761099f61091c565b5b828204905092915050565b60006109b6826106de565b91506109c1836106de565b92508282019050808211156109d9576109d861094b565b5b92915050565b7f416d6f756e74206973206f757473696465206f66207065726d6974746564206c60008201527f696d6974732e0000000000000000000000000000000000000000000000000000602082015250565b6000610a3b60268361089f565b9150610a46826109df565b604082019050919050565b60006020820190508181036000830152610a6a81610a2e565b9050919050565b6000610a7c826106de565b9150610a87836106de565b9250828203905081811115610a9f57610a9e61094b565b5b92915050565b7f4572726f72207769746864726177696e67000000000000000000000000000000600082015250565b6000610adb60118361089f565b9150610ae682610aa5565b602082019050919050565b60006020820190508181036000830152610b0a81610ace565b9050919050565b7f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60008201527f6572000000000000000000000000000000000000000000000000000000000000602082015250565b6000610b6d60228361089f565b9150610b7882610b11565b604082019050919050565b60006020820190508181036000830152610b9c81610b60565b9050919050565b610bac816107e2565b82525050565b6000604082019050610bc76000830185610ba3565b610bd4602083018461078a565b9392505050565b600081519050610bea81610820565b92915050565b600060208284031215610c0657610c056106d9565b5b6000610c1484828501610bdb565b91505092915050565b600081905092915050565b50565b6000610c38600083610c1d565b9150610c4382610c28565b600082019050919050565b6000610c5982610c2b565b915081905091905056fea264697066735822122045979041411ac5db7d6c26a946b9ad8a0045479fa8fe5fda769484afaa65416964736f6c63430008100033";

type BrokerWithdrawalFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BrokerWithdrawalFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BrokerWithdrawalFacet__factory extends ContractFactory {
  constructor(...args: BrokerWithdrawalFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BrokerWithdrawalFacet> {
    return super.deploy(overrides || {}) as Promise<BrokerWithdrawalFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BrokerWithdrawalFacet {
    return super.attach(address) as BrokerWithdrawalFacet;
  }
  override connect(signer: Signer): BrokerWithdrawalFacet__factory {
    return super.connect(signer) as BrokerWithdrawalFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BrokerWithdrawalFacetInterface {
    return new utils.Interface(_abi) as BrokerWithdrawalFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BrokerWithdrawalFacet {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BrokerWithdrawalFacet;
  }
}