// const { expect, assert } = require("chai");
// const { ethers, getNamedAccounts, network } = require("hardhat")
const axios = require('axios');
const { BigNumber, utils, ethers } = require("ethers");
require('dotenv').config()

// // const {networks}= require("../scripts/networks");
// const helpers = require("@nomicfoundation/hardhat-network-helpers");
// // wallet address from hwich the txn is to be made 
 const account = "0x84Ebf92fA78e90832a52F1b8b7c1eb35487c091B";
const  PRIVATE_KEY = process.env.PRIVATE_KEY;
const Erc20 =   [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "wethBal_",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "reqAmount_",
        "type": "uint256"
      }
    ],
    "name": "BadRequest",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "wethBal_",
        "type": "uint256"
      }
    ],
    "name": "EtherBalanceChange",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from_",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to_",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount_",
        "type": "uint256"
      }
    ],
    "name": "TransferSuccessful",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "contract IERC20",
        "name": "toToken",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "boughtAmount_",
        "type": "uint256"
      }
    ],
    "name": "WithdrawTokens",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "status",
        "type": "bool"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "initialtoTokenBalance",
        "type": "uint256"
      }
    ],
    "name": "ZeroXCallSuccess",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "maxTransactions",
        "type": "uint256"
      }
    ],
    "name": "maxTransactionsChange",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "buTokenAmount",
        "type": "uint256"
      }
    ],
    "name": "toTokenBought",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "WETH",
    "outputs": [
      {
        "internalType": "contract IWETH",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC20",
        "name": "toToken",
        "type": "address"
      },
      {
        "internalType": "contract IERC20",
        "name": "fromToken",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "address payable",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "fillQuote",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "maxTransactions",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC20[]",
        "name": "fromToken",
        "type": "address[]"
      },
      {
        "internalType": "contract IERC20[]",
        "name": "toToken",
        "type": "address[]"
      },
      {
        "internalType": "address[]",
        "name": "spender",
        "type": "address[]"
      },
      {
        "internalType": "address payable[]",
        "name": "to",
        "type": "address[]"
      },
      {
        "internalType": "bytes[]",
        "name": "data",
        "type": "bytes[]"
      },
      {
        "internalType": "uint256[]",
        "name": "amount",
        "type": "uint256[]"
      }
    ],
    "name": "multiSwap",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "num",
        "type": "uint256"
      }
    ],
    "name": "setMaxTransactionLimit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "withdrawETH",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]


async function getQuote(account){

console.log("fetching quote");

const response = await axios.get(
    `https://arbitrum.api.0x.org/swap/v1/quote?buyToken=0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1&sellToken=WETH&sellAmount=1000000000000000000&slippagePercentage=0.04`
);


const params = {
sellToken: response.sellTokenToken,
buyToken: response.buyToken ,
amount:response.sellAmount ,
takerAddress: account
}


 const swapPriceJSON = await response.data;
console.log("Swap price : " , swapPriceJSON);

return swapPriceJSON ;
}


async function trySwap(){

//make signer and providers 

const provider = new ethers.provider.JsonRpcProvider('');
const signer = new ethers.Wallet(PRIVATE_KEY,provider);
const walletAddress = "0x84Ebf92fA78e90832a52F1b8b7c1eb35487c091B";

const response = await  axios.get(
    `https://arbitrum.api.0x.org/swap/v1/quote?buyToken=0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1&sellToken=WETH&sellAmount=1000000000000000000&slippagePercentage=0.04`
);


const params = {
sellToken: response.sellToken,
buyToken: response.buyToken ,
amount:response.sellAmount ,
takerAddress: account
}

const fromTokeAddress = response.sellToken ;
const amount = await response.amount ;
console.log("----------------at 53---------------");

var quote = response.data ;
var proxy = response.allowanceTarget ;
var amountstr = response.amount; 

const ERC20Contract = new ethers.Contract(fromTokeAddress , Erc20, signer); // make a signer 

const approval = await ERC20Contract.approval(proxy, amountstr);
await approval.wait();

const txParams = {
...quote,
from : userWallet ,  // addresss of the signer 
 to:quote.to ,
value:(quote.value).toString(16),
gasPrice : null,
gas : quote.gas

}
await ethereum.request({
    method: 'eth_sendTransaction',
    params: [txParams]
});

console.log("#######################################################################");

}

trySwap();


