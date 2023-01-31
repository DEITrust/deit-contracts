const { Facet } = require("../../lib/diamond/shinyblocks")

task("broker-token", "Renturns the token address being brokered")
  .addParam("diamond", "The Diamond contract address you want to call")
  .setAction(async (taskArgs, hre) => {
    const facet = await Facet(hre, {address:taskArgs.diamond},"BrokerAdminFacet")           
    const tx = await facet.instance['token()']()
    console.log("RESPONSE: ",tx)
  }
)

module.exports = {}
