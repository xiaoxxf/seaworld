<template>
  <div class="homewrapper" :style="sharecardBg">
    <ul class="bg-bubbles">
      <li v-for="i in 10" :key="i"></li>
    </ul>
    <div class="homeFirst rippless" :style="firstBg">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="(item,index) in bannerList" :key="index">
          <div class="container">
            <div class="flexbox">
              <div class="left_egg" :style="item.imgBg">
                <!-- <img :src="item.img" alt /> -->
                <!-- <img src="@/assets/ele1.png" alt /> -->
              </div>
              <div class="right_dsc">
                <p>{{item.egg }}</p>
                <p>{{item.descTitle }}</p>
                <p>{{item.descContent }}</p>
                <p>{{item.skil }}</p>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="homeSecond rippless">
      <div class="content">
        <div class="container">
          <div class="show">
            <ul class="topnav-show">
              <li>
                <div class="left_sharecard">
                  <img src="@/assets/box.png" alt />
                </div>
                <div class="right_sharecard wow animate__animated animate__lightSpeedInRight">
                  <div class="share_adit">
                    <p>Blinbox</p>
                    <p>It is small and flexible. The mining efficiency of clownfish is relatively low because of the limit capacity.</p>
                    <p class="share_num">
                      <span>Number</span>
                      <!-- <input type="text" /> -->
                      <el-select v-model="value" placeholder="Number">
                        <el-option
                          v-for="item in options"
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
                              <path
                                d="M20 12H4"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                              />
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
                      <span class="pricebnb">1,000BNB</span>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import "../../../static/jquery.ripples.js";
// 3D旋转球体
import "../../../static/TweenMax.min.js";

//引入 web3 js
import Web3 from "web3";
import BigNumber from "bignumber.js";
import { ethers } from "ethers";
import Config from "@/config.js";

