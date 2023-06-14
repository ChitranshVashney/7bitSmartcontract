// const { expect, assert } = require("chai");
// const { ethers, getNamedAccounts, network } = require("hardhat")
// const axios = require('axios');
// const { BigNumber, utils } = require("ethers");
// const {networks}= require("../scripts/networks");
// const helpers = require("@nomicfoundation/hardhat-network-helpers");


// describe("AlphaVault", function() {

//     // Define the deployer and user addresses
// let deployer;
    
//     beforeEach(async function() {

        
        
//     });

//     it("should fill the quote and return the bought amount", async function() {
//         let provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545/");
    
       
       
//         if(true){

            
//             const address = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
//         await helpers.impersonateAccount(address);
//         [deployer] = await ethers.getSigners(address);

// const address_deploed = "0xA16FFA7274bfF034364f86cDB69BE7e1eBBeC334"
// // console.log("at line 35");
//             // [deployer] = await ethers.getSigners();
//             // const AlphaVaultSwap = await ethers.getContractFactory("AlphaVaultSwap")
//             const alphaVaultSwap=await ethers.getContractAt("AlphaVaultSwap",
//             address_deploed,
//                 deployer
//                 );

//             // // fantom 1
//             // let response = await axios.get(
//             //     `https://fantom.api.0x.org/swap/v1/quote?buyToken=DAI&sellToken=WFTM&sellAmount=1000000000000000000&slippagePercentage=0.04`

//             //       );
                
//             // fantom 2
//             // let response = await axios.get(
//             //     `https://fantom.api.0x.org/swap/v1/quote?buyToken=DAI&sellToken=WFTM&sellAmount=1000000000000000000&slippagePercentage=0.04`
//             //       );
//             //       let response2= await axios.get(
//             //         `https://fantom.api.0x.org/swap/v1/quote?buyToken=0x04068DA6C83AFCFA0e13ba15A6696662335D5B75&sellToken=WFTM&sellAmount=1000000000000000000&slippagePercentage=0.04`
//             //       );

//             // binance 3
// //    let response = await axios.get(
// //                 `https://fantom.api.0x.org/swap/v1/quote?buyToken=DAI&sellToken=WFTM&sellAmount=2000000000000000000&slippagePercentage=0.04`
// //                   );
// //   let response2 = await axios.get(
// //                     `https://fantom.api.0x.org/swap/v1/quote?buyToken=0x04068DA6C83AFCFA0e13ba15A6696662335D5B75&sellToken=WFTM&sellAmount=2000000000000000000&slippagePercentage=0.04`
// //                       );

// //binance 4
// //    let response = await axios.get(
// //                 `https://fantom.api.0x.org/swap/v1/quote?buyToken=DAI&sellToken=WFTM&sellAmount=1000000000000000000&slippagePercentage=0.04`
// //                   );

// //  let response2 = await axios.get(
// //                     `https://fantom.api.0x.org/swap/v1/quote?buyToken=0x04068DA6C83AFCFA0e13ba15A6696662335D5B75&sellToken=WFTM&sellAmount=1000000000000000000&slippagePercentage=0.04`
// //                       );


// //fantom 5 
// // let response = await axios.get(
// //     `https://fantom.api.0x.org/swap/v1/quote?buyToken=DAI&sellToken=&sellAmount=1000000000000000000&slippagePercentage=0.04`
// //       );WFTM
// // let response2 = await axios.get(
// //         `https://fantom.api.0x.org/swap/v1/quote?buyToken=0x04068DA6C83AFCFA0e13ba15A6696662335D5B75&sellToken=WFTM&sellAmount=1000000000000000000&slippagePercentage=0.04`
// //           );


//     // binance 6
//             // let response = await axios.get(
//             //     `https://bsc.api.0x.org/swap/v1/quote?buyToken=DAI&sellToken=WBNB&sellAmount=1000000000000000000&slippagePercentage=0.04`

//             //       );


//                   swapQuoteJSON=response.data;
//             let WETH=await ethers.getContractAt("IWETH",
//                 response.data.sellTokenAddress,
//                 deployer
//                 );
//                 // const user_balance1=await WETH.balanceOf(deployer.address);
//                 // console.log("-------------",user_balance1.toString(),"----------------");
//                 // await WETH.deposit({
//                     //     value: 10000000000000
//                     // }); 
//                     console.log("at line 70");
                    
//                     const max_approve= BigInt("1157920892373161954235709850086879078532699846656405640394575840079131296399");
//                     // const txResponseWETH= await WETH.approve(response.data.allowanceTarget,max_approve)
//                     console.log("---------------------At line 74------------------");
//                     const txResponseWETH1= await WETH.approve(alphaVaultSwap.address,max_approve)
//                     console.log("at line 76");
//                     // await txResponseWETH.wait(1);
//                     await txResponseWETH1.wait(1);
//                     console.log(deployer.address);
//                     let allowance1 = await WETH.allowance(deployer.address,alphaVaultSwap.address);
//                     console.log("--------80---")
//                     console.log(allowance1.toString());
//                     const user_balance2=await WETH.balanceOf(deployer.address);
//                     console.log("at line 82");
//                     console.log("-------------",user_balance2.toString(),"----------------");
             

//                 // console.log("at Line 91");








































