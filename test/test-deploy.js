const { expect, assert } = require("chai");
const { ethers, getNamedAccounts, network } = require("hardhat")
const axios = require('axios');
const { BigNumber, utils } = require("ethers");

describe("AlphaVault", function() {

    // Define the deployer and user addresses
    let deployer;

    
    beforeEach(async function() {
        
        
    });
    
    // Test the function
    it("should fill the quote and return the bought amount", async function() {
            if(false){
        [deployer] = await ethers.getSigners();
        const AlphaVaultSwap = await ethers.getContractFactory("AlphaVaultSwap")
        const alphaVaultSwap = await AlphaVaultSwap.deploy()
        let response = await axios.get(
            `https://polygon.api.0x.org/swap/v1/quote?sellToken=0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270&buyToken=0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174&sellAmount=8193747396917710000&slippagePercentage=0.03`
              );
        let response1 = await axios.get(
            `https://polygon.api.0x.org/swap/v1/quote?sellToken=0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270&buyToken=0xc2132D05D31c914a87C6611C10748AEb04B58e8F&sellAmount=500000000000000000&slippagePercentage=0.03`
              );
              //   let Response=await response.json();
              swapQuoteJSON=response.data;
        let WETH=await ethers.getContractAt("IWETH",
            response.data.sellTokenAddress,
            deployer
            );
            // const user_balance1=await WETH.balanceOf(deployer.address);
            // console.log("-------------",user_balance1.toString(),"----------------");
            // await WETH.deposit({
            //     value: 10000000000000
            // }); 


            const max_approve= BigInt("1157920892373161954235709850086879078532699846656405640394575840079131296399");
            // const txResponseWETH= await WETH.approve(response.data.allowanceTarget,max_approve)
            const txResponseWETH1= await WETH.approve(alphaVaultSwap.address,max_approve)
            // await txResponseWETH.wait(1);
            await txResponseWETH1.wait(1);
            let allowance1 = await WETH.allowance(deployer.address,alphaVaultSwap.address);
            console.log(allowance1.toString());
            // const txtransferFrom=await WETH.transfer(alphaVaultSwap.address,response.data.sellAmount)
            // await txtransferFrom.wait(1);
            // const user_balance=await WETH.balanceOf(alphaVaultSwap.address);
            // console.log("-------------",user_balance.toString(),"----------------");
            // console.log(response.data.buyTokenAddress,
            //     response.data.sellTokenAddress,
            //     response.data.allowanceTarget,
            //     response.data.to,
            //     response.data.data);
            const txRes=await alphaVaultSwap.multiSwap(
                ['0x0000000000000000000000000000000000000000', '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270'],
                ['0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', response.data.buyTokenAddress],
                ['0x0000000000000000000000000000000000000000', '0xdef1c0ded9bec7f1a1670819833240f027b25eff'],
                ['0x0000000000000000000000000000000000000000', '0xdef1c0ded9bec7f1a1670819833240f027b25eff'],
                ['0x1230000000000000000001230000',response.data.data],
                [0,BigInt("8193747396917710000")]
                ,{value: BigInt("8193747396917710005")});
                const tx = await txRes.wait(1);
                // console.log(tx);
            let USDC=await ethers.getContractAt("IERC20",
            '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
                deployer
                );
                const contractUSDC=await USDC.balanceOf(deployer.address)
                console.log("USDC balance-->",contractUSDC.toString());


            let WMATIC=await ethers.getContractAt("IERC20",
            '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
                deployer
                );
                const contractWMATIC=await WMATIC.balanceOf(deployer.address)
                console.log("WMATIC balance-->",contractWMATIC.toString());

            let USDT=await ethers.getContractAt("IERC20",
            '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
                deployer
                );
                const contractUSDT=await USDT.balanceOf(deployer.address)
                console.log("USDT balance-->",contractUSDT.toString());
            }
            if(false){
                [deployer] = await ethers.getSigners();
                const AlphaVaultSwap = await ethers.getContractFactory("AlphaVaultSwap")
                const alphaVaultSwap = await AlphaVaultSwap.deploy()
                let response = await axios.get(
                    `https://bsc.api.0x.org/swap/v1/quote?buyToken=DAI&sellToken=WBNB&sellAmount=8193747396917710000&slippagePercentage=0.04`
                      );
                      //   let Response=await response.json();
                      swapQuoteJSON=response.data;
                let WETH=await ethers.getContractAt("IWETH",
                    response.data.sellTokenAddress,
                    deployer
                    );
                    await WETH.deposit({
                        value: 10000000000000
                    }); 
                    const user_balance1=await WETH.balanceOf(deployer.address);
                    console.log("-------------",user_balance1.toString(),"----------------");
        
        
                    const max_approve= BigInt("1157920892373161954235709850086879078532699846656405640394575840079131296399");
                    // const txResponseWETH= await WETH.approve(response.data.allowanceTarget,max_approve)
                    const txResponseWETH1= await WETH.approve(alphaVaultSwap.address,max_approve)
                    // await txResponseWETH.wait(1);
                    await txResponseWETH1.wait(1);
                    let allowance1 = await WETH.allowance(deployer.address,alphaVaultSwap.address);
                    console.log(allowance1.toString());
                    // const txtransferFrom=await WETH.transfer(alphaVaultSwap.address,response.data.sellAmount)
                    // await txtransferFrom.wait(1);
                    // const user_balance=await WETH.balanceOf(alphaVaultSwap.address);
                    // console.log("-------------",user_balance.toString(),"----------------");
                    // console.log(response.data.buyTokenAddress,
                    //     response.data.sellTokenAddress,
                    //     response.data.allowanceTarget,
                    //     response.data.to,
                    //     response.data.data);
                    const txRes=await alphaVaultSwap.multiSwap(
                        ['0x0000000000000000000000000000000000000000',response.data.sellTokenAddress],
                        ['0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', response.data.buyTokenAddress],
                        ['0x0000000000000000000000000000000000000000',response.data.to],
                        ['0x0000000000000000000000000000000000000000',response.data.allowanceTarget ],
                        ['0x1230000000000000000001230000',response.data.data],
                        [0,response.data.sellAmount]
                        ,{value: BigInt("8193747396917710005")});
                        const tx = await txRes.wait(1);
                        // console.log(tx);
                    // let USDC=await ethers.getContractAt("IERC20",
                    // '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
                    //     deployer
                    //     );
                    //     const contractUSDC=await USDC.balanceOf(deployer.address)
                    //     console.log("USDC balance-->",contractUSDC.toString());
        
        
                    let WMATIC=await ethers.getContractAt("IERC20",
                    response.data.sellTokenAddress,
                        deployer
                        );
                        const contractWMATIC=await WMATIC.balanceOf(deployer.address)
                        console.log("WMATIC balance-->",contractWMATIC.toString());
        
                    let USDT=await ethers.getContractAt("IERC20",
                    response.data.buyTokenAddress,
                        deployer
                        );
                        const contractUSDT=await USDT.balanceOf(deployer.address)
                        console.log("USDT balance-->",contractUSDT.toString());
            }
            if(false){
                [deployer] = await ethers.getSigners();
                const AlphaVaultSwap = await ethers.getContractFactory("AlphaVaultSwap")
                const alphaVaultSwap = await AlphaVaultSwap.deploy()
                let response = await axios.get(
                    `https://avalanche.api.0x.org/swap/v1/quote?buyToken=0x408D4cD0ADb7ceBd1F1A1C33A0Ba2098E1295bAB&sellToken=0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7&sellAmount=8193747396917710000&slippagePercentage=0.04`
                      );
                      //   let Response=await response.json();
                      swapQuoteJSON=response.data;
                let WETH=await ethers.getContractAt("IWETH",
                    response.data.sellTokenAddress,
                    deployer
                    );
                    // const user_balance1=await WETH.balanceOf(deployer.address);
                    // console.log("-------------",user_balance1.toString(),"----------------");
                    // await WETH.deposit({
                    //     value: 10000000000000
                    // }); 
        
        
                    const max_approve= BigInt("1157920892373161954235709850086879078532699846656405640394575840079131296399");
                    // const txResponseWETH= await WETH.approve(response.data.allowanceTarget,max_approve)
                    const txResponseWETH1= await WETH.approve(alphaVaultSwap.address,max_approve)
                    // await txResponseWETH.wait(1);
                    await txResponseWETH1.wait(1);
                    let allowance1 = await WETH.allowance(deployer.address,alphaVaultSwap.address);
                    console.log(allowance1.toString());
                    // const txtransferFrom=await WETH.transfer(alphaVaultSwap.address,response.data.sellAmount)
                    // await txtransferFrom.wait(1);
                    // const user_balance=await WETH.balanceOf(alphaVaultSwap.address);
                    // console.log("-------------",user_balance.toString(),"----------------");
                    // console.log(response.data.buyTokenAddress,
                    //     response.data.sellTokenAddress,
                    //     response.data.allowanceTarget,
                    //     response.data.to,
                    //     response.data.data);
                    const txRes=await alphaVaultSwap.multiSwap(
                        ['0x0000000000000000000000000000000000000000',response.data.sellTokenAddress],
                        ['0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7', response.data.buyTokenAddress],
                        ['0x0000000000000000000000000000000000000000',response.data.to],
                        ['0x0000000000000000000000000000000000000000',response.data.allowanceTarget ],
                        ['0x1230000000000000000001230000',response.data.data],
                        [0,response.data.sellAmount]
                        ,{value: BigInt("8193747396917710005")});
                        const tx = await txRes.wait(1);
                        // console.log(tx);
                    // let USDC=await ethers.getContractAt("IERC20",
                    // '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
                    //     deployer
                    //     );
                    //     const contractUSDC=await USDC.balanceOf(deployer.address)
                    //     console.log("USDC balance-->",contractUSDC.toString());
        
        
                    let WMATIC=await ethers.getContractAt("IERC20",
                    response.data.sellTokenAddress,
                        deployer
                        );
                        const contractWMATIC=await WMATIC.balanceOf(deployer.address)
                        console.log("WMATIC balance-->",contractWMATIC.toString());
        
                    let USDT=await ethers.getContractAt("IERC20",
                    response.data.buyTokenAddress,
                        deployer
                        );
                        const contractUSDT=await USDT.balanceOf(deployer.address)
                        console.log("USDT balance-->",contractUSDT.toString());
            }
            if(false){
                [deployer] = await ethers.getSigners();
                // const AlphaVaultSwap = await ethers.getContractFactory("AlphaVaultSwap")
                // const alphaVaultSwap = await AlphaVaultSwap.deploy()
                let alphaVaultSwap=await ethers.getContractAt("AlphaVaultSwap",
                    "0x2847efCF4Ac0D239A431697d0B7ABf6db90CA730",
                    deployer
                    );

                    const fee= await alphaVaultSwap.fee();
                    console.log("fee: ",fee.toString())
                let response = await axios.get(
                    `https://arbitrum.api.0x.org/swap/v1/quote?sellToken=WETH&buyToken=USDT&sellAmount=10000000000000000`
                      );
                      let WETH=await ethers.getContractAt("IWETH",
                      response.data.sellTokenAddress,
                      deployer
                      );
                    const user_balance1=await WETH.balanceOf(deployer.address);
                    console.log("-------------",user_balance1.toString(),"----------------");
                     
                        
                        // const max_approve= BigInt("1157920892373161954235709850086879078532699846656405640394575840079131296399");
                        // // const txResponseWETH= await WETH.approve(response.data.allowanceTarget,max_approve)
                        // const txResponseWETH1= await WETH.approve(alphaVaultSwap.address,max_approve)
                        // // await txResponseWETH.wait(1);
                        // await txResponseWETH1.wait(1);
                        // let allowance1 = await WETH.allowance(deployer.address,alphaVaultSwap.address);
                        // console.log(allowance1.toString());
                        // const user_balance2=await WETH.balanceOf(deployer.address);
                        // console.log("-------------",user_balance2.toString(),"----------------");
                    // const txtransferFrom=await WETH.transfer(alphaVaultSwap.address,response.data.sellAmount)
                    // await txtransferFrom.wait(1);
                    // const user_balance=await WETH.balanceOf(alphaVaultSwap.address);
                    // console.log("-------------",user_balance.toString(),"----------------");
                    // console.log(response.data.buyTokenAddress,
                    //     response.data.sellTokenAddress,
                    //     response.data.allowanceTarget,
                    //     response.data.to,
                    //     response.data.data);
                    const txRes=await alphaVaultSwap.multiSwap(
                        ['0x0000000000000000000000000000000000000000',response.data.sellTokenAddress],
                        [response.data.sellTokenAddress, response.data.buyTokenAddress],
                        ['0x0000000000000000000000000000000000000000',response.data.to],
                        ['0x0000000000000000000000000000000000000000',response.data.allowanceTarget ],
                        ['0x1230000000000000000001230000',response.data.data],
                        [0,response.data.sellAmount]
                        ,{value: BigInt("10000000000000005")});
                        const tx = await txRes.wait(1);

                    // let WMATIC=await ethers.getContractAt("IERC20",
                    // response.data.sellTokenAddress,
                    //     deployer
                    //     );
                        const contractWMATIC=await WETH.balanceOf(deployer.address)
                        console.log("WETH balance-->",contractWMATIC.toString());
        
                    let USDT=await ethers.getContractAt("IERC20",
                    response.data.buyTokenAddress,
                        deployer
                        );
                        const contractUSDT=await USDT.balanceOf(deployer.address)
                        console.log("USDT balance-->",contractUSDT.toString());
            }
            if(true){
                [deployer] = await ethers.getSigners();
                const AlphaVaultSwap = await ethers.getContractFactory("AlphaVaultSwap")
                const alphaVaultSwap = await AlphaVaultSwap.deploy()
                let response = await axios.get(
                    `https://optimism.api.0x.org/swap/v1/quote?sellToken=WETH&buyToken=USDT&sellAmount=100000000000000`
                      );
                let WETH=await ethers.getContractAt("IWETH",
                    response.data.sellTokenAddress,
                    deployer
                    );
                    const user_balance1=await WETH.balanceOf(deployer.address);
                    console.log("-------------",user_balance1.toString(),"----------------");
                     
                        
                        // const max_approve= BigInt("1157920892373161954235709850086879078532699846656405640394575840079131296399");
                        // // const txResponseWETH= await WETH.approve(response.data.allowanceTarget,max_approve)
                        // const txResponseWETH1= await WETH.approve(alphaVaultSwap.address,max_approve)
                        // // await txResponseWETH.wait(1);
                        // await txResponseWETH1.wait(1);
                        // let allowance1 = await WETH.allowance(deployer.address,alphaVaultSwap.address);
                        // console.log(allowance1.toString());
                        // const user_balance2=await WETH.balanceOf(deployer.address);
                        // console.log("-------------",user_balance2.toString(),"----------------");
                    // const txtransferFrom=await WETH.transfer(alphaVaultSwap.address,response.data.sellAmount)
                    // await txtransferFrom.wait(1);
                    // const user_balance=await WETH.balanceOf(alphaVaultSwap.address);
                    // console.log("-------------",user_balance.toString(),"----------------");
                    // console.log(response.data.buyTokenAddress,
                    //     response.data.sellTokenAddress,
                    //     response.data.allowanceTarget,
                    //     response.data.to,
                    //     response.data.data);
                    const txRes=await alphaVaultSwap.multiSwap(
                        ['0x0000000000000000000000000000000000000000',response.data.sellTokenAddress],
                        [response.data.sellTokenAddress, response.data.buyTokenAddress],
                        ['0x0000000000000000000000000000000000000000',response.data.to],
                        ['0x0000000000000000000000000000000000000000',response.data.allowanceTarget ],
                        ['0x1230000000000000000001230000',response.data.data],
                        [0,response.data.sellAmount]
                        ,{value: BigInt("100000000000005")});
                        const tx = await txRes.wait(1);

                    let WMATIC=await ethers.getContractAt("IERC20",
                    response.data.sellTokenAddress,
                        deployer
                        );
                        const contractWMATIC=await WMATIC.balanceOf(deployer.address)
                        console.log("WETH balance-->",contractWMATIC.toString());
        
                    let USDT=await ethers.getContractAt("IERC20",
                    response.data.buyTokenAddress,
                        deployer
                        );
                        const contractUSDT=await USDT.balanceOf(deployer.address)
                        console.log("USDT balance-->",contractUSDT.toString());
            }
            if(false){
                [deployer] = await ethers.getSigners();
                const AlphaVaultSwap = await ethers.getContractFactory("AlphaVaultSwap")
                const alphaVaultSwap = await AlphaVaultSwap.deploy()
                let response = await axios.get(
                    `https://fantom.api.0x.org/swap/v1/quote?sellToken=0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83&buyToken=0x1e1fdb53451C5262A5ba449271789C7F551a9142&sellAmount=81937473969177100000`
                      );
                      //   let Response=await response.json();
                      swapQuoteJSON=response.data;
                let WETH=await ethers.getContractAt("IWETH",
                    response.data.sellTokenAddress,
                    deployer
                    );
                    const user_balance1=await WETH.balanceOf(deployer.address);
                    console.log("-------------",user_balance1.toString(),"----------------");
                    // await WETH.deposit({
                        //     value: 10000000000000
                        // }); 
                        
                        
                        const max_approve= BigInt("1157920892373161954235709850086879078532699846656405640394575840079131296399");
                        // const txResponseWETH= await WETH.approve(response.data.allowanceTarget,max_approve)
                        const txResponseWETH1= await WETH.approve(alphaVaultSwap.address,max_approve)
                        // await txResponseWETH.wait(1);
                        await txResponseWETH1.wait(1);
                        let allowance1 = await WETH.allowance(deployer.address,alphaVaultSwap.address);
                        console.log(allowance1.toString());
                        const user_balance2=await WETH.balanceOf(deployer.address);
                        console.log("-------------",user_balance2.toString(),"----------------");
                    // const txtransferFrom=await WETH.transfer(alphaVaultSwap.address,response.data.sellAmount)
                    // await txtransferFrom.wait(1);
                    // const user_balance=await WETH.balanceOf(alphaVaultSwap.address);
                    // console.log("-------------",user_balance.toString(),"----------------");
                    // console.log(response.data.buyTokenAddress,
                    //     response.data.sellTokenAddress,
                    //     response.data.allowanceTarget,
                    //     response.data.to,
                    //     response.data.data);
                    const txRes=await alphaVaultSwap.multiSwap(
                        ['0x0000000000000000000000000000000000000000',response.data.sellTokenAddress],
                        ['0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83', response.data.buyTokenAddress],
                        ['0x0000000000000000000000000000000000000000',response.data.to],
                        ['0x0000000000000000000000000000000000000000',response.data.allowanceTarget ],
                        ['0x1230000000000000000001230000',response.data.data],
                        [0,response.data.sellAmount]
                        ,{value: BigInt("81937473969177100005")});
                        const tx = await txRes.wait(1);
                        // console.log(tx);
                    // let USDC=await ethers.getContractAt("IERC20",
                    // '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
                    //     deployer
                    //     );
                    //     const contractUSDC=await USDC.balanceOf(deployer.address)
                    //     console.log("USDC balance-->",contractUSDC.toString());
        
        
                    let WMATIC=await ethers.getContractAt("IERC20",
                    response.data.sellTokenAddress,
                        deployer
                        );
                        const contractWMATIC=await WMATIC.balanceOf(deployer.address)
                        console.log("WMATIC balance-->",contractWMATIC.toString());
        
                    let USDT=await ethers.getContractAt("IERC20",
                    response.data.buyTokenAddress,
                        deployer
                        );
                        const contractUSDT=await USDT.balanceOf(deployer.address)
                        console.log("USDT balance-->",contractUSDT.toString());
            }
            if(false){
                [deployer] = await ethers.getSigners();
                const AlphaVaultSwap = await ethers.getContractFactory("AlphaVaultSwap")
                const alphaVaultSwap = await AlphaVaultSwap.deploy()
                let response = await axios.get(
                    `https://api.0x.org/swap/v1/quote?buyToken=AAVE&sellToken=WETH&sellAmount=10000000000000`
                      );
                      //   let Response=await response.json();
                      swapQuoteJSON=response.data;
                let WETH=await ethers.getContractAt("IWETH",
                    response.data.sellTokenAddress,
                    deployer
                    );
                    const user_balance1=await WETH.balanceOf(deployer.address);
                    console.log("-------------",user_balance1.toString(),"----------------");
                    // await WETH.deposit({
                        //     value: 10000000000000
                        // }); 
                        
                        
                        // const max_approve= BigInt("1157920892373161954235709850086879078532699846656405640394575840079131296399");
                        // // const txResponseWETH= await WETH.approve(response.data.allowanceTarget,max_approve)
                        // const txResponseWETH1= await WETH.approve(alphaVaultSwap.address,max_approve)
                        // // await txResponseWETH.wait(1);
                        // await txResponseWETH1.wait(1);
                        // let allowance1 = await WETH.allowance(deployer.address,alphaVaultSwap.address);
                        // console.log(allowance1.toString());
                        // const user_balance2=await WETH.balanceOf(deployer.address);
                        // console.log("-------------",user_balance2.toString(),"----------------");
                    // const txtransferFrom=await WETH.transfer(alphaVaultSwap.address,response.data.sellAmount)
                    // await txtransferFrom.wait(1);
                    // const user_balance=await WETH.balanceOf(alphaVaultSwap.address);
                    // console.log("-------------",user_balance.toString(),"----------------");
                    // console.log(response.data.buyTokenAddress,
                    //     response.data.sellTokenAddress,
                    //     response.data.allowanceTarget,
                    //     response.data.to,
                    //     response.data.data);
                    const txRes=await alphaVaultSwap.multiSwap(
                        ['0x0000000000000000000000000000000000000000',response.data.sellTokenAddress],
                        [response.data.sellTokenAddress, response.data.buyTokenAddress],
                        ['0x0000000000000000000000000000000000000000',response.data.to],
                        ['0x0000000000000000000000000000000000000000',response.data.allowanceTarget],
                        ['0x1230000000000000000001230000',response.data.data],
                        [0,response.data.sellAmount]
                        ,{value: BigInt("10000000000005")});
                        const tx = await txRes.wait(1);
                        // console.log(tx);
                    // let USDC=await ethers.getContractAt("IERC20",
                    // '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
                    //     deployer
                    //     );
                    //     const contractUSDC=await USDC.balanceOf(deployer.address)
                    //     console.log("USDC balance-->",contractUSDC.toString());
        
        
                    let WMATIC=await ethers.getContractAt("IERC20",
                    response.data.sellTokenAddress,
                        deployer
                        );
                        const contractWMATIC=await WMATIC.balanceOf(deployer.address)
                        console.log("WEth balance-->",contractWMATIC.toString());
        
                    let USDT=await ethers.getContractAt("IERC20",
                    response.data.buyTokenAddress,
                        deployer
                        );
                        const contractUSDT=await USDT.balanceOf(deployer.address)
                        console.log("AAE balance-->",contractUSDT.toString());
            }
        });
    });