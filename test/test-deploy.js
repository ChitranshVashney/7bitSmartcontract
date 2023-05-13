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
            `https://bsc.api.0x.org/swap/v1/quote?buyToken=DAI&sellToken=WBNB&sellAmount=300000000000000000`
              );
              //   let Response=await response.json();
              swapQuoteJSON=response.data;
        let WETH=await ethers.getContractAt("IWETH",
            response.data.sellTokenAddress,
            deployer
            );
            // const user_balance1=await WETH.balanceOf(deployer.address);
            // console.log("-------------",user_balance1.toString(),"----------------");
            await WETH.deposit({
                value: ethers.utils.parseEther("6")
            }); 


            const max_approve= BigInt("1157920892373161954235709850086879078532699846656405640394575840079131296399");
            const txResponseWETH= await WETH.approve(response.data.allowanceTarget,max_approve)
            const txResponseWETH1= await WETH.approve(alphaVaultSwap.address,max_approve)
            await txResponseWETH.wait(1);
            await txResponseWETH1.wait(1);
            let allowance1 = await WETH.allowance(deployer.address,alphaVaultSwap.address);
            console.log(allowance1.toString());
            const txtransferFrom=await WETH.transfer(alphaVaultSwap.address,response.data.sellAmount)
            await txtransferFrom.wait(1);
            const user_balance=await WETH.balanceOf(alphaVaultSwap.address);
            console.log("-------------",user_balance.toString(),"----------------");
            console.log(response.data.buyTokenAddress,
                response.data.sellTokenAddress,
                response.data.allowanceTarget,
                response.data.to,
                response.data.data);
            const txRes=await alphaVaultSwap.multiSwap(
                [response.data.sellTokenAddress],
                [response.data.buyTokenAddress],
                [response.data.to],
                [response.data.allowanceTarget],
                [response.data.data],
                [response.data.sellAmount]);//,{value: ethers.utils.parseEther("0.01"),}
                const tx = txRes.wait(1);
            // console.log(await tx);
            let DAI=await ethers.getContractAt("IERC20",
                response.data.buyTokenAddress,
                deployer
                );
                const contractDAI=await DAI.balanceOf(deployer.address)
                console.log("DAI balance-->",contractDAI.toString());
            
        });
    });