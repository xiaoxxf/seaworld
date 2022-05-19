<template>
  <div class="homewrapper" :style="homeWrapperBanner">
    <div class="homeFirst rippless" :style="homeFirstBanner">
      <div class="content">
        <div class="filter">
          <div class="innerwrap">
            <transition>
              <div
                class="container bannertitle wow animate__animated animate__fadeInLeft animate__delay-2s"
              >
                <div class="filterbanner">
                  <transition>
                    <p class="fir_title wow animate__animated animate__slideInLeft animate__delay-3s">SeaWorld</p>
                  </transition>
                  <!-- <p class="wow slideInUp fir_title">Explore Here</p> -->
                  <p
                    class="txtwav slow fir_sectitle wow animate__animated animate__slideInLeft animate__delay-4s"
                  >A Great platform for exploring and protecting ocean</p>
                </div>
              </div>
            </transition>
          </div>
          <a @click="scrollToSec">
            <div class="turnNorth go-btn" :style="northBg"></div>
          </a>
        </div>
      </div>
    </div>

    <div class="homeSecond" id="secondsea">
      <div class="container">
        <transition>
          <p
            class="how_play wow animate__animated animate__slideInDown data-wow-iteration:infinite"
            :style="howplayBg"
          >SeaWorld</p>
        </transition>

        <div class="innerwrap">
          <transition>
            <div class="items wow animate__animated animate__fadeInLeft">
              <div class="left_item">
                <img src="@/assets/svg/circle1.svg" alt />
              </div>
              <div class="right_item">
                <p>NFT</p>
                <p>All NFTs are submersibles, which can help you get SEA(our token).</p>
                <p>
                  Get Your Frist NFT
                  <span>
                    <svg
                      width="28"
                      height="18"
                      viewBox="0 0 28 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.875 9.00002C0.875 8.75138 0.973772 8.51293 1.14959 8.33711C1.3254 8.1613 1.56386 8.06252 1.8125 8.06252H23.9244L18.0238 2.16377C17.8477 1.98774 17.7488 1.74898 17.7488 1.50002C17.7488 1.25107 17.8477 1.01231 18.0238 0.836274C18.1998 0.660237 18.4385 0.56134 18.6875 0.56134C18.9365 0.56134 19.1752 0.660237 19.3512 0.836274L26.8512 8.33627C26.9386 8.42336 27.0078 8.52681 27.0551 8.64071C27.1023 8.75461 27.1267 8.87671 27.1267 9.00002C27.1267 9.12334 27.1023 9.24544 27.0551 9.35934C27.0078 9.47323 26.9386 9.57669 26.8512 9.66377L19.3512 17.1638C19.1752 17.3398 18.9365 17.4387 18.6875 17.4387C18.4385 17.4387 18.1998 17.3398 18.0238 17.1638C17.8477 16.9877 17.7488 16.749 17.7488 16.5C17.7488 16.2511 17.8477 16.0123 18.0238 15.8363L23.9244 9.93752H1.8125C1.56386 9.93752 1.3254 9.83875 1.14959 9.66294C0.973772 9.48712 0.875 9.24866 0.875 9.00002Z"
                        fill="#21F5FF"
                      />
                    </svg>
                  </span>
                </p>
              </div>
            </div>
          </transition>
          <transition>
            <div class="items wow animate__animated animate__fadeInLeft">
              <div class="left_item">
                <img src="@/assets/svg/circle2.svg" alt />
              </div>
              <div class="right_item">
                <p>LP Combination</p>
                <p>Earn annualized up to 450% SEA(our token).</p>
                <p>
                  Earn SEA(our token)
                  <span>
                    <svg
                      width="28"
                      height="18"
                      viewBox="0 0 28 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.875 9.00002C0.875 8.75138 0.973772 8.51293 1.14959 8.33711C1.3254 8.1613 1.56386 8.06252 1.8125 8.06252H23.9244L18.0238 2.16377C17.8477 1.98774 17.7488 1.74898 17.7488 1.50002C17.7488 1.25107 17.8477 1.01231 18.0238 0.836274C18.1998 0.660237 18.4385 0.56134 18.6875 0.56134C18.9365 0.56134 19.1752 0.660237 19.3512 0.836274L26.8512 8.33627C26.9386 8.42336 27.0078 8.52681 27.0551 8.64071C27.1023 8.75461 27.1267 8.87671 27.1267 9.00002C27.1267 9.12334 27.1023 9.24544 27.0551 9.35934C27.0078 9.47323 26.9386 9.57669 26.8512 9.66377L19.3512 17.1638C19.1752 17.3398 18.9365 17.4387 18.6875 17.4387C18.4385 17.4387 18.1998 17.3398 18.0238 17.1638C17.8477 16.9877 17.7488 16.749 17.7488 16.5C17.7488 16.2511 17.8477 16.0123 18.0238 15.8363L23.9244 9.93752H1.8125C1.56386 9.93752 1.3254 9.83875 1.14959 9.66294C0.973772 9.48712 0.875 9.24866 0.875 9.00002Z"
                        fill="#21F5FF"
                      />
                    </svg>
                  </span>
                </p>
              </div>
            </div>
          </transition>
          <transition>
            <div class="items wow animate__animated animate__fadeInLeft">
              <div class="left_item">
                <img src="@/assets/svg/circle3.svg" alt />
              </div>
              <div class="right_item">
                <p>Liquidity</p>
                <p>Earn SEA(our token) and Contribute to Ocean protection.</p>
                <p>
                  Contribute to ocean protection
                  <span>
                    <svg
                      width="28"
                      height="18"
                      viewBox="0 0 28 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.875 9.00002C0.875 8.75138 0.973772 8.51293 1.14959 8.33711C1.3254 8.1613 1.56386 8.06252 1.8125 8.06252H23.9244L18.0238 2.16377C17.8477 1.98774 17.7488 1.74898 17.7488 1.50002C17.7488 1.25107 17.8477 1.01231 18.0238 0.836274C18.1998 0.660237 18.4385 0.56134 18.6875 0.56134C18.9365 0.56134 19.1752 0.660237 19.3512 0.836274L26.8512 8.33627C26.9386 8.42336 27.0078 8.52681 27.0551 8.64071C27.1023 8.75461 27.1267 8.87671 27.1267 9.00002C27.1267 9.12334 27.1023 9.24544 27.0551 9.35934C27.0078 9.47323 26.9386 9.57669 26.8512 9.66377L19.3512 17.1638C19.1752 17.3398 18.9365 17.4387 18.6875 17.4387C18.4385 17.4387 18.1998 17.3398 18.0238 17.1638C17.8477 16.9877 17.7488 16.749 17.7488 16.5C17.7488 16.2511 17.8477 16.0123 18.0238 15.8363L23.9244 9.93752H1.8125C1.56386 9.93752 1.3254 9.83875 1.14959 9.66294C0.973772 9.48712 0.875 9.24866 0.875 9.00002Z"
                        fill="#21F5FF"
                      />
                    </svg>
                  </span>
                </p>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <!-- 鲸鲨 -->
    <div class="homeThird wow animate__animated animate__lightSpeedInLeft">
      <div class="QTbox">
        <img src="@/assets/Rectangle3.png" class="QT1" />
      </div>
      <div
        class="homecommon thirdIntro animate__animated animate__lightSpeedInLeft animate__delay-2s"
      >
        <div class="container">
          <p class="fir_title special">Humpback whales</p>
          <p
            class="fir_sectitle"
          >It is the most rarest NFT. It has the highest mining efficiency and the largest capacity.</p>
          <p class="fir_btn">
            <router-link :to="{path:'/NFT',query: {id:1}}">
              <button>
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
                      d="M0.6875 8.49997C0.6875 8.27619 0.776395 8.06158 0.934629 7.90335C1.09286 7.74511 1.30747 7.65622 1.53125 7.65622H21.4319L16.1214 2.34734C15.9629 2.18891 15.8739 1.97403 15.8739 1.74997C15.8739 1.52591 15.9629 1.31103 16.1214 1.15259C16.2798 0.994158 16.4947 0.905151 16.7187 0.905151C16.9428 0.905151 17.1577 0.994158 17.3161 1.15259L24.0661 7.90259C24.1447 7.98097 24.207 8.07408 24.2496 8.17658C24.2921 8.27909 24.314 8.38898 24.314 8.49997C24.314 8.61095 24.2921 8.72084 24.2496 8.82335C24.207 8.92585 24.1447 9.01896 24.0661 9.09734L17.3161 15.8473C17.1577 16.0058 16.9428 16.0948 16.7187 16.0948C16.4947 16.0948 16.2798 16.0058 16.1214 15.8473C15.9629 15.6889 15.8739 15.474 15.8739 15.25C15.8739 15.0259 15.9629 14.811 16.1214 14.6526L21.4319 9.34372H1.53125C1.30747 9.34372 1.09286 9.25482 0.934629 9.09659C0.776395 8.93835 0.6875 8.72374 0.6875 8.49997Z"
                      fill="#370AB4"
                    />
                  </svg>
                </span>
              </button>
            </router-link>
          </p>
        </div>
      </div>
    </div>
    <!-- 章鱼 -->
    <div class="homeForth wow animate__animated animate__lightSpeedInRight">
      <div class="QTbox">
        <img src="@/assets/Rectangle4.png" class="QT2" />
      </div>
      <div
        class="homecommon forthIntro wow animate__animated animate__lightSpeedInRight animate__delay-2s"
      >
        <div class="container">
          <p class="fir_title">Octopus</p>
          <p class="fir_sectitle">It works in the deep ocean and has a high mining efficiency</p>
          <p class="fir_btn">
            <router-link :to="{path:'/NFT',query: {id:2}}">
              <button>
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
                      d="M0.6875 8.50009C0.6875 8.27631 0.776395 8.0617 0.934629 7.90347C1.09286 7.74523 1.30747 7.65634 1.53125 7.65634H21.4319L16.1214 2.34746C15.9629 2.18903 15.8739 1.97415 15.8739 1.75009C15.8739 1.52603 15.9629 1.31115 16.1214 1.15271C16.2798 0.99428 16.4947 0.905273 16.7187 0.905273C16.9428 0.905273 17.1577 0.99428 17.3161 1.15271L24.0661 7.90271C24.1447 7.98109 24.207 8.0742 24.2496 8.17671C24.2921 8.27921 24.314 8.38911 24.314 8.50009C24.314 8.61107 24.2921 8.72096 24.2496 8.82347C24.207 8.92598 24.1447 9.01909 24.0661 9.09746L17.3161 15.8475C17.1577 16.0059 16.9428 16.0949 16.7187 16.0949C16.4947 16.0949 16.2798 16.0059 16.1214 15.8475C15.9629 15.689 15.8739 15.4741 15.8739 15.2501C15.8739 15.026 15.9629 14.8111 16.1214 14.6527L21.4319 9.34384H1.53125C1.30747 9.34384 1.09286 9.25494 0.934629 9.09671C0.776395 8.93848 0.6875 8.72386 0.6875 8.50009Z"
                      fill="#370AB4"
                    />
                  </svg>
                </span>
              </button>
            </router-link>
          </p>
        </div>
      </div>
    </div>
    <!-- 小丑鱼 -->
    <div class="homeFifth wow animate__animated animate__lightSpeedInLeft">
      <div class="QTbox">
        <img src="@/assets/Rectangle5.png" class="QT3" />
      </div>
      <div
        class="homecommon fifthIntro wow animate__animated animate__lightSpeedInLeft animate__delay-2s"
      >
        <div class="container">
          <p class="fir_title">Clownfish</p>
          <p
            class="fir_sectitle"
          >Flexibility is its feature. The mining efficiency of clownfish is relatively low because of the limit capacity.</p>
          <p class="fir_btn">
            <router-link :to="{path:'/NFT',query: {id:3}}">
              <button>
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
                      d="M0.6875 8.50009C0.6875 8.27631 0.776395 8.0617 0.934629 7.90347C1.09286 7.74523 1.30747 7.65634 1.53125 7.65634H21.4319L16.1214 2.34746C15.9629 2.18903 15.8739 1.97415 15.8739 1.75009C15.8739 1.52603 15.9629 1.31115 16.1214 1.15271C16.2798 0.99428 16.4947 0.905273 16.7187 0.905273C16.9428 0.905273 17.1577 0.99428 17.3161 1.15271L24.0661 7.90271C24.1447 7.98109 24.207 8.0742 24.2496 8.17671C24.2921 8.27921 24.314 8.38911 24.314 8.50009C24.314 8.61107 24.2921 8.72096 24.2496 8.82347C24.207 8.92598 24.1447 9.01909 24.0661 9.09746L17.3161 15.8475C17.1577 16.0059 16.9428 16.0949 16.7187 16.0949C16.4947 16.0949 16.2798 16.0059 16.1214 15.8475C15.9629 15.689 15.8739 15.4741 15.8739 15.2501C15.8739 15.026 15.9629 14.8111 16.1214 14.6527L21.4319 9.34384H1.53125C1.30747 9.34384 1.09286 9.25494 0.934629 9.09671C0.776395 8.93848 0.6875 8.72386 0.6875 8.50009Z"
                      fill="#370AB4"
                    />
                  </svg>
                </span>
              </button>
            </router-link>
          </p>
        </div>
      </div>
    </div>
    <!-- 5元素 -->
    <div class="homeSixth">
      <div class="mysteryContainer">
        <transition>
          <div class="innerwrap">
            <p class="six_title wow animate__animated animate__fadeInUp" :style="sixBg">Blind Box</p>
            <div class="mysterybox" :style="mysteryBg">
              <div class="ele_list">
                
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <!-- loading -->
    <div id="loadingWrap">
      <img src="@/assets/loading.gif" alt />
    </div>
  </div>
