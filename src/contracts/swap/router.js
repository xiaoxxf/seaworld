import { web3Provider } from "./web3.js";
import routerAbi from "./abi/router.json";

export default function factory(address){
    let provide = web3Provider();
    //TODO 地址后期放置在 入口文件中
    return new provide.eth.Contract(
        routerAbi,
        address
    );
}