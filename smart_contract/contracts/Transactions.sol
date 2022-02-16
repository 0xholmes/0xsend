// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Transactions {
    uint transactionCount;

    event Transfer(address from, address receiver, uint amount, string message, string keyword, uint timestamp);

    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        string keyword;
        uint timestamp;
    }

    TransferStruct[] transactions;

    function addToBlockchain(address payable receiver, uint amount, string calldata message, string calldata keyword) public {
        transactionCount++;
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, keyword, block.timestamp));

        emit Transfer(msg.sender, receiver, amount, message, keyword, block.timestamp);
    }
    
    function getAllTransactions() public view returns(TransferStruct[] memory) {
        return transactions;
    }
    
    function getTransactionCount() public view returns(uint) {
        return transactionCount;
    }
}