require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arm bubble tooth fan regret oven proud harvest pave army gather'; 
let testAccounts = [
"0xe737cf1e1c78499ba274e3849c8d16dd313072fd7313c54648e74ac31fe85dd9",
"0xf04dd241c4508f980e04bfae0101db81e7de73ccf5f9dca7bf99fc291fbc1249",
"0xcfa9ee33f10fec3f8c43bbe77d1ecb63ec020a22bd9c44a529a71cbc529fe2c6",
"0xab905e6a1daa3f76c7c002814066e5739ccf718a931b68b4ea65f300fb67344a",
"0xc10aaddd368f3b26f43d23017d1738f46884d7d66acb32cbc56e9e85793234da",
"0x2bbbf812bfcd0f6b20aa5eb2f85cb8dd7aa2ae5aec58a59c2e55f3fcae98edc6",
"0xb11b864fe6d52a0acee1fc4f361240847fb211eae503956e7e850ecf7c920be6",
"0x96d5725f32379c1bdb853194c78c0c8d049ba78873276d9616cd05e904c2abf8",
"0x55a5121cbe89dc82431e0dcf6229bcb79ca3b4529fe9ca7780a480395e6691ec",
"0xdbbae93c450ac7c4ade917772279b127359e5c0d89d5de822942e7ae2ef56bb6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

