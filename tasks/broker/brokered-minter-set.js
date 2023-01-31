const { Facet } = require("../../lib/diamond/shinyblocks")

task("brokered-minter-set", "Renturns the minter address for a brokered ERC20")
  .addParam("diamond", "The Diamond contract address you want to call")
  .addParam("minter", "The Mintercontract address you want to allow")
  .setAction(async (taskArgs, hre) => {
    const facet = await Facet(hre, {address:taskArgs.diamond},"ERC20BrokeredFacet")           
    const tx = await facet.instance['minter(address)'](taskArgs.minter)
    console.log("RESPONSE: ",tx)
  }
)

module.exports = {}
