const HelloWorld = artifacts.require('./HelloWorld.sol');
const utils = require('./helpers/utils');
const Reverter = require('./helpers/reverter');

contract('HelloWorld', function (accounts) {
    let reverter = new Reverter(web3);
    afterEach('revert', reverter.revert);

    before('before', async () => {
        await reverter.snapshot(function(){});
    })

    after("after", async () => {
    })

    context("Initial tests", async () => {
        
    });
});
