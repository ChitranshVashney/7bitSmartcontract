// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IWETH is IERC20 {
    function deposit() external payable;

    function withdraw(uint256 wad) external;
}

contract AlphaVaultSwap is Ownable {
    // AlphaVault custom events
    event WithdrawTokens(IERC20 toToken, uint256 boughtAmount_);
    event EtherBalanceChange(uint256 wethBal_);
    event BadRequest(uint256 wethBal_, uint256 reqAmount_);
    event ZeroXCallSuccess(bool status, uint256 initialtoTokenBalance);
    event toTokenBought(uint256 buTokenAmount);
    // event feePercentageChange(uint256 feePercentage);
    event maxTransactionsChange(uint256 maxTransactions);

    /**
     * @dev Event to notify if transfer successful or failed
     * after account approval verified
     */
    event TransferSuccessful(
        address indexed from_,
        address indexed to_,
        uint256 amount_
    );

    // The WETH contract.
    IWETH public immutable WETH;
    // IERC20 ERC20Interface;

    uint256 public maxTransactions;
    // uint256 public feePercentage;
    // address private destination;

    constructor() {
        WETH = IWETH(0x82aF49447D8a07e3bd95BD0d56f35241523fBab1);
        maxTransactions = 25;
        // feePercentage = 0;
    }

    /**
     * @dev method that handles transfer of ERC20 tokens to other address
     * it assumes the calling address has approved this contract
     * as spender
     * @param amount numbers of token to transfer
     */
    function depositToken(IERC20 fromToken, uint256 amount) private {
        // require(amount > 0);
        // ERC20Interface = IERC20(fromToken);

        // if (amount > ERC20Interface.allowance(msg.sender, address(this))) {
        //     emit TransferFailed(msg.sender, address(this), amount);
        //     revert();
        // }

        // bool success = ERC20Interface.transferFrom(msg.sender, address(this), amount);
        fromToken.transferFrom(msg.sender, address(this), amount);
        emit TransferSuccessful(msg.sender, address(this), amount);
    }

    // function setfeePercentage(uint256 num) external onlyOwner {
    //     feePercentage = num;
    //     emit feePercentageChange(feePercentage);
    // }

    function setMaxTransactionLimit(uint256 num) external onlyOwner {
        maxTransactions = num;
        emit maxTransactionsChange(maxTransactions);
    }

    // function withdrawFee(IERC20 token, uint256 amount) external onlyOwner{
    //     token.transfer(msg.sender, amount);
    // }

    // Transfer ETH held by this contrat to the sender/owner.
    function withdrawETH(uint256 amount) external onlyOwner {
        payable(msg.sender).transfer(amount);
    }

    // Payable fallback to allow this contract to receive protocol fee refunds.
    receive() external payable {}

    fallback() external payable {}

    // Transfer tokens held by this contrat to the sender/owner.
    function withdrawToken(IERC20 token, uint256 amount) internal {
        token.transfer(msg.sender, amount);
    }

    //Sets destination address to msg.sender
    function setDestination() internal view returns (address) {
        // destination = msg.sender;
        return msg.sender;
    }

    // Transfer amount of ETH held by this contrat to the sender.
    function transferEth(uint256 amount, address msgSender) internal {
        payable(msgSender).transfer(amount);
    }

    // Swaps ERC20->ERC20 tokens held by this contract using a 0x-API quote.
    function fillQuote(
        // The `toTokenAddress` field from the API response.
        IERC20 toToken,
        IERC20 fromToken,
        // The `allowanceTarget` field from the API response.
        address spender,
        // The `to` field from the API response.
        address payable to,
        // The `data` field from the API response.
        bytes calldata data
    ) public returns (uint256) {
        require(spender != address(0), "Please provide a valid address");
        // Track our balance of the toToken to determine how much we've bought.
        uint256 boughtAmount = toToken.balanceOf(address(this));
        fromToken.approve(spender, type(uint128).max);
        (bool success, ) = to.call{value: 0}(data);
        emit ZeroXCallSuccess(success, boughtAmount);
        require(success, "SWAP_CALL_FAILED");
        boughtAmount = toToken.balanceOf(address(this)) - boughtAmount;
        emit toTokenBought(boughtAmount);
        return boughtAmount;
    }

    /**
     * @param amount numbers of token to transfer  in unit256
     */ 
    function multiSwap(
        IERC20[] calldata fromToken,
        IERC20[] calldata toToken,
        address[] calldata spender,
        address payable[] calldata to,
        bytes[] calldata data,
        uint256[] memory amount
    ) external payable {
        require(
            fromToken.length <= maxTransactions &&
                fromToken.length == toToken.length &&
                spender.length == toToken.length &&
                to.length == spender.length,
            "Please provide valid data"
        );

        uint256 eth_balance;

        if (msg.value > 0) {
            WETH.deposit{value: msg.value}();
            eth_balance = msg.value;
            emit EtherBalanceChange(eth_balance);
        }

        for (uint256 i = 0; i < spender.length; i++) {
            // ETHER & WETH Withdrawl request.
            if (spender[i] == address(0)) {
                if (eth_balance < amount[i]) {
                    emit BadRequest(eth_balance, amount[i]);
                    break;
                }
                if (amount[i] > 0) {
                    eth_balance -= amount[i];
                    WETH.withdraw(amount[i]);
                    transferEth(amount[i], setDestination());
                    emit EtherBalanceChange(eth_balance);
                }
                continue;
            }
            // Condition For using Deposited Ether before using WETH From user balance.
            if (fromToken[i] == WETH) {
                if (fromToken[i] == toToken[i]) {
                    depositToken(fromToken[i], amount[i]);
                    eth_balance += amount[i];
                    emit EtherBalanceChange(eth_balance);
                    continue;
                }
                eth_balance -= amount[i];
                emit EtherBalanceChange(eth_balance);
            } else {
                depositToken(fromToken[i], amount[i]);
            }

            // Variable to store amount of tokens purchased.
            uint256 boughtAmount = fillQuote(
                toToken[i],
                fromToken[i],
                spender[i],
                to[i],
                data[i]
            );

            if (toToken[i] == WETH) {
                eth_balance += boughtAmount;
                emit EtherBalanceChange(eth_balance);
            } else {
                withdrawToken(toToken[i], boughtAmount);
                emit WithdrawTokens(toToken[i], boughtAmount);
            }
        }
        if (eth_balance > 0) {
            withdrawToken(WETH, eth_balance);
            emit EtherBalanceChange(0);
        }
    }
}
