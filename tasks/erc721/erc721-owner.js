task("erc721-owner", "Calls balanceOf function")
  .addParam("diamond", "The Diamond contract address you want to call")
  .addParam("id", "Token ID to check")
  .setAction(async (taskArgs, hre) => {
    const accounts = await ethers.getSigners()
    const signer = accounts[0]

    const Facet = await ethers.getContractFactory("MockERC721Facet")
    const facet = new ethers.Contract(taskArgs.diamond,Facet.interface, signer)
    console.log('MockERC721 interface fetched:', facet.address)

    const tx = await facet.ownerOf(taskArgs.id)
    console.log("RESPONSE: ",tx)
  }
)

module.exports = {}