<template>
<div class="homewrapper">
    <div class="homeSecond">
        <div class="show">
            <!-- liquidity流通性 -->
            <ul class="topnav-show">
                <!-- 流通性列表 -->
                <div class="exchangebox" v-show="showLiquidity == 1 && this.$store.getters.isConntent">
                    <div class="topbox">
                        <div class="left_swap">
                            <p>Your Liquidity</p>
                            <p>Remove liquidity to receive tokens back</p>
                        </div>
                        <div class="right_swap">
                            <span>
                                <svg viewBox="0 0 24 24" color="primary" width="24px" xmlns="http://www.w3.org/2000/svg" class="sc-bdvvaa dqTYWn">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div class="bottombox">
                        <div class="connect">
                            <div class="collapsepanel">
                                <el-collapse accordion>
                                    <el-collapse-item v-for="item in userPool" :key="item.pairAddress" :label="item.pairAddress">
                                        <template slot="title" class="collapse-title">{{item.tokenAInfo.symbol}} / {{item.tokenBInfo.symbol}}</template>
                                        <div>
                                            <p>
                                                <span class="l_liq">pairName:</span>
                                                <span class="r_liq">{{item.tokenAInfo.symbol}} / {{item.tokenBInfo.symbol}}</span>
                                            </p>
                                            <p>
                                                <span class="l_liq">total pool tokens：</span>
                                                <span class="r_liq">{{divisionOperator(item.pairBalance, 10 ** 18, 2)}}</span>
                                            </p>
                                            <p>
                                                <span class="l_liq">pooled {{item.tokenAInfo.symbol}} :</span>
                                                <span class="r_liq">{{divisionOperator(multiplyingOperator(item.pairReserves[0], item.proportion, 10), 10 ** item.tokenAInfo.decimals, 2)}}</span>
                                            </p>
                                            <p>
                                                <span class="l_liq">pooled {{item.tokenBInfo.symbol}} :</span>
                                                <span class="r_liq">{{divisionOperator(multiplyingOperator(item.pairReserves[1], item.proportion, 10), 10 ** item.tokenBInfo.decimals, 2)}}</span>
                                            </p>
                                            <p>
                                                <span class="l_liq">pool share</span>
                                                <span class="r_liq">{{item.proportion * 100}} %</span>
                                            </p>
                                            <!-- <router-link :to="{ name:'RemoveLiquidity', params:{'path':item.pairAddress} }"> -->
                                            <router-link :to="{ path:'/RemoveLiquidity', query:{ id:item.pairAddress} }">
                                                <button class="removebtn">remove</button>
                                            </router-link>
                                            <br />
                                        </div>
                                    </el-collapse-item>
                                </el-collapse>
                            </div>
                            <button class="unlockbtn" @click="addLiquidityBtn()">Add liquidity</button>
                        </div>
                    </div>
                </div>
                <!-- 流通性添加 -->
                <div class="exchangebox" v-show="showLiquidity == 2 && this.$store.getters.isConntent">
                    <div class="topbox">
                        <div class="left_swap">
                            <p>
                                <span class="back" @click="backBtn">
                                    <svg t="1626666143674" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1362" width="16" height="16">
                                        <path d="M181.415 519.827c-0.03-10.31 4.345-20.557 12.86-27.702l459.627-385.672c15.23-12.78 37.938-10.794 50.718 4.437 12.78 15.23 10.793 37.938-4.437 50.718L274.163 519.08l449.743 326.757c16.085 11.687 19.65 34.2 7.964 50.285-11.686 16.085-34.2 19.65-50.285 7.964l-485.41-352.67c-10.402-7.558-15.568-19.643-14.76-31.589z" p-id="1363" fill="#280d5f" />
                                    </svg>
                                </span>
                                <span class="fir_tit">Add Liquidity</span>
                            </p>
                            <p class="sec_tit">Add liquidity to receive LP tokens</p>
                        </div>
                        <div class="right_swap">
                            <span @click="openAlert()">
                                <svg viewBox="0 0 24 24" color="primary" width="24px" xmlns="http://www.w3.org/2000/svg" class="sc-bdvvaa dqTYWn">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div class="bottombox">
                        <div class="panel">
                            <p>Input</p>
                            <div class="inquidityInput">
                                <!-- <span class="left">0</span> -->
                                <input type="text" class="left" placeholder="0" v-model="inputammout1" @input="changeInputStatus()" />
                                <div class="right">
                                    <el-select v-model="from" @change="selectToken1()" placeholder="Select a currency">
                                        <el-option v-for="token in listToken" :value="token.address" :key="token.name" :label="token.name">{{ token.name }}</el-option>
                                    </el-select>
                                </div>
                            </div>
                            <p class="bal">
                                Balance：{{fromBalance}}
                                <span @click="maxBa1()">(MAX)</span>
                            </p>
                        </div>
                        <p>
                            <svg viewBox="0 0 24 24" width="16px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bdvvaa iQxzfF">
                                <path d="M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" />
                            </svg>
                        </p>
                        <div class="panel">
                            <p>Input</p>
                            <div class="inquidityInput">
                                <input type="text" class="left" placeholder="0" v-model="inputammout2" @input="changeInputStatus2()" />
                                <div class="right">
                                    <el-select v-model="to" @change="selectToken2($event)" placeholder="Select a currency">
                                        <el-option v-for="token in listToken" :value="token.address" :key="token.name" :label="token.name">{{ token.name }}</el-option>
                                    </el-select>
                                </div>
                            </div>
                            <p class="bal">
                                Balance：{{toBalance}}
                                <span @click="maxBa2()">(MAX)</span>
                            </p>
                        </div>

                        <div class="aprove flex">
                            <button v-show="aproveTokenAVisible" class="unlockbtn" @click="aproveToken1()">Aprove One</button>
                            <button v-show="aproveTokenBVisible" class="unlockbtn" @click="aproveToken2()">Aprove Two</button>
                        </div>
                        <button class="unlockbtn" @click="supplyToken()">Add</button>
                    </div>
                </div>
                <!-- 判断是否登录 -->
                <UnContent v-show="!this.$store.getters.isConntent"></UnContent>
            </ul>
        </div>
    </div>

    <!-- model弹窗 -->
    <SettingPop ref="settingPop"></SettingPop>
