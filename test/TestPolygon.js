// // const { expect, assert } = require("chai");
// // const { ethers, getNamedAccounts, network } = require("hardhat")
// // const axios = require('axios');
// // const { BigNumber, utils } = require("ethers");
// // const {networks}= require("../scripts/networks");
// // const helpers = require("@nomicfoundation/hardhat-network-helpers");


// // describe("AlphaVault", function() {

// //     // Define the deployer and user addresses
// // let deployer;
    
// //     beforeEach(async function() {

        
        
// //     });

// //     it("should fill the quote and return the bought amount", async function() {
// //         let provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545/");
    
       
       
// //         if(true){

            
// //             const address = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
// //         await helpers.impersonateAccount(address);
// //         [deployer] = await ethers.getSigners(address);

// // const address_deploed = "0xC444435677D859DB1520d59E00557258b20Df8d8"
// // // console.log("at line 35");
// //             // [deployer] = await ethers.getSigners();
// //             // const AlphaVaultSwap = await ethers.getContractFactory("AlphaVaultSwap")
// //             const alphaVaultSwap=await ethers.getContractAt("AlphaVaultSwap",
// //             address_deploed,
// //                 deployer
// //                 );

// //             // polygon 1
// //             // let response = await axios.get(
// //             //     `https://polygon.api.0x.org/swap/v1/quote?buyToken=DAI&sellToken=WMATIC&sellAmount=1000000000000000000&slippagePercentage=0.04`

// //             //       );
                
// //             // polygon  2
// //             // let response = await axios.get(
// //             //     `https://polygon.api.0x.org/swap/v1/quote?buyToken=DAI&sellToken=WMATIC&sellAmount=10000000000000&slippagePercentage=0.04`
// //             //       );
// //             //       let response2= await axios.get(
// //             //         `https://polygon.api.0x.org/swap/v1/quote?sellToken=0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270&buyToken=0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174&sellAmount=10000000000000`
// //             //       );

// //             // binance 3
// // //    let response = await axios.get(
// // //                 `https://polygon.api.0x.org/swap/v1/quote?buyToken=DAI&sellToken=WMATIC&sellAmount=10000000000000&slippagePercentage=0.04`
// // //                   );
// // //   let response2 = await axios.get(
// // //                     `https://polygon.api.0x.org/swap/v1/quote?buyToken=USDC&sellToken=WMATIC&sellAmount=10000000000000&slippagePercentage=0.04`
// // //                       );

// // //binance 4
// // //    let response = await axios.get(
// // //                 `https://polygon.api.0x.org/swap/v1/quote?buyToken=DAI&sellToken=WMATIC&sellAmount=10000000000000&slippagePercentage=0.04`
// // //                   );

// // //  let response2 = await axios.get(
// // //                     `https://polygon.api.0x.org/swap/v1/quote?buyToken=USDC&sellToken=WMATIC&sellAmount=10000000000000&slippagePercentage=0.04`
// // //                       );


// // //binance 5 
// // // let response = await axios.get(
// // //     `https://polygon.api.0x.org/swap/v1/quote?buyToken=DAI&sellToken=WMATIC&sellAmount=10000000000000&slippagePercentage=0.04`
// // //       );
// // // let response2 = await axios.get(
// // //         `https://polygon.api.0x.org/swap/v1/quote?buyToken=USDC&sellToken=WMATIC&sellAmount=10000000000000&slippagePercentage=0.04`
// // //           );


// //     // binance 6
// //             let response = await axios.get(
// //                 `https://polygon.api.0x.org/swap/v1/quote?buyToken=DAI&sellToken=WMATIC&sellAmount=5000000000000&slippagePercentage=0.04`
// //                   );
// //                   let response2= await axios.get(
// //                     `https://polygon.api.0x.org/swap/v1/quote?buyToken=USDC&sellToken=WMATIC&sellAmount=5000000000000&slippagePercentage=0.04`
// //                   );

// //                   swapQuoteJSON=response.data;
// //             let WETH=await ethers.getContractAt("IWETH",
// //                 response.data.sellTokenAddress,
// //                 deployer
// //                 );
// //                 // const user_balance1=await WETH.balanceOf(deployer.address);
// //                 // console.log("-------------",user_balance1.toString(),"----------------");
// //                 // await WETH.deposit({
// //                     //     value: 10000000000000
// //                     // }); 
// //                     console.log("at line 70");
                    
// //                     const max_approve= BigInt("1157920892373161954235709850086879078532699846656405640394575840079131296399");
// //                     // const txResponseWETH= await WETH.approve(response.data.allowanceTarget,max_approve)
// //                     console.log("---------------------At line 74------------------");
// //                     const txResponseWETH1= await WETH.approve(alphaVaultSwap.address,max_approve)
// //                     console.log("at line 76");
// //                     // await txResponseWETH.wait(1);
// //                     await txResponseWETH1.wait(1);
// //                     console.log(deployer.address);
// //                     let allowance1 = await WETH.allowance(deployer.address,alphaVaultSwap.address);
// //                     console.log("--------80---")
// //                     console.log(allowance1.toString());
// //                     const user_balance2=await WETH.balanceOf(deployer.address);
// //                     console.log("at line 82");
// //                     console.log("-------------",user_balance2.toString(),"----------------");
             

// //                 // console.log("at Line 91");






