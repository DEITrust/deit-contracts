const { Facet, Signer } = require("../../lib/diamond/shinyblocks")

task("broker-bought", "Renturns the amount of assets bought and ETH spent")
  .addParam("diamond", "The Diamond contract address you want to call")
  .setAction(async (taskArgs, hre) => {
    const facet = await Facet(hre, {address:taskArgs.diamond},"BrokerPublicFacet")    
    const signed = await Signer(hre)       
    const tx = await facet.instance.bought(signed.address)
    console.log("RESPONSE: ",tx)
  }
)

module.exports = {}
