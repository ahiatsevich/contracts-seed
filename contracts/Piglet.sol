pragma solidity ^0.4.17;

contract Piglet {
    event HelloEvent(bytes32 message);

    function sayHello() public returns (bool) {
        HelloEvent("Hello!");
    }
}