// //binance 06  0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270-> WMATIC  0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174 -> USDC
//                 const txRes=await alphaVaultSwap.multiSwap(
//                     ['0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174','0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270'],
//                     ['0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270','0x0000000000000000000000000000000000000000',response.data.buyTokenAddress],
//                     [response2.data.to,'0x0000000000000000000000000000000000000000','0x0000000000000000000000000000000000000000',response.data.to],
//                     [response2.data.allowanceTarget ,'0x0000000000000000000000000000000000000000','0x0000000000000000000000000000000000000000',response.data.allowanceTarget ],
//                     [response2.data.data,'0x1230000000000000000001230000','0x1230000000000000000001230000',response.data.data],
//                     [response2.data.sellAmount,5,5,response.data.sellAmount]
//                     ,{value: BigInt("20000000000005")});
//                     const tx = await txRes.wait(1); 
//                     console.log("after function call");


// // // binance 5
// // //   const txRes=await alphaVaultSwap.multiSwap(
// // //                     ['0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270','0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270'],
// // //                     [response.data.buyTokenAddress, response2.data.buyTokenAddress],
// // //                     [response.data.to, response2.data.to],
// // //                     [response.data.allowanceTarget , response2.data.allowanceTarget],
// // //                     [response.data.data, response2.data.data],
// // //                     [response.data.sellAmount, response2.data.sellAmount] 
// // //                     ,{value: BigInt("20000000000005")});
// // //                     const tx = await txRes.wait(1); 
// // //                     console.log("after function call");



// // // binance 4
// // //   const txRes=await alphaVaultSwap.multiSwap(
// // //                     ['0x0000000000000000000000000000000000000000','0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270','0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270'],
// // //                     ['0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', response2.data.buyTokenAddress, response.data.buyTokenAddress],
// // //                     ['0x0000000000000000000000000000000000000000',response2.data.to, response.data.to],
// // //                     ['0x0000000000000000000000000000000000000000',response2.data.allowanceTarget , response.data.allowanceTarget],
// // //                     ['0x1230000000000000000001230000',response2.data.data, response.data.data],
// // //                     [0,response2.data.sellAmount, response.data.sellAmount]
// // //                     ,{value: BigInt("20000000000005")});
// // //                     const tx = await txRes.wait(1); 
// // //                     console.log("after function call");




// // //binance 3
// // //   const txRes=await alphaVaultSwap.multiSwap(
// // //                     ['0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270','0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270','0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270'],
// // //                     [response.data.buyTokenAddress, '0x0000000000000000000000000000000000000000', response2.data.buyTokenAddress],
// // //                     [response.data.to, '0x0000000000000000000000000000000000000000',response2.data.to],
// // //                     [response.data.allowanceTarget , '0x0000000000000000000000000000000000000000',response2.data.allowanceTarget],
// // //                     [response.data.data, '0x1230000000000000000001230000',response2.data.data],
// // //                     [response.data.sellAmount, 5,response2.data.sellAmount]
// // //                     ,{value: BigInt("20000000000005")});
// // //                     const tx = await txRes.wait(1); 
// // //                     console.log("after function call");


// // //polygon 02 
// // //   const txRes=await alphaVaultSwap.multiSwap(
// // //                     ['0x0000000000000000000000000000000000000000','0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270','0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270'],
// // //                     ['0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', response.data.buyTokenAddress, response2.data.buyTokenAddress],
// // //                     ['0x0000000000000000000000000000000000000000',response.data.to, response2.data.to],
// // //                     ['0x0000000000000000000000000000000000000000',response.data.allowanceTarget , response2.data.allowanceTarget],
// // //                     ['0x1230000000000000000001230000',response.data.data, response2.data.data],
// // //                     [0,response.data.sellAmount, response2.data.sellAmount]
// // //                     ,{value: BigInt("20000000000005")});
// // //                     const tx = await txRes.wait(1); 
// // //                     console.log("after function call");



// // //polygon 01
// //                 // const txRes=await alphaVaultSwap.multiSwap(
// //                 //     ['0x0000000000000000000000000000000000000000','0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270'],
// //                 //     ['0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', response.data.buyTokenAddress],
// //                 //     ['0x0000000000000000000000000000000000000000',response.data.to],
// //                 //     ['0x0000000000000000000000000000000000000000',response.data.allowanceTarget ],
// //                 //     ['0x1230000000000000000001230000',response.data.data],
// //                 //     [0,response.data.sellAmount]
// //                 //     ,{value: BigInt("8193747396917710005")});
// //                 //     const tx = await txRes.wait(1); 
// //                 //     console.log("after function call");




// //                 // console.log(tx);
// //                 // let USDC=await ethers.getContractAt("IERC20",
// //                 // '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
// //                 //     deployer
// //                 //     );
// //                 //     const contractUSDC=await USDC.balanceOf(deployer.address)
// //                 //     console.log("USDC balance-->",contractUSDC.toString());
    
    
// //         //         let WMATIC=await ethers.getContractAt("IERC20",
// //         //         response.data.sellTokenAddress,
// //         //             deployer
// //         //             );
// //         //             const contractWMATIC=await WMATIC.balanceOf(deployer.address)
// //         //             console.log("WEth balance-->",contractWMATIC.toString());
    
// //                 // let DAI=await ethers.getContractAt("IERC20",
// //                 // response.data.buyTokenAddress,
// //                 //     deployer
// //                 //     );
// //                 //     const contractUSDT=await DAI.balanceOf(deployer.address)
// //                 //     console.log("DAI balance-->",contractUSDT.toString());
// //         }








   





// //     });




// // });






        