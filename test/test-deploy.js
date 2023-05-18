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
                ['0x0000000000000000000000000000000000000000','0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',response.data.sellTokenAddress,response1.data.sellTokenAddress],
                ['0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270','0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',response.data.buyTokenAddress,response1.data.buyTokenAddress],
                ['0x0000000000000000000000000000000000000000','0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',response.data.to,response1.data.to],
                ['0x0000000000000000000000000000000000000000','0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',response.data.allowanceTarget,response1.data.allowanceTarget],
                ['0x1230000000000000000001230000','0x',response.data.data,response1.data.data],
                [0,0,response.data.sellAmount,response1.data.sellAmount]
                ,{value: BigInt("1000000000000000000")});
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
            
        });
    });