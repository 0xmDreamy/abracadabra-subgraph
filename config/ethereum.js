const MIM_ADDRESS = '0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3';

module.exports = {
    network: 'mainnet',
    magicApe: {
        address: '0xf35b31B941D94B249EaDED041DB1b05b7097fEb6',
        startBlock: 16656455,
        staking: {
            address: '0x5954aB967Bc958940b7EB73ee84797Dc8a2AFbb9',
            startBlock: 16525000,
        },
        apeOracleAddress: '0x64422a1337082Bf99E6052fF52684374Eb1A7fB7',
    },
    beam: {
        address: '0x439a5f0f5E8d149DDA9a0Ca367D4a8e4D6f83C10',
        startBlock: 17414874,
        wrapper: {
            enable: true,
            address: '0x287176dfBEC7E8cee0f876FC7B52960ee1784AdC',
            startBlock: 17790681,
        },
    },
    cauldrons: {
        bentoBox: {
            enable: true,
            address: '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966',
            startBlock: 12094175,
        },
        degenBox: {
            enable: true,
            address: '0xd96f48665a1410C0cd669A88898ecA36B9Fc2cce',
            startBlock: 13418156,
        },
        mimAddress: MIM_ADDRESS,
    },
};