
//设置网络
const web3Provider = "https://data-seed-prebsc-1-s1.binance.org:8545";
const netWorkId = 97;
const WETH = '0x7b997DE373d2CDaC72411448D5fa67c5B10Ae816';

//设置 swap 合约配置
const swap = {
    router: {
        address: '0x4e5779b686f1ff27fc6FD88d592986C5C6669E5d',
    },
    factory: {
        address: '0x26DF448C993a51FEE6E0079A9fCf9331dd47b788',
    },
    pair: {
        address: '0x19a14AA4532BA0e5C4Da456F3443DAc0b27868B1',
    },
    seaToken: {
        address: '0xCCcF7c559f104A4e0B1BE3bd8Cd50ccA5D2bd5AE',
    }
}

module.exports = {
    web3Provider: web3Provider,
    netWorkId: netWorkId,
    WETH: WETH,
    swap: swap
}