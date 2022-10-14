/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  DiamondCutFacet,
  DiamondCutFacetInterface,
} from "../../facets/DiamondCutFacet";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_initializationContractAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
    ],
    name: "InitializationFunctionReverted",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "facetAddress",
            type: "address",
          },
          {
            internalType: "enum IDiamondCut.FacetCutAction",
            name: "action",
            type: "uint8",
          },
          {
            internalType: "bytes4[]",
            name: "functionSelectors",
            type: "bytes4[]",
          },
        ],
        indexed: false,
        internalType: "struct IDiamondCut.FacetCut[]",
        name: "_diamondCut",
        type: "tuple[]",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_init",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
    ],
    name: "DiamondCut",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "facetAddress",
            type: "address",
          },
          {
            internalType: "enum IDiamondCut.FacetCutAction",
            name: "action",
            type: "uint8",
          },
          {
            internalType: "bytes4[]",
            name: "functionSelectors",
            type: "bytes4[]",
          },
        ],
        internalType: "struct IDiamondCut.FacetCut[]",
        name: "_diamondCut",
        type: "tuple[]",
      },
      {
        internalType: "address",
        name: "_init",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
    ],
    name: "diamondCut",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506124af806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80631f931c1c14610030575b600080fd5b61004a600480360381019061004591906115cb565b61004c565b005b6100546100b6565b6100af8585906100649190611969565b8484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610151565b5050505050565b6100be610383565b60040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461014f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161014690611a01565b60405180910390fd5b565b60005b835181101561033857600084828151811061017257610171611a21565b5b60200260200101516020015190506000600281111561019457610193611a50565b5b8160028111156101a7576101a6611a50565b5b14156101f8576101f38583815181106101c3576101c2611a21565b5b6020026020010151600001518684815181106101e2576101e1611a21565b5b6020026020010151604001516103b0565b610324565b6001600281111561020c5761020b611a50565b5b81600281111561021f5761021e611a50565b5b14156102705761026b85838151811061023b5761023a611a21565b5b60200260200101516000015186848151811061025a57610259611a21565b5b602002602001015160400151610629565b610323565b60028081111561028357610282611a50565b5b81600281111561029657610295611a50565b5b14156102e7576102e28583815181106102b2576102b1611a21565b5b6020026020010151600001518684815181106102d1576102d0611a21565b5b6020026020010151604001516108ad565b610322565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031990611af1565b60405180910390fd5b5b5b50808061033090611b4a565b915050610154565b507f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb67383838360405161036c93929190611e51565b60405180910390a161037e8282610a38565b505050565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b60008151116103f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103eb90611f08565b60405180910390fd5b60006103fe610383565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610470576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046790611f9a565b60405180910390fd5b60008160010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905090506000816bffffffffffffffffffffffff1614156104de576104dd8285610b5f565b5b60005b83518110156106225760008482815181106104ff576104fe611a21565b5b602002602001015190506000846000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146105f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ea9061202c565b60405180910390fd5b6105ff8583868a610c3a565b838061060a90612064565b9450505050808061061a90611b4a565b9150506104e1565b5050505050565b600081511161066d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066490611f08565b60405180910390fd5b6000610677610383565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156106e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106e090611f9a565b60405180910390fd5b60008160010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905090506000816bffffffffffffffffffffffff161415610757576107568285610b5f565b5b60005b83518110156108a657600084828151811061077857610777611a21565b5b602002602001015190506000846000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561086c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108639061210b565b60405180910390fd5b610877858284610de7565b6108838583868a610c3a565b838061088e90612064565b9450505050808061089e90611b4a565b91505061075a565b5050505050565b60008151116108f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e890611f08565b60405180910390fd5b60006108fb610383565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161461096c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109639061219d565b60405180910390fd5b60005b8251811015610a3257600083828151811061098d5761098c611a21565b5b602002602001015190506000836000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050610a1d848284610de7565b50508080610a2a90611b4a565b91505061096f565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a7257610b5b565b610a948260405180606001604052806028815260200161242e6028913961144c565b6000808373ffffffffffffffffffffffffffffffffffffffff1683604051610abc91906121f9565b600060405180830381855af49150503d8060008114610af7576040519150601f19603f3d011682016040523d82523d6000602084013e610afc565b606091505b509150915081610b5857600081511115610b195780518082602001fd5b83836040517f192105d7000000000000000000000000000000000000000000000000000000008152600401610b4f929190612210565b60405180910390fd5b50505b5050565b610b81816040518060600160405280602481526020016124566024913961144c565b81600201805490508260010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190555081600201819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b81846000016000857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055508360010160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018390806001815401808255809150506001900390600052602060002090600891828204019190066004029091909190916101000a81548163ffffffff021916908360e01c021790555080846000016000857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e57576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4e906122b2565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ec6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ebd90612344565b60405180910390fd5b6000836000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160149054906101000a90046bffffffffffffffffffffffff166bffffffffffffffffffffffff169050600060018560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000180549050610f9d9190612364565b90508082146111315760008560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018281548110610ffe57610ffd611a21565b5b90600052602060002090600891828204019190066004029054906101000a900460e01b9050808660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001848154811061107a57611079611a21565b5b90600052602060002090600891828204019190066004026101000a81548163ffffffff021916908360e01c021790555082866000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550505b8460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000180548061118557611184612398565b5b60019003818190600052602060002090600891828204019190066004026101000a81549063ffffffff02191690559055846000016000847bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556000820160146101000a8154906bffffffffffffffffffffffff021916905550506000811415611445576000600186600201805490506112709190612364565b905060008660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015490508181146113b15760008760020183815481106112da576112d9611a21565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508088600201838154811061131e5761131d611a21565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818860010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010181905550505b866002018054806113c5576113c4612398565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590558660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000905550505b5050505050565b6000823b9050600081118290611498576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161148f919061240b565b60405180910390fd5b50505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f8401126114d7576114d66114b2565b5b8235905067ffffffffffffffff8111156114f4576114f36114b7565b5b6020830191508360208202830111156115105761150f6114bc565b5b9250929050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061154282611517565b9050919050565b61155281611537565b811461155d57600080fd5b50565b60008135905061156f81611549565b92915050565b60008083601f84011261158b5761158a6114b2565b5b8235905067ffffffffffffffff8111156115a8576115a76114b7565b5b6020830191508360018202830111156115c4576115c36114bc565b5b9250929050565b6000806000806000606086880312156115e7576115e66114a8565b5b600086013567ffffffffffffffff811115611605576116046114ad565b5b611611888289016114c1565b9550955050602061162488828901611560565b935050604086013567ffffffffffffffff811115611645576116446114ad565b5b61165188828901611575565b92509250509295509295909350565b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6116a982611660565b810181811067ffffffffffffffff821117156116c8576116c7611671565b5b80604052505050565b60006116db61149e565b90506116e782826116a0565b919050565b600067ffffffffffffffff82111561170757611706611671565b5b602082029050602081019050919050565b600080fd5b600080fd5b6003811061172f57600080fd5b50565b60008135905061174181611722565b92915050565b600067ffffffffffffffff82111561176257611761611671565b5b602082029050602081019050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6117a881611773565b81146117b357600080fd5b50565b6000813590506117c58161179f565b92915050565b60006117de6117d984611747565b6116d1565b90508083825260208201905060208402830185811115611801576118006114bc565b5b835b8181101561182a578061181688826117b6565b845260208401935050602081019050611803565b5050509392505050565b600082601f830112611849576118486114b2565b5b81356118598482602086016117cb565b91505092915050565b60006060828403121561187857611877611718565b5b61188260606116d1565b9050600061189284828501611560565b60008301525060206118a684828501611732565b602083015250604082013567ffffffffffffffff8111156118ca576118c961171d565b5b6118d684828501611834565b60408301525092915050565b60006118f56118f0846116ec565b6116d1565b90508083825260208201905060208402830185811115611918576119176114bc565b5b835b8181101561195f57803567ffffffffffffffff81111561193d5761193c6114b2565b5b80860161194a8982611862565b8552602085019450505060208101905061191a565b5050509392505050565b60006119763684846118e2565b905092915050565b600082825260208201905092915050565b7f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60008201527f6572000000000000000000000000000000000000000000000000000000000000602082015250565b60006119eb60228361197e565b91506119f68261198f565b604082019050919050565b60006020820190508181036000830152611a1a816119de565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4c69624469616d6f6e644375743a20496e636f7272656374204661636574437560008201527f74416374696f6e00000000000000000000000000000000000000000000000000602082015250565b6000611adb60278361197e565b9150611ae682611a7f565b604082019050919050565b60006020820190508181036000830152611b0a81611ace565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000819050919050565b6000611b5582611b40565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611b8857611b87611b11565b5b600182019050919050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611bc881611537565b82525050565b60038110611bdf57611bde611a50565b5b50565b6000819050611bf082611bce565b919050565b6000611c0082611be2565b9050919050565b611c1081611bf5565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611c4b81611773565b82525050565b6000611c5d8383611c42565b60208301905092915050565b6000602082019050919050565b6000611c8182611c16565b611c8b8185611c21565b9350611c9683611c32565b8060005b83811015611cc7578151611cae8882611c51565b9750611cb983611c69565b925050600181019050611c9a565b5085935050505092915050565b6000606083016000830151611cec6000860182611bbf565b506020830151611cff6020860182611c07565b5060408301518482036040860152611d178282611c76565b9150508091505092915050565b6000611d308383611cd4565b905092915050565b6000602082019050919050565b6000611d5082611b93565b611d5a8185611b9e565b935083602082028501611d6c85611baf565b8060005b85811015611da85784840389528151611d898582611d24565b9450611d9483611d38565b925060208a01995050600181019050611d70565b50829750879550505050505092915050565b611dc381611537565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611e03578082015181840152602081019050611de8565b83811115611e12576000848401525b50505050565b6000611e2382611dc9565b611e2d8185611dd4565b9350611e3d818560208601611de5565b611e4681611660565b840191505092915050565b60006060820190508181036000830152611e6b8186611d45565b9050611e7a6020830185611dba565b8181036040830152611e8c8184611e18565b9050949350505050565b7f4c69624469616d6f6e644375743a204e6f2073656c6563746f727320696e206660008201527f6163657420746f20637574000000000000000000000000000000000000000000602082015250565b6000611ef2602b8361197e565b9150611efd82611e96565b604082019050919050565b60006020820190508181036000830152611f2181611ee5565b9050919050565b7f4c69624469616d6f6e644375743a204164642066616365742063616e2774206260008201527f6520616464726573732830290000000000000000000000000000000000000000602082015250565b6000611f84602c8361197e565b9150611f8f82611f28565b604082019050919050565b60006020820190508181036000830152611fb381611f77565b9050919050565b7f4c69624469616d6f6e644375743a2043616e2774206164642066756e6374696f60008201527f6e207468617420616c7265616479206578697374730000000000000000000000602082015250565b600061201660358361197e565b915061202182611fba565b604082019050919050565b6000602082019050818103600083015261204581612009565b9050919050565b60006bffffffffffffffffffffffff82169050919050565b600061206f8261204c565b91506bffffffffffffffffffffffff82141561208e5761208d611b11565b5b600182019050919050565b7f4c69624469616d6f6e644375743a2043616e2774207265706c6163652066756e60008201527f6374696f6e20776974682073616d652066756e6374696f6e0000000000000000602082015250565b60006120f560388361197e565b915061210082612099565b604082019050919050565b60006020820190508181036000830152612124816120e8565b9050919050565b7f4c69624469616d6f6e644375743a2052656d6f7665206661636574206164647260008201527f657373206d757374206265206164647265737328302900000000000000000000602082015250565b600061218760368361197e565b91506121928261212b565b604082019050919050565b600060208201905081810360008301526121b68161217a565b9050919050565b600081905092915050565b60006121d382611dc9565b6121dd81856121bd565b93506121ed818560208601611de5565b80840191505092915050565b600061220582846121c8565b915081905092915050565b60006040820190506122256000830185611dba565b81810360208301526122378184611e18565b90509392505050565b7f4c69624469616d6f6e644375743a2043616e27742072656d6f76652066756e6360008201527f74696f6e207468617420646f65736e2774206578697374000000000000000000602082015250565b600061229c60378361197e565b91506122a782612240565b604082019050919050565b600060208201905081810360008301526122cb8161228f565b9050919050565b7f4c69624469616d6f6e644375743a2043616e27742072656d6f766520696d6d7560008201527f7461626c652066756e6374696f6e000000000000000000000000000000000000602082015250565b600061232e602e8361197e565b9150612339826122d2565b604082019050919050565b6000602082019050818103600083015261235d81612321565b9050919050565b600061236f82611b40565b915061237a83611b40565b92508282101561238d5761238c611b11565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b600081519050919050565b60006123dd826123c7565b6123e7818561197e565b93506123f7818560208601611de5565b61240081611660565b840191505092915050565b6000602082019050818103600083015261242581846123d2565b90509291505056fe4c69624469616d6f6e644375743a205f696e6974206164647265737320686173206e6f20636f64654c69624469616d6f6e644375743a204e657720666163657420686173206e6f20636f6465a264697066735822122046e764467273cefe249ccc43cfaac0551bbc7d3c2f93bbe52bcf1881a3a58a5f64736f6c63430008090033";

type DiamondCutFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DiamondCutFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DiamondCutFacet__factory extends ContractFactory {
  constructor(...args: DiamondCutFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DiamondCutFacet> {
    return super.deploy(overrides || {}) as Promise<DiamondCutFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DiamondCutFacet {
    return super.attach(address) as DiamondCutFacet;
  }
  override connect(signer: Signer): DiamondCutFacet__factory {
    return super.connect(signer) as DiamondCutFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DiamondCutFacetInterface {
    return new utils.Interface(_abi) as DiamondCutFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DiamondCutFacet {
    return new Contract(address, _abi, signerOrProvider) as DiamondCutFacet;
  }
}