</div>
</template>

<script>
import {
    ethers
} from "ethers";
import DEFAULT_TOKEN_LIST from "../../store/swapPairList.json";
import BigNumber from "bignumber.js";

import UnContent from '../module/trade/UnContent';
import Config from '@/config.js';
import SettingPop from '../module/trade/SettingPop';

import SwapFactory from "@/contracts/swap/factory.js";
import SwapPair from "@/contracts/swap/pair.js";
import SwapRouter from "@/contracts/swap/router.js";
import SwapToken from "@/contracts/swap/token.js";

//设置 默认的小数点
const DEFAULT_DECIMALS = 3;

export default {
    name: "Liquidity",
    data() {
        return {
            //TODO WETH 跳转时间
            WETH: Config.WETH,
            //列表代币
            listToken: DEFAULT_TOKEN_LIST,
            //用户选择地址
            from: null,
            //用户 token A balance
            fromBalance: 0,
            //用户选择地址
            to: null,
            // 用户 token B balance
            toBalance: 0,
            //用于记录 from 信息
            fromTokenInfo: null,
            //用于记录 to 信息
            toTokenInfo: null,
            //用户输入 token A数量
            inputammout1: "",
            //用户输入 tokenB 数量
            inputammout2: "",
            //允许时间范围
            minutes: 20,
            showAlert: false,
            showLiquidity: 1,
            //是否显示 tokenA 批准
            aproveTokenAVisible: false,
            //是否显示 tokenB 批准
            aproveTokenBVisible: false,
            //web3 代理
            web3Provider: "",
            pairMiddlePrice: 0,

            //用户质押的池子
            userPool: [],
            //池子数量
            pairReserve: {
                from: 0,
                to: 0
            }
        };
    },
    components: {
        UnContent,
        SettingPop
    },
    watch: {
        //监控全局 用户账号状态
        "$store.state.account"(newVal, oldVal) {
            this.queryUserPool();
        }
    },

    methods: {
        // 返回上一级
        backBtn() {
            this.showLiquidity = 1;
        },

        //获取 token 信息
        async getTokenInfo(tokenAddress) {
            const token = SwapToken(tokenAddress);
            let info = {
                name: null,
                symbol: null,
                decimals: null,
                totalSupply: null
            };
            //进行余额查询
            info.name = await token.methods
                .name()
                .call()
                .then();
            info.symbol = await token.methods
                .symbol()
                .call()
                .then();
            info.decimals = await token.methods
                .decimals()
                .call()
                .then();
            info.totalSupply = await token.methods
                .totalSupply()
                .call()
                .then();

            return info;
        },

        openAlert() {
            this.$refs.settingPop.openAlert();
        },

        addLiquidityBtn() {
            this.showLiquidity = 2;
        },

        //选择代币-tokenA/tokenB
        async selectToken1() {
            //清空旧数据
            this.inputammout1 = 0;
            this.aproveTokenAVisible = false;

            //判断 token A 是不是 等于 TokenB
            if (this.from == this.to) {
                this.from = null;
                return;
            }

            const account = this.$store.state.account;

            //判断输入是不是 WBNB
            if (this.from == this.WETH) {
                //查询 ETH 的余额
                this.fromTokenInfo = this.getWBNBObj();
                let balance = await this.web3js.eth.getBalance(account);
                this.fromBalance = new BigNumber(
                    ethers.utils.formatEther(balance)
                ).toFixed(DEFAULT_DECIMALS);
            } else {
                //实例化 token 合约
                let nameToken = SwapToken(this.from);
                //查询当前 token 信息
                const tokenInfo = await this.getTokenInfo(this.from);
                this.fromTokenInfo = tokenInfo;
                //查询当前 用户 token 余额
                let currentBalance = await nameToken.methods
                    .balanceOf(account)
                    .call()
                    .then();
                //进行数字的格式修改
                this.fromBalance = new BigNumber(currentBalance)
                    .dividedBy(10 ** tokenInfo.decimals)
                    .toFixed(DEFAULT_DECIMALS);

                //查询是否需要批准
                const approveLimit = this.getApproveLimit(
                    account,
                    this.$baseConfig.swap.router.address,
                    this.from
                );
                if (approveLimit == 0) {
                    //显示批准
                    this.aproveTokenAVisible = true;
                }

                this.searchPairPrice();
            }
        },

        //查询
        async searchPairPrice() {
            //判断是否两个地址都为空 不查询价格
            if (this.from == null || this.to == null) {
                return;
            }

            //获取交易对地址
            let factory = SwapFactory(this.$baseConfig.swap.factory.address);
            let pairAddress = await factory.methods
                .getPair(this.from, this.to)
                .call()
                .then();

            console.log(pairAddress);

            if (pairAddress == "0x0000000000000000000000000000000000000000") {
                return;
            }

            //创建交易对对象
            let pair = SwapPair(pairAddress);
            //计算出当前交易对流动池储蓄
            let pairReserve = await pair.methods
                .getReserves()
                .call()
                .then();
            let reserve0 = pairReserve._reserve0;
            let reserve1 = pairReserve._reserve1;

            //判断地址一是不是大于地址二
            let sortAddres = this.sortTokens(this.from, this.to);
            if (sortAddres[0] == this.from) {
                this.pairReserve.from = reserve0;
                this.pairReserve.to = reserve1;
            } else {
                this.pairReserve.from = reserve1;
                this.pairReserve.to = reserve0;
            }
        },

        async selectToken2(e) {
            this.inputammout2 = 0;
            this.aproveTokenBVisible = false;
            //判断 token A 是不是 等于 TokenB
            if (this.from == this.to) {
                this.to = null;
                return;
            }

            const account = this.$store.state.account;

            //判断输入是不是 WBNB
            if (this.to == this.WETH) {
                //查询 ETH 的余额
                this.toTokenInfo = this.getWBNBObj();
                let balance = await this.web3js.eth.getBalance(account);
                this.toBalance = new BigNumber(
                    ethers.utils.formatEther(balance)
                ).toFixed(DEFAULT_DECIMALS);
            } else {
                //实例化 token 合约
                let nameToken = SwapToken(this.to);
                //查询当前 token 信息
                const tokenInfo = await this.getTokenInfo(this.to);
                this.toTokenInfo = tokenInfo;
                //查询当前 用户 token 余额
                let currentBalance = await nameToken.methods
                    .balanceOf(account)
                    .call()
                    .then();
                //进行数字的格式修改
                this.toBalance = new BigNumber(currentBalance)
                    .dividedBy(10 ** tokenInfo.decimals)
                    .toFixed(DEFAULT_DECIMALS);

                //查询是否需要批准
                const approveLimit = this.getApproveLimit(
                    account,
                    this.$baseConfig.swap.router.address,
                    this.to
                );
                if (approveLimit == 0) {
                    //显示批准
                    this.aproveTokenBVisible = true;
                }
            }

            this.searchPairPrice();
        },

        //获取 token 额度
        async getApproveLimit(owner, spender, tokenAddress) {
            let token = SwapToken(tokenAddress);
            let approveLimit = await token.methods
                .allowance(owner, spender)
                .call()
                .then();
            return approveLimit;
        },

        getWBNBObj() {
            let info = {
                name: "BNB",
                symbol: "BNB",
                decimals: 18,
                totalSupply: "10000000000000000000000"
            };
            return info;
        },

        // returns sorted token addresses, used to handle return values from pairs sorted in this order
        sortTokens(tokenA, tokenB) {
            let result;
            if (tokenA == tokenB) {
                result = [tokenA, tokenB];
            }
            if (tokenA < tokenB) {
                result = [tokenA, tokenB];
            } else {
                result = [tokenB, tokenA];
            }
            return result;
        },

        // MAX值
        maxBa1() {
            this.inputammout1 = this.fromBalance;
            this.changeInputStatus();
        },

        maxBa2() {
            this.inputammout2 = this.toBalance;
            this.changeInputStatus2();
        },

        //创建web3
        async createWeb3Js() {
            var Web3 = require("web3");
            if (ethereum) {
                this.web3Provider = ethereum;
                // 新版需要请求用户授权
                try {
                    ethereum.enable();
                } catch (error) {
                    return;
                }
            } else if (web3) {
                // MetaMask Legacy dapp browsers...
                this.web3Provider = web3.currentProvider;
                console.log("web3.currentProvider:");
                console.log(web3.currentProvider);
            } else {
                this.web3Provider = new Web3.providers.HttpProvider(
                    Config.web3Provider
                );
            }
            this.web3js = new Web3(this.web3Provider);
        },

        //用户输入 tokenA 数量事件
        async changeInputStatus() {
            const newAccounts = this.$store.state.account;

            //判断是否两个地址都为空 不查询价格
            if (this.from == null || this.to == null) {
                return;
            } else if (this.inputammout1 == '' || this.inputammout1 <= 0) {
                return;
            }
            //如果是第一次添加流动性
            if (this.pairReserve.from <= 0) {
                return;
            }

            //进行最大数量的获取
            let fromNumberBig = new BigNumber(this.inputammout1);

            //进行输出的修改
            let router = SwapRouter(this.$baseConfig.swap.router.address);
            let res = await router.methods.quote(fromNumberBig.multipliedBy(10 ** this.fromTokenInfo.decimals).toFixed(), this.pairReserve.from, this.pairReserve.to).call().then();
            this.inputammout2 = new BigNumber(res).div(10 ** this.toTokenInfo.decimals).toFixed(DEFAULT_DECIMALS);

        },

        //用户输入 tokenB 数量事件
        async changeInputStatus2() {
            const newAccounts = this.$store.state.account;

            //判断是否两个地址都为空 不查询价格
            if (this.from == null || this.to == null) {
                return;
            }
            //判断是否
            if (this.inputammout2 == '' || this.inputammout2 < 0) {
                return;
            }
            //如果是第一次添加流动性
            if (this.pairReserve.from <= 0) {
                return;
            }
            //TODO 查询最优化的查询路径，目前只设置交易对之间的更换
            let pair = [this.from, this.to];

            //进行最大数量的获取
            let toNumberBig = new BigNumber(this.inputammout2);
            //进行输出的修改
            let router = SwapRouter(this.$baseConfig.swap.router.address);
            let res = await router.methods.quote(toNumberBig.multipliedBy(10 ** this.toTokenInfo.decimals).toFixed(), this.pairReserve.to, this.pairReserve.from).call().then();
            this.inputammout1 = new BigNumber(res).div(10 ** this.fromTokenInfo.decimals).toFixed(DEFAULT_DECIMALS);
        },

        // 批准 token A
        aproveToken1() {
            const account = this.$store.state.account;
            const tokenObj = SwapToken(this.from);
            tokenObj.methods
                .approve(
                    this.$baseConfig.swap.router.address,
                    new BigNumber("1.157e+59").toFixed()
                )
                .send({
                    from: account
                })
                .then((receipt) => {
                    //隐藏
                    this.aproveTokenAVisible = false;
                });
        },

        // 批准 token B
        aproveToken2() {
            const account = this.$store.state.account;
            const tokenObj = SwapToken(this.to);
            tokenObj.methods
                .approve(
                    this.$baseConfig.swap.router.address,
                    new BigNumber("1.157e+59").toFixed()
                )
                .send({
                    from: account
                })
                .then((receipt) => {
                    //隐藏
                    this.aproveTokenBVisible = false;
                });
        },

        // 供应-添加流动性(路由地址)
        supplyToken() {
            //判断输入是否超出了 拥有 数量
            if (this.inputammout1 > this.fromBalace || this.inputammout2 > this.toBalance) {
                alert('Insufficient Balance');
                return;
            }
            //判断
            if (this.from == this.WETH) {
                this.addLiquidityETH(
                    this.to,
                    this.inputammout2,
                    this.inputammout1,
                    this.toTokenInfo.decimals
                );
            } else if (this.to == this.WETH) {
                this.addLiquidityETH(
                    this.from,
                    this.inputammout1,
                    this.inputammout2,
                    this.fromTokenInfo.decimals
                );
            } else {
                this.addLiquidity();
            }
        },

        //双 token 增加流动
        addLiquidity() {
            //获取路由实例
            let router = SwapRouter(this.$baseConfig.swap.router.address);
            const account = this.$store.state.account;

            //计算参数
            let tokenABig = new BigNumber(this.inputammout1);
            let tokenBBig = new BigNumber(this.inputammout2);
            let amountADesired = tokenABig
                .multipliedBy(10 ** this.fromTokenInfo.decimals)
                .toFixed();
            let amountBDesired = tokenBBig
                .multipliedBy(10 ** this.toTokenInfo.decimals)
                .toFixed();
            let amountAMin = new BigNumber(amountADesired)
                //.multipliedBy((100 - this.value1) / 100)
                .multipliedBy((100 - this.$refs.settingPop.tradeSetting.spot) / 100)
                .toFixed();
            let amountBMin = new BigNumber(amountBDesired)
                .multipliedBy((100 - this.$refs.settingPop.tradeSetting.spot) / 100)
                //.multipliedBy((100 - this.value1) / 100)
                .toFixed();
            let nowTimeStamp = parseInt(new Date().getTime() / 1000);
            //let deadline = nowTimeStamp + this.minutes * 60;
            let deadline = nowTimeStamp + this.$refs.settingPop.tradeSetting.minute * 60;

            //请求区块
            router.methods
                .addLiquidity(
                    this.from,
                    this.to,
                    amountADesired,
                    amountBDesired,
                    amountAMin,
                    amountBMin,
                    account,
                    deadline
                )
                .send({
                    from: account
                })
                .then((receipt) => {
                    // 清空
                    this.inputammout1 = "";
                    this.inputammout2 = "";
                });
        },

        //token/ETH 增加流动
        addLiquidityETH(tokenAddress, tokenNumber, ethNumber, tokenDecimals) {
            //获取路由实例
            let router = SwapRouter(this.$baseConfig.swap.router.address);
            const account = this.$store.state.account;

            //计算参数
            let tokenBig = new BigNumber(tokenNumber);
            let ethBig = new BigNumber(ethNumber);
            let tokenDesired = tokenBig.multipliedBy(10 ** tokenDecimals).toFixed();
            let ethDesired = ethBig.multipliedBy(10 ** 18).toFixed();
            let tokenMin = new BigNumber(tokenDesired)
                //.multipliedBy((100 - this.value1) / 100)
                .multipliedBy((100 - this.$refs.settingPop.tradeSetting.spot) / 100)
                .toFixed();
            let ethMin = new BigNumber(ethDesired)
                //.multipliedBy((100 - this.value1) / 100)
                .multipliedBy((100 - this.$refs.settingPop.tradeSetting.spot) / 100)
                .toFixed();
            let nowTimeStamp = parseInt(new Date().getTime() / 1000);
            //let deadline = nowTimeStamp + this.minutes * 60;
            let deadline = nowTimeStamp + this.$refs.settingPop.tradeSetting.minute * 60;

            //请求区块
            router.methods
                .addLiquidityETH(
                    tokenAddress,
                    tokenDesired,
                    tokenMin,
                    ethMin,
                    account,
                    deadline
                )
                .send({
                    from: account,
                    value: ethDesired
                })
                .then((receipt) => {
                    // 清空
                    this.inputammout1 = "";
                    this.inputammout2 = "";
                });
        },

        //查询当前用户持有的池子
        async queryUserPool() {
            const account = this.$store.state.account;
            if (!account) {
                return;
            }
            //实例化路由
            let factory = SwapFactory(this.$baseConfig.swap.factory.address);
            //查询整个路由的长度
            const allPairsLength = await factory.methods.allPairsLength().call();

            //清除用户的池子
            this.userPool = [];
            for (let i = 0; i < allPairsLength; i++) {
                let pair = await factory.methods.allPairs(i).call();
                //进行异步调整
                this.getUserPairInfo(pair, account, this.getUserPairInfoCallBack);
            }
        },

        //查询用户交易对 回调
        getUserPairInfoCallBack(pairInfo) {
            //判断当前 数组中是否已存在相关元素
            let item = this.userPool.find(item => {
                return item.pairAddress == pairInfo.pairAddress
            })
            if (!item) {
                this.userPool.push(pairInfo);
            }
        },

        //查询用户交易对
        async getUserPairInfo(tokenAddress, account, callback) {
            //获取交易对对象
            let pair = SwapPair(tokenAddress);
            //查询当前用户是否有余额
            const pairBalance = await pair.methods.balanceOf(account).call();
            if (pairBalance > 0) {
                //查询当前 交易对 token 总量
                let totalSupply = await pair.methods.totalSupply().call();
                let tokenAAddress = await pair.methods.token0().call();
                let tokenBAddress = await pair.methods.token1().call();

                //查询当前 tokenA 信息
                let tokenAInfo = await this.getTokenInfo(tokenAAddress);
                //查询tokenB信息
                let tokenBInfo = await this.getTokenInfo(tokenBAddress);

                //进行当前流动池比例的计算
                let pairBalanceBig = new BigNumber(pairBalance);
                let proportion = pairBalanceBig.dividedBy(totalSupply).toFixed(4);

                //获取池子中的数量
                const pairReserves = await pair.methods.getReserves().call();

                let pairInfo = {
                    pairAddress: tokenAddress,
                    totalSupply: totalSupply,
                    tokenAAddress: tokenAAddress,
                    tokenBAddress: tokenBAddress,
                    pairReserves: pairReserves,

                    tokenAInfo: tokenAInfo,
                    tokenBInfo: tokenBInfo,

                    pairBalance: pairBalance,
                    proportion: proportion
                };
                callback(pairInfo);
            } else {
                return false;
            }
        },
        //乘法运算
        multiplyingOperator(numa, numb, decimal) {
            let numaBig = new BigNumber(numa);
            let res = numaBig.multipliedBy(numb).toFixed(decimal);
            return res;
        },

        //除法运算
        divisionOperator(numa, numb, decimal) {
            let numaBig = new BigNumber(numa);
            let res = numaBig.dividedBy(numb).toFixed(decimal);
            return res;
        },

        //查询用户交易对 回调
        getUserPairInfoCallBack(pairInfo) {
            //判断当前 数组中是否已存在相关元素
            let item = this.userPool.find(item => {
                return item.pairAddress == pairInfo.pairAddress;
            });
            if (!item) {
                this.userPool.push(pairInfo);
            }
        },

        //查询用户交易对
        async getUserPairInfo(tokenAddress, account, callback) {
            //获取交易对对象
            const pair = SwapPair(tokenAddress);
            //查询当前用户是否有余额
            const pairBalance = await pair.methods.balanceOf(account).call();
            if (pairBalance > 0) {
                //查询当前 交易对 token 总量
                let totalSupply = await pair.methods.totalSupply().call();
                let tokenAAddress = await pair.methods.token0().call();
                let tokenBAddress = await pair.methods.token1().call();

                //查询当前 tokenA 信息
                let tokenAInfo = await this.getTokenInfo(tokenAAddress);
                //查询tokenB信息
                let tokenBInfo = await this.getTokenInfo(tokenBAddress);

                //进行当前流动池比例的计算
                let pairBalanceBig = new BigNumber(pairBalance);
                let proportion = pairBalanceBig.dividedBy(totalSupply).toFixed(4);

                //获取池子中的数量
                const pairReserves = await pair.methods.getReserves().call();

                let pairInfo = {
                    pairAddress: tokenAddress,
                    totalSupply: totalSupply,
                    tokenAAddress: tokenAAddress,
                    tokenBAddress: tokenBAddress,
                    pairReserves: pairReserves,

                    tokenAInfo: tokenAInfo,
                    tokenBInfo: tokenBInfo,

                    pairBalance: pairBalance,
                    proportion: proportion
                };
                callback(pairInfo);
            } else {
                return false;
            }
        },

        //乘法运算
        multiplyingOperator(numa, numb, decimal) {
            let numaBig = new BigNumber(numa);
            let res = numaBig.multipliedBy(numb).toFixed(decimal);
            return res;
        },

        //除法运算
        divisionOperator(numa, numb, decimal) {
            let numaBig = new BigNumber(numa);
            let res = numaBig.dividedBy(numb).toFixed(decimal);
            return res;
        },
    },

    created() {
        //创建 web3js
        this.createWeb3Js();
    },
    mounted() {
        //进行用户持仓的查询
        this.queryUserPool();
    },
    filters: {}
};
</script>

