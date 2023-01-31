/* eslint prefer-const: "off" */

const { D, Fs, S, CA } = require('../lib/diamond/shinyblocks')


const v1 = async ({ getNamedAccounts, deployments }) => {
    const _signer = await S(hre)
    const deit = await D(hre, 'DEIT', false, _signer)    

    const deitFacets = await Fs(hre, deit,
                                            [
                                                "ERC20Facet",
                                                "ERC20BrokeredFacet"
                                            ],
                                            _signer,
                                            CA.Add
                                        )
    await deitFacets.ERC20Facet.instance.erc20Init("DEIT Token", "DEIT", 
                                        18, 10000000, 
                                        hre.ethers.utils.parseEther("100000000000"), 
                                        _signer.address
                                    )
                                
    const broker = await D(hre, 'DEITBroker', false, _signer)            
    await deitFacets.ERC20BrokeredFacet.instance.erc20BrokeredInit(broker.address)

    const brokerFacets = await Fs(hre, broker, 
                                        [
                                            "BrokerAdminFacet",
                                            "BrokerPublicFacet",
                                            "BrokerWithdrawalFacet"
                                        ],
                                        _signer, 
                                        CA.Add
                                    )

    await brokerFacets.BrokerAdminFacet.instance.brokerAdminInit("DEIT", deit.address, 100000)
    await brokerFacets.BrokerWithdrawalFacet.instance.brokerWithdrawInit(2,1)
}

const v2 = async ({ getNamedAccounts, deployments }) => {
    const h = hre
    const s = await S(h)
    //Fully supported Diamond Params: 
    //0: hre; 1: symbol; 2: address (used for loupe loading, todo); 3: signer; 
    // 4: facets to cut alongside core; 5: cut action (likely only ever add, but still param'd); 
    // 6: shared core facet diamond ref; 7: init address; 8: init function
    const d = await D(h, 'DEIT', false, s, [
        "ERC20Facet",
        "ERC20BrokeredFacet"
    ], CA.Add) 

    await d.f.ERC20Facet.i.erc20Init("DEIT Token", "DEIT", 
                                        18, 10000000, 
                                        h.ethers.utils.parseEther("100000000000"), 
                                        s.address
                                    )
                                
    const b = await D(h, 'DEITBroker', false, s,[
        "BrokerAdminFacet",
        "BrokerPublicFacet",
        "BrokerWithdrawalFacet"
    ],CA.Add, d)            

    await d.f.ERC20BrokeredFacet.i.erc20BrokeredInit(broker.address)
    await b.f.BrokerAdminFacet.i.brokerAdminInit("DEIT", d.address, 100000)
    await b.f.BrokerWithdrawalFacet.i.brokerWithdrawInit(2,1)
}