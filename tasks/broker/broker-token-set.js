const { Facet } = require("../../lib/diamond/shinyblocks")

task("broker-token-set", "Sets the token being brokered")
  .addParam("diamond", "The Diamond contract address you want to call")
  .addParam("symbol", "The Token symbol you want to call")
  .addParam("token", "The Token contract address you want to broker")
  .addParam("denom", "The denominator used for price ratio (vs ETH/native coin)")
  .setAction(async (taskArgs, hre) => {
    const facet = await Facet(hre, {address:taskArgs.diamond},"BrokerAdminFacet")           
    const tx = await facet.instance['token(string,address,uint256)'](taskArgs.symbol, taskArgs.token, taskArgs.denom)
    console.log("RESPONSE: ",tx)
  }
)

module.exports = {}
