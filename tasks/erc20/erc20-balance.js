task("erc20-balance", "Calls balanceOf function")
  .addParam("diamond", "The Diamond contract address you want to call")
  .addOptionalParam("account", "The Diamond contract address you want to call")
  .setAction(async (taskArgs, hre) => {
    const accounts = await ethers.getSigners()
    const signer = accounts[0]

    const Facet = await ethers.getContractFactory("ERC20Facet")
    const facet = new ethers.Contract(taskArgs.diamond,Facet.interface, signer)
    console.log('ERC20Facet interface fetched:', facet.address)
    const _account = taskArgs.account ? taskArgs.account : signer.address
    const tx = await facet.balanceOf(_account)
    console.log("RESPONSE: ",tx)
  }
)

module.exports = {}
