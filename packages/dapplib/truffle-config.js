require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune silver shock rifle smile property install beach bone theory'; 
let testAccounts = [
"0xc669d9dbe238465c995cbbbde5e880631c89c18b771115066f00a343c9262e1c",
"0x2b1912a9fa4e5578aeb29ddd33fb36f9fa04b0795a9274de0c53aa068dc4f135",
"0xc1c677e4e7262cf0919b130fa10716f0fbe46ef96ac54315c9edebabaf83c7f9",
"0x6b9b74c3d6dabb91024180a97e9e44a165a14da2db922b364ddbd088fec8ba4c",
"0x76a38c7f3dc1f4eda769503d233a592637d4b9e838b667cd25bc452c52b82977",
"0xc73c5dd4a93dffe3467013298673730a219457cca7273606823d48153ca76a82",
"0xb9d1da510744f1c7bfe41965162d192470f078330927c28c19838b911cbf6fe5",
"0x470e9a35df8b39412f5a2e53518b35ca9fead45d28708cd818985a053a3f80d8",
"0x5c5c38899756b6e43580dae705140c78f12eac379aa13034902d8f3b6d6937b0",
"0xba0046135c6b9341c460929f4135b3908aa2bd0d7144fee70996ecf13a7b1691"
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

