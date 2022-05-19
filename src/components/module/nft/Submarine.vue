<template>
  <ul class="topnav-show">
    <li>
      <div class="left_sharecard wow animate__animated animate__backInLeft">
        <img :src="info.image" :alt="info.immage" />
      </div>
      <div class="right_sharecard wow animate__animated animate__lightSpeedInRight">
        <p class="title">{{info.name}}</p>
        <p class="chaim">{{info.detail}}</p>
        <p class="linkto">
          <a href="javascript:void(0)">
            <!-- <router-link :to="{path:'/nftMining'}"> -->
            View More
            <span>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 8.00002C0 7.7348 0.105357 7.48045 0.292893 7.29291C0.48043 7.10538 0.734784 7.00002 1 7.00002H12.586L8.292 2.70802C8.10423 2.52025 7.99874 2.26557 7.99874 2.00002C7.99874 1.73447 8.10423 1.47979 8.292 1.29202C8.47977 1.10425 8.73445 0.998756 9 0.998756C9.26555 0.998756 9.52023 1.10425 9.708 1.29202L15.708 7.29202C15.8011 7.38491 15.875 7.49526 15.9254 7.61675C15.9758 7.73824 16.0018 7.86848 16.0018 8.00002C16.0018 8.13155 15.9758 8.2618 15.9254 8.38329C15.875 8.50478 15.8011 8.61513 15.708 8.70802L9.708 14.708C9.52023 14.8958 9.26555 15.0013 9 15.0013C8.73445 15.0013 8.47977 14.8958 8.292 14.708C8.10423 14.5202 7.99874 14.2656 7.99874 14C7.99874 13.7345 8.10423 13.4798 8.292 13.292L12.586 9.00002H1C0.734784 9.00002 0.48043 8.89466 0.292893 8.70713C0.105357 8.51959 0 8.26524 0 8.00002Z"
                  fill="#21F5FF"
                />
              </svg>
            </span>
            <!-- </router-link> -->
          </a>
        </p>
        <div class="share_adit">
          <p>
            <span>Number</span>
            <!-- <input type="text" /> -->
            <el-select v-model="value" placeholder="Number">
              <el-option
                v-for="item in info.options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </p>
          <p>
            <span>Quality</span>
            <span class="quality">
              <input type="text" v-model="number" />
              <button class="decrease_btn" @click="reduceNumber">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 12H4" stroke="white" stroke-width="2" stroke-linecap="round" />
                  </svg>
                </span>
              </button>
              <button class="increase_btn" @click="increaseNumber">
                <span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 9H1M9 17V9V17ZM9 9V1V9ZM9 9H17H9Z"
                      stroke="url(#paint0_linear)"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="17"
                        y1="17"
                        x2="15.4851"
                        y2="-0.272243"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#0E0035" />
                        <stop offset="0.635417" stop-color="#29058D" />
                        <stop offset="1" stop-color="#140049" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </button>
            </span>
          </p>
          <p>
            <span>Price</span>
            <span class="pricebnb">{{info.price}}BNB</span>
          </p>
        </div>
        <button class="buybtn" @click="order">
          Buy Now
          <span>
            <svg
              width="25"
              height="17"
              viewBox="0 0 25 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.6875 8.50003C0.6875 8.27625 0.776395 8.06164 0.934629 7.90341C1.09286 7.74517 1.30747 7.65628 1.53125 7.65628H21.4319L16.1214 2.3474C15.9629 2.18897 15.8739 1.97409 15.8739 1.75003C15.8739 1.52597 15.9629 1.31109 16.1214 1.15265C16.2798 0.994219 16.4947 0.905212 16.7187 0.905212C16.9428 0.905212 17.1577 0.994219 17.3161 1.15265L24.0661 7.90265C24.1447 7.98103 24.207 8.07414 24.2496 8.17665C24.2921 8.27915 24.314 8.38904 24.314 8.50003C24.314 8.61101 24.2921 8.7209 24.2496 8.82341C24.207 8.92591 24.1447 9.01902 24.0661 9.0974L17.3161 15.8474C17.1577 16.0058 16.9428 16.0948 16.7187 16.0948C16.4947 16.0948 16.2798 16.0058 16.1214 15.8474C15.9629 15.689 15.8739 15.4741 15.8739 15.25C15.8739 15.026 15.9629 14.8111 16.1214 14.6527L21.4319 9.34378H1.53125C1.30747 9.34378 1.09286 9.25488 0.934629 9.09665C0.776395 8.93841 0.6875 8.7238 0.6875 8.50003Z"
                fill="#370AB4"
              />
            </svg>
          </span>
        </button>
      </div>
    </li>
  </ul>