export default {
  name: "home",
  data() {
    return {
      options: [
        {
          value: "1",
          label: "FVFSGSEH"
        },
        {
          value: "2",
          label: "DVFSGSEH"
        }
      ],
      value: "",
      number: 1,
      firstBg: {
        backgroundImage:
          "url(" + require("@/assets/RectangleBindbox.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      },
      sharecardBg: {
        // backgroundImage: "url(" + require("@/assets/sharecardbg.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      },
      bindboxtitleBg: {
        backgroundImage: "url(" + require("@/assets/Frame.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain"
      },
      web3js: null,
      bannerList: [
        {
          index: 1,
          egg: "Egg1",
          descTitle: "Description",
          descContent:
            "It is small and flexible. The mining efficiency of clownfish is relatively low because of the limit capacity.  There are 5000 clownfish, of which mining revenue accounts for 25% of the total mining revenue.",
          skil: "Skill",
          imgBg: {
            backgroundImage: "url(" + require("@/assets/egg1.png") + ")",
            backgroundRepeat: "no-repeat"
          }
        },
        {
          index: 2,
          egg: "Egg2",
          descTitle: "Description",
          descContent:
            "It is small and flexible. The mining efficiency of clownfish is relatively low because of the limit capacity.  There are 5000 clownfish, of which mining revenue accounts for 25% of the total mining revenue.",
          skil: "Skill",
          imgBg: {
            backgroundImage: "url(" + require("@/assets/egg2.png") + ")",
            backgroundRepeat: "no-repeat"
          }
        },
        {
          index: 3,
          egg: "Egg3",
          descTitle: "Description",
          descContent:
            "It is small and flexible. The mining efficiency of clownfish is relatively low because of the limit capacity.  There are 5000 clownfish, of which mining revenue accounts for 25% of the total mining revenue.",
          skil: "Skill",
          imgBg: {
            backgroundImage: "url(" + require("@/assets/egg3.png") + ")",
            backgroundRepeat: "no-repeat"
          }
        },
        {
          index: 4,
          egg: "Egg4",
          descTitle: "Description",
          descContent:
            "It is small and flexible. The mining efficiency of clownfish is relatively low because of the limit capacity.  There are 5000 clownfish, of which mining revenue accounts for 25% of the total mining revenue.",
          skil: "Skill",
          imgBg: {
            backgroundImage: "url(" + require("@/assets/egg4.png") + ")",
            backgroundRepeat: "no-repeat"
          }
        },
        {
          index: 5,
          egg: "Egg5",
          descTitle: "Description",
          descContent:
            "It is small and flexible. The mining efficiency of clownfish is relatively low because of the limit capacity.  There are 5000 clownfish, of which mining revenue accounts for 25% of the total mining revenue.",
          skil: "Skill",
          imgBg: {
            backgroundImage: "url(" + require("@/assets/egg5.png") + ")",
            backgroundRepeat: "no-repeat"
          }
        }
      ]
    };
  },

  methods: {
    //增加数量
    increaseNumber() {
      this.number++;
    },
    //减少数量
    reduceNumber() {
      if (this.number > 1) {
        this.number--;
      }
    },
    //进行购买
    order() {
      //判断是否登录
      if (!this.$store.state.account) {
        alert("Please connect account.");
        return;
      }
      if (!this.value) {
        alert("Please select item");
        return;
      }

      let numberBig = new BigNumber(this.number);

      let sendNumber = numberBig
        .multipliedBy(1000)
        .multipliedBy(10 ** 18)
        .toFixed();
      //sendNumber = ethers.utils.formatEther(sendNumber)

      let params = {
        from: this.$store.state.account,
        //TODO 测试，将来需要修改
        to: "0x43D02036fFc36A8908AeE9B8b9e76872dCE5407b",
        value: sendNumber // 2441406250
      };
      this.web3js.eth.sendTransaction(params, function(error, result) {
        console.log(error, result);
      });
    },
    //创建web3
    createWeb3Js() {
      this.web3js = new Web3(Web3.givenProvider || Config.web3Provider);
    }
  },
  created() {},
  mounted() {
    $(document).ready(function() {
      // ripples
      $(".rippless").ripples({
        resolution: 512,
        dropRadius: 20, //px
        perturbance: 0.004
      });
    });
    //创建Web3
    this.createWeb3Js();
  },
  filters: {}
};
</script>

<style scoped>
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
  width: 75%;
  margin: auto;
}

.homewrapper {
  margin-top: 128px;
  color: #fff;
  background-color: #110436;
}

.homeFirst {
  background-size: cover;
  height: 996px;
}
.homeFirst .el-carousel__container {
  height: 996px;
}
.homeFirst .container {
  height: 100%;
}
.homeFirst .container .flexbox {
  height: 100%;
}
.homeFirst >>> .el-carousel,
.homeFirst >>> .el-carousel__container {
  height: 100%;
}
.homeFirst >>> .el-carousel__indicators {
  display: none;
}
.homeFirst .flexbox {
  display: inline-flex;
  width: 100%;
  padding-top: 50px;
}
.homeFirst .flexbox .left_egg {
  flex: 1;
}
.homeFirst .flexbox .right_dsc {
  flex: 1;
  text-align: left;
  padding-top: 120px;

}
.homeFirst .flexbox .right_dsc p {
  margin: 10px 0px;
}
.homeFirst .flexbox .right_dsc p:nth-child(1) {
  font-size: 30px;
}
.homeFirst .flexbox .right_dsc p:nth-child(2) {
  font-size: 30px;
  margin-top: 20px;
}
.homeFirst .flexbox .right_dsc p:nth-child(3) {
  font-size: 19px;
}
.homeFirst .flexbox .right_dsc p:nth-child(4) {
  font-size: 30px;
  margin-top: 60px;
}
.homeSecond {
  padding: 70px 0px;
}

.homeSecond .topnav-tab {
  display: inline-flex;
  width: 70%;
}

.homeSecond .topnav-tab li {
  cursor: pointer;
  padding: 48px 0px;
  display: inline-flex;
  width: 100%;
}

.homeSecond .topnav-tab li .tab {
  text-align: center;
  width: 100%;
  font-size: 30px;
}

.homeSecond .topnav-show li {
  display: inline-flex;
  width: 100%;
}

.homeSecond .topnav-show li .left_sharecard {
  flex: 1;
}
.homeSecond .topnav-show li .left_sharecard img {
  width: 100%;
}

.homeSecond .topnav-show li .left_sharecard p {
  font-size: 19px;
  margin-top: 45px;
  text-align: left;
}

.homeSecond .topnav-show li .left_sharecard .title {
  font-size: 80px;
  font-weight: bold;
  position: relative;
  left: -60px;
  padding-left: 50px;
}

.homeSecond .topnav-show li .right_sharecard {
  flex: 1;
  text-align: left;
  margin-left: 10%;
  max-width: 550px;
}

.homeSecond .topnav-show li .right_sharecard .share_adit p {
  display: inline-flex;
  width: 100%;
  margin: 12px 0px;
}
.homeSecond .topnav-show li .right_sharecard .share_adit p:first-child {
  font-size: 80px;
}
.homeSecond .topnav-show li .right_sharecard .share_adit .share_num {
  margin-top: 50px;
}
.homeSecond .topnav-show li .right_sharecard .share_adit p .num {
  flex: 2;
  font-size: 30px;
  line-height: 45px;
  font-weight: bold;
}

.homeSecond .topnav-show li .right_sharecard .share_adit p .price {
  flex: 3;
}

.homeSecond .topnav-show li .right_sharecard .share_adit p span {
  flex: 2;
}

.homeSecond .topnav-show li .right_sharecard .share_adit p span:first-child {
  font-size: 30px;
  font-weight: bold;
  min-width: 190px;
}

.homeSecond .topnav-show li .right_sharecard .share_adit p .pricebnb {
  flex: 3;
  line-height: 46px;
  font-size: 40px;
}

/* .homeSecond .topnav-show li .right_sharecard .share_adit p span:last-child {
  font-size: 40px;
  display: inline-flex;
} */
.homeSecond .topnav-show li .right_sharecard .share_adit p .quality {
  position: relative;
  flex: 3;
}

.homeSecond .topnav-show li .right_sharecard .share_adit p input {
  height: 54px;
  line-height: 54px;
  background-color: rgb(255 255 255 / 0%);
  border: 1px solid #c4c4c4;
  outline: none;
  text-indent: 10px;
  flex: 3;
  text-align: center;
  font-weight: bold;
  font-size: 22px;
  color: #fff;
  width: 98%;
}

.homeSecond .topnav-show li .right_sharecard .share_adit p .decrease_btn {
  width: 42px;
  height: 42px;
  border-radius: 30px;
  border: none;
  background: rgba(255, 255, 255, 0);
  position: absolute;
  top: 9px;
  left: 8px;
  border: 1px solid #ffffff;
}

.homeSecond .topnav-show li .right_sharecard .share_adit p .increase_btn {
  width: 42px;
  height: 42px;
  border-radius: 30px;
  border: none;
  background: #fff;
  position: absolute;
  top: 9px;
  right: 8px;
}

.homeSecond .topnav-show li .right_sharecard .buybtn {
  color: #370ab4;
  border-radius: 15px;
  height: 69px;
  line-height: 69px;
  width: 178px;
  border: none;
  font-size: 19px;
  margin-top: 53px;
  background-color: #21f5ff;
}

.homeSecond .topnav-show li .right_sharecard .el-select {
  flex: 3;
}

.homeSecond
  .topnav-show
  li
  .right_sharecard
  >>> .el-input--suffix
  .el-input__inner {
  height: 66px;
  background-color: rgb(255 255 255 / 0%);
  color: #fff;
  font-size: 19px;
}

@media screen and (max-width: 1200px) {
}

@media screen and (max-width: 1024px) {
}

@media screen and (max-width: 780px) {
  .container {
    width: 90%;
  }

  .homewrapper {
    margin-top: 68px;
  }

  .homeSecond .topnav-show li {
    display: inline-block;
  }

  .homeFirst {
    height: 400px;
  }

  .homeSecond .topnav-show li .left_sharecard p {
    margin-top: 0px;
  }

  .homeSecond .topnav-show li .right_sharecard .share_adit p input {
    width: 100%;
  }
}

@media screen and (max-width: 540px) {
  .homeFirst {
    height: 250px;
  }

  .homeSecond {
    padding: 0px;
  }

  .homeSecond .topnav-show li .left_sharecard .title {
    font-size: 40px;
  }

  .homeSecond .topnav-show li .left_sharecard {
    margin-right: 0px;
  }

  .homeSecond .topnav-show li .left_sharecard p {
    font-size: 16px;
  }

  .homeSecond .topnav-show li .right_sharecard .share_adit p .num {
    font-size: 18px;
  }

  .homeSecond
    .topnav-show
    li
    .right_sharecard
    >>> .el-input--suffix
    .el-input__inner {
    height: 48px;
  }

  .homeSecond .topnav-show li .right_sharecard .share_adit p {
    margin-top: 30px;
  }

  .homeSecond .topnav-show li .right_sharecard .buybtn {
    height: 52px;
    line-height: 52px;
    width: 150px;
    margin: 30px auto;
  }

  .homeSecond .topnav-show li .right_sharecard .share_adit p span:last-child {
    line-height: 45px;
    font-size: 18px;
  }
}

.rippless .content {
  position: relative;
  z-index: 10;
}
</style>
