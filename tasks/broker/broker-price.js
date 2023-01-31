const { Facet } = require("../../lib/diamond/shinyblocks")

task("broker-price", "Renturns the token address being brokered")
  .addParam("diamond", "The Diamond contract address you want to call")
  .setAction(async (taskArgs, hre) => {
    const facet = await Facet(hre, {address:taskArgs.diamond},"BrokerPublicFacet")           
    const tx = await facet.instance.price()
    console.log("RESPONSE: ",tx)
  }
)

module.exports = {}