</template>

<script>
//引入 web3 js
import Web3 from "web3";
import BigNumber from "bignumber.js";
import { ethers } from "ethers";
import Config from '@/config.js';

export default {
  name: "Submarine",
  data() {
    return {
      value: "",
      number: "1",
      account: null
    };
  },
  props: ["info"],
  components: {},
  methods: {
    //增加数量
    increaseNumber() {
      this.number++;
    },
    //减少数量
    reduceNumber() {
      if (this.number >= 1) {
        this.number--;
      }
    },
    //进行购买
    order() {
      if (!this.account) {
        alert("Please connect account.");
        return;
      }
      if (!this.value) {
        alert("Please select item");
        return;
      }

      let numberBig = new BigNumber(this.number);

      let sendNumber = numberBig
        .multipliedBy(this.info.price)
        .multipliedBy(10 ** 18)
        .toFixed();
      //sendNumber = ethers.utils.formatEther(sendNumber)

      let params = {
        from: this.account,
        to: "0x43D02036fFc36A8908AeE9B8b9e76872dCE5407b",
        value: sendNumber // 2441406250
      };
      this.web3js.eth.sendTransaction(params, function(error, result) {
        console.log(error, result);
      });
    },
    //创建web3
    createWeb3Js() {
      this.web3js = new Web3(
        Web3.givenProvider || "https://data-seed-prebsc-1-s1.binance.org:8545"
      );
    },
    //状态判断
    checkIsConnectMetamask() {
      //判断网络是否正确
      //判断是否安装了 metamask
      let newAccount = null;
      if (ethereum && ethereum.isMetaMask) {
        //判断网络是否正确
        if (ethereum.networkVersion == 97) {
          //判断是否有地址
          if (ethereum.selectedAddress) {
            newAccount = ethereum.selectedAddress;
          }
        }
      }
      this.account = newAccount;
    }
  },
  created() {
    this.createWeb3Js();
  },
  mounted() {
    //检查是否连接 metamask
    this.checkIsConnectMetamask();
    let that = this;
    setTimeout(function() {
      that.checkIsConnectMetamask();
    }, 1000);
    //判断是否安装 metamask
    if (ethereum && ethereum.isMetaMask) {
      //订阅账号修改机制
      ethereum.on("accountsChanged", this.checkIsConnectMetamask);
      //订阅切换网络
      ethereum.on("networkChanged", this.checkIsConnectMetamask);
    }
    //创建Web3
    this.createWeb3Js();
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
ul {
  margin-block-end: 0em;
}
.waves {
}

.wave {
  position: fixed;
  pointer-events: none;
}
@keyframes wave {
  to {
    transform: scale(1);
    opacity: 0;
  }
}
.wave-item {
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 100%;
}
.wave-item animation {
  name: wave;
  fill-mode: forwards;
  timing-function: ease-out;
}

.bubble {
  width: 200px;
  height: 200px;
  margin: 94px auto 50px auto;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.4);
  position: relative;
}
.bubble:before {
  /* 在泡沫的左上角加上白色的亮点，形成光斑效果 */

  content: "";
  display: block;
  position: absolute;
  width: 50px;
  height: 50px;
  top: 25px;
  left: 25px;
  border-radius: 75px 25px;
  box-shadow: inset 10px 10px 50px rgba(255, 255, 255, 0.6);
}
.bubble:after {
  /* 使用:after伪元素构造泡沫内壁，形成薄薄的泡沫膜 */
  content: "";
  display: block;
  position: absolute;
  width: 190px;
  height: 190px;
  border-radius: 190px;
  left: 5px;
  top: 5px;
  box-shadow: inset 0px -5px 5px rgba(0, 0, 0, 0.05);
}

/* bubbles */
.bg-bubbles {
  /* position: absolute; */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin-block-start: 0em;
}
.bg-bubbles li {
  position: absolute;
  bottom: -160px;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.4);
  list-style: none;
  animation: square 15s infinite;
  transition-timing-function: linear;
}

.bg-bubbles li:nth-child(1) {
  left: 10%;
  border-radius: 60px;
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.4);
  position: relative;
  animation-delay: 2s;
  animation-duration: 7s;
}

.bg-bubbles li:nth-child(1):before {
  content: "";
  display: block;
  position: absolute;
  width: 20px;
  height: 20px;
  top: 20px;
  left: 20px;
  border-radius: 75px 25px;
  box-shadow: inset 10px 10px 50px rgba(255, 255, 255, 0.6);
}
.bg-bubbles li:nth-child(1):after {
  content: "";
  display: block;
  position: absolute;
  width: 90px;
  height: 90px;
  border-radius: 190px;
  left: 5px;
  top: 5px;
  box-shadow: inset 0px -5px 5px rgba(0, 0, 0, 0.05);
}

.bg-bubbles li:nth-child(2) {
  left: 20%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 7s;
  border-radius: 60px;
  box-shadow: 2px 2px 4px #888;
}

.bg-bubbles li:nth-child(2):before {
  content: "";
  display: block;
  position: absolute;
  width: 3px;
  height: 3px;
  top: 4px;
  left: 4px;
  border-radius: 15px 5px;
  box-shadow: inset 10px 10px 50px rgba(255, 255, 255, 0.6);
}
.bg-bubbles li:nth-child(2):after {
  content: "";
  display: block;
  position: absolute;
  width: 19px;
  height: 19px;
  border-radius: 190px;
  left: 5px;
  top: 5px;
  box-shadow: inset 0px -5px 5px rgba(0, 0, 0, 0.05);
}

.bg-bubbles li:nth-child(3) {
  left: 25%;
  width: 60px;
  height: 60px;
  animation-delay: 4s;
  border-radius: 60px;
}
.bg-bubbles li:nth-child(3):before {
  content: "";
  display: block;
  position: absolute;
  width: 12px;
  height: 12px;
  top: 12px;
  left: 9px;
  border-radius: 15px 5px;
  box-shadow: inset 10px 10px 50px rgba(255, 255, 255, 0.6);
}
.bg-bubbles li:nth-child(3):after {
  content: "";
  display: block;
  position: absolute;
  width: 53px;
  height: 52px;
  border-radius: 190px;
  left: 5px;
  top: 5px;
  box-shadow: inset 0px -5px 5px rgba(0, 0, 0, 0.05);
}

