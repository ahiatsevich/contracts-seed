pragma solidity ^0.4.17;

contract HelloWorld {
    event TestEvent();
    event SetAEvent(uint a);

    uint public a;

    function test() public returns (bool) {
        TestEvent();
        return true;
    }

    function setA(uint _a) public {
        a = _a;
    }

    function getA() public view returns (uint) {
      return a;
    }

    function setAe(uint _a) external {
        a = _a;
        SetAEvent(a);
    }

    function getAe() public view returns (uint) {
      return a;
    }

    function _setA(uint _a) internal {
        a = _a;
    }

    function __setA(uint _a) private {
        a = _a;
    }
}
