<template>
  <div class="homewrapper">
    <div class="homeSecond">
      <div class="show">
        <!-- swap交换 -->
        <ul class="topnav-show">
          <div v-show="this.$store.getters.isConntent" class="exchangebox">
            <div class="topbox">
              <div class="left_swap">
                <p>Exchange</p>
                <p>Trade tokens in an instant</p>
              </div>
              <div class="right_swap">
                <span @click="openAlert()">
                  <svg
                    viewBox="0 0 24 24"
                    color="primary"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                    class="sc-bdvvaa dqTYWn"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div class="bottombox">
              <div class="panel">
                <p>From</p>
                <div class="inquidityInput">
                  <input
                    type="text"
                    class="left"
                    placeholder="0"
                    v-model="fromNumber"
                    @input="changeTokenANumber()"
                  />
                  <div class="right">
                    <el-select
                      v-model="from"
                      @change="changeTokenA()"
                      placeholder="Select a currency"
                    >
                      <el-option
                        v-for="token in listToken"
                        :value="token.address"
                        :key="token.name"
                        :label="token.name"
                      >{{ token.name }}</el-option>
                    </el-select>
                  </div>
                </div>
                <p class="bal">
                  Balance:{{fromBalace}}
                  <span @click="maxBa1()">(MAX)</span>
                </p>
              </div>
              <p>
                <svg
                  viewBox="0 0 24 24"
                  width="16px"
                  color="text"
                  xmlns="http://www.w3.org/2000/svg"
                  class="sc-bdvvaa iQxzfF"
                >
                  <path
                    d="M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z"
                  />
                </svg>
              </p>
              <div class="panel">
                <p>To</p>
                <div class="inquidityInput">
                  <!-- <span class="left">0</span> -->
                  <input
                    type="text"
                    class="left"
                    placeholder="0"
                    v-model="toNumber"
                    @input="changeTokenBNumber()"
                  />
                  <div class="right">
                    <el-select
                      v-model="to"
                      @change="changeTokenB($event)"
                      placeholder="Select a currency"
                    >
                      <el-option
                        v-for="token in listToken"
                        :value="token.address"
                        :key="token.name"
                        :label="token.name"
                      >{{ token.name }}</el-option>
                    </el-select>
                  </div>
                </div>
                <p class="bal">
                  Balance:{{toBalance}}
                  <span @click="maxBa2()">(MAX)</span>
                </p>
              </div>
              <div class="aprove flex">
                <button v-show="aproveTokenAVisible" class="unlockbtn" @click="aproveTokenA">Aprove One</button>
                <button v-show="aproveTokenBVisible" class="unlockbtn" @click="aproveTokenB">Aprove Two</button>
              </div>
              <button class="unlockbtn default" v-show="exchangeVis">Enter the amount</button>
              <button class="unlockbtn" v-show="!exchangeVis" @click="tokenSwap">Exchange</button>
            </div>
          </div>
          
          <UnContent v-show="!this.$store.getters.isConntent"></UnContent>
          <SettingPop ref="settingPop"></SettingPop>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// 扩展
import Web3 from "web3";
import { ethers } from "ethers";
import BigNumber from "bignumber.js";
import SwapFactory from "@/contracts/swap/factory.js";
import SwapPair from "@/contracts/swap/pair.js";
import SwapRouter from "@/contracts/swap/router.js";
import SwapToken from "@/contracts/swap/token.js";

//数据配置
import DEFAULT_TOKEN_LIST from "../../store/swapPairList.json";
import Config from '@/config.js';

//模块
import UnContent from '../module/trade/UnContent';
import SettingPop from '../module/trade/SettingPop';


//设置 默认的小数点
const DEFAULT_DECIMALS = 3;