</template>

<script>
import cookie from "js-cookie";
import Swiper from "swiper";
import WOW from "wowjs";
import $ from "jquery";
import "../../../static/jquery.ripples.js";
export default {
  name: "home",
  data() {
    return {
      clickedCount: 0, //统计点击次数
      cur: 0,
      mysteryBg: {
        backgroundImage: "url(" + require("@/assets/mysteryBox.png") + ")",
        backgroundRepeat: "no-repeat",
        width: "100%",
        backgroundSize: "contain"
      },
      homeWrapperBanner: {
        backgroundImage: "url(" + require("@/assets/RectangleBg.png") + ")",
        backgroundRepeat: "no-repeat",
        width: "100%",
        backgroundSize: "cover"
      },
      homeFirstBanner: {
        backgroundImage: "url(" + require("@/assets/SeaBanner.png") + ")",
        backgroundRepeat: "no-repeat",
        width: "100%",
        backgroundPosition: "center 0"
      },
      northBg: {
        backgroundImage: "url(" + require("@/assets/northBg.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center"
      },
      howplayBg: {
        backgroundImage: "url(" + require("@/assets/Frame.png") + ")",
        backgroundRepeat: "no-repeat",
        width: "100%",
        backgroundSize: "contain",
        backgroundPosition: "center"
      },
      sixBg: {
        backgroundImage: "url(" + require("@/assets/Frame.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center"
      }
    };
  },

  methods: {
    scrollToSec() {
      // 跳转到指定位置并且平滑滚动
      this.$el
        .querySelector(".homeSecond")
        .scrollIntoView({ block: "start", behavior: "smooth" });
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
      // 页面加载完成loading隐藏
      if (document.readyState == "complete") {
        $("#loadingWrap").css("display", "none");
      } else {
        setTimeout(() => {
          $("#loadingWrap").css("display", "none");
        }, 2000);
      }
    });
  },
  props: ["cases"],
  watch: {
    cases() {
      this.$nextTick(() => {
        // 在dom渲染完后,再执行动画
        setTimeout(() => {
          var wow = new WOW({
            live: false
          });
          wow.init();
        }, 5000);
      });
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
li {
  display: inline-block;
}
a {
  text-decoration: none;
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

.example {
  background: #fff;
  width: 600px;
  border: 1px #000 solid;
  margin: 20px auto;
  padding: 15px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
}

#water {
  width: 500px;
  height: 400px;
  display: block;
  margin: 0px auto;
  cursor: pointer;
}
#switcher {
  text-align: center;
  overflow: hidden;
  margin: 15px;
}
#switcher img {
  width: 160px;
  height: 120px;
}

/* waterwave */
#holder {
  width: 800px;
  height: 500px;
  position: absolute;
  cursor: pointer;
  text-align: center;
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
  /* margin-top: 128px; */
  color: #fff;
  z-index: 5;
  overflow: hidden;
}
.homeFirst {
  position: relative;
  height: 957px;
  z-index: 5;
}
.homeFirst .filter {
  height: 957px;
  width: 100%;
  /* background: linear-gradient(
    89.7deg,
    rgba(41, 5, 141, 0.7) 47.64%,
    rgba(41, 5, 141, 0) 100.83%
  ); */
}
.homeFirst img {
  background-size: cover;
  width: 100%;
}
.homeFirst .innerwrap {
  padding-top: 243px;
  width: 100%;
  text-align: left;
}
.homeFirst .innerwrap .bannertitle {
  width: 56%;
    margin-left: 100px;
    position: absolute;
    bottom: 0px;
}
.homeFirst .innerwrap .bannertitle .filterbanner {
  background: rgb(8 47 145 / 50%);
}
.homeFirst .innerwrap .fir_title {
  font-size: 30px;
  padding: 80px 80px 30px 80px;
}
.homeFirst .innerwrap .fir_sectitle {
  padding: 0px 80px 30px 80px;
  font-size: 80px;
  line-height: 120px;
  position: relative;
  margin-top: 10px;
  max-width: 830px;
}
.homeFirst .turnNorth {
  position: absolute;
  bottom: 30px;
  left: 50%;
  margin-left: -30px;
  height: 60px;
  width: 60px;
}
.go-btn {
  opacity: 1;
  webkit-animation: go-btn 3s cubic-bezier(0.5, 0, 0.1, 1) infinite;
  -webkit-animation: go-btn 3s cubic-bezier(0.5, 0, 0.1, 1) infinite;
  -ms-animation: go-btn 3s cubic-bezier(0.5, 0, 0.1, 1) infinite;
  -moz-animation: go-btn 3s cubic-bezier(0.5, 0, 0.1, 1) infinite;
  -o-animation: go-btn 3s cubic-bezier(0.5, 0, 0.1, 1) infinite;
}

.go-btn:hover {
  animation-play-state: paused;
  -webkit-animation-play-state: paused;
  -ms-animation-play-state: paused;
  -moz-animation-play-state: paused;
  -o-animation-play-state: paused;
}

@keyframes go-btn {
  0% {
    bottom: 0px;
  }
  25% {
    bottom: 50px;
  }
  50% {
    bottom: 50px;
  }
  100% {
    bottom: 0px;
  }
}

.homeSecond {
  position: relative;
  z-index: 5;
  padding-top: 77px;
}
.homeSecond .innerwrap {
  display: inline-flex;
  padding: 60px 0px 90px 0px;
  text-align: left;
}
.homeSecond .innerwrap .items {
  flex: 1;

  font-size: 20px;
  display: inline-flex;
  width: 100%;
}
.homeSecond .innerwrap .items .left_item {
  flex: 1;
  max-width: 125px;
}
.homeSecond .innerwrap .items:nth-child(1) {
  animation-delay: 1.5s;
  animation-duration: 2s;
}
.homeSecond .innerwrap .items:nth-child(2) {
  animation-delay: 1s;
  animation-duration: 2s;
  padding: 0px 60px;
}
.homeSecond .innerwrap .items:nth-child(3) {
  animation-delay: 0.5s;
  animation-duration: 2s;
}
.homeSecond .innerwrap .items .left_item img {
  -webkit-transform: rotate(360deg);
  animation: rotation 12s linear infinite;
  -moz-animation: rotation 12s linear infinite;
  -webkit-animation: rotation 12s linear infinite;
  -o-animation: rotation 12s linear infinite;
}

@-webkit-keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}

