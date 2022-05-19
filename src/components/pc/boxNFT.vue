<template>
  <div class="homewrapper" :style="sharecardBg">
    <div class="homeFirst" :style="blueBg">
      <ul class="bg-bubbles">
        <li v-for="i in 10" :key="i"></li>
      </ul>
      <div class="container">
        <div class="homeinner">
          <div
            class="first_left wow animate__animated animate__lightSpeedInLeft"
            :style="sharecardTitleBg"
          >MY NFT</div>
          <div
            class="first_right wow animate__animated animate__lightSpeedInRight"
          >To synthesize Treasure Box, you need to collect five NFTs: Captain, Crew, Oxygen, Water, and Food;</div>
        </div>
      </div>
    </div>
    <div class="homeSecond rippless">
      <div class="content">
        <div class="show">
          <!-- <img src="@/assets/video/boxopen2.gif" class="elefive" v-show="showFiveEle" /> -->
          <ul class="topnav-show">
            <div class="mycard cardele">
              <p class="title wow animate__animated animate__flipInX">My Elements</p>
              <div class="presentbox wow animate__animated animate__zoomInUp">
                <div class="listbox">
                  <div class="elebox">
                    <img src="@/assets/ele1.png" alt />
                    <span class="num">1</span>
                    <span class="elename">Name</span>
                  </div>
                  <div class="elebox">
                    <img src="@/assets/ele2.png" alt />
                    <span class="num">1</span>
                    <span class="elename">Name</span>
                  </div>
                  <div class="elebox">
                    <img src="@/assets/ele3.png" alt />
                    <span class="num">3</span>
                    <span class="elename">Name</span>
                  </div>
                  <div class="elebox">
                    <img src="@/assets/ele4.png" alt />
                    <span class="num">15</span>
                    <span class="elename">Name</span>
                  </div>
                  <div class="elebox">
                    <img src="@/assets/ele5.png" alt />
                    <span class="num">1</span>
                    <span class="elename">Name</span>
                  </div>
                </div>
              </div>
            </div>
          </ul>
          <div class="myactive">
            <div class="title">
              <span  @click="cur=0" :class="{active:cur==0}">Purchase History</span>
              <span  @click="cur=1" :class="{active:cur==1}">Exchange</span>
              <span  @click="cur=2" :class="{active:cur==2}">Unexchange</span>
            </div>
            <div class="datalist" v-show="cur==0">
              <p v-for="i in 5">
                <span>Event Description Event DescriptionEvent DescriptionEvent Description</span>
                <span>Paid</span>
                <span>2020-08-14</span>
              </p>
            </div>
            <div class="datalist" v-show="cur==1">
              <p v-for="i in 5">
                <span>Event Description Event DescriptionEvent DescriptionEvent Description</span>
                <span>Paid</span>
                <span>2020-08-14</span>
              </p>
            </div>
            <div class="datalist" v-show="cur==2">
              <p v-for="i in 5">
                <span>Event Description Event DescriptionEvent DescriptionEvent Description</span>
                <span>Paid</span>
                <span>2020-08-14</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cookie from "js-cookie";
import Swiper from "swiper";
import "../../../static/jquery.ripples.js";