export default {
  name: "Swap",
  data() {
    return {
      //TODO WETH 跳转时间
      WETH: Config.WETH,
      //用户选择地址
      from: null,
      //用户 token A balance
      fromBalace: 0,
      //用户选择地址
      to: null,
      // 用户 token B balance
      toBalance: 0,
      //列表代币
      listToken: DEFAULT_TOKEN_LIST,
      //From 数量
      fromNumber: "",
      //To 数量
      toNumber: "",
      web3js: null,
      //用于记录 from 信息
      fromTokenInfo: null,
      //用于记录 to 信息
      toTokenInfo: null,
      //pair中间价格
      pairMiddlePrice: 0,
      // 是否可以兑换
      exchangeVis: false,
      //是否需要展示 tokenA 批准按钮
      aproveTokenAVisible: false,
      //是否需要展示 tokenB 批准按钮
      aproveTokenBVisible: false,
    };
  },
  created() {
    this.createWeb3Js();
  },
  methods: {
    //打开弹出层
    openAlert () {
      this.$refs.settingPop.openAlert();
    },
    maxBa1() {
      this.fromNumber = this.fromBalace;
    },
    maxBa2() {
      this.toNumber = this.toBalance;
    },
    //查询 TokenA
    async changeTokenA() {
      this.fromBalace = 0;
      this.aproveTokenAVisible = false;
      //判断 token A 是不是 等于 TokenB
      if (this.from == this.to) {
        this.from = null;
        return;
      }
      const newAccounts = this.$store.state.account;

      //判断输入是不是 WBNB
      if (this.from == this.WETH) {
        //查询 ETH 的余额
        this.fromTokenInfo = this.getWBNBObj();
        let balance = await this.web3js.eth.getBalance(newAccounts)
        this.fromBalace =  new BigNumber(ethers.utils.formatEther(balance)).toFixed(DEFAULT_DECIMALS);
      } else {
        //查询 token 信息
        const tokenInfo = await this.getTokenInfo(this.from);
        this.fromTokenInfo = tokenInfo;

        //进行余额查询
        let token = SwapToken(this.from);
        let currentBalance = await token.methods.balanceOf(newAccounts).call();

        //进行数字的格式修改
        this.fromBalace = new BigNumber(currentBalance).dividedBy(10 ** tokenInfo.decimals).toFixed(DEFAULT_DECIMALS);

        //查询是否需要批准
        const approveLimit = this.getApproveLimit(newAccounts, this.$baseConfig.swap.router.address, this.from);
        if (approveLimit == 0 && this.from != this.WETH) {
          //显示批准
          this.aproveTokenAVisible = true;
        }
      }

      //调用查询价格方法
      this.searchPairPrice();

      //清除数量
      this.fromNumber = "";
    },

    //更换 TokenB
    async changeTokenB() {
      this.toBalance = 0;
      this.aproveTokenBVisible = false;
      //判断 token A 是不是 等于 TokenB
      if (this.from == this.to) {
        this.to = null;
        return;
      }
      
      const newAccounts = this.$store.state.account;

      //判断输入是不是 WBNB
      if (this.to == this.WETH) {
        //查询 ETH 的余额
        this.toTokenInfo = this.getWBNBObj();
        let balance = await this.web3js.eth.getBalance(newAccounts)
        this.toBalance =  new BigNumber(ethers.utils.formatEther(balance)).toFixed(DEFAULT_DECIMALS);
      } else {
        //查询 token 信息
        const tokenInfo = await this.getTokenInfo(this.to);
        this.toTokenInfo = tokenInfo;

        //进行余额查询
        let token = SwapToken(this.to);
        let currentBalance = await token.methods.balanceOf(newAccounts).call();
        this.toBalance = new BigNumber(currentBalance).dividedBy(10 ** tokenInfo.decimals).toFixed(DEFAULT_DECIMALS);

        //调用当前查询价格方法
        this.searchPairPrice();

        //查询是否需要批准
        const approveLimit = this.getApproveLimit(newAccounts, this.$baseConfig.swap.router.address, this.from);
        if (approveLimit == 0 && this.to != this.WETH) {
          //显示批准
          this.aproveTokenAVisible = true;
        }
      }
      

      //清除数量
      this.toNumber = "";
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

    // 批准 token A
    aproveTokenA() {
      const account = this.$store.state.account;
      const tokenObj = SwapToken(this.from);
      tokenObj.methods.approve(
          this.$baseConfig.swap.router.address,
          new BigNumber("1.157e+59").toFixed()
        )
        .send({ from: account})
        .then((receipt) => {
          //隐藏
          this.aproveTokenAVisible = false;
        });
    },

    // 批准 token B
    aproveTokenB() {
      const account = this.$store.state.account;
      const tokenObj = SwapToken(this.to);
      tokenObj.methods.approve(
          this.$baseConfig.swap.router.address,
          new BigNumber("1.157e+59").toFixed()
        )
        .send({ from: account})
        .then((receipt) => {
          //隐藏
          this.aproveTokenBVisible = false;
        });
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

    //创建web3
    createWeb3Js() {
      this.web3js = new Web3(
        Web3.givenProvider || Config.web3Provider
      );
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

      if (pairAddress == "0x0000000000000000000000000000000000000000") {
        alert("当前交易对没有流动性，请提供流动性");
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
      //计算出兑换中间价
      let middlePrice = 0;

      if (sortAddres[0] == this.from) {
        middlePrice = reserve1 / reserve0;
      } else {
        middlePrice = reserve0 / reserve1;
      }
      //进行中间价赋值
      this.pairMiddlePrice = new BigNumber(middlePrice).toFixed(
        DEFAULT_DECIMALS
      );
    },

    //更换 token A 数量
    async changeTokenANumber() {
      const newAccounts = this.$store.state.account;

      //判断是否两个地址都为空 不查询价格
      if (this.from == null || this.to == null) {
        return;
      }
      if (this.fromNumber == '' || this.fromNumber < 0) {
        return;
      }

      //TODO 查询最优化的查询路径，目前只设置交易对之间的更换
      let pair = [this.from, this.to];
      //进行最大数量的获取
      let fromNumberBig = new BigNumber(this.fromNumber);
      let router = SwapRouter(this.$baseConfig.swap.router.address);
      let toNumber = await router.methods
        .getAmountsOut(
          fromNumberBig
            .multipliedBy(10 ** this.fromTokenInfo.decimals)
            .toFixed(),
          pair
        )
        .call()
        .then();

      //进行输出的修改
      let toNumberBig = new BigNumber(toNumber[1]);
      this.toNumber = toNumberBig
        .div(10 ** this.toTokenInfo.decimals)
        .toFixed(DEFAULT_DECIMALS);
    },

    //更换 token B 的数量
    async changeTokenBNumber() {
      console.log('aaaa');
      const newAccounts = this.$store.state.account;

      //判断是否两个地址都为空 不查询价格
      if (this.from == null || this.to == null) {
        return;
      }
      if (this.toNumber == '' || this.toNumber < 0) {
        return;
      }

      //TODO 查询最优化的查询路径，目前只设置交易对之间的更换
      let pair = [this.from, this.to];

      //进行最大数量的获取
      let toNumberBig = new BigNumber(this.toNumber);
      let router = SwapRouter(this.$baseConfig.swap.router.address);
      let toNumber = await router.methods
        .getAmountsIn(
          toNumberBig.multipliedBy(10 ** this.toTokenInfo.decimals).toFixed(),
          pair
        )
        .call()
        .then();
      let fromNumberBig = new BigNumber(toNumber[0]);
      //进行输出的修改
      this.fromNumber = fromNumberBig
        .div(10 ** this.toTokenInfo.decimals)
        .toFixed(DEFAULT_DECIMALS);
    },

    //进行 Swap
    async tokenSwap() {
      //获取当前用户的账号地址
      const account = this.$store.state.account;
      //判断相关的路由方法
      if (this.WETH == this.from) {
        this.swapExactETHForTokens(
          account,
          this.fromNumber,
          this.toNumber,
          this.toTokenInfo.decimals,
          [this.from, this.to]
        );
      } else if (this.WETH == this.to) {
        this.swapExactTokensForEth(
          account,
          this.toNumber,
          this.fromNumber,
          this.fromTokenInfo.decimals,
          [this.from, this.to]
        );
      } else {
        this.swapExactTokensForTokens(account);
      }
    },

    //填写 toToken 更换 fromToken
    async swapTokensForExactTokens(account) {
      let router = SwapRouter(this.$baseConfig.swap.router.address);
      let fromNumberBig = new BigNumber(this.fromNumber);
      let toNumberBig = new BigNumber(this.toNumber);

      //计算最小滑点后的数据
      let amountOut = toNumberBig
        .multipliedBy(10 ** this.toTokenInfo.decimals)
        .toFixed();
      let amountInMax = fromNumberBig
        .multipliedBy(10 ** this.fromTokenInfo.decimals)
        .multipliedBy((100 + this.tradeSetting.spot) / 100)
        .toFixed();
      let path = [this.to, this.from];
      let to = account;
      let nowTimeStamp = parseInt(new Date().getTime() / 1000);
      //let deadline = nowTimeStamp + this.tradeSetting.minute * 60;
      let deadline = nowTimeStamp + this.$refs.settingPop.tradeSetting.minute * 60;

      router.methods
        .swapTokensForExactTokens(amountOut, amountInMax, path, to, deadline)
        .send({ from: account })
        .on("confirmation", function(confirmationNumber, receipt) {
        })
        .on("receipt", function(receipt) {
        });
    },

    //填写 fromToken 更换 toToken
    swapExactTokensForTokens(account) {
      let router = SwapRouter(this.$baseConfig.swap.router.address);
      let fromNumberBig = new BigNumber(this.fromNumber);
      let toNumberBig = new BigNumber(this.toNumber);
      //计算最小滑点后的数据
      let amountIn = fromNumberBig
        .multipliedBy(10 ** this.fromTokenInfo.decimals)
        .toFixed();
      let amountOutMin = toNumberBig
        .multipliedBy(10 ** this.toTokenInfo.decimals)
        //.multipliedBy((100 - this.tradeSetting.spot) / 100)
        .multipliedBy((100 - this.$refs.settingPop.tradeSetting.spot) / 100)
        .toFixed();
      let path = [this.from, this.to];
      let to = account;
      let nowTimeStamp = parseInt(new Date().getTime() / 1000);
      //let deadline = nowTimeStamp + this.tradeSetting.minute * 60;
      let deadline = nowTimeStamp + this.$refs.settingPop.tradeSetting.minute * 60;

      router.methods
        .swapExactTokensForTokens(amountIn, amountOutMin, path, to, deadline)
        .send({ from: account })
        .on("receipt", function(receipt) {
          console.log("succeed");
          console.log(receipt);
        });
    },

    // 精准 ETH 更换 token
    swapExactETHForTokens(account, eth, tokenNmber, tokenDecimals, path) {
      let router = SwapRouter(this.$baseConfig.swap.router.address);
      let toNumberBig = new BigNumber(tokenNmber);
      let ethNumber = ethers.utils.parseEther(eth).toString();
      let amountOutMin = toNumberBig
        .multipliedBy(10 ** tokenDecimals)
        //.multipliedBy((100 - this.tradeSetting.spot) / 100)
        .multipliedBy((100 - this.$refs.settingPop.tradeSetting.spot) / 100)
        .toFixed();
      let to = account;
      let nowTimeStamp = parseInt(new Date().getTime() / 1000);
      //let deadline = nowTimeStamp + this.tradeSetting.minute * 60;
      let deadline = nowTimeStamp + this.$refs.settingPop.tradeSetting.minute * 60;

      router.methods
        .swapExactETHForTokens(amountOutMin, path, to, deadline)
        .send({ from: account, value: ethNumber })
        .on("receipt", function(receipt) {
          console.log("succeed");
          console.log(receipt);
        });
    },

    //填写 精准token 数量更换 ETH
    swapExactTokensForEth(account, eth, tokenNmber, tokenDecimals, path) {
      let router = SwapRouter(this.$baseConfig.swap.router.address);
      let toNumberBig = new BigNumber(tokenNmber);
      let amountIn = toNumberBig.multipliedBy(10 ** tokenDecimals).toFixed();
      //计算滑点
      let amountOutMinString = ethers.utils.parseEther(eth).toString();
      let amountOutMin = new BigNumber(amountOutMinString)
        //.multipliedBy((100 - this.tradeSetting.spot) / 100)
        .multipliedBy((100 - this.$refs.settingPop.tradeSetting.spot) / 100)
        .toFixed();

      let to = account;
      let nowTimeStamp = parseInt(new Date().getTime() / 1000);
      //let deadline = nowTimeStamp + this.tradeSetting.minute * 60;
      let deadline = nowTimeStamp + this.$refs.settingPop.tradeSetting.minute * 60;

      router.methods
        .swapExactTokensForETH(amountIn, amountOutMin, path, to, deadline)
        .send({ from: account })
        .on("receipt", function(receipt) {
          console.log("succeed");
          console.log(receipt);
        });
    },

    //获取BNB对象信息
    getWBNBObj()
    {
      let info = {
        decimals: "18",
        name: "BNB",
        symbol: "BNB",
        totalSupply: "10000000000000000000000",
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
    }
  },

  components: {
    UnContent,SettingPop
  },
  filters: {}
};
</script>

<style scoped>

.container {
  width: 80%;
  margin: auto;
}
.homewrapper {
  color: #fff;
}

.homeSecond .show {
  margin-top: 30px;
}
.homeSecond .topnav-tab {
  margin: auto;
}
.homeSecond .topnav-tab li > span {
  opacity: 0.6;
  padding: 10px 0px;
}
.homeSecond .topnav-tab .active > span {
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
.homeSecond .topnav-show .exchangebox .topbox .right_swap {
  flex: 1;
  text-align: right;
  padding-right: 20px;
}
.homeSecond .topnav-show .exchangebox .bottombox {
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
.homeSecond
  .topnav-show
  .exchangebox
  .bottombox
  .panel
  .inquidityInput
  >>> .el-input--suffix
  .el-input__inner {
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
.homeSecond
  .topnav-show
  .exchangebox
  .bottombox
  .panel
  .inquidityInput
  .right
  select {
  width: 50%;
  height: 38px;
  border-radius: 10px;
  outline: none;
  border: none;
  background-color: #eeeaf4;
  color: rgb(40, 13, 95);
  font-size: 18px;
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
.homeSecond .topnav-show .exchangebox .bottombox .unlockbtn {
  margin: 20px;
  background-color: rgb(31, 199, 212);
  color: white;
  width: 100%;
  border: none;
  outline: none;
  padding: 0px 24px;
  background-color: rgb(31, 199, 212);
  color: white;
  width: 94%;
  height: 48px;
  border-radius: 10px;
  margin-top: 30px;
  font-size: 16px;
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
  background-color: rgb(238, 238, 238);
  padding: 30px;
}


</style>