.homeSecond .innerwrap .items .right_item {
  flex: 2;
  max-width: 340px;
  margin-left: 15px;
}
.homeSecond .innerwrap .items .right_item p {
  font-size: 18px;
}
.homeSecond .innerwrap .items .right_item p:first-child {
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 26px;
}
.homeSecond .innerwrap .items .right_item p:last-child {
  font-size: 17px;
  margin-top: 30px;
  color: #21f5ff;
}
.homeSecond .innerwrap .items .right_item p:last-child span {
  vertical-align: sub;
  margin-left: 10px;
}

.how_play {
  font-size: 60px;
  font-weight: 500;
  height: 138px;
  line-height: 165px;
}
.homeThird {
  position: relative;
  display: inline-block;
}
.QTbox {
  overflow: hidden;
}
.homeThird .QT1 {
  width: 75%;
  float: right;
  transition: all 3s ease;
}
.homeThird .QT1:hover {
  transform: scale(1.1);
}
.homeForth {
  position: relative;
  display: inline-block;
}
.homeForth .QT2 {
  width: 75%;
  float: left;
  transition: all 2s ease;
}
.homeForth .QT2:hover {
  transform: scale(1.1);
}
.fourthPos {
  display: contents;
}
.forthIntro {
  position: absolute;
  top: 38%;
  left: 72%;
  width: 380px;
  text-align: left;
  animation-delay: 0.5s;
}
.forthIntro .fir_sectitle {
  margin: 15px 0px 30px 0px;
}

.homeFifth {
  position: relative;
  display: inline-block;
  float: left;
  text-align: left;
}
.homeFifth .QT3 {
  width: 75%;
  float: right;
  transition: all 2s ease;
}
.homeFifth .QT3:hover {
  transform: scale(1.1);
}
.homeSixth {
  padding-top: 81px;
  clear: both;
  z-index: 5;
}
.homeSixth .mysteryContainer {
  width: 98%;
  margin: auto;
}
.homeSixth .mysteryContainer .mysterybox {
  padding-top: 220px;
  height: 963px;
}

.homeSixth .innerwrap .six_title {
  font-size: 50px;
  height: 138px;
  line-height: 170px;
}

.homeSixth .innerwrap .show ul li {
  overflow: hidden;
  position: relative;
  z-index: 5;
}
.homeSixth .innerwrap .show,
.homeSixth .innerwrap .show .topnav-show {
  transition: 0.4s;
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
  -o-transition: 0.4s;
  -ms-transition: 0.4s;
}

#loadingWrap {
  position: fixed;
  background-color: #0e111f;
  z-index: 100;
  width: 100%;
  height: 100%;
  top: 0;
  overflow: hidden;
}
#loadingWrap img {
  margin-top: 10%;
}
.homecommon {
}
.homecommon .fir_title {
  font-size: 70px;
  line-height: 105px;
  position: relative;
}
.homecommon .special {
}

