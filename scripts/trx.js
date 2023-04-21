const { ethers, getNamedAccounts, network } = require("hardhat")
const axios = require('axios');

let swapQuoteJSON=[]
let contractIntsances = [];
let sellTokenAddress = [];
let buyTokenAddress = [];
let allowanceTarget = [];
let to = [];
let data = [];
async function dataa(sellToken,buyToken,buyAmount){
    for(var i=0;i<sellToken.length;i++){
        const { deployer } = await getNamedAccounts()
    const account = await ethers.getSigner(deployer)
    let response = await axios.get(
        `https://api.0x.org/swap/v1/quote?buyToken=DAI&sellToken=WETH&sellAmount=100000000000000000`
          );
          //   let Response=await response.json();
          swapQuoteJSON.push(response.data);
          let ERC20TokenContract=await ethers.getContractAt(
              "IERC20",
              response.data.sellTokenAddress,
              account
              );
              contractIntsances.push(ERC20TokenContract);
              // console.log(ERC20TokenContract)
              swapQuoteJSON.push(response.data);
              sellTokenAddress.push(response.data.sellTokenAddress);
              buyTokenAddress.push(response.data.buyTokenAddress);
              allowanceTarget.push(response.data.allowanceTarget);
              to.push(response.data.to);
              data.push(response.data.data);
    }
    return swapQuoteJSON;

}

async function main() {
    // const { deployer } = await getNamedAccounts()
    const { deployer } = await getNamedAccounts()
    const account = await ethers.getSigner(deployer)
    console.log(account.address)

    const AlphaVaultSwap = await ethers.getContractAt("AlphaVaultSwap","0xEFFbC7346fAcFD2c0A0877aC333FF9FbCA60bCDe",account);
    
    const sellToken=["0x11fE4B6AE13d2a6055C8D9cF65c55bac32B5d844"]
    const buyToken=["0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6"]
    const sellAmount=[10000000n.toString(),10000000n.toString()]

    const swapQuoteJSON=await dataa(sellToken,buyToken,sellAmount)
    for (const instance of contractIntsances) {
        let i=0;
        
        let allowance = await instance.allowance(account.address, "0xEFFbC7346fAcFD2c0A0877aC333FF9FbCA60bCDe");
        console.log(allowance)
        if (allowance < sellAmount[i]) {
          
            instance.approve("0xEFFbC7346fAcFD2c0A0877aC333FF9FbCA60bCDe", sellAmount[i])

        }
        i+=1;
    }
    

        console.log(sellTokenAddress,buyTokenAddress,allowanceTarget)
        const receipt=AlphaVaultSwap.multiSwap(
            [...sellTokenAddress],
            [...buyTokenAddress],
            [...allowanceTarget],
            [...to],
            [...data],
            [...sellAmount]
          )
          console.log(await receipt)
        await receipt.wait();
        //selltoke,buytoken

    
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })