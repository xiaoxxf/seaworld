<template>
  <div class="homewrapper" :style="sharecardBg">
    <div class="homeSecond rippless">
      <div class="content">
        <ul class="topnav-tab">
          <router-link :to="{ name:'Exchange'}">
            <li :class="{active:cur==0}">
              <span class="tab" :account="account">Swap</span>
            </li>
          </router-link>

          <li :class="{active:cur==1}">
            <span class="tab" :account="account">Liquidity</span>
          </li>
        </ul>
        <div class="show">
          <!-- swap交换 -->
          <ul class="topnav-show" v-show="cur==1">
            <div class="exchangebox">
              <div class="topbox">
                <div class="left_swap">
                  <p>
                    <span class="back" @click="backBtn">
                      <svg
                      t="1626666143674"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="1362"
                      width="16"
                      height="16"
                    >
                      <path
                        d="M181.415 519.827c-0.03-10.31 4.345-20.557 12.86-27.702l459.627-385.672c15.23-12.78 37.938-10.794 50.718 4.437 12.78 15.23 10.793 37.938-4.437 50.718L274.163 519.08l449.743 326.757c16.085 11.687 19.65 34.2 7.964 50.285-11.686 16.085-34.2 19.65-50.285 7.964l-485.41-352.67c-10.402-7.558-15.568-19.643-14.76-31.589z"
                        p-id="1363"
                        fill="#280d5f"
                      />
                    </svg>
                    </span>
                    <span class="rm_title">
                        remove Lidiqity
                    </span>
                  </p>
                </div>
                <div class="right_swap">
                  <span @click="openSlide()">
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
                <p>
                  Remove Amount :
                  <!-- <input type="text" v-model="valueslider" /> % -->
                  <el-slider v-model="valueslider" :step="10"></el-slider>
                </p>
                <p>
                  <span class="l_rm">tokenA:</span>
                  <span class="r_rm">{{tokenAShow}}</span>
                </p>
                <p>
                  <span class="l_rm">tokenB:</span>
                  <span class="r_rm">{{tokenBShow}}</span>
                </p>
                <p>
                  <span class="l_rm">Balance:</span>
                  <span class="r_rm">{{pairBalanceShow}}</span>
                </p>
                <p class="flexbtn">
                  <button @click="removeSwap" class="rmbtn">Remove</button>
                  <button
                    v-show="isPairApprove"
                    @click="approvePairToken"
                    class="approvebtn"
                  >Approve pair</button>
                </p>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
    <!-- 滑点弹窗 -->
    <div class="popContainer" v-show="showSlide">
      <div class="setting">
        <div class="sc-jRQAMF sc-kHOZQx ffYIDR RVASu">
          <div class="sc-hmjpBu hpCsHe">
            <div class="sc-jRQAMF sc-gKckTs sc-eLwHGX iODQYo kNJaHk grCaBj">
              <h2 color="text" class="sc-gsDJrp sc-iwjezw dPBltW dRvZwz">Settings</h2>
            </div>
            <span @click="closePanel()">
              <svg
                viewBox="0 0 24 24"
                color="primary"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
                class="sc-bdvvaa dqTYWn"
              >
                <path
                  d="M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z"
                />
              </svg>
            </span>
          </div>
          <div class="sc-jRQAMF sc-gKckTs sc-bTfYlY hrXjK kNJaHk bMvWcO">
            <div class="sc-jRQAMF sc-gKckTs sc-bTfYlY iODQYo kNJaHk bMvWcO">
              <div class="sc-hjGYWY gtCCOx settingBor">
                <div font-size="20px" color="text" class="sc-gsDJrp jGdoGP">Transaction Settings</div>
                <div class="sc-hjGYWY gtCCOx">
                  <div class="sc-hjGYWY kydmNG">
                    <div class="sc-jRQAMF sc-gjNGvZ sc-iqVVwt iODQYo bSFVWO fkPVeM">
                      <div font-size="14px" color="text" class="sc-gsDJrp cgqpct">Slippage tolerance</div>
                    </div>
                    <div class="slider">
                      <div class="block">
                        <el-slider v-model="removeslide" :step="10"></el-slider>
                      </div>
                    </div>
                  </div>
                  <div class="sc-hjGYWY kydmNG">
                    <div class="sc-jRQAMF sc-gjNGvZ sc-iqVVwt iODQYo bSFVWO fkPVeM">
                      <div
                        font-size="14px"
                        color="text"
                        class="sc-gsDJrp cgqpct"
                      >Transaction deadline</div>
                    </div>
                    <div class="sc-jRQAMF sc-gjNGvZ sc-iqVVwt iODQYo bSFVWO fkPVeM">
                      <input
                        placeholder="20"
                        scale="md"
                        class="sc-kDThTU cnodLS"
                        v-model="deadline"
                      />
                      <span>minutes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import Swiper from "swiper";