.homecommon .fir_btn button {
  background: #21f5ff;
  border: solid 1px #21f5ff;
  border-radius: 15px;
  border: none;
  color: #370ab4;
  font-size: 19px;
  padding: 20px 30px;
  transition: 2s;
}
.homecommon .fir_btn button:hover {
  background: rgb(255, 255, 255, 0);
  border: solid 1px #21f5ff;
  color: #21f5ff;
}
.homecommon .fir_btn button span {
  vertical-align: middle;
}

.thirdIntro {
  position: absolute;
  top: 28%;
  width: 100%;
  text-align: left;
  animation-delay: 0.5s;
}
.thirdIntro .fir_sectitle {
  margin: 15px 0px 60px 0px;
  max-width: 420px;
}
.fifthIntro {
  position: absolute;
  width: 100%;
  top: 35%;
}
.fifthIntro .fir_sectitle {
  max-width: 420px;
  margin: 15px 0px 60px 0px;
}
@media screen and (max-width: 1700px) {
  .homeSixth .mysteryContainer .mysterybox {
    height: 800px;
  }
  .homeFirst .innerwrap .bannertitle{
    width: 68%;
  }
}

@media screen and (max-width: 1500px) {
  .homeForth {
    margin-top: 0px;
  }
  .homeForth {
    height: inherit;
  }
  .homeSixth .mysteryContainer .mysterybox {
    height: 700px;
  }
  .homeFirst .innerwrap .bannertitle{
    width:70%;
  }
}
@media screen and (max-width: 1400px) {
  .container {
    width: 90%;
  }
  .homeFirst .innerwrap .fir_sectitle {
    font-size: 60px;
    line-height: 80px;
  }
  .forthIntro {
    left: 70%;
  }
  .homeSixth .mysteryContainer .mysterybox {
    height: 600px;
  }
}
@media screen and (max-width: 1200px) {
  .homeFirst .innerwrap .fir_sectitle {
    font-size: 50px;
    line-height: 80px;
  }
  .homeSecond .innerwrap .items .right_item p:first-child {
    font-size: 24px;
  }
  .homeSecond .innerwrap .items .right_item p:last-child {
    font-size: 20px;
  }
  .homeSecond .innerwrap .items .left_item img {
    width: 100px;
    height: 100px;
  }

  .how_play {
    margin-top: 30px;
    font-size: 50px;
  }
}

