import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

// require("@nomiclabs/hardhat-waffle")
// require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
// require("solidity-coverage")
import "hardhat-gas-reporter"
require("hardhat-contract-sizer")
require("./tasks")
require("dotenv").config()

  
const MAINNET_RPC_URL =
  process.env.MAINNET_RPC_URL ||
  process.env.ALCHEMY_MAINNET_RPC_URL ||
  "https://eth-mainnet.alchemyapi.io/v2/your-api-key"

const GOERLI_RPC_URL =
  process.env.GOERLI_RPC_URL || "https://eth-goerli.alchemyapi.io/v2/your-api-key"

const POLYGON_MAINNET_RPC_URL =
  process.env.POLYGON_MAINNET_RPC_URL || "https://polygon-mainnet.alchemyapi.io/v2/your-api-key"

  const POLYGON_MUMBAI_RPC_URL =
  process.env.POLYGON_MUMBAI_RPC_URL || "https://polygon-mainnet.alchemyapi.io/v2/your-api-key"

  // don't use, but it exists here anyway
const PRIVATE_KEY = process.env.PRIVATE_KEY

// preferred method
const MNEMONIC = process.env.MNEMONIC || "price ship aim drill thrive there detail canal hungry door deny audit profit pave tag"
const FORKING_BLOCK_NUMBER = process.env.FORKING_BLOCK_NUMBER

// Your API key for Etherscan, obtain one at https://etherscan.io/
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "Your etherscan API key"
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || "Your polygonscan API key"
const REPORT_GAS = process.env.REPORT_GAS || true

const config: HardhatUserConfig = {
  defaultNetwork: "localhost",
  networks: {
    hardhat: {
      hardfork: "merge",
      // If you want to do some forking set `enabled` to true
      forking: {
        url: POLYGON_MAINNET_RPC_URL,
        blockNumber: FORKING_BLOCK_NUMBER,
        enabled: false,
      },
      accounts: {
        mnemonic: process.env.MNEMONIC,
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 20,
        passphrase: "",
      },      
      chainId: 31337,
    },
    localhost: {
      chainId: 31337,
      accounts: {
        mnemonic: process.env.MNEMONIC,
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 20,
        passphrase: "",
      },
    },
    mumbai: {
      url: POLYGON_MUMBAI_RPC_URL,
      accounts: {
        mnemonic: process.env.MNEMONIC,
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 20,
        passphrase: "",
      },
      saveDeployments: true,
      chainId: 80001,
    },
    polygon: {
      url: POLYGON_MAINNET_RPC_URL,
      accounts: {
        mnemonic: process.env.MNEMONIC,
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 20,
        passphrase: "",
      },
      saveDeployments: true,
      chainId: 137,
    },
    // goerli: {
    //   url: GOERLI_RPC_URL,
    //   accounts: {
    //     mnemonic: process.env.MNEMONIC,
    //     path: "m/44'/60'/0'/0",
    //     initialIndex: 0,
    //     count: 20,
    //     passphrase: "",
    //   },
    //   saveDeployments: true,
    //   chainId: 5,
    // },
    // mainnet: {
    //   url: MAINNET_RPC_URL,
    //   accounts: {
    //     mnemonic: process.env.MNEMONIC,
    //     path: "m/44'/60'/0'/0",
    //     initialIndex: 0,
    //     count: 20,
    //     passphrase: "",
    //   },
    //   saveDeployments: true,
    //   chainId: 1,
    // },
    // polygon: {
    //   url: POLYGON_MAINNET_RPC_URL,
    //   accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
    //   saveDeployments: true,
    //   chainId: 137,
    // },
  },
  // etherscan: {
  //   // yarn hardhat verify --network <NETWORK> <CONTRACT_ADDRESS> <CONSTRUCTOR_PARAMETERS>
  //   apiKey: {
  //     polygon: POLYGONSCAN_API_KEY,
  //     goerli: ETHERSCAN_API_KEY
  //   },
  // },
  gasReporter: {
    enabled: true,
    // currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true,
    rst:true,
    rstTitle:"Gas Report",
    token:'ETH',
    gasPrice: 21,
    // url: "127.0.0.1:8545",
    // coinmarketcap: process.env.COINMARKETCAP_API_KEY,
  },
  contractSizer: {
    runOnCompile: false,
    // only: ["APIConsumer", "KeepersCounter", "PriceConsumerV3", "RandomNumberConsumerV2"],
    only: ["APIConsumer", "KeepersCounter", "PriceConsumerV3", "RandomNumberConsumerV2"],
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    },
    owner: {
      default: 0,
    },
    signer: {
      default: 0,

    },
    feeCollector: {
      default: 1,
    },
    ops: {
      default: 1,
    },
    team: {
      default: 1,
    },
    personal: {
      default: 1,
    },
    token: {
      default: 2,
    },
    service: {
      default: 3,
    },
    token2: {
      default: 4,
    },
    service2: {
      default: 5,
    },
    token3: {
      default: 6,
    },
    service3: {
      default: 7,
    },
    token4: {
      default: 8,
    },
    service4: {
      default: 9,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.16",
      },
      {
        version: "0.8.12",
      },
      {
        version: "0.8.9",
      },
      {
        version: "0.8.7",
      },
      {
        version: "0.6.6",
      },
      {
        version: "0.4.24",
      },
    ],
  },
  mocha: {
    timeout: 200000, // 200 seconds max for running tests
  },
};

export default config;
