pragma solidity ^0.4.17;

contract HelloWorld {
    event TestEvent();

    function test() public returns (bool) {
        TestEvent();
        return true;
    }
}
