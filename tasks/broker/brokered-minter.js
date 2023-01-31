const { Facet } = require("../../lib/diamond/shinyblocks")

task("brokered-minter", "Renturns the minter address for a brokered ERC20")
  .addParam("diamond", "The Diamond contract address you want to call")
  .setAction(async (taskArgs, hre) => {
    const facet = await Facet(hre, {address:taskArgs.diamond},"ERC20BrokeredFacet")           
    const tx = await facet.instance['minter()']()
    console.log("RESPONSE: ",tx)
  }
)

module.exports = {}
