const { expect, assert } = require("chai");
const { ethers, getNamedAccounts, network } = require("hardhat")
const axios = require('axios');
const { BigNumber, utils } = require("ethers");
const {networks}= require("../scripts/networks");

describe("AlphaVault", function() {

    // Define the deployer and user addresses
    let deployer;

    
    beforeEach(async function() {
        
        
    });
    
    // Test the function
    it("should fill the quote and return the bought amount", async function() {
            if(networks.chain_id == 137 ){
        [deployer] = await ethers.getSigners();
        const AlphaVaultSwap = await ethers.getContractFactory("AlphaVaultSwap")
        const alphaVaultSwap = await AlphaVaultSwap.deploy()
        let response = await axios.get(
            `https://polygon.api.0x.org/swap/v1/quote?sellToken=0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270&buyToken=0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174&sellAmount=500000000000000000&slippagePercentage=0.03`
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
                ['0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', '0x2791bca1f2de4661ed88a30c99a7a9449aa84174'],
                ['0x0000000000000000000000000000000000000000', '0xdef1c0ded9bec7f1a1670819833240f027b25eff'],
                ['0x0000000000000000000000000000000000000000', '0xdef1c0ded9bec7f1a1670819833240f027b25eff'],
                ['0x1230000000000000000001230000',"0x415565b00000000000000000000000000d500b1d8e8ef31e21c99d1db9a6444d3adf12700000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa8417400000000000000000000000000000000000000000000000071b609d85c8fccb000000000000000000000000000000000000000000000000000000000006a6a7300000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000004c0000000000000000000000000000000000000000000000000000000000000001400000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000340000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000d500b1d8e8ef31e21c99d1db9a6444d3adf12700000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa8417400000000000000000000000000000000000000000000000000000000000001400000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000002c000000000000000000000000000000000000000000000000071b609d85c8fccb0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000012556e697377617056330000000000000000000000000000000000000000000000000000000000000071b609d85c8fccb000000000000000000000000000000000000000000000000000000000006a6a73000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000e592427a0aece92de3edee1f18e0157c058615640000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000002b0d500b1d8e8ef31e21c99d1db9a6444d3adf12700001f42791bca1f2de4661ed88a30c99a7a9449aa84174000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000d000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000600000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa8417400000000000000000000000000000000000000000000000000000000006dc10d000000000000000000000000af5889d80b0f6b2850ec5ef8aad0625788eeb903000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000d500b1d8e8ef31e21c99d1db9a6444d3adf1270000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000000000000000000000000000000000000000000000869584cd00000000000000000000000010000000000000000000000000000000000000110000000000000000000000000000000000000000000000e28c4f59b16465c7c9"],
                [0,BigInt("8193747396917710000")]
                ,{value: BigInt("8193747396917710000")});
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
            if(networks.chain_id == 56){
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
                        ['0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', response.data.buyTokenAddress],
                        ['0x0000000000000000000000000000000000000000',response.data.to],
                        ['0x0000000000000000000000000000000000000000',response.data.allowanceTarget ],
                        ['0x1230000000000000000001230000',response.data.data],
                        [0,response.data.sellAmount]
                        ,{value: BigInt("8193747396917710000")});
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
            if( networks.chain_id == 43114 ){
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
                        ,{value: BigInt("8193747396917710000")});
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
            if(networks.chain_id == 250 ){
                [deployer] = await ethers.getSigners();
                const AlphaVaultSwap = await ethers.getContractFactory("AlphaVaultSwap")
                const alphaVaultSwap = await AlphaVaultSwap.deploy()
                let response = await axios.get(
                    `https://fantom.api.0x.org/swap/v1/quote?sellToken=0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83&buyToken=0x1e1fdb53451C5262A5ba449271789C7F551a9142&sellAmount=8193747396917710000`
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
                        ,{value: BigInt("8193747396917710000")});
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
            if(true){
                [deployer] = await ethers.getSigners();
                const AlphaVaultSwap = await ethers.getContractFactory("AlphaVaultSwap")
                const alphaVaultSwap = await AlphaVaultSwap.deploy()

                let response = await axios.get(
                    `https://api.0x.org/swap/v1/quote?buyToken=AAVE&sellToken=WETH&sellAmount=8193747396917710000`
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
                        ['0x0000000000000000000000000000000000000000',response.data.sellTokenAddress,'0x0000000000000000000000000000000000000000'],
                        [response.data.sellTokenAddress, response.data.buyTokenAddress,response.data.sellTokenAddress],
                        ['0x0000000000000000000000000000000000000000',response.data.to,'0x0000000000000000000000000000000000000000'],
                        ['0x0000000000000000000000000000000000000000',response.data.allowanceTarget,'0x0000000000000000000000000000000000000000' ],
                        ['0x1230000000000000000001230000',response.data.data,'0x0000000000000000000000000000000000000000'],
                        [0,response.data.sellAmount,BigInt("10000000000000000000")]
                        ,{value: BigInt("18193747396917710000")});
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
                        console.log("USDT balance-->",contractUSDT.toString());
            }
        });
    });
