//引入 Web3js 库
import Web3 from "web3";
//引入配置

//web3js实例化抽离
export function web3Provider() {
    let provider
    //判断当前环境是否存在 ethereum
    if (ethereum) {
        provider = ethereum
    } else if (web3) {
        // MetaMask Legacy dapp browsers...
        provider = web3.currentProvider;
    } else {
        provider = new Web3.providers.HttpProvider(
            "https://data-seed-prebsc-1-s1.binance.org:8545"
        );
    }
    return new Web3(provider);
}