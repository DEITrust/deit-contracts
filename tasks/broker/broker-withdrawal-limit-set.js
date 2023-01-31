const { Facet } = require("../../lib/diamond/shinyblocks")

task("broker-withdrawal-limit-set", "Sets the withdrawal limit of the Broker")
  .addParam("diamond", "The Diamond contract address you want to call")
  .addParam("ethDenom", "The ETH denominator")
  .addParam("assetDenom", "The asset denominator")
  .setAction(async (taskArgs, hre) => {
    const facet = await Facet(hre, {address:taskArgs.diamond},"BrokerWithdrawalFacet")           
    const tx = await facet.instance['limit(uint256,uint256)'](taskArgs.ethDenom, taskArgs.assetDenom)
    console.log("RESPONSE: ",tx)
  }
)

module.exports = {}