// //binance 06
//                 // const txRes=await alphaVaultSwap.multiSwap(
//                 //     ['0x8965349fb649A33a30cbFDa057D8eC2C48AbE2A2','0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'],
//                 //     ['0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', '0x0000000000000000000000000000000000000000','0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',response.data.buyTokenAddress],
//                 //     [response2.data.to,'0x0000000000000000000000000000000000000000','0x0000000000000000000000000000000000000000','0x0000000000000000000000000000000000000000'],
//                 //     ['0x0000000000000000000000000000000000000000',response.data.allowanceTarget ],
//                 //     ['0x1230000000000000000001230000',response.data.data],
//                 //     [0,response.data.sellAmount]
//                 //     ,{value: BigInt("8193747396917710005")});
//                 //     const tx = await txRes.wait(1); 
//                 //     console.log("after function call");











                

// // binance 5
// //   const txRes=await alphaVaultSwap.multiSwap(
// //                     ['0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83','0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83'],
// //                     [response.data.buyTokenAddress, response2.data.buyTokenAddress],
// //                     [response.data.to, response2.data.to],
// //                     [response.data.allowanceTarget , response2.data.allowanceTarget],
// //                     [response.data.data, response2.data.data],
// //                     [response.data.sellAmount, response2.data.sellAmount]
// //                     ,{value: BigInt("8193747396917710005")});
// //                     const tx = await txRes.wait(1); 
// //                     console.log("after function call");



// // fantom 4
// //   const txRes=await alphaVaultSwap.multiSwap(
// //                     ['0x0000000000000000000000000000000000000000','0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83','0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83'],
// //                     ['0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83', response.data.buyTokenAddress, response2.data.buyTokenAddress],
// //                     ['0x0000000000000000000000000000000000000000',response.data.to, response2.data.to],
// //                     ['0x0000000000000000000000000000000000000000',response.data.allowanceTarget , response2.data.allowanceTarget],
// //                     ['0x1230000000000000000001230000',response.data.data, response2.data.data],
// //                     [0,response.data.sellAmount, response2.data.sellAmount]
// //                     ,{value: BigInt("8193747396917710005")});
// //                     const tx = await txRes.wait(1); 
// //                     console.log("after function call");




// //binance 3
// //   const txRes=await alphaVaultSwap.multiSwap(
// //                     ['0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83','0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83','0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83'],
// //                     [response.data.buyTokenAddress, '0x0000000000000000000000000000000000000000', response2.data.buyTokenAddress],
// //                     ['0x0000000000000000000000000000000000000000',response.data.to, response2.data.to],
// //                     ['0x0000000000000000000000000000000000000000',response.data.allowanceTarget , response2.data.allowanceTarget],
// //                     ['0x1230000000000000000001230000',response.data.data, response2.data.data],
// //                     [1,response.data.sellAmount, response2.data.sellAmount]
// //                     ,{value: BigInt("8193747396917710005")});
// //                     const tx = await txRes.wait(1); 
// //                     console.log("after function call");


// //binance 02 
// //   const txRes=await alphaVaultSwap.multiSwap(
// //                     ['0x0000000000000000000000000000000000000000','0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83','0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83'],
// //                     ['0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83', response.data.buyTokenAddress, response2.data.buyTokenAddress],
// //                     ['0x0000000000000000000000000000000000000000',response.data.to, response2.data.to],
// //                     ['0x0000000000000000000000000000000000000000',response.data.allowanceTarget , response2.data.allowanceTarget],
// //                     ['0x1230000000000000000001230000',response.data.data, response2.data.data],
// //                     [0,response.data.sellAmount, response2.data.sellAmount]
// //                     ,{value: BigInt("8193747396917710005")});
// //                     const tx = await txRes.wait(1); 
// //                     console.log("after function call");



// //fantom 01
//                 // const txRes=await alphaVaultSwap.multiSwap(
//                 //     ['0x0000000000000000000000000000000000000000','0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83'],
//                 //     ['0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83', response.data.buyTokenAddress],
//                 //     ['0x0000000000000000000000000000000000000000',response.data.to],
//                 //     ['0x0000000000000000000000000000000000000000',response.data.allowanceTarget ],
//                 //     ['0x1230000000000000000001230000',response.data.data],
//                 //     [0,response.data.sellAmount]
//                 //     ,{value: BigInt("8193747396917710005")});
//                 //     const tx = await txRes.wait(1); 
//                 //     console.log("after function call");




//                 // console.log(tx);
//                 // let USDC=await ethers.getContractAt("IERC20",
//                 // '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
//                 //     deployer
//                 //     );
//                 //     const contractUSDC=await USDC.balanceOf(deployer.address)
//                 //     console.log("USDC balance-->",contractUSDC.toString());
    
    
//         //         let WMATIC=await ethers.getContractAt("IERC20",
//         //         response.data.sellTokenAddress,
//         //             deployer
//         //             );
//         //             const contractWMATIC=await WMATIC.balanceOf(deployer.address)
//         //             console.log("WEth balance-->",contractWMATIC.toString());
    
//                 // let DAI=await ethers.getContractAt("IERC20",
//                 // response.data.buyTokenAddress,
//                 //     deployer
//                 //     );
//                 //     const contractUSDT=await DAI.balanceOf(deployer.address)
//                 //     console.log("DAI balance-->",contractUSDT.toString());
//         }








   





//     });




// });






        