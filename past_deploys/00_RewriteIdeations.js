/* eslint prefer-const: "off" */

const { D, Fs, S, CA Deployment, Migration } = require('../lib/diamond/shinyblocks')


// simply a rewrite of the current script with the shorthand functions
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

// I do not condone this (v) shorthand behaviour... except the more minified it becomes, 
// the closer it gets to being able to support v3 the internals are since the only remaining verbosity is
// contract/implementation verbage
//
// the main value add icymi is the ability to pass arbitrary facets to be cut alongside the core facets 
// in a single cut of your diamond
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

// @TODO: below doesn't begin to facilitate shared core facets or injected initialization contracts yet, but atm
// that logic only exists in Facets and hasn't been supported at the Diamond level where it should be as well 
// to avoid unnecessary double cut steps for a deployment. Some props below also don't yet exist, but give clarity
// to what features might still be needed internally.
//
// this aims to take the above v2, and generalize it to reduce it to a JSON/YAML definition. still a WIP in ideation.
// will likely "borrow" a lot of learning from hardhat-deploy and its existing format, but aim to remove hardhat 
// dependencies, with dependencies instead injected, which is currently primarily ethers, except where hardhat-ethers 
// functions are used (to be removed/rerolled internally since they're just helper functions to begin with)
//
// the end goal: I don't want changing deployment _scripts_ to manage, I want changing migration configs tracking 
// the delta in as few words as possible, and generally understandable when read plaintext. like a cruder/less 
// capable HCL/Terraform for Diamond contract management. also freedom to roam between toolkits, carrying around 
// only ethers as baggage. also in an ideal world, this should integrate client side if truly "shiny" :P

const v3 = async ({ getNamedAccounts, deployments }) => {
    const deployment = {} //getDFM()
    const s = await S(h)
    let diamonds = {}
    let receipt = {diamonds:{},facets:{},initializations:[], selectorMaps:{}} 
    let diamondShare = false
    let idx = 0
    for(const diamond in deployment.diamonds){        
        receipt.diamonds[String(diamond.contract)] = await D(h, 
                                                            diamond.contract, 
                                                            false, 
                                                            s, 
                                                            diamond.facetNames(), 
                                                            diamond.cutAction, 
                                                            diamondShare, 
                                                            diamond.initContract, 
                                                            diamond.initFunction 
                                                            )    
        if(idx == 0 && deployment.shareCore){
            diamondShare = receipt.diamonds[String(diamond.contract)]
        }
        idx++
        for(facet in receipt.diamonds[String(diamond.contract)].facets){
            receipt.facets[String(facet.name)] = {
                                                    f:facet,
                                                    d:receipt.diamonds[String(diamond.contract)],
                                                    dt:facet.tx, //deploy tx
                                                    ct:facet.cutTx //cut tx
                                                }
            // @TODO: stub out selectorMaps, which is probably the most important deployment.migration
            // feature to capture
        }
    }
    
    for(const initialization in deployment.initializations){
        const tx = await diamonds[ininitalization.diamond][initialization.initializer](...initialization.params)
        receipt.initializations.push({
                                        d:diamonds[ininitalization.diamond],
                                        f:initialization.initializer,
                                        p:{...initialization.params}, 
                                        t:tx
                                    })
    }    
    
    // export a deployment script config for a migration from the previous migration
    Migration(receipt,'./migrations') 
    // export a deployment script config for a fresh deployment
    Deployment(receipt,'./build') 
}

