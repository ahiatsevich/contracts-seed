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
        it('should return true by default', async () => {
            let contract = await HelloWorld.deployed();
            assert.isTrue(await contract.test.call());

            let tx = await contract.test();
            console.log(tx);
        });
    });
});
