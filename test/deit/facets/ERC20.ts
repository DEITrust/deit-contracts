import { Facet } from '../../../lib/diamond/shinyblocks'
const { expect, assert } = require("chai");
const { step } = require("mocha-steps");

// REQUIRED: name set, and diamond/owner/count as params to runTest
// NOTE: count should include base diamond count (so +3). will need -1 for address idx
const name = "ERC20Facet"
const args = false
const internalArgs = ['DEIT Token','DEIT', 18, 10000000,10000000000]
let diamond
let owner
let count
let paramArgs

const runTest = (diamond_, owner_, ctr_, paramArgs_ = false) => {
  diamond = diamond_
  owner = owner_
  count = ctr_
  paramArgs = paramArgs_
  describe("ERC20Facet Test",_facetTest)
}

const _facetTest = async() => {
  let _owner
  let _diamond
  let _addresses
  let _facet

  before(async() => {
    _owner = owner;
    _diamond = diamond;    
    _facet = await Facet(hre,_diamond,"ERC20Facet",_owner)
    _addresses = await _diamond.coreFacets.loupe.instance.facetAddresses()
  })

  step('Should have a total supply larger than 0', async () => {
    const tx = await _facet.instance.erc20Init(...internalArgs,_owner.address)
    const total = await _facet.instance.totalSupply()
    expect(total).to.be.greaterThan(0)
  })

  step('Should have total supply when calling balanceOf(signer) and totalSupply()', async () => {
    const balance = await _facet.instance.balanceOf(_owner.address)
    const total = await _facet.instance.totalSupply()
    expect(balance).to.be.equal(total)
  })
}

exports.name = name
exports.args = args
exports.runTest = runTest

