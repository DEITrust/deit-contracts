/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { DEIT, DEITInterface } from "../DEIT";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_contractOwner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_diamondCutFacet",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
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
    stateMutability: "payable",
    type: "fallback",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040526040516200447d3803806200447d8339818101604052810190620000299190620017da565b81816200004182620001fb60201b620001671760201c565b6000600167ffffffffffffffff81111562000061576200006062001821565b5b6040519080825280602002602001820160405280156200009e57816020015b6200008a62001724565b815260200190600190039081620000805790505b5090506000600167ffffffffffffffff811115620000c157620000c062001821565b5b604051908082528060200260200182016040528015620000f05781602001602082028036833780820191505090505b509050631f931c1c60e01b8160008151811062000112576200011162001850565b5b60200260200101907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152505060405180606001604052808473ffffffffffffffffffffffffffffffffffffffff168152602001600060028111156200019c576200019b6200187f565b5b81526020018281525082600081518110620001bc57620001bb62001850565b5b6020026020010181905250620001ef82600060405180602001604052806000815250620002da60201b6200023e1760201c565b50505050505062002337565b60006200020d6200055e60201b60201c565b905060008160040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050828260040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3505050565b60005b835181101562000509576000848281518110620002ff57620002fe62001850565b5b6020026020010151602001519050600060028111156200032457620003236200187f565b5b8160028111156200033a57620003396200187f565b5b036200039a57620003948583815181106200035a576200035962001850565b5b6020026020010151600001518684815181106200037c576200037b62001850565b5b6020026020010151604001516200058b60201b60201c565b620004f2565b60016002811115620003b157620003b06200187f565b5b816002811115620003c757620003c66200187f565b5b03620004275762000421858381518110620003e757620003e662001850565b5b60200260200101516000015186848151811062000409576200040862001850565b5b6020026020010151604001516200082d60201b60201c565b620004f1565b6002808111156200043d576200043c6200187f565b5b8160028111156200045357620004526200187f565b5b03620004b357620004ad85838151811062000473576200047262001850565b5b60200260200101516000015186848151811062000495576200049462001850565b5b60200260200101516040015162000ae160201b60201c565b620004f0565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620004e79062001935565b60405180910390fd5b5b5b508080620005009062001990565b915050620002dd565b507f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb6738383836040516200053f9392919062001d0a565b60405180910390a162000559828262000c8960201b60201c565b505050565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b6000815111620005d2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620005c99062001dcb565b60405180910390fd5b6000620005e46200055e60201b60201c565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160362000658576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200064f9062001e63565b60405180910390fd5b60008160010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905090506000816bffffffffffffffffffffffff1603620006ce57620006cd828562000dbd60201b60201c565b5b60005b835181101562000826576000848281518110620006f357620006f262001850565b5b602002602001015190506000846000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614620007ea576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620007e19062001efb565b60405180910390fd5b620007fe8583868a62000ea160201b60201c565b83806200080b9062001f35565b945050505080806200081d9062001990565b915050620006d1565b5050505050565b600081511162000874576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200086b9062001dcb565b60405180910390fd5b6000620008866200055e60201b60201c565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603620008fa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620008f19062001e63565b60405180910390fd5b60008160010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905090506000816bffffffffffffffffffffffff160362000970576200096f828562000dbd60201b60201c565b5b60005b835181101562000ada57600084828151811062000995576200099462001850565b5b602002602001015190506000846000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160362000a8b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000a829062001fe4565b60405180910390fd5b62000a9e8582846200104e60201b60201c565b62000ab28583868a62000ea160201b60201c565b838062000abf9062001f35565b9450505050808062000ad19062001990565b91505062000973565b5050505050565b600081511162000b28576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000b1f9062001dcb565b60405180910390fd5b600062000b3a6200055e60201b60201c565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161462000bae576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000ba5906200207c565b60405180910390fd5b60005b825181101562000c8357600083828151811062000bd35762000bd262001850565b5b602002602001015190506000836000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905062000c6b8482846200104e60201b60201c565b5050808062000c7a9062001990565b91505062000bb1565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16031562000db95762000cea826040518060600160405280602881526020016200443160289139620016cf60201b60201c565b6000808373ffffffffffffffffffffffffffffffffffffffff168360405162000d149190620020e0565b600060405180830381855af49150503d806000811462000d51576040519150601f19603f3d011682016040523d82523d6000602084013e62000d56565b606091505b50915091508162000db65760008151111562000d755780518082602001fd5b83836040517f192105d700000000000000000000000000000000000000000000000000000000815260040162000dad929190620020f9565b60405180910390fd5b50505b5050565b62000de8816040518060600160405280602481526020016200445960249139620016cf60201b60201c565b81600201805490508260010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190555081600201819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b81846000016000857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055508360010160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018390806001815401808255809150506001900390600052602060002090600891828204019190066004029091909190916101000a81548163ffffffff021916908360e01c021790555080846000016000857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620010c0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620010b790620021a3565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160362001131576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162001128906200223b565b60405180910390fd5b6000836000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160149054906101000a90046bffffffffffffffffffffffff166bffffffffffffffffffffffff169050600060018560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001805490506200120a91906200225d565b9050808214620013a55760008560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000182815481106200126f576200126e62001850565b5b90600052602060002090600891828204019190066004029054906101000a900460e01b9050808660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018481548110620012ee57620012ed62001850565b5b90600052602060002090600891828204019190066004026101000a81548163ffffffff021916908360e01c021790555082866000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550505b8460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001805480620013fc57620013fb62002298565b5b60019003818190600052602060002090600891828204019190066004026101000a81549063ffffffff02191690559055846000016000847bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556000820160146101000a8154906bffffffffffffffffffffffff0219169055505060008103620016c857600060018660020180549050620014e991906200225d565b905060008660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015490508181146200163157600087600201838154811062001557576200155662001850565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050808860020183815481106200159e576200159d62001850565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818860010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010181905550505b8660020180548062001648576200164762002298565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590558660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000905550505b5050505050565b6000823b90506000811182906200171e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162001715919062002313565b60405180910390fd5b50505050565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600060028111156200176357620017626200187f565b5b8152602001606081525090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620017a28262001775565b9050919050565b620017b48162001795565b8114620017c057600080fd5b50565b600081519050620017d481620017a9565b92915050565b60008060408385031215620017f457620017f362001770565b5b60006200180485828601620017c3565b92505060206200181785828601620017c3565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600082825260208201905092915050565b7f4c69624469616d6f6e644375743a20496e636f7272656374204661636574437560008201527f74416374696f6e00000000000000000000000000000000000000000000000000602082015250565b60006200191d602783620018ae565b91506200192a82620018bf565b604082019050919050565b6000602082019050818103600083015262001950816200190e565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000819050919050565b60006200199d8262001986565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203620019d257620019d162001957565b5b600182019050919050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b62001a148162001795565b82525050565b6003811062001a2e5762001a2d6200187f565b5b50565b600081905062001a418262001a1a565b919050565b600062001a538262001a31565b9050919050565b62001a658162001a46565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b62001ace8162001a97565b82525050565b600062001ae2838362001ac3565b60208301905092915050565b6000602082019050919050565b600062001b088262001a6b565b62001b14818562001a76565b935062001b218362001a87565b8060005b8381101562001b5857815162001b3c888262001ad4565b975062001b498362001aee565b92505060018101905062001b25565b5085935050505092915050565b600060608301600083015162001b7f600086018262001a09565b50602083015162001b94602086018262001a5a565b506040830151848203604086015262001bae828262001afb565b9150508091505092915050565b600062001bc9838362001b65565b905092915050565b6000602082019050919050565b600062001beb82620019dd565b62001bf78185620019e8565b93508360208202850162001c0b85620019f9565b8060005b8581101562001c4d578484038952815162001c2b858262001bbb565b945062001c388362001bd1565b925060208a0199505060018101905062001c0f565b50829750879550505050505092915050565b62001c6a8162001795565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101562001cac57808201518184015260208101905062001c8f565b60008484015250505050565b6000601f19601f8301169050919050565b600062001cd68262001c70565b62001ce2818562001c7b565b935062001cf481856020860162001c8c565b62001cff8162001cb8565b840191505092915050565b6000606082019050818103600083015262001d26818662001bde565b905062001d37602083018562001c5f565b818103604083015262001d4b818462001cc9565b9050949350505050565b7f4c69624469616d6f6e644375743a204e6f2073656c6563746f727320696e206660008201527f6163657420746f20637574000000000000000000000000000000000000000000602082015250565b600062001db3602b83620018ae565b915062001dc08262001d55565b604082019050919050565b6000602082019050818103600083015262001de68162001da4565b9050919050565b7f4c69624469616d6f6e644375743a204164642066616365742063616e2774206260008201527f6520616464726573732830290000000000000000000000000000000000000000602082015250565b600062001e4b602c83620018ae565b915062001e588262001ded565b604082019050919050565b6000602082019050818103600083015262001e7e8162001e3c565b9050919050565b7f4c69624469616d6f6e644375743a2043616e2774206164642066756e6374696f60008201527f6e207468617420616c7265616479206578697374730000000000000000000000602082015250565b600062001ee3603583620018ae565b915062001ef08262001e85565b604082019050919050565b6000602082019050818103600083015262001f168162001ed4565b9050919050565b60006bffffffffffffffffffffffff82169050919050565b600062001f428262001f1d565b91506bffffffffffffffffffffffff820362001f635762001f6262001957565b5b600182019050919050565b7f4c69624469616d6f6e644375743a2043616e2774207265706c6163652066756e60008201527f6374696f6e20776974682073616d652066756e6374696f6e0000000000000000602082015250565b600062001fcc603883620018ae565b915062001fd98262001f6e565b604082019050919050565b6000602082019050818103600083015262001fff8162001fbd565b9050919050565b7f4c69624469616d6f6e644375743a2052656d6f7665206661636574206164647260008201527f657373206d757374206265206164647265737328302900000000000000000000602082015250565b600062002064603683620018ae565b9150620020718262002006565b604082019050919050565b60006020820190508181036000830152620020978162002055565b9050919050565b600081905092915050565b6000620020b68262001c70565b620020c281856200209e565b9350620020d481856020860162001c8c565b80840191505092915050565b6000620020ee8284620020a9565b915081905092915050565b600060408201905062002110600083018562001c5f565b818103602083015262002124818462001cc9565b90509392505050565b7f4c69624469616d6f6e644375743a2043616e27742072656d6f76652066756e6360008201527f74696f6e207468617420646f65736e2774206578697374000000000000000000602082015250565b60006200218b603783620018ae565b915062002198826200212d565b604082019050919050565b60006020820190508181036000830152620021be816200217c565b9050919050565b7f4c69624469616d6f6e644375743a2043616e27742072656d6f766520696d6d7560008201527f7461626c652066756e6374696f6e000000000000000000000000000000000000602082015250565b600062002223602e83620018ae565b91506200223082620021c5565b604082019050919050565b60006020820190508181036000830152620022568162002214565b9050919050565b60006200226a8262001986565b9150620022778362001986565b925082820390508181111562002292576200229162001957565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b600081519050919050565b6000620022df82620022c7565b620022eb8185620018ae565b9350620022fd81856020860162001c8c565b620023088162001cb8565b840191505092915050565b600060208201905081810360008301526200232f8184620022d2565b905092915050565b6120ea80620023476000396000f3fe60806040523661000b57005b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c9050809150600082600001600080357fffffffff00000000000000000000000000000000000000000000000000000000167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610141576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610138906115d8565b60405180910390fd5b3660008037600080366000845af43d6000803e8060008114610162573d6000f35b3d6000fd5b600061017161046d565b905060008160040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050828260040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3505050565b60005b835181101561042257600084828151811061025f5761025e6115f8565b5b60200260200101516020015190506000600281111561028157610280611627565b5b81600281111561029457610293611627565b5b036102e4576102df8583815181106102af576102ae6115f8565b5b6020026020010151600001518684815181106102ce576102cd6115f8565b5b60200260200101516040015161049a565b61040e565b600160028111156102f8576102f7611627565b5b81600281111561030b5761030a611627565b5b0361035b57610356858381518110610326576103256115f8565b5b602002602001015160000151868481518110610345576103446115f8565b5b602002602001015160400151610711565b61040d565b60028081111561036e5761036d611627565b5b81600281111561038157610380611627565b5b036103d1576103cc85838151811061039c5761039b6115f8565b5b6020026020010151600001518684815181106103bb576103ba6115f8565b5b602002602001015160400151610992565b61040c565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610403906116c8565b60405180910390fd5b5b5b50808061041a90611721565b915050610241565b507f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb67383838360405161045693929190611a8d565b60405180910390a16104688282610b1d565b505050565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b60008151116104de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d590611b44565b60405180910390fd5b60006104e861046d565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610559576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055090611bd6565b60405180910390fd5b60008160010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905090506000816bffffffffffffffffffffffff16036105c6576105c58285610c3f565b5b60005b835181101561070a5760008482815181106105e7576105e66115f8565b5b602002602001015190506000846000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146106db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d290611c68565b60405180910390fd5b6106e78583868a610d1a565b83806106f290611ca0565b9450505050808061070290611721565b9150506105c9565b5050505050565b6000815111610755576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074c90611b44565b60405180910390fd5b600061075f61046d565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036107d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c790611bd6565b60405180910390fd5b60008160010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905090506000816bffffffffffffffffffffffff160361083d5761083c8285610c3f565b5b60005b835181101561098b57600084828151811061085e5761085d6115f8565b5b602002602001015190506000846000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610951576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094890611d46565b60405180910390fd5b61095c858284610ec7565b6109688583868a610d1a565b838061097390611ca0565b9450505050808061098390611721565b915050610840565b5050505050565b60008151116109d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109cd90611b44565b60405180910390fd5b60006109e061046d565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610a51576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4890611dd8565b60405180910390fd5b60005b8251811015610b17576000838281518110610a7257610a716115f8565b5b602002602001015190506000836000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050610b02848284610ec7565b50508080610b0f90611721565b915050610a54565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160315610c3b57610b748260405180606001604052806028815260200161206960289139611529565b6000808373ffffffffffffffffffffffffffffffffffffffff1683604051610b9c9190611e34565b600060405180830381855af49150503d8060008114610bd7576040519150601f19603f3d011682016040523d82523d6000602084013e610bdc565b606091505b509150915081610c3857600081511115610bf95780518082602001fd5b83836040517f192105d7000000000000000000000000000000000000000000000000000000008152600401610c2f929190611e4b565b60405180910390fd5b50505b5050565b610c618160405180606001604052806024815260200161209160249139611529565b81600201805490508260010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190555081600201819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b81846000016000857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055508360010160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018390806001815401808255809150506001900390600052602060002090600891828204019190066004029091909190916101000a81548163ffffffff021916908360e01c021790555080846000016000857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610f36576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f2d90611eed565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610fa4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f9b90611f7f565b60405180910390fd5b6000836000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160149054906101000a90046bffffffffffffffffffffffff166bffffffffffffffffffffffff169050600060018560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905061107b9190611f9f565b905080821461120f5760008560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000182815481106110dc576110db6115f8565b5b90600052602060002090600891828204019190066004029054906101000a900460e01b9050808660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018481548110611158576111576115f8565b5b90600052602060002090600891828204019190066004026101000a81548163ffffffff021916908360e01c021790555082866000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550505b8460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000180548061126357611262611fd3565b5b60019003818190600052602060002090600891828204019190066004026101000a81549063ffffffff02191690559055846000016000847bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556000820160146101000a8154906bffffffffffffffffffffffff02191690555050600081036115225760006001866002018054905061134d9190611f9f565b905060008660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154905081811461148e5760008760020183815481106113b7576113b66115f8565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050808860020183815481106113fb576113fa6115f8565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818860010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010181905550505b866002018054806114a2576114a1611fd3565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590558660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000905550505b5050505050565b6000823b9050600081118290611575576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161156c9190612046565b60405180910390fd5b50505050565b600082825260208201905092915050565b7f4469616d6f6e643a2046756e6374696f6e20646f6573206e6f74206578697374600082015250565b60006115c260208361157b565b91506115cd8261158c565b602082019050919050565b600060208201905081810360008301526115f1816115b5565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4c69624469616d6f6e644375743a20496e636f7272656374204661636574437560008201527f74416374696f6e00000000000000000000000000000000000000000000000000602082015250565b60006116b260278361157b565b91506116bd82611656565b604082019050919050565b600060208201905081810360008301526116e1816116a5565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000819050919050565b600061172c82611717565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361175e5761175d6116e8565b5b600182019050919050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006117c082611795565b9050919050565b6117d0816117b5565b82525050565b600381106117e7576117e6611627565b5b50565b60008190506117f8826117d6565b919050565b6000611808826117ea565b9050919050565b611818816117fd565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61187f8161184a565b82525050565b60006118918383611876565b60208301905092915050565b6000602082019050919050565b60006118b58261181e565b6118bf8185611829565b93506118ca8361183a565b8060005b838110156118fb5781516118e28882611885565b97506118ed8361189d565b9250506001810190506118ce565b5085935050505092915050565b600060608301600083015161192060008601826117c7565b506020830151611933602086018261180f565b506040830151848203604086015261194b82826118aa565b9150508091505092915050565b60006119648383611908565b905092915050565b6000602082019050919050565b600061198482611769565b61198e8185611774565b9350836020820285016119a085611785565b8060005b858110156119dc57848403895281516119bd8582611958565b94506119c88361196c565b925060208a019950506001810190506119a4565b50829750879550505050505092915050565b6119f7816117b5565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611a37578082015181840152602081019050611a1c565b60008484015250505050565b6000601f19601f8301169050919050565b6000611a5f826119fd565b611a698185611a08565b9350611a79818560208601611a19565b611a8281611a43565b840191505092915050565b60006060820190508181036000830152611aa78186611979565b9050611ab660208301856119ee565b8181036040830152611ac88184611a54565b9050949350505050565b7f4c69624469616d6f6e644375743a204e6f2073656c6563746f727320696e206660008201527f6163657420746f20637574000000000000000000000000000000000000000000602082015250565b6000611b2e602b8361157b565b9150611b3982611ad2565b604082019050919050565b60006020820190508181036000830152611b5d81611b21565b9050919050565b7f4c69624469616d6f6e644375743a204164642066616365742063616e2774206260008201527f6520616464726573732830290000000000000000000000000000000000000000602082015250565b6000611bc0602c8361157b565b9150611bcb82611b64565b604082019050919050565b60006020820190508181036000830152611bef81611bb3565b9050919050565b7f4c69624469616d6f6e644375743a2043616e2774206164642066756e6374696f60008201527f6e207468617420616c7265616479206578697374730000000000000000000000602082015250565b6000611c5260358361157b565b9150611c5d82611bf6565b604082019050919050565b60006020820190508181036000830152611c8181611c45565b9050919050565b60006bffffffffffffffffffffffff82169050919050565b6000611cab82611c88565b91506bffffffffffffffffffffffff8203611cc957611cc86116e8565b5b600182019050919050565b7f4c69624469616d6f6e644375743a2043616e2774207265706c6163652066756e60008201527f6374696f6e20776974682073616d652066756e6374696f6e0000000000000000602082015250565b6000611d3060388361157b565b9150611d3b82611cd4565b604082019050919050565b60006020820190508181036000830152611d5f81611d23565b9050919050565b7f4c69624469616d6f6e644375743a2052656d6f7665206661636574206164647260008201527f657373206d757374206265206164647265737328302900000000000000000000602082015250565b6000611dc260368361157b565b9150611dcd82611d66565b604082019050919050565b60006020820190508181036000830152611df181611db5565b9050919050565b600081905092915050565b6000611e0e826119fd565b611e188185611df8565b9350611e28818560208601611a19565b80840191505092915050565b6000611e408284611e03565b915081905092915050565b6000604082019050611e6060008301856119ee565b8181036020830152611e728184611a54565b90509392505050565b7f4c69624469616d6f6e644375743a2043616e27742072656d6f76652066756e6360008201527f74696f6e207468617420646f65736e2774206578697374000000000000000000602082015250565b6000611ed760378361157b565b9150611ee282611e7b565b604082019050919050565b60006020820190508181036000830152611f0681611eca565b9050919050565b7f4c69624469616d6f6e644375743a2043616e27742072656d6f766520696d6d7560008201527f7461626c652066756e6374696f6e000000000000000000000000000000000000602082015250565b6000611f69602e8361157b565b9150611f7482611f0d565b604082019050919050565b60006020820190508181036000830152611f9881611f5c565b9050919050565b6000611faa82611717565b9150611fb583611717565b9250828203905081811115611fcd57611fcc6116e8565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b600081519050919050565b600061201882612002565b612022818561157b565b9350612032818560208601611a19565b61203b81611a43565b840191505092915050565b60006020820190508181036000830152612060818461200d565b90509291505056fe4c69624469616d6f6e644375743a205f696e6974206164647265737320686173206e6f20636f64654c69624469616d6f6e644375743a204e657720666163657420686173206e6f20636f6465a2646970667358221220d09ecb8e216cbedc80915196547054f63124fcc5a1c3a0957e6c15827501edc864736f6c634300081000334c69624469616d6f6e644375743a205f696e6974206164647265737320686173206e6f20636f64654c69624469616d6f6e644375743a204e657720666163657420686173206e6f20636f6465";

type DEITConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DEITConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DEIT__factory extends ContractFactory {
  constructor(...args: DEITConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _contractOwner: PromiseOrValue<string>,
    _diamondCutFacet: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<DEIT> {
    return super.deploy(
      _contractOwner,
      _diamondCutFacet,
      overrides || {}
    ) as Promise<DEIT>;
  }
  override getDeployTransaction(
    _contractOwner: PromiseOrValue<string>,
    _diamondCutFacet: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _contractOwner,
      _diamondCutFacet,
      overrides || {}
    );
  }
  override attach(address: string): DEIT {
    return super.attach(address) as DEIT;
  }
  override connect(signer: Signer): DEIT__factory {
    return super.connect(signer) as DEIT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DEITInterface {
    return new utils.Interface(_abi) as DEITInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): DEIT {
    return new Contract(address, _abi, signerOrProvider) as DEIT;
  }
}
