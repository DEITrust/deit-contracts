const { Facet } = require("../../lib/diamond/shinyblocks")

task("broker-buy", "Buys the the amount of assets specified, minting 2x that many")
  .addParam("diamond", "The Diamond contract address you want to call")
  .addParam("amount", "The amount of tokens to buy")
  .setAction(async (taskArgs, hre) => {
    const facet = await Facet(hre, {address:taskArgs.diamond},"BrokerPublicFacet")
    const price = ethers.BigNumber.from(await facet.instance.price())
    console.log(price)
    const bigAmount = ethers.utils.parseEther(taskArgs.amount)
    const options = {value:ethers.BigNumber.from(taskArgs.amount).mul(price)}
    console.log(options)
    const tx = await facet.instance.buy(bigAmount, options)
    console.log("RESPONSE: ",tx)
  }
)

module.exports = {}