.bg-bubbles li:nth-child(4) {
  left: 40%;
  width: 40px;
  height: 40px;
  animation-duration: 8s;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 60px;
  box-shadow: 2px 2px 4px #888;
}
.bg-bubbles li:nth-child(4):before {
  content: "";
  display: block;
  position: absolute;
  width: 8px;
  height: 8px;
  top: 9px;
  left: 7px;
  border-radius: 15px 5px;
  box-shadow: inset 10px 10px 50px rgba(255, 255, 255, 0.6);
}
.bg-bubbles li:nth-child(4):after {
  content: "";
  display: block;
  position: absolute;
  width: 36px;
  height: 33px;
  border-radius: 190px;
  left: 2px;
  top: 5px;
  box-shadow: inset 0px -5px 5px rgba(0, 0, 0, 0.05);
}
.bg-bubbles li:nth-child(5) {
  left: 40%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 7s;
  border-radius: 60px;
  box-shadow: 2px 2px 4px #888;
}
.bg-bubbles li:nth-child(5):before {
  content: "";
  display: block;
  position: absolute;
  width: 3px;
  height: 3px;
  top: 4px;
  left: 4px;
  border-radius: 15px 5px;
  box-shadow: inset 10px 10px 50px rgba(255, 255, 255, 0.6);
}
.bg-bubbles li:nth-child(5):after {
  content: "";
  display: block;
  position: absolute;
  width: 19px;
  height: 19px;
  border-radius: 190px;
  left: 5px;
  top: 5px;
  box-shadow: inset 0px -5px 5px rgba(0, 0, 0, 0.05);
}
.bg-bubbles li:nth-child(6) {
  left: 80%;
  width: 70px;
  height: 70px;
  animation-delay: 3s;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 60px;
}
.bg-bubbles li:nth-child(6):before {
  content: "";
  display: block;
  position: absolute;
  width: 20px;
  height: 20px;
  top: 14px;
  left: 14px;
  border-radius: 15px 5px;
  box-shadow: inset 10px 10px 50px rgba(255, 255, 255, 0.6);
}
.bg-bubbles li:nth-child(6):after {
  content: "";
  display: block;
  position: absolute;
  width: 69px;
  height: 69px;
  border-radius: 90px;
  left: 3px;
  top: 5px;
  box-shadow: inset 0px -5px 5px rgba(0, 0, 0, 0.05);
}
.bg-bubbles li:nth-child(7) {
  left: 32%;
  width: 90px;
  height: 90px;
  animation-delay: 2s;
  border-radius: 60px;
}
.bg-bubbles li:nth-child(7):before {
  content: "";
  display: block;
  position: absolute;
  width: 20px;
  height: 20px;
  top: 25px;
  left: 25px;
  border-radius: 15px 5px;
  box-shadow: inset 10px 10px 50px rgba(255, 255, 255, 0.6);
}
.bg-bubbles li:nth-child(7):after {
  content: "";
  display: block;
  position: absolute;
  width: 89px;
  height: 89px;
  border-radius: 190px;
  left: 1px;
  top: 1px;
  box-shadow: inset 0px -5px 5px rgba(0, 0, 0, 0.05);
}
.bg-bubbles li:nth-child(8) {
  left: 55%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
  animation-duration: 15s;
  border-radius: 60px;
}
.bg-bubbles li:nth-child(8):before {
  content: "";
  display: block;
  position: absolute;
  width: 5px;
  height: 5px;
  top: 2px;
  left: 2px;
  border-radius: 15px 5px;
  box-shadow: inset 10px 10px 50px rgba(255, 255, 255, 0.6);
}
.bg-bubbles li:nth-child(8):after {
  content: "";
  display: block;
  position: absolute;
  width: 19px;
  height: 19px;
  border-radius: 190px;
  left: 1px;
  top: 1px;
  box-shadow: inset 0px -5px 5px rgba(0, 0, 0, 0.05);
}
.bg-bubbles li:nth-child(9) {
  left: 25%;
  width: 10px;
  height: 10px;
  animation-delay: 2s;
  animation-duration: 12s;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 60px;
}
.bg-bubbles li:nth-child(9):before {
  content: "";
  display: block;
  position: absolute;
  width: 2px;
  height: 2px;
  top: 5px;
  left: 5px;
  border-radius: 15px 5px;
  box-shadow: inset 10px 10px 50px rgba(255, 255, 255, 0.6);
}
.bg-bubbles li:nth-child(9):after {
  content: "";
  display: block;
  position: absolute;
  width: 9px;
  height: 9px;
  border-radius: 190px;
  left: 1px;
  top: 1px;
  box-shadow: inset 0px -5px 5px rgba(0, 0, 0, 0.05);
}
.bg-bubbles li:nth-child(10) {
  left: 85%;
  width: 10px;
  height: 10px;
  animation-delay: 5s;
  border-radius: 60px;
}
.bg-bubbles li:nth-child(10):before {
  content: "";
  display: block;
  position: absolute;
  width: 2px;
  height: 2px;
  top: 3px;
  left: 3px;
  border-radius: 15px 5px;
  box-shadow: inset 10px 10px 50px rgba(255, 255, 255, 0.6);
}
.bg-bubbles li:nth-child(10):after {
  content: "";
  display: block;
  position: absolute;
  width: 9px;
  height: 9px;
  left: 5px;
  top: 5px;
  box-shadow: inset 0px -5px 5px rgba(0, 0, 0, 0.05);
}

/* // 自定义 square 动画； */
@keyframes square {
  0% {
    opacity: 0.5;
    transform: translateY(0px) rotate(45deg);
  }
  25% {
    opacity: 0.75;
    transform: translateY(-400px) rotate(90deg);
  }
  50% {
    opacity: 1;
    transform: translateY(-600px) rotate(135deg);
  }
  100% {
    opacity: 0;
    transform: translateY(-1000px) rotate(180deg);
  }
}
.container {
  width: 80%;
  margin: auto;
}

