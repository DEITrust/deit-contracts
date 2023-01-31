const { Facet } = require("../../lib/diamond/shinyblocks")

task("broker-withdraw", "Withdraws up to the limit of the Broker")
  .addParam("diamond", "The Diamond contract address you want to call")
  .addParam("to", "Address to withdraw to")
  .addParam("amount", "Amount of the asset to withdraw")
  .addOptionalParam("asset", "Flag for whether to withdraw the asset instead of ETH. Any value will be true")
  .setAction(async (taskArgs, hre) => {
    const facet = await Facet(hre, {address:taskArgs.diamond},"BrokerWithdrawalFacet")           
    const tx = await facet.instance.withdraw()(taskArgs.to, taskArgs.amount, (taskArgs.asset ? true : false))
    console.log("RESPONSE: ",tx)
  }
)

module.exports = {}
