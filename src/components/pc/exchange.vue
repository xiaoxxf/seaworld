<template>
  <div class="homewrapper" :style="sharecardBg">
    <div class="homeFirst rippless" :style="blueBg">
      <div class="content">
        <div class="container">
          <div class="homeinner">
            <div
              class="first_left wow animate__animated animate__lightSpeedInLeft"
              :style="sharecardTitleBg"
            >Exchange</div>
          </div>
        </div>
      </div>
    </div>
    <div class="homeSecond rippless">
      <div class="content">
        <ul class="topnav-tab">
          <li @click="changeCur(0)" :class="{active:cur==0}">
            <span class="tab">Swap</span>
          </li>
          <li @click="changeCur(1)" :class="{active:cur==1}">
            <span class="tab">Liquidity</span>
          </li>
        </ul>
        <div class="show">
          <!-- swap交换 -->
          <ul class="topnav-show" v-show="cur==0">
            <Swap></Swap>
          </ul>
          <!-- liquidity流通性 -->
          <ul class="topnav-show" v-show="cur==1">
            <Liquidity></Liquidity>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Liquidity from "./Liquidity";
import Swap from "./Swap";
import Config from '@/config.js';
import $ from "jquery";
import "../../../static/jquery.ripples.js";

export default {
  name: "Exchange",
  data() {
    return {
      cur: 0,
      errmsg: "Enter the amount",
      value: "",
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
      }
    };
  },
  components: {
    Liquidity,
    Swap
  },

  methods: {
    //修改当前选中
    async changeCur(number) {
      this.cur = number;
    },
  },
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
.homewrapper {
  color: #fff;
}
.homeFirst {
  height: 220px;
  line-height: 220px;
  color: #29058d;
  margin-top: 128px;
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
  padding-top: 5%;
}
.homeinner .first_right .bold {
  font-weight: bold;
  font-size: 24px;
}
.homeSecond {
  padding: 50px 0px;
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
  padding: 60px;
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
@media screen and (max-width: 1450px){
  .homeinner .first_left{
    font-size: 60px;
  }
}
@media screen and (max-width: 768px){
  .homeinner .first_left{
    font-size: 39px;
  }
  .homeSecond{
    padding: 0px;
  }
}
@media screen and (max-width: 540px) {
  .homeFirst{
    margin-top: 68px;
  }
  .homeSecond .topnav-tab li{
    padding: 20px;
  }
  .homeSecond .topnav-tab li .tab{
    font-size: 24px;
  }
  .topnav-show{
    margin: 0px 20px;
  }
}
</style>
