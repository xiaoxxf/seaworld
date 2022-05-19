import { web3Provider } from "./web3.js";
import tokenAbi from "./abi/token.json";

export default function factory(address){
    let provide = web3Provider();
    //TODO 地址后期放置在 入口文件中
    return new provide.eth.Contract(
        tokenAbi,
        address
    );
}