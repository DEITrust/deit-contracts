/* eslint prefer-const: "off" */

const { Diamond, Facets, Signer, CutAction } = require('../lib/diamond/shinyblocks')


module.exports = async ({ getNamedAccounts, deployments }) => {
    const _signer = await Signer(hre)
    const deit = await Diamond(hre, 'DEIT', false, _signer)    

    const deitFacets = await Facets(hre, deit,
                                            [
                                                "ERC20Facet",
                                                "ERC20BrokeredFacet"
                                            ],
                                            _signer,
                                            CutAction.Add
                                        )
    await deitFacets.ERC20Facet.instance.erc20Init("DEIT Token", "DEIT", 
                                        18, 10000000, 
                                        hre.ethers.utils.parseEther("100000000000"), 
                                        _signer.address
                                    )
                                
    const broker = await Diamond(hre, 'DEITBroker', false, _signer)            
    await deitFacets.ERC20BrokeredFacet.instance.erc20BrokeredInit(broker.address)

    const brokerFacets = await Facets(hre, broker, 
                                        [
                                            "BrokerAdminFacet",
                                            "BrokerPublicFacet",
                                            "BrokerWithdrawalFacet"
                                        ],
                                        _signer, 
                                        CutAction.Add
                                    )

    await brokerFacets.BrokerAdminFacet.instance.brokerAdminInit("DEIT", deit.address, 100000)
    await brokerFacets.BrokerWithdrawalFacet.instance.brokerWithdrawInit(2,1)
}
