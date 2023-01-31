const { Diamond, Facets, Facet, Selectors, Signer, CutAction } = require('../../lib/diamond/shinyblocks')
// const { facets } = require('./facets')
const { expect, assert } = require("chai");
const { step } = require("mocha-steps");

let diamond
let name
var _facets
let paramArgs
let owner 

export const coreTest = async(name_) => {
  name = name_  
  owner = await Signer(hre)
  console.log(owner)
  diamond = await Diamond(hre, name, false, owner)
  // await describe(name_+ " Diamond Test", _diamondTest);
  return diamond
}

export const facetsTest = async(facets_, paramArgs_ = false) => {
  _facets = facets_    
  paramArgs = paramArgs_
  // await describe(name_+ " Facet Tests", _facetsTest);
  return true
}


export const getDiamond = () => {
  return diamond
}

export const getDiamondAddress = () => {
  return diamond.address
}

const _diamondTest = async () => {
  let _owner 
  let _result
  const _addresses = []
  let _ctr
  let _diamond

  before(async function(){
    _ctr = 3
    _owner = owner
    _diamond = diamond
  })

  step("Deployment should do something", () => {
    expect("test").to.equal("test")
  });

  step('Should have three facets -- call to facetAddresses function', async () => {    
    for (const address_ of await _diamond.coreFacets.loupe.instance.facetAddresses()) {
      _addresses.push(address_)
    }
    assert.equal(_addresses.length, 3)
  })

  step('Facets should have the right function selectors -- call to facetFunctionSelectors function', async () => {
    let selectors = Selectors(_diamond.coreFacets.cut.instance)
    _result = await _diamond.coreFacets.loupe.instance.facetFunctionSelectors(_addresses[0])
    assert.sameMembers(_result, selectors)
    selectors = Selectors(_diamond.coreFacets.loupe.instance)
    _result = await _diamond.coreFacets.loupe.instance.facetFunctionSelectors(_addresses[1])
    assert.sameMembers(_result, selectors)
    selectors = Selectors(_diamond.coreFacets.ownership.instance)
    _result = await _diamond.coreFacets.loupe.instance.facetFunctionSelectors(_addresses[2])
    assert.sameMembers(_result, selectors)
  })

  step('Selectors should be associated to facets correctly -- multiple calls to facetAddress function', async () => {
    assert.equal(
      _addresses[0],
      await _diamond.coreFacets.loupe.instance.facetAddress('0x1f931c1c')
    )
    assert.equal(
      _addresses[1],
      await _diamond.coreFacets.loupe.instance.facetAddress('0xcdffacc6')
    )
    assert.equal(
      _addresses[1],
      await _diamond.coreFacets.loupe.instance.facetAddress('0x01ffc9a7')
    )
    assert.equal(
      _addresses[2],
      await _diamond.coreFacets.loupe.instance.facetAddress('0xf2fde38b')
    )
  })  
}

const _facetsTest = async () => {
  let _owner 
  let _result
  const _addresses = []
  let _ctr
  let _paramArgs

  before(async function(){
    _ctr = 3
    _owner = await Signer(hre)        
    _paramArgs = paramArgs ? paramArgs : false
  })


  if(_facets){
    // START OF NON-BASE FACET TESTS

    step('Should deploy facets -- test count returned against number defined', async () => {
      const _facetNames = _facets.facetNames()
      let _args = {}
      const enabledFacets = _facets.enabledFacets() 
      
      for(const facet_ of enabledFacets){
        if(facet_.args){
          _args[facet_.name] = facet_.args
        }
      }

      try{
        await Facets(hre, diamond, _facetNames, _owner, CutAction.Add, false, false, _args)      
      }catch(e){
        console.log(e)
        assert(true,false)
      }
      // assert.equal(_facetNames.length,facetContracts.length)
      assert(true,true)
    })

    step('Should test the facets', async () => {
      const test = async() =>{
        for (const facet of _facets.enabledFacets()) {
          _ctr++
          await facet.runTest(diamond, _owner, _ctr, _paramArgs);
        }
      }
      await test()
    })
  }
  

}