.homewrapper {
  margin-top: 128px;
  color: #fff;
}
.homeFirst {
  height: 178px;
  line-height: 220px;
  color: #29058d;
}
.homeinner {
  display: inline-flex;
  width: 100%;
}
.homeinner .first_left {
  flex: 1;
  font-size: 80px;
  font-weight: bold;
  text-align: left;
  position: relative;
  left: -63px;
  width: 138px;
  margin-top: 2%;
  height: 138px;
  padding-left: 65px;
  line-height: 135px;
}
.homeinner .first_right {
  flex: 1;
  font-size: 20px;
  line-height: 30px;
  text-align: left;
  padding-top: 3%;
}
.homeinner .first_right .bold {
  font-weight: bold;
  font-size: 24px;
}
.homeSecond {
  /* padding: 50px 0px; */
  z-index: 5;
}
.homeSecond .show {
  margin-top: 30px;
  padding-bottom: 100px;
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
.homeSecond .topnav-show li {
  display: inline-flex;
  width: 100%;
}
.homeSecond .topnav-show li .left_sharecard {
  flex: 3;
  margin-right: 17px;
  overflow: hidden;
}
.homeSecond .topnav-show li .left_sharecard img {
  position: relative;
  width: 100%;
  transition: all 2s ease;
}
.homeSecond .topnav-show li .left_sharecard img:hover {
  transform: scale(1.1, 1.1);
}
.homeSecond .topnav-show li .right_sharecard {
  position: relative;
  z-index: 5;
  flex: 2;
  text-align: left;
  margin-right: 10%;
  max-width: 550px;
}
.homeSecond .topnav-show li .right_sharecard .title {
  font-size: 60px;
  font-weight: bold;
  max-width: 360px;
  line-height: 90px;
  padding-left: 40px;
  /* padding-top: 10px; */
}
.homeSecond .topnav-show li .right_sharecard .chaim {
  font-size: 20px;
  line-height: 30px;
  margin-top: 60px;
  padding-left: 40px;
}
.homeSecond .topnav-show li .right_sharecard .linkto {
  margin-top: 30px;
  padding-left: 40px;
}
.homeSecond .topnav-show li .right_sharecard .linkto a {
  color: #21f5ff;
  /* cursor: not-allowed; */
}
.homeSecond .topnav-show li .right_sharecard .share_adit {
  padding-left: 40px;
  margin-top: 30px;
}
.homeSecond .topnav-show li .right_sharecard .share_adit >>> .el-select {
  flex: 3;
  outline: none;
}
.homeSecond
  .topnav-show
  li
  .right_sharecard
  .share_adit
  >>> .el-input--suffix
  .el-input__inner {
  flex: 3;
  height: 66px;
  line-height: 66px;
  border-radius: 0px;
  background-color: rgb(255 255 255 / 0%);
  font-size: 19px;
}
.homeSecond .topnav-show li .right_sharecard .share_adit p {
  margin-top: 43px;
  display: inline-flex;
  width: 90%;
}
.homeSecond .topnav-show li .right_sharecard .share_adit p span {
  flex: 2;
  font-weight: bold;
}
.homeSecond .topnav-show li .right_sharecard .share_adit p span:first-child {
  font-size: 30px;
}
.homeSecond .topnav-show li .right_sharecard .share_adit p .pricebnb {
  flex: 3;
  line-height: 46px;
  font-size: 40px;
}
.homeSecond .topnav-show li .right_sharecard .share_adit p .quality {
  flex: 3;
  position: relative;
  margin-right: 4px;
}
.homeSecond
  .topnav-show
  li
  .right_sharecard
  .share_adit
  p
  .quality
  .decrease_btn {
  width: 42px;
  height: 42px;
  border-radius: 30px;
  position: absolute;
  top: 14px;
  left: 10px;
  background-color: rgb(255 255 255 / 0%);
  border: 1px solid #ffffff;
}

.homeSecond
  .topnav-show
  li
  .right_sharecard
  .share_adit
  p
  .quality
  .increase_btn {
  width: 42px;
  height: 42px;
  border-radius: 30px;
  border: none;
  background: #fff;
  position: absolute;
  top: 15px;
  right: 4px;
}

.homeSecond .topnav-show li .right_sharecard.share_adit p span:first-child {
  flex: 2;
}

.homeSecond .topnav-show li .right_sharecard .share_adit p input {
  flex: 3;
  height: 66px;
  line-height: 66px;
  background-color: rgb(255 255 255 / 0%);
  color: #fff;
  font-size: 18px;
  outline: none;
  text-indent: 10px;
  width: 100%;
  text-align: center;
  border: 1px solid #c4c4c4;
}
.homeSecond .topnav-show li .right_sharecard .buybtn {
  color: #370ab4;
  border-radius: 15px;
  height: 69px;
  width: 178px;
  border: none;
  font-size: 19px;
  margin-top: 53px;
  margin-left: 40px;
  background: #21f5ff;
  vertical-align: middle;
}
.homeSecond .topnav-show li .right_sharecard .buybtn span {
  vertical-align: middle;
}
@media screen and (max-width: 1440px) {
}
@media screen and (max-width: 1200px) {
}
@media screen and (max-width: 780px) {
  .container {
    width: 90%;
  }
  .homeinner .first_right {
    flex: 2;
  }
  .homeinner .first_left {
    font-size: 60px;
    width: 70px;
    height: 70px;
  }
  .homeSecond .topnav-tab li {
    padding: 20px;
  }
  .homeSecond .topnav-show li {
    display: inline-block;
  }
  .homeSecond .topnav-show li .left_sharecard {
    margin: 0px 5%;
    min-height: 200px;
  }
  .homeSecond .topnav-show li .right_sharecard .title {
    font-size: 30px;
    max-width: inherit;
    height: 100px;
    margin-top: 40px;
  }
  .homeSecond .topnav-show li .right_sharecard {
    max-width: inherit;
    margin-right: 0%;
  }
  .homeSecond .topnav-show li .right_sharecard .chaim,
  .homeSecond .topnav-show li .right_sharecard .share_adit p,
  .homeSecond .topnav-show li .right_sharecard .buybtn {
    margin-top: 30px;
  }
}
@media screen and (max-width: 540px) {
  .homeSecond
    .topnav-show
    li
    .right_sharecard
    .share_adit
    >>> .el-input--suffix
    .el-input__inner {
    height: 48px;
    line-height: 48px;
  }
  .homeSecond .topnav-show li .right_sharecard .share_adit p .pricebnb,
  .homeSecond .topnav-show li .right_sharecard .share_adit p span:first-child {
    font-size: 20px;
    line-height: 46px;
  }
  .homeSecond
    .topnav-show
    li
    .right_sharecard
    .share_adit
    >>> .el-input--suffix
    .el-input__inner {
    height: 48px;
    line-height: 48px;
  }
  .homeSecond .topnav-show li .right_sharecard .title {
    height: 60px;
  }
  .homeSecond .topnav-show li .right_sharecard .chaim,
  .homeSecond .topnav-show li .right_sharecard .share_adit p,
  .homeSecond .topnav-show li .right_sharecard .buybtn {
    margin-top: 10px;
  }
  .homeinner .first_right .bold {
    font-size: 18px;
  }
  .homewrapper {
    margin-top: 68px;
  }
  .homeinner {
    display: inline-block;
  }
  .homeinner .first_left {
    font-size: 38px;
    line-height: 70px;
  }
  .homeinner .first_right {
    line-height: 24px;
    padding-top: 0px;
    font-size: 18px;
  }
  .homeSecond .topnav-tab li .tab {
    font-size: 15px;
  }
  .homeSecond {
    padding: 10px 0px;
  }
  .homeSecond .topnav-show li .right_sharecard .share_adit p .pricebnb {
    font-size: 20px;
  }
  .homeSecond .topnav-show li .right_sharecard .buybtn {
    height: 58px;
    width: 158px;
  }
  .homeSecond .topnav-show li .right_sharecard .share_adit p input {
    height: 44px;
    line-height: 44px;
  }
  .homeSecond
    .topnav-show
    li
    .right_sharecard
    .share_adit
    p
    .quality
    .decrease_btn {
    width: 35px;
    height: 35px;
    top: 6px;
    left: 6px;
  }
  .homeSecond
    .topnav-show
    li
    .right_sharecard
    .share_adit
    p
    .quality
    .increase_btn {
    width: 35px;
    height: 35px;
    top: 6px;
    right: 2px;
  }
}
@media screen and (max-width: 320px) {
}
.rippless .content {
  position: relative;
  z-index: 10;
}
</style>