import NCWeb3 from "@/web3";
import Web3 from "web3";
import Config from '@/config.js';

import SwapFactory from "@/contracts/swap/factory.js";
import SwapPair from "@/contracts/swap/pair.js";
import SwapRouter from "@/contracts/swap/router.js";
import SwapToken from "@/contracts/swap/token.js";

import BigNumber from "bignumber.js";
import Liquidity from "./Liquidity";
import Swap from "./Swap";

export default {
  name: "home",
  data() {
    return {
      account: null,
      cur: 1,
      errmsg: "Enter the amount",
      conectWalletVisible: false, //连接钱包
      value: "",
      sharecardBg: {
        backgroundImage: "url(" + require("@/assets/sharecardbg.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      },

      //获取交易对信息
      //pairAddress : '0x0Df7bBC9f7380e695Ff00018dAfeF2FcAD747525',
      pairAddress: "0x690f329Fec4d276607804f262212bb55F2773440",
      //百分比
      valueslider: 10,

      //TODO WETH 写入配置文件
      WETH: Config.WETH,
      pairInfo: {
        //pair 总量
        totalSupply: 0,
        tokenAAddress: "",
        tokenBAddress: "",
        reserves: null
      },
      userPairInfo: {
        balance: 0,
        tokenANumber: 0,
        tokenBNumber: 0
      },
      tokenAInfo: {
        name: null,
        symbol: null,
        decimals: 18,
        totalSupply: null
      },
      tokenBInfo: {
        name: null,
        symbol: null,
        decimals: 18,
        totalSupply: null
      },
      //滑点
      tradeSetting: {
        spot: 10,
        minute: 20
      },
      web3js: null,
      isPairApprove: true,
      // 滑点弹窗
      showSlide: false,
      // 允许误差滑点
      removeslide: 10,
      //  期限
      deadline: 20
    };
  },
  components: {
    Liquidity,
    Swap
  },

  computed: {
    //展示 tokenA 余额
    tokenAShow() {
      let tokenABig = new BigNumber(this.userPairInfo.tokenANumber);
      return tokenABig
        .multipliedBy(this.valueslider / 100)
        .dividedBy(10 ** this.tokenAInfo.decimals)
        .toFixed(3);
    },

    //展示 tokenB 余额
    tokenBShow() {
      let tokenBBig = new BigNumber(this.userPairInfo.tokenBNumber);
      return tokenBBig
        .multipliedBy(this.valueslider / 100)
        .dividedBy(10 ** this.tokenBInfo.decimals)
        .toFixed(3);
    },

    //展示 交易对 token
    pairBalanceShow() {
      let tokenBBig = new BigNumber(this.userPairInfo.balance);
      return tokenBBig.dividedBy(10 ** 18).toFixed(3);
    }
  },
  created() {},
  mounted() {
    // this.pairAddress = this.$route.params.path;
    this.pairAddress = this.$route.query.id;
    //创建 webjs3 实例
    this.createWeb3Js();
    //判断是否安装 metamask
    if (this.isMetaMaskInstalled()) {
      //订阅账号修改机制
      if (ethereum.selectedAddress) {
        this.init();
      }
      //订阅账号改变
      ethereum.on("accountsChanged", this.metamaskAccountsChanged);
      //订阅网络改变
      ethereum.on("networkChanged", this.metamaskNetworkChanged);

      //改变 connectButton 状态
      //this.checkConnectBtn();
    } else {
      //弹出相关提醒
      alert("please install metamask");
    }
  },
  methods: {
    //metamask 切换网络
    metamaskNetworkChanged() {
      this.init();
    },
    //metamask 切换账号
    metamaskAccountsChanged() {
      this.init();
    },
    //判断用户是否安装了 metamask
    isMetaMaskInstalled() {
      const { ethereum } = window;
      return Boolean(ethereum && ethereum.isMetaMask);
    },
    // 返回上一级
    backBtn(){
      window.history.back(-1); 
    },
    async init() {
      //获取交易对信息
      await this.getPairInfo();
      //获取用户当前交易对信息
      await this.getUserPairInfo();
      //检查当前币种是否需要批准
      const account = ethereum.selectedAddress;
      const tokenApprove = await this.getApproveLimit(
        account,
        this.$baseConfig.swap.router.address,
        this.pairAddress
      );
      if (tokenApprove == 0) {
        this.isPairApprove = true;
      }
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

    //获取交易对信息
    async getPairInfo() {
      //创建当前交易对信息
      let pair = SwapPair(this.pairAddress);
      //查询当前交易对的总量
      this.pairInfo.totalSupply = await pair.methods
        .totalSupply()
        .call()
        .then();
      this.pairInfo.tokenAAddress = await pair.methods.token0().call();
      this.pairInfo.tokenBAddress = await pair.methods.token1().call();
      this.pairInfo.reserves = await pair.methods.getReserves().call();
    },

    //获取用户 交易对 信息
    async getUserPairInfo() {
      const account = ethereum.selectedAddress;
      //创建当前交易对信息
      let pair = SwapPair(this.pairAddress);

      //查询当前用户信息
      this.userPairInfo.balance = await pair.methods
        .balanceOf(account)
        .call()
        .then();
      let balanceBig = new BigNumber(this.userPairInfo.balance);
      let totalSupplyBig = new BigNumber(this.pairInfo.totalSupply);

      //占比
      let proportion = balanceBig.dividedBy(totalSupplyBig).toFixed();

      //查询当前用户可取出的 token 数量
      let pairTokenATotalBig = new BigNumber(this.pairInfo.reserves[0]);
      let pairTokenbTotalBig = new BigNumber(this.pairInfo.reserves[1]);

      this.userPairInfo.tokenANumber = pairTokenATotalBig
        .multipliedBy(proportion)
        .toFixed();
      this.userPairInfo.tokenBNumber = pairTokenbTotalBig
        .multipliedBy(proportion)
        .toFixed();

      //查询 tokenA 信息
      let tokenA = this.getTokenInfo(this.pairInfo.tokenAAddress);
      let tokenB = this.getTokenInfo(this.pairInfo.tokenBAddress);
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

    //移除流动
    async removeSwap() {
      //获取当前用户的账号地址
      const account = await ethereum.selectedAddress;

      //判断是否又流动性
      if (this.userPairInfo.balance <= 0) {
        console.log("Add liquidity first");
        return;
      }

      //判断相关的路由方法
      if (
        this.WETH == this.pairInfo.tokenAAddress ||
        this.WETH == this.pairInfo.tokenBAddress
      ) {
        this.removeLiquidityETH(account);
      } else {
        this.removeLiquidity(account);
      }
    },

    //批准
    async approvePairToken() {
      //获取当前用户的账号地址
      const account = await ethereum.selectedAddress;
      let res = await this.approveToken(this.pairAddress, account);
      this.isPairApprove = false;
    },

    //批准 pair 回调
    pairApproveCallback(receipt) {
      console.log(receipt);
      this.isPairApprove = false;
    },

    //批准用户 token
    async approveToken(tokenAddress, account) {
      let token = SwapToken(tokenAddress);
      let approveTokenNumber = new BigNumber("1.157e+59").toFixed();
      //进行批准
      let result = await token.methods
        .approve(this.$baseConfig.swap.router.address, approveTokenNumber)
        .send({
          from: account
        })
        .on("receipt", this.pairApproveCallback);
    },

    //移除 token/token 的流动
    removeLiquidity(account) {
      let tokenA = this.pairInfo.tokenAAddress;
      let tokenB = this.pairInfo.tokenBAddress;
      let pairBalanceBig = new BigNumber(this.userPairInfo.balance);
      let liquidity = pairBalanceBig
        .multipliedBy(this.valueslider / 100)
        .toFixed(0);

      let tokenABig = new BigNumber(this.userPairInfo.tokenANumber);
      let amountAMin = tokenABig
        .multipliedBy(this.valueslider / 100)
        .multipliedBy(this.removeslide / 100)
        .toFixed(0);

      let tokenBBig = new BigNumber(this.userPairInfo.tokenBNumber);
      let amountBMin = tokenBBig
        .multipliedBy(this.valueslider / 100)
        .multipliedBy(this.removeslide / 100)
        .toFixed(0);

      let to = account;
      let nowTimeStamp = parseInt(new Date().getTime() / 1000);
      let deadline = nowTimeStamp + this.deadline * 60;

      //进行交互
      let router = SwapRouter(this.$baseConfig.swap.router.address);
      router.methods
        .removeLiquidity(
          tokenA,
          tokenB,
          liquidity,
          amountAMin,
          amountBMin,
          to,
          deadline
        )
        .send({
          from: account
        })
        .on("receipt", (receipt) => {
          //进行信息的更新
          this.init();
        });
    },

    //移除 ETH/token 的流动
    removeLiquidityETH(account) {
      let tokenNumber = 0;
      let EthNumber = 0;
      let token = 0;
      if (this.pairInfo.tokenAAddress == this.WETH) {
        token = this.pairInfo.tokenBAddress;
        tokenNumber = this.userPairInfo.tokenBNumber;
        EthNumber = this.userPairInfo.tokenANumber;
      } else {
        token = this.pairInfo.tokenAAddress;
        tokenNumber = this.userPairInfo.tokenANumber;
        EthNumber = this.userPairInfo.tokenBNumber;
      }

      let pairBalanceBig = new BigNumber(this.userPairInfo.balance);
      let liquidity = pairBalanceBig
        .multipliedBy(this.valueslider / 100)
        .toFixed(0);

      let tokenABig = new BigNumber(tokenNumber);
      let amountAMin = tokenABig
        .multipliedBy(this.valueslider / 100)
        .multipliedBy(this.removeslide / 100)
        .toFixed(0);

      let tokenBBig = new BigNumber(EthNumber);
      let amountBMin = tokenBBig
        .multipliedBy(this.valueslider / 100)
        .multipliedBy(this.removeslide / 100)
        .toFixed(0);

      let to = account;
      let nowTimeStamp = parseInt(new Date().getTime() / 1000);
      let deadline = nowTimeStamp + this.deadline * 60;

      //进行交互
      let router = SwapRouter(this.$baseConfig.swap.router.address);
      router.methods
        .removeLiquidityETH(
          token,
          liquidity,
          amountAMin,
          amountBMin,
          to,
          deadline
        )
        .send({
          from: account
        })
        .on("receipt", (receipt) => {
          //进行信息的更新
          this.init();
        });
    },

    //创建web3
    createWeb3Js() {
      this.web3js = new Web3(
        Web3.givenProvider || Config.web3Provider
      );
    },

    // 滑点
    openSlide() {
      this.showSlide = true;
    },
    // 关闭滑点
    closePanel() {
      this.showSlide = false;
    }
  }
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
  margin-block-end: 0;
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
.homewrapper {
  color: #fff;
}

.homeSecond {
  margin-top: 100px;
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
.homeSecond .topnav-show .exchangebox .topbox .left_swap .back{
  vertical-align: middle;
}
.homeSecond .topnav-show .exchangebox .topbox .left_swap .rm_title{
  padding-left: 20px;
}
.homeSecond .topnav-show .exchangebox .topbox .right_swap {
  flex: 1;
  text-align: right;
  padding-right: 20px;
}
.homeSecond .topnav-show .exchangebox .bottombox {
  padding: 20px;
}
.homeSecond .topnav-show .exchangebox .bottombox p {
  width: 100%;
  display: inline-block;
  text-align: left;
  padding-top: 10px;
}
.homeSecond .topnav-show .exchangebox .bottombox .flexbtn {
  display: inline-flex;
}
.homeSecond .topnav-show .exchangebox .bottombox .flexbtn button {
  flex: 1;
}
.homeSecond .topnav-show .exchangebox .bottombox p .rmbtn {
  border: none;
  outline: none;
  background-color: rgb(31, 199, 212);
  color: white;
  height: 48px;
  border-radius: 10px;
  margin-top: 30px;
  font-size: 16px;
}
.homeSecond .topnav-show .exchangebox .bottombox p .approvebtn {
  border: none;
  outline: none;
  background-color: rgb(0 0 0 / 10%);
  color: #606266;
  height: 48px;
  border-radius: 10px;
  margin-top: 30px;
  font-size: 16px;
  margin-left: 10px;
}
.homeSecond .topnav-show .exchangebox .bottombox .l_rm {
  float: left;
  margin-right: 10px;
}
.homeSecond .topnav-show .exchangebox .bottombox .r_rm {
  float: right;
}
.homeSecond .topnav-show .exchangebox .bottombox p button {
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

.rippless .content {
  position: relative;
  z-index: 10;
  padding: 50px 0px;
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
  z-index: 10;
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
  background: linear-gradient(
    111.68deg,
    rgb(242, 236, 242) 0%,
    rgb(232, 242, 246) 100%
  );
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

.rippless .content {
  position: relative;
  z-index: 10;
}
</style>
