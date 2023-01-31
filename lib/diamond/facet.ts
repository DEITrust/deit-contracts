const { get, getSelector, getSelectors, FacetCutAction } = require('./diamond.ts')

const zeroAddress = '0x0000000000000000000000000000000000000000'
const _gasLimit = 10000000

const deployFacets = async (diamondAddress_, cutAction_, facets_) =>  {
  const accounts = await ethers.getSigners()
  const _facets = []
  for (const facet_ of facets_) {
    console.log(Facet.name)
    const Factory = await ethers.getContractFactory(facet_.name);
    let _facet 
    if(facet_.args){
      // NOTE: Will definitely bork if the signer is ever the first param cuz 0
      let signerKey = Object.keys(facet_.args).find(key => facet_.args[key] === '<signer>');
      let args = []
      if(signerKey){
        let Args = facet_.args        
        Args[signerKey] = accounts[0].address
        args = Args
      }else{
        args = facet_.args
      }
      _facet = await Factory.deploy(...args)
    }else{
      _facet = await Factory.deploy()
    }    
    await _facet.deployed();
    console.log(_facet.address)
    _facets.push(_facet);
  }
  return cutFacets(diamondAddress_,cutAction_,_facets)
}

const removeFacets = async (diamondAddress, FacetNames) =>  {
  const accounts = await ethers.getSigners()
  const contractOwner = accounts[0]
  let facets = []
  for (const FacetName of FacetNames) {
    const Facet = await ethers.getContractFactory(FacetName);
    const facet = new ethers.Contract(zeroAddress,Facet.interface,contractOwner)
    facets.push(facet);
  }
  return cutFacets(diamondAddress,2,facets)
}

const cutFacets = async (diamondAddress, CutAction, facets) =>  {
  const accounts = await ethers.getSigners()
  let cut = []
  for (const facet of facets) {
      cut.push({
      facetAddress: facet.address,
      action: CutAction,
      functionSelectors: getSelectors(facet)
    });
  }

  const diamondCut = await ethers.getContractAt('IDiamondCut', diamondAddress)

  let tx
  let receipt

  let functionCall = ethers.utils.formatBytes32String("");

  tx = await diamondCut.diamondCut(cut, zeroAddress, functionCall,{
    gasLimit: _gasLimit
  })
  receipt = await tx.wait()
  if (!receipt.status) {
    throw Error(`Diamond upgrade failed: ${tx.hash}`)
  }

  return facets;
}

exports.deployFacets = deployFacets
exports.cutFacets = cutFacets
exports.removeFacets = removeFacets

const facetLib = () => {}

module.export = facetLib
