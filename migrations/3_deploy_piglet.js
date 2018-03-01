const Piglet = artifacts.require("./Piglet.sol");

module.exports = function(deployer) {
    deployer.deploy(Piglet);
};
