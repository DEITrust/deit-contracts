const deit = require('./deit/DEIT.ts')
const broker = require('./broker/Broker.ts')
const { expect, assert } = require("chai");
const { step } = require("mocha-steps");
const runTest = async () => {   
    step('Should run all the tests', async () => {
        console.log("RAN")
        console.log("DEIT CORE")
        const deitDiamond = await deit.coreTest()
        console.log("DEIT CORED")
        console.log(deitDiamond)
        console.log("BROKER CORE")
        const brokerDiamond = await broker.coreTest()
        
        // console.log("DEIT FACETS")
        // const deitFacetsPassed = await deit.facetsTest({minter:brokerDiamond.address})
        // console.log("BROKER FACETS")
        // const brokerFacetsPassed = await broker.facetsTest({symbol: deitDiamond.symbol, asset:deitDiamond.address})
        
        // if(deitFacetsPassed && brokerFacetsPassed){
        //     console.log("TESTS PASSED")
        // }else{
        //     console.log("TESTS FAILED")
        // } 
        // expect(true).to.be.equal(true)
    })   
}

describe("Project Test", runTest)

console.log("Fin.")
