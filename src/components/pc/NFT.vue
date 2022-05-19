<template>
  <div class="homewrapper" :style="sharecardBg" id="homewrapperid">
    <!-- <button @click="adoptpet()">pet</button> -->
    <ul class="bg-bubbles">
      <li v-for="i in 10" :key="i"></li>
    </ul>
    <div class="homeFirst" :style="blueBg">
      <div class="container">
        <div class="homeinner">
          <div
            class="first_left wow animate__animated animate__lightSpeedInLeft"
            :style="sharecardTitleBg"
          >NFT Mining</div>
          <div class="first_right wow animate__animated animate__lightSpeedInRight">
            <p>
              SeaWorld has three NFTs that can be combined with LP stake for permanent expedition mining：
              <strong>Humpback whales, Octopus, and Clownfish.</strong>
              Using them will greatly increase mining efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="homeSecond" >
      <div class="content">
        <ul class="topnav-tab">
          <li @click="cur=0" :class="{active:cur==0}">
            <span class="tab">Humpback whales</span>
          </li>
          <li @click="cur=1" :class="{active:cur==1}">
            <span class="tab">Octopus</span>
          </li>
          <li @click="cur=2" :class="{active:cur==2}">
            <span class="tab">Clownfish</span>
          </li>
        </ul>
        <div class="show">
          <Submarine v-for="(item, index) in list" :key="item.name" v-show="cur==index" :info="item"></Submarine>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cookie from "js-cookie";
import Swiper from "swiper";
import $ from "jquery";
import Submarine from '../module/nft/Submarine';
import "../../../static/jquery.ripples.js";

export default {
  name: "home",
  data() {
    return {
      cur: 0,
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
      list : [
        {
          name: 'Humpback whales',
          detail : 'This is the rarest NFT with a total issuance of 500. The combination of it and LP will increase mining revenue by 400%',
          linkPath : '/nftMining',
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
          price : 1000,
          whaleBg: {
            backgroundImage: "url(" + require("@/assets/Rectangle3nft.png") + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain"
          },
          image: require('@/assets/Rectangle3nft.png'),
        },
        {
          name: 'Octopus',
          detail : 'It can work anywhere in the ocean, issuing 2,000, and combining mining with LP will increase revenue by 300%',
          linkPath : '/nftMining',
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
          price : 500,
          whaleBg: {
            backgroundImage: "url(" + require("@/assets/Rectangle4nft.png") + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain"
          },
          image: require('@/assets/Rectangle4nft.png'),
        },
        {
          name: 'Clownfish',
          detail : 'It is a very flexible submersible, issued 5000, combined with LP mining will increase income by 200%',
          linkPath : '/nftMining',
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
          price : 200,
          whaleBg: {
            backgroundImage: "url(" + require("@/assets/Rectangle5nft.png") + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain"
          },
          image: require('@/assets/Rectangle5nft.png'),
        },
      ],
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
      clickedCount: 0 //统计点击次数
    };
  },
  components : {
    Submarine
  },

  methods: {},
  created() {
  },
  mounted() {
    $(document).ready(function() {
      $(".rippless").ripples({
        resolution: 512,
        dropRadius: 20, //px
        perturbance: 0.004
      });
    });
    this.urlId = this.$route.query.id;
    if (this.urlId == "1") {
      this.cur = 0;
    } else if (this.urlId == "2") {
      this.cur = 1;
    } else if (this.urlId == "3") {
      this.cur = 2;
    } else {
      this.cur = 0;
    }
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
.homeSecond .topnav-show li .left_sharecard img:hover{
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
@media screen and (max-width: 1700px) {
  .homeSecond .topnav-show li .right_sharecard .title{
    font-size: 50px;
  }
  .homeSecond .topnav-show li .right_sharecard .chaim{
    margin-top: 10px;
  }
  .homeSecond .topnav-show li .right_sharecard .share_adit{
    margin-top: 0px;
  }
  .homeSecond .topnav-show li .right_sharecard .share_adit p span:first-child{
    font-size: 27px;
  }
  .homeSecond .topnav-show li .right_sharecard .share_adit p .pricebnb{
    font-size: 30px;
  }
  .homeSecond .topnav-show li .right_sharecard .buybtn{
    margin-top: 20px;
  }
  .homeSecond .topnav-show li .right_sharecard .title{
    line-height: 66px;
  }
}
@media screen and (max-width: 1440px) {
  .homeSecond .topnav-show li .right_sharecard .title{
    font-size: 38px;
  }
  .homeSecond .topnav-show li .right_sharecard .share_adit p span{
    font-weight: normal;
  }
  .homeSecond .topnav-show li .right_sharecard .share_adit p{
    margin-top: 25px;
  } 

}
@media screen and (max-width: 1200px) {

}
@media screen and (max-width: 1024px) {
  .container{
    width: 90%;
  }
  .homeinner .first_left{
    font-size: 60px;
  }
  .homeinner .first_right{
    padding-top: 0px;
  }
  .homeSecond .topnav-show li .right_sharecard{
    margin-right: 5%;
  }
  .homeSecond .topnav-show li .right_sharecard .title{
    font-size: 34px;

  }
  .homeSecond .topnav-show li .right_sharecard .share_adit p span:first-child,.homeSecond .topnav-show li .right_sharecard .share_adit p .pricebnb{
    font-size: 22px;
    line-height:46px;
  }
}
@media screen and (max-width: 768px) {

  .container {
    width: 90%;
  }
  
  .homeinner .first_right {
    flex: 2;
  }
  .homeinner .first_left {
    font-size: 30px;
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
    font-size: 16px;
    line-height: 25px;
  }
  .homeSecond .topnav-show li .right_sharecard{
    padding: 0px 5%;
  }
  .homeSecond .topnav-show li .right_sharecard .title,.homeSecond .topnav-show li .right_sharecard .chaim,.homeSecond .topnav-show li .right_sharecard .share_adit p,.homeSecond .topnav-show li .right_sharecard .buybtn,.homeSecond .topnav-show li .right_sharecard .linkto,.homeSecond .topnav-show li .right_sharecard .share_adit{
    padding-left: 0%;
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
    width: 100%;
  }
  .homeinner .first_right {
    line-height: 20px;
    padding-top: 0px;
    font-size: 14px;
  }
  .homeSecond .topnav-tab li{
    padding: 0px 5px;
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
    margin-left: 0px;
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
