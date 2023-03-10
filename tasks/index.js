const { ethers } = require("ethers")
const { Diamond, Facet } = require("../lib/diamond/shinyblocks")

const network = process.env.NETWORK
const provider = ethers.getDefaultProvider(network)

exports.diamond = require("./diamond")
exports.tests = require("./tests")
exports.broker = require("./broker")
exports.erc20 = require("./erc20")
exports.erc721 = require("./erc721")
exports.erc1155 = require("./erc1155")
exports.erc173 = require("./erc173")
exports.erc165 = require("./erc165")
exports.accounts = require("./accounts")
exports.balance = require("./balance")
exports.blockNumber = require("./block-number")