<style scoped>
h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

a {
    text-decoration: none;
    color: #fff;
}

.r {
    float: right;
    color: rgb(0 0 0 / 25%);
}

p {
    display: block;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

.container {
    width: 80%;
    margin: auto;
}

.homeSecond .topnav-tab {
    margin: auto;
}

.homeSecond .topnav-tab li>span {
    opacity: 0.6;
    padding: 10px 0px;
}

.homeSecond .topnav-tab .active>span {
    border-bottom: solid 4px #dc52ff;
    opacity: 1;
}

.homeSecond .topnav-tab li {
    cursor: pointer;
    padding: 48px 60px;
    display: inline-block;
}

.homeSecond .topnav-tab li .tab {
    text-align: center;
    font-size: 30px;
}

.homeSecond .topnav-show .exchangebox {
    width: 100%;
    max-width: 500px;
    background-color: #fff;
    color: rgb(40, 13, 95);
    border-radius: 24px;
    margin: auto;
    padding: 20px 0px;
}

.homeSecond .topnav-show .exchangebox .topbox {
    display: inline-flex;
    width: 100%;
    border-bottom: 1px solid rgb(231, 227, 235);
    padding-bottom: 20px;
}

.homeSecond .topnav-show .exchangebox .topbox .left_swap {
    flex: 5;
    text-align: left;
    padding-left: 20px;
}

.homeSecond .topnav-show .exchangebox .topbox .left_swap .fir_tit {
    padding-left: 20px;
}

.homeSecond .topnav-show .exchangebox .topbox .left_swap .sec_tit {
    padding-left: 40px;
}

.homeSecond .topnav-show .exchangebox .topbox .right_swap {
    flex: 1;
    text-align: right;
    padding-right: 20px;
}

.homeSecond .topnav-show .exchangebox .bottombox {
    padding: 0px 20px;
}

.homeSecond .topnav-show .exchangebox .bottombox p {
    display: inline-block;
    width: 100%;
}

.homeSecond .topnav-show .exchangebox .bottombox .l_liq {
    float: left;
}

.homeSecond .topnav-show .exchangebox .bottombox .r_liq {
    float: right;
}

.homeSecond .topnav-show .exchangebox .bottombox .panel {
    border-radius: 16px;
    background-color: rgb(238, 234, 244);
    box-shadow: rgb(74 74 104 / 10%) 0px 2px 2px -1px inset;
    margin: 20px;
    text-align: left;
    padding: 20px;
}

.homeSecond .topnav-show .exchangebox .bottombox .panel p {
    display: inline-block;
    width: 100%;
}

.homeSecond .topnav-show .exchangebox .bottombox .panel .inquidityInput {
    display: inline-flex;
    width: 100%;
}

.homeSecond .topnav-show .exchangebox .bottombox .panel .inquidityInput input {
    display: inline-block;
    flex: 1;
}

.homeSecond .topnav-show .exchangebox .bottombox .panel .inquidityInput input {
    display: inline-block;
    flex: 1;
}

.homeSecond .topnav-show .exchangebox .bottombox .panel .inquidityInput>>>.el-input--suffix .el-input__inner {
    padding-right: 30px;
    text-align: right;
    border: none;
    background-color: #eeeaf4;
    color: rgb(40, 13, 95);
    font-size: 19px;
}

.homeSecond .topnav-show .exchangebox .bottombox .panel .inquidityInput .right {
    display: inline-block;
    width: 100%;
    flex: 5;
    text-align: right;
}

.homeSecond .topnav-show .exchangebox .bottombox .panel .bal {
    font-size: 15px;
    color: #606266;
}

.homeSecond .topnav-show .exchangebox .bottombox .panel .bal span {
    color: rgb(213, 0, 102);
    cursor: pointer;
}

.homeSecond .topnav-show .exchangebox .bottombox .panel .left {
    float: left;
    outline: none;
    border: none;
    background-color: rgb(255 255 255 / 0%);
    font-size: 16px;
    color: rgb(40, 13, 95);
    line-height: 36px;
}

.homeSecond .topnav-show .exchangebox .bottombox .panel .right {
    cursor: pointer;
    float: right;
}

.homeSecond .topnav-show .exchangebox .bottombox .slideper {
    padding: 20px;
}

.homeSecond .topnav-show .exchangebox .bottombox .slideper span:first-child {
    float: left;
}

.homeSecond .topnav-show .exchangebox .bottombox .slideper span:last-child {
    float: right;
    color: rgb(31, 199, 212);
}

.homeSecond .topnav-show .exchangebox .bottombox .aprove {
    display: inline-flex;
    width: 100%;
}

.homeSecond .topnav-show .exchangebox .bottombox .aprove button {
    flex: 1;
}

.removebtn {
    background-color: rgb(31, 199, 212);
    color: white;
    width: 100%;
    border: none;
    outline: none;
    background-color: rgb(31, 199, 212);
    color: white;
    height: 48px;
    border-radius: 10px;
    margin-top: 30px;
    font-size: 16px;
}

.homeSecond .topnav-show .exchangebox .bottombox .unlockbtn {
    background-color: rgb(31, 199, 212);
    color: white;
    width: 100%;
    border: none;
    outline: none;
    background-color: rgb(31, 199, 212);
    color: white;
    height: 48px;
    border-radius: 10px;
    font-size: 16px;
    margin-top: 30px;
}

.homeSecond .topnav-show .exchangebox .bottombox .default {
    background-color: rgb(237, 238, 242);
    color: rgb(86, 90, 105);
}

.homeSecond .topnav-show .exchangebox .bottombox .red {
    background-color: rgb(253, 234, 241);
    color: rgb(213, 0, 102);
}

.homeSecond .topnav-show .exchangebox .bottombox .connect {
    padding-top: 30px;
}

.popContainer {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    color: rgb(40, 13, 95);
    text-align: left;
}

.popContainer .setting .RVASu {
    overflow: hidden;
    background: rgb(255, 255, 255);
    -webkit-box-shadow: rgb(14 14 44 / 10%) 0px 20px 36px -8px,
        rgb(0 0 0 / 5%) 0px 1px 1px;
    border: 1px solid rgb(231, 227, 235);
    border-radius: 32px;
    z-index: 100;
    min-width: 320px;
    margin: auto;
    max-width: 600px;
    margin-top: 20%;
}

.popContainer .setting .dRvZwz {
    text-align: left;
}

.popContainer .setting .hpCsHe {
    -webkit-box-align: center;
    align-items: center;
    background: linear-gradient(111.68deg,
            rgb(242, 236, 242) 0%,
            rgb(232, 242, 246) 100%);
    border-bottom: 1px solid rgb(231, 227, 235);
    display: flex;
    padding: 12px 24px;
    margin-top: 0px;
}

.popContainer .setting .grCaBj {
    -webkit-box-align: center;
    align-items: center;
    flex: 1 1 0%;
}

.hrLNMt {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 8px;
}

.cOuJRo {
    -webkit-box-pack: justify;
    justify-content: space-between;
}

.bSFVWO {
    width: 100%;
    display: flex;
    padding: 0px;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
}

.cnodLS {
    background-color: rgb(238, 234, 244);
    border: 0px;
    border-radius: 16px;
    box-shadow: rgb(74 74 104 / 10%) 0px 2px 2px -1px inset;
    color: rgb(40, 13, 95);
    display: block;
    font-size: 16px;
    height: 40px;
    outline: 0px;
    padding: 0px 16px;
    width: 100%;
    margin-right: 10px;
}

.hxyIoS {
    display: inline-flex;
}

.popContainer .setting div {
    margin-top: 6px;
}

.popContainer .setting .settingBor {
    padding: 30px 30px 50px 30px;
}

.popContainer .setting .tokenPair p {
    cursor: pointer;
}

.popContainer .setting .tokenWrap {
    padding: 10px 30px 50px 30px;
}

.jGdoGP,
.geCbln {
    color: rgb(40, 13, 95);
    font-weight: 600;
    line-height: 1.5;
    font-size: 20px;
}

.fkPVeM {
    width: fit-content;
}
</style>
