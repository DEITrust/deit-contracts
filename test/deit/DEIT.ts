const { diamondTest } = require('../lib')
const { facets } = require('./facets')

export const coreTest = async() => {
  console.log("DEIT CORE TEST")
  let msg = await diamondTest.coreTest('DEIT');
  console.log(msg)
  return msg
}
export const facetsTest = async(facets, paramArgs_ = false) => {
  return await diamondTest.facetsTest(facets, paramArgs_)
}


