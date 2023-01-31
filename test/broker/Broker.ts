const { diamondTest } = require('../lib')
const { facets } = require('./facets')

export const coreTest = async() => {
  return await diamondTest.coreTest('DEITBroker');
}
export const facetsTest = async(facets, paramArgs_ = false) => {
  return await diamondTest.facetsTest(facets, paramArgs_)
}

