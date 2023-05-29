const networks = [
    {    "chain_name": "polygon",
        "chain_id": 137,
        "rpc_url": "https://rpc.ankr.com/polygon",
        "WETH": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"

    },
    {      "chain_name": "binance",
        "chain_id": 56,
        "rpc_url": "https://rpc.ankr.com/bsc",
        "WETH": "0x4db5a66e937a9f4473fa95b1caf1d1e1d62e29ea" // got it from wormhole
    },
    {
        "chain_name": "fantom",
        "chain_id": 250,
        "rpc_url": "https://rpc.ankr.com/fantom",
        "WETH": "0xA59982c7A272839cBd93e02Bd8978E9a78189AB5"
    },
    {
        "chain_name": "arbitrum",
        "chain_id": 42161,
        "rpc_url": "https://rpc.ankr.com/arbitrum",
        "WETH": "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1"
    },
    {
        "chain_name": "avalanche",
        "chain_id": 43114,
        "rpc_url": "https://rpc.ankr.com/avalanche",
        "WETH": "0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB" // found form snowtrace
    }

]

module.exports = {networks}