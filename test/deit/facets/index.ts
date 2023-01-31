var erc20 = require('./ERC20.ts')

// This is used to test the facets
const enabledFacets = () => {
  return [erc20]
}

// This is used to deploy the facets
const names = () => {
  var facets = enabledFacets();
  return facets.map((row)=>{return row.name});
}

let availableFacets = {
  erc20:erc20,
  facetNames:names,
  enabledFacets:enabledFacets
}

exports.facets = availableFacets