@media screen and (max-width: 1024px) {
  .homeSecond .innerwrap {
    padding: 60px 0px 0px 0px;
  }
  .homeFirst .innerwrap .fir_sectitle {
    left: 0px;
  }
  .header-container {
    height: 128px;
  }

  .homeFirst {
    height: 800px;
  }
  .homeSecond .innerwrap .items .left_item img {
    display: none;
  }
  .homeSecond .innerwrap .items {
    display: inline-block;
  }
  .forthIntro {
    left: 60%;
  }
  .homeSixth .mysteryContainer .mysterybox {
    height: 700px;
    padding-top: 60px;
  }
  .homeFirst .filter{
    height: 800px;
  }
  .homeFirst .innerwrap{
    padding-top: 0px;
  }
}
@media screen and (max-width: 780px) {
  #cover {
    margin-top: 68px;
  }
  .homeFirst {
    height: 600px;
  }

  .homeFirst .innerwrap .fir_sectitle {
    height: 90px;
  }
  .how_play {
    height: 90px;
    line-height: 100px;
  }

  .homecommon .fir_title {
    height: 90px;
    line-height: 100px;
  }
  .homeSixth .innerwrap .six_title {
    height: 90px;
  }
  .homewrapper {
    margin-top: 68px;
  }

  .homeFirst .innerwrap .fir_sectitle {
    font-size: 40px;
    line-height: 61px;
    max-width: 490px;
  }
  .homeFirst .innerwrap .fir_btn button {
    height: 110px;
    font-size: 24px;
    margin-top: 60px;
    padding: 0px 33px;
    width: inherit;
  }
  .homeSecond .innerwrap {
    display: inline-block;
    padding: inherit;
  }
  .homeSecond .innerwrap span {
    display: inline-block;
    margin-top: 20px;
  }
  .homeThird,
  .homeForth,
  .homeFifth {
    margin-top: 50px;
  }
  .homeFirst .filter{
    height: 600px;
  }
  .homeFirst .innerwrap .bannertitle{
    margin-left: 50px;
  }
  .homeFirst .innerwrap .fir_title{
    padding: 30px 30px 0px 30px;
  }
  .homeFirst .innerwrap .fir_sectitle{
    padding:0px 30px 30px 30px;
    font-size: 32px;
    line-height: 45px;
  }
}
@media screen and (max-width: 450px) {
  .homeFirst {
    height: 450px;
  }
  .homeSixth {
    padding: 50px 0px;
  }

  .homeSixth .innerwrap .six_title {
    line-height: 90px;
    font-size: 30px;
  }
  .forthIntro {
    left: 10%;
  }

  .homeFifth {
    height: 482px;
    margin-top: 50px;
  }
  .homeThird,
  .homeForth {
    height: 420px;
    margin-top: 50px;
  }

  .how_play,
  .homecommon .fir_title {
    font-size: 30px;
  }
  .homeSecond .innerwrap .items .right_item p:first-child {
    font-size: 18px;
  }
  .homeSecond .innerwrap .items .right_item p:last-child {
    font-size: 14px;
  }

  .homeSecond .innerwrap {
    padding: 20px 0px;
  }
  .bubble {
    display: none;
  }

  .header-container {
    line-height: inherit;
  }
  .flex2mobile {
    display: none;
  }
  .homeFirst .innerwrap .fir_sectitle {
    font-size: 30px;
    line-height: 40px;
  }
  .homeFirst .innerwrap .fir_btn button {
    font-size: 18px;
    height: 80px;
    margin-top: 30px;
    padding: 0px 20px;
  }
  .homeFirst .innerwrap .fir_btn button:last-child {
    margin-left: inherit;
  }
  .homeSixth .mysteryContainer .mysterybox {
    padding-top: 22px;
    height: 300px;
  }
}
@media screen and (max-width: 320px) {
  .homecommon .fir_title {
    font-size: 24px;
  }
  .homecommon .fir_btn button {
    height: 60px;
  }
  .homeFifth,
  .homeThird,
  .homeForth {
    height: 370px;
  }

  #cover {
    margin-top: 67px;
  }
}
.rippless .content {
  position: relative;
  z-index: 10;
}
/* #canvas_bg{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
} */
</style>