export default {
  name: "home",
  data() {
    return {
      cur: 0,
      // 盲盒打开
      showBoxGifFlag: true,
      // 盲盒打开时间
      opentime: "Open",
      // 5元素创建
      showFiveEle: false,
      sharecardBg: {
        backgroundImage: "url(" + require("@/assets/sharecardbg.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      },
      blueBg: {
        backgroundImage: "url(" + require("@/assets/blueBg.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right center"
      },
      sharecardTitleBg: {
        backgroundImage: "url(" + require("@/assets/Frame.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain"
      },
      harvestBg: {
        backgroundImage: "url(" + require("@/assets/Rectangle23.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain"
      },
      bindboxBg: {
        backgroundImage: "url(" + require("@/assets/bindBoxBg.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain"
      }
    };
  },

  methods: {
    // 集齐5张卡片
    eleMix() {
      $(".elefive").css("display", "inline");
      $(".elefive").css("zIndex", "1");
      this.showFiveEle = !this.showFiveEle;
      setTimeout(() => {
        $(".elefive").css("display", "none");
        $(".elefive").css("zIndex", "0");
        this.showFiveEle = !this.showFiveEle;
      }, 6000);
    },
    // 打开宝盒
    openGifBtn() {
      this.showBoxGifFlag = !this.showBoxGifFlag;
      setTimeout(() => {
        $(".boxgif").css("display", "none");
        this.showBoxGifFlag = !this.showBoxGifFlag;
      }, 2000);
      $(".boxgif").css("display", "inline-block");
    }
  },
  created() {},
  mounted() {
    $(document).ready(function() {
      $(".rippless").ripples({
        resolution: 512,
        dropRadius: 20, //px
        perturbance: 0.004
      });
    });
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
li {
  display: inline-block;
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
/* bubbles */
.bg-bubbles {
  position: absolute;
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
  height: 220px;
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
  padding-top: 4%;
}
.homeSecond {
  padding: 50px 0px;
}
.homeSecond .show {
  margin-top: 30px;
  padding: 0px 10%;
}
.homeSecond .show .elefive {
  position: absolute;
  z-index: 1;
  top: 70px;
}

.homeSecond .show ul .harvest {
  display: inline-flex;
  width: 100%;
  height: 292px;
}
.homeSecond .show ul .harvest .bindbox {
  font-size: 20px;
}
.homeSecond .show ul .harvest .left {
  flex: 1;
  text-align: left;
  padding: 48px 32px;
  max-width: 200px;
}
.homeSecond .show ul .harvest .left .num {
  font-size: 30px;
  margin-top: 15px;
}

.homeSecond .show ul .harvest .center {
  flex: 1;
  text-align: left;
  padding: 48px 0px;
}
.homeSecond .show ul .harvest .center .raffle_btn {
  text-align: center;
}
.homeSecond .show ul .harvest .center .num {
  font-size: 30px;
  margin-top: 15px;
}
.homeSecond .show ul .harvest .center button {
  background: #52f5ff;
  border-radius: 10px;
  width: 109px;
  height: 43px;
  border: none;
  outline: none;
  font-size: 20px;
  margin-top: 50px;
}
.homeSecond .show ul .harvest .right {
  flex: 1;
  text-align: left;
  padding: 48px 32px;
}
.homeSecond .show ul .harvest .right .num {
  font-size: 30px;
  margin-top: 15px;
}
.homeSecond .show ul .mycard {
  width: 100%;
}
.homeSecond .show ul .mycard .title {
  text-align: left;
  font-size: 30px;
}
.homeSecond .show ul .mycard .presentbox {
  position: relative;
  height: 1030px;
  text-align: left;
}
.homeSecond .show ul .mycard .presentbox .listbox {
  text-align: center;
}

.homeSecond .show ul .mycard .boxnft {
  border-radius: 15px;
  padding: 0px 10%;
}
.homeSecond .show ul .mycard .presentbox .elebox {
  position: relative;
  width: 30%;
  margin: 50px 20px;
  display: inline-block;
}
.homeSecond .show ul .mycard .presentbox .elebox img {
  width: 100%;
}
.homeSecond .show ul .mycard .presentbox .elebox .num {
  position: absolute;
  top: 6%;
  right: 4px;
  width: 22%;
  display: inline-block;
  border-radius: 20px;
  color: #0e0035;
  font-size: 30px;
}
.homeSecond .show ul .mycard .presentbox .elebox .elename {
  display: inline-block;
  position: absolute;
  bottom: 45px;
  font-size: 30px;
  width: 100%;
  left: 0;
}
.homeSecond .show ul .mycard .presentbox .boxntf {
  display: inline-flex;
  width: 100%;
  margin-top: 60px;
}

.homeSecond .show ul .mycard .presentbox .boxntf img:nth-child(2) {
  margin: 0px 10%;
}
.homeSecond .show ul .mycard .presentbox .createnft {
  text-align: center;
  margin: 40px 0px 20px 0px;
  position: relative;
  z-index: 10;
}
.homeSecond .show ul .mycard .presentbox .createnft .content {
  position: absolute;
  top: 20%;
  width: 100%;
  font-size: 24px;
}

.homeSecond .show ul .mycard .boxHeight {
  height: 795px;
}
.homeSecond .show ul .mycard .presentbox .element {
  display: inline-flex;
  width: 100%;
}
.homeSecond .show ul .mycard .presentbox .element div {
  flex: 1;
}
.homeSecond .show ul .mycard .presentbox .element1 {
  max-width: 70%;
}
.homeSecond .show ul .mycard .presentbox .element1 div {
  margin: 0px 10px;
}
.homeSecond .show ul .mycard .presentbox .element2 {
  max-width: 90%;
  padding: 30px 5;
}
.homeSecond .show ul .mycard .presentbox .element2 div {
  margin: 0px 10px;
}

.homeSecond .show ul .mycard .presentbox .boxnum {
  position: absolute;
  top: 23%;
  right: 29%;
  background-color: #52f5ff;
  border-radius: 40px;
  width: 68px;
  height: 68px;
  text-align: center;
  line-height: 68px;
  color: #dc52ff;
  font-size: 30px;
}

.homeSecond .show ul .mycard .presentbox .ele1 {
  height: 118px;
}
.homeSecond .show ul .mycard .presentbox .ele2 {
  height: 118px;
}
.homeSecond .show ul .mycard .presentbox .ele3 {
  height: 285px;
}
.homeSecond .show ul .mycard .presentbox .ele4 {
  height: 285px;
}
.homeSecond .show ul .mycard .presentbox .ele5 {
  height: 285px;
}
.homeSecond .show .topnav-show {
  display: inline-flex;
  width: 100%;
}

.homeSecond .show .myactive {
  margin-top: 300px;
  display: inline-block;
}
.homeSecond .show .myactive .title {
  font-size: 30px;
  width: 100%;
  text-align: left;
}
.homeSecond .show .myactive .title span{
  opacity: 0.8;
  margin-right: 50px;
  cursor: pointer;
}
.homeSecond .show .myactive .title .active{
  opacity: 1;
}
.homeSecond .show .myactive .datalist {
  background: rgba(255, 255, 255, 0.2);
  clear: both;
  padding: 50px;
  border-radius: 46px;
  margin-top: 50px;
}
.homeSecond .show .myactive .datalist p {
  display: inline-flex;
  width: 100%;
  margin: 20px 0px;
}
.homeSecond .show .myactive .datalist p span:nth-child(1) {
  flex: 5;
  text-align: left;
}
.homeSecond .show .myactive .datalist p span:nth-child(3) {
  flex: 1;
  text-align: right;
}
.homeSecond .show .myactive .datalist p span:nth-child(2) {
  flex: 1;
  text-align: left;
}
.homeSecond .show .topnav-show .cardnft {
  flex: 3;
}
@media screen and (max-width: 1700px) {
  .homeSecond .show .elefive {
    width: 80%;
  }
  .homeSecond .show ul .mycard .presentbox .elebox{
    width: 29%;
    margin: 50px 16px;
  }
  
}

@media screen and (max-width: 1400px) {
  .homeSecond .show ul .mycard .presentbox .boxnum {
    top: 16%;
    right: 35%;
    width: 48px;
    height: 48px;
    line-height: 48px;
    font-size: 20px;
  }
}
@media screen and (max-width: 1200px) {
}
@media screen and (max-width: 1024px) {
  .homeSecond .show {
    padding: 0px 5%;
  }
  .homeSecond .show ul .harvest .center button {
    margin-top: 10px;
  }
  .homeSecond .show ul .harvest .left {
    padding: 25px;
  }
  .homeSecond .show ul .harvest .center {
    padding: 25px 0px;
  }
  .homeSecond .show ul .harvest .right {
    padding: 25px;
  }

  .homeSecond .show {
    margin-top: 0px;
  }

  .homeSecond .show ul .mycard .presentbox .ele1 {
    height: 90px;
  }
  .homeSecond .show ul .mycard .presentbox .ele2 {
    height: 90px;
  }
  .homeSecond .show ul .mycard .presentbox .ele3 {
    height: 90px;
  }
  .homeSecond .show ul .mycard .presentbox .ele4 {
    height: 90px;
  }
  .homeSecond .show ul .mycard .presentbox .ele5 {
    height: 90px;
  }
  .homeSecond .show ul .mycard .presentbox {
    height: inherit;
    flex-wrap: wrap;
  }
  .homeSecond .show ul .mycard .presentbox .elebox {
    display: inline-block;
  }
  .homeSecond .show .topnav-show {
    display: inline-block;
  }
  .homeSecond .show ul .mycard .presentbox .elebox {
    margin: 0px 20px;
  }
  .homeSecond .show ul .mycard .presentbox .elebox .elename {
    bottom: 27px;
    font-size: 22px;
  }
  .homeSecond .show ul .mycard .presentbox .elebox .num {
    top: 4%;
    right: 1px;
  }
}
@media screen and (max-width: 780px) {
  .container {
    width: 90%;
  }

  .homeSecond .show ul .mycard .presentbox .ele1 {
    height: 50px;
  }
  .homeSecond .show ul .mycard .presentbox .ele2 {
    height: 50px;
  }
  .homeSecond .show ul .mycard .presentbox .ele3 {
    height: 50px;
  }
  .homeSecond .show ul .mycard .presentbox .ele4 {
    height: 50px;
  }
  .homeSecond .show ul .mycard .presentbox .ele5 {
    height: 50px;
  }
  .homeinner .first_left {
    font-size: 50px;
    text-align: left;
  }
  .homeinner .first_right {
    flex: 2;
  }
  .homeSecond .show ul .harvest .left .num,
  .homeSecond .show ul .harvest .center .num,
  .homeSecond .show ul .harvest .right .num {
    font-size: 20px;
  }
  .homeSecond .show ul .harvest .bindbox {
    line-height: 20px;
  }
  .homeSecond .show ul .harvest .left,
  .homeSecond .show ul .harvest .right {
    padding: 15px;
  }
  .homeSecond .show ul .harvest .center {
    padding: 15px 0px;
  }
  .homeSecond .show ul .harvest {
    height: 200px;
  }
  .homeSecond .show ul .mycard .presentbox {
    height: 600px;
  }
  .homeSecond .show ul .mycard .presentbox .elebox .num {
    font-size: 18px;
  }
  .homeSecond .show ul .mycard .presentbox .elebox .elename {
    bottom: 21px;
    font-size: 19px;
  }
}
@media screen and (max-width: 540px) {
  .homeSecond .show ul .mycard .presentbox .boxntf {
    margin-top: 10px;
  }

  .presentbox .createnft img {
    width: 100%;
  }
  .homeSecond .show ul .mycard .presentbox .elebox span {
    right: 0px;
  }
  .homeSecond .show ul .mycard .title {
    margin: 0px;
    font-size: 24px;
  }
  .homeSecond {
    padding: 0px;
  }
  .homeinner {
    display: inline-block;
  }
  .container {
    width: 90%;
  }
  .homewrapper {
    margin-top: 68px;
  }
  .homeinner .first_left {
    font-size: 36px;
    line-height: 36px;
    margin-top: 20px;
    height: 60px;
  }
  .homeinner .first_right {
    line-height: 24px;
    font-size: 16px;
  }
  .homeSecond .show {
    padding: 0px 5%;
  }
  .homeSecond .show ul .harvest {
    display: inline-block;
  }

  .homeSecond .show ul .harvest .center {
    padding: 0px 15px;
  }
  .homeSecond .show ul .harvest .center .raffle_btn {
    text-align: left;
  }

  .homeSecond .show ul .mycard .presentbox {
    height: inherit;
  }

  .homeSecond .show ul .mycard .presentbox .element1 {
    max-width: 80%;
  }
  .homeSecond .show ul .mycard .presentbox .element2 {
    max-width: 100%;
  }
  .homeSecond .show ul .mycard .presentbox .element2 div {
    padding: 30px 40px;
  }
  .homeSecond .show ul .harvest .left .num,
  .homeSecond .show ul .harvest .center .num,
  .homeSecond .show ul .harvest .right .num {
    margin-top: 0px;
  }
  .homeSecond .show ul .harvest .left .num,
  .homeSecond .show ul .harvest .center .num,
  .homeSecond .show ul .harvest .right .num,
  .homeSecond .show ul .harvest .bindbox {
    font-size: 16px;
  }
  .homeSecond .show ul .harvest .left,
  .homeSecond .show ul .harvest .right {
    padding: 10px 15px 0px 15px;
  }
  .homeSecond .show ul .mycard .presentbox .elebox {
    width: 37%;
  }
  .homeSecond .show ul .mycard .presentbox .elebox .num {
    font-size: 12px;
  }
  .homeSecond .show ul .mycard .presentbox .elebox .elename {
    font-size: 14px;
    bottom: 15px;
  }
  .homeSecond .show .myactive {
    margin-top: 0px;
  }
  .homeSecond .show .myactive .datalist {
    padding: 20px;
    border-radius: 16px;
  }
  .homeSecond .show .myactive .datalist p {
    font-size: 14px;
  }
}
@media screen and (max-width: 320px) {
  .homeSecond .show ul .mycard .presentbox .element2 div {
    padding: 30px;
  }
  .homeSecond .show ul .mycard .presentbox {
    padding: 10px;
  }

  .homeinner .first_right {
    font-size: 16px;
    line-height: 20px;
  }
  .homeSecond .show ul .mycard .presentbox .elebox {
    width: 86%;
  }
  .homeSecond .show ul .mycard .presentbox .elebox .num {
    font-size: 20px;
  }
  .homeSecond .show ul .mycard .presentbox .elebox .elename {
    font-size: 18px;
    bottom: 25px;
  }
  .homeSecond .show .myactive .title{
    font-size: 24px;
  }
  .homeSecond .show .myactive .datalist p{
    margin: 8px 0px;
  }
}
.rippless .content {
  position: relative;
  z-index: 10;
}
</style>
