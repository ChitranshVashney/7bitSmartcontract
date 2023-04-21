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
        let response = await axios.get(
            `https://api.0x.org/swap/v1/quote?buyToken=USDT&sellToken=WETH&sellAmount=10000000000`
              );
              //   let Response=await response.json();
              swapQuoteJSON=response.data;
        [deployer] = await ethers.getSigners();
        const AlphaVaultSwap = await ethers.getContractFactory("AlphaVaultSwap")
        const alphaVaultSwap = await AlphaVaultSwap.deploy()
        console.log(response.data.sellTokenAddress,deployer.address);
        // console.log(alphaVaultSwap)
        let WETH=await ethers.getContractAt("IWETH",
            response.data.sellTokenAddress,
            deployer
            );
            // console.log(WETH)
           const txETHtoWETH=await WETH.deposit({
            value: ethers.utils.parseEther("0.1")
        }); 
        const a=await txETHtoWETH.wait(1);
        console.log(a);


            // let allowance1 = await WETH.allowance(deployer.address,response.data.allowanceTarget);
            // console.log(allowance1.toString());
            const max_approve= BigInt("1157920892373161954235709850086879078532699846656405640394575840079131296399");
            const txResponseWETH= await WETH.approve(response.data.allowanceTarget,max_approve)
            const txResponseWETH1= await WETH.approve(alphaVaultSwap.address,max_approve)
            await txResponseWETH.wait(1);
            await txResponseWETH1.wait(1);
            // const user_balance=await WETH.balanceOf(deployer.address);
            // let allowance = await WETH.allowance(deployer.address,response.data.allowanceTarget);
            // console.log("-------------",user_balance.toString(),"----------------");
            console.log(response.data.buyTokenAddress,
                response.data.allowanceTarget,
                response.data.to,
                response.data.data);

            const txRes=await alphaVaultSwap.fillQuote(
                response.data.buyTokenAddress,
                response.data.allowanceTarget,
                response.data.to,
                response.data.data);
            const tx = txRes.wait(1);
            console.log(tx);
            
    });
});