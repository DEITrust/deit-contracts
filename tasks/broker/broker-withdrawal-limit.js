const { Facet } = require("../../lib/diamond/shinyblocks")

task("broker-withdrawal-limit", "Gets the withdrawal limit of the Broker")
  .addParam("diamond", "The Diamond contract address you want to call")
  .setAction(async (taskArgs, hre) => {
    const facet = await Facet(hre, {address:taskArgs.diamond},"BrokerWithdrawalFacet")           
    const tx = await facet.instance['limit()']()
    console.log("RESPONSE: ",tx)
  }
)

module.exports = {}
