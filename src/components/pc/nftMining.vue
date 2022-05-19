<template>
  <div class="homewrapper" :style="sharecardBg">
    <div class="homeFirst rippless" :style="blueBg">
      <div class="container">
        <div class="homeinner">
          <div
            class="first_left wow animate__animated animate__lightSpeedInLeft"
            :style="sharecardTitleBg"
          >NFT Mining</div>
          <div class="first_right wow animate__animated animate__lightSpeedInRight">
            There are three types of submersible NFTs:
            <strong>Humpback whales、Octopus and Clownfish.</strong>These NFTs can be explored and mined in the deep sea. Different submersibles obtain different mining revenues.
          </div>
        </div>
      </div>
    </div>
    <div class="homeSecond rippless">
      <div class="content">
        <!-- 气泡 -->
        <!-- <ul class="bg-bubbles">
          <li v-for="i in 10" :key="i"></li>
        </ul>-->
        <!-- 气泡 -->
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
          <ul class="topnav-show" v-show="cur==0">
            <div class="mycard">
              <p class="wow animate__animated animate__flipInX">My NFTs</p>
              <!-- <div class="nftbox wow animate__animated animate__zoomIn" :style="nftbox1"> -->
              <div class="nftbox wow animate__animated animate__zoomIn rippless">
                <div class="content">
                  <img src="@/assets/Rectangle11.png" alt />
                </div>
              </div>
            </div>
            <div class="farmscard">
              <p class="live">Live</p>
              <div class="cardtop">
                <div class="cardbox rippless wow animate__animated animate__flipInY" v-for="i in 3">
                  <div class="cardList content">
                    <p class="p_logo">
                      <span class="left doublelogo">
                        <img src="@/assets/farmsLogo.png" alt />
                        <span class="logosvg">
                          <svg
                            width="19"
                            height="18"
                            viewBox="0 0 19 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2 6H17.5L13.5 2"
                              stroke="white"
                              stroke-width="3"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M17.5 12H2L6 16"
                              stroke="white"
                              stroke-width="3"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                        <img src="@/assets/farmsLogo2.png" alt />
                      </span>
                      <span class="right bnb">SEA-BNB</span>
                    </p>
                    <p>
                      <span class="left">APR：</span>
                      <span class="right">715.53%</span>
                    </p>
                    <p>
                      <span class="left">Earn：</span>
                      <span class="right">SEA</span>
                    </p>
                    <p>
                      <span class="left">Staked SEA</span>
                    </p>
                    <p>
                      <span class="left harvestnum">0</span>
                      <button class="right harvest_btn">Harvest</button>
                    </p>
                  </div>
                  <div class="cardListBot">
                    <p>SEA-BNB LP Staked</p>
                    <button>Approve Contract</button>
                    <div class="detailbtn" @click="toggleShow()">
                      Details
                      <span class="point">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16 21.3333C15.6885 21.3339 15.3866 21.2254 15.1467 21.0267L7.14671 14.36C6.87442 14.1337 6.70319 13.8085 6.67068 13.4559C6.63817 13.1033 6.74706 12.7523 6.97338 12.48C7.19969 12.2077 7.52491 12.0365 7.87748 12.004C8.23005 11.9715 8.58109 12.0803 8.85338 12.3067L16 18.28L23.1467 12.52C23.2831 12.4092 23.44 12.3265 23.6085 12.2766C23.7769 12.2267 23.9536 12.2106 24.1283 12.2292C24.303 12.2478 24.4723 12.3007 24.6265 12.3849C24.7807 12.4691 24.9167 12.583 25.0267 12.72C25.1488 12.8571 25.2413 13.0179 25.2984 13.1924C25.3554 13.3669 25.3758 13.5513 25.3583 13.7341C25.3408 13.9168 25.2857 14.094 25.1965 14.2545C25.1073 14.4149 24.986 14.5553 24.84 14.6667L16.84 21.1067C16.5933 21.274 16.2975 21.3538 16 21.3333Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </div>
                    <div class="togglepanel" v-show="showtoggle">
                      <div class="left">
                        <p>Total Liquidity：</p>
                        <p>
                          Get SEA-BNB LP
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
                                d="M0.6875 8.5C0.6875 8.27622 0.776395 8.06161 0.934629 7.90338C1.09286 7.74514 1.30747 7.65625 1.53125 7.65625H21.4319L16.1214 2.34737C15.9629 2.18894 15.8739 1.97406 15.8739 1.75C15.8739 1.52594 15.9629 1.31106 16.1214 1.15262C16.2798 0.994189 16.4947 0.905182 16.7187 0.905182C16.9428 0.905182 17.1577 0.994189 17.3161 1.15262L24.0661 7.90262C24.1447 7.981 24.207 8.07411 24.2496 8.17662C24.2921 8.27912 24.314 8.38901 24.314 8.5C24.314 8.61098 24.2921 8.72087 24.2496 8.82338C24.207 8.92588 24.1447 9.01899 24.0661 9.09737L17.3161 15.8474C17.1577 16.0058 16.9428 16.0948 16.7187 16.0948C16.4947 16.0948 16.2798 16.0058 16.1214 15.8474C15.9629 15.6889 15.8739 15.4741 15.8739 15.25C15.8739 15.0259 15.9629 14.8111 16.1214 14.6526L21.4319 9.34375H1.53125C1.30747 9.34375 1.09286 9.25485 0.934629 9.09662C0.776395 8.93838 0.6875 8.72377 0.6875 8.5Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                        </p>
                      </div>
                      <div class="right">$ 1,22,22</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cardbottom"></div>
            </div>
          </ul>
          <ul class="topnav-show" v-show="cur==1">
            <div class="mycard">
              <p class="wow animate__animated animate__flipInX">My NFTs</p>
              <!-- <div class="nftbox wow animate__animated animate__zoomIn" :style="nftbox2"> -->
              <div class="nftbox wow animate__animated animate__zoomIn">
                <img src="@/assets/Rectangle12.png" alt />
              </div>
            </div>
            <div class="farmscard">
              <p class="live">Live</p>
              <div class="cardtop">
                <div class="cardbox rippless wow animate__animated animate__flipInY" v-for="i in 3">
                  <div class="cardList content">
                    <p class="p_logo">
                      <span class="left doublelogo">
                        <img src="@/assets/farmsLogo.png" alt />
                        <span class="logosvg">
                          <svg
                            width="19"
                            height="18"
                            viewBox="0 0 19 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2 6H17.5L13.5 2"
                              stroke="white"
                              stroke-width="3"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M17.5 12H2L6 16"
                              stroke="white"
                              stroke-width="3"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                        <img src="@/assets/farmsLogo2.png" alt />
                      </span>
                      <span class="right bnb">SEA-BNB</span>
                    </p>
                    <p>
                      <span class="left">APR：</span>
                      <span class="right">715.53%</span>
                    </p>
                    <p>
                      <span class="left">Earn：</span>
                      <span class="right">SEA</span>
                    </p>
                    <p>
                      <span class="left">Staked SEA</span>
                    </p>
                    <p>
                      <span class="left harvestnum">0</span>
                      <button class="right harvest_btn">Harvest</button>
                    </p>
                  </div>
                  <div class="cardListBot">
                    <p>SEA-BNB LP Staked</p>
                    <button>Approve Contract</button>
                    <div class="detailbtn" @click="toggleShow()">
                      Details
                      <span class="point">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16 21.3333C15.6885 21.3339 15.3866 21.2254 15.1467 21.0267L7.14671 14.36C6.87442 14.1337 6.70319 13.8085 6.67068 13.4559C6.63817 13.1033 6.74706 12.7523 6.97338 12.48C7.19969 12.2077 7.52491 12.0365 7.87748 12.004C8.23005 11.9715 8.58109 12.0803 8.85338 12.3067L16 18.28L23.1467 12.52C23.2831 12.4092 23.44 12.3265 23.6085 12.2766C23.7769 12.2267 23.9536 12.2106 24.1283 12.2292C24.303 12.2478 24.4723 12.3007 24.6265 12.3849C24.7807 12.4691 24.9167 12.583 25.0267 12.72C25.1488 12.8571 25.2413 13.0179 25.2984 13.1924C25.3554 13.3669 25.3758 13.5513 25.3583 13.7341C25.3408 13.9168 25.2857 14.094 25.1965 14.2545C25.1073 14.4149 24.986 14.5553 24.84 14.6667L16.84 21.1067C16.5933 21.274 16.2975 21.3538 16 21.3333Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </div>
                    <div class="togglepanel" v-show="showtoggle">
                      <div class="left">
                        <p>Total Liquidity：</p>
                        <p>
                          Get SEA-BNB LP
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
                                d="M0.6875 8.5C0.6875 8.27622 0.776395 8.06161 0.934629 7.90338C1.09286 7.74514 1.30747 7.65625 1.53125 7.65625H21.4319L16.1214 2.34737C15.9629 2.18894 15.8739 1.97406 15.8739 1.75C15.8739 1.52594 15.9629 1.31106 16.1214 1.15262C16.2798 0.994189 16.4947 0.905182 16.7187 0.905182C16.9428 0.905182 17.1577 0.994189 17.3161 1.15262L24.0661 7.90262C24.1447 7.981 24.207 8.07411 24.2496 8.17662C24.2921 8.27912 24.314 8.38901 24.314 8.5C24.314 8.61098 24.2921 8.72087 24.2496 8.82338C24.207 8.92588 24.1447 9.01899 24.0661 9.09737L17.3161 15.8474C17.1577 16.0058 16.9428 16.0948 16.7187 16.0948C16.4947 16.0948 16.2798 16.0058 16.1214 15.8474C15.9629 15.6889 15.8739 15.4741 15.8739 15.25C15.8739 15.0259 15.9629 14.8111 16.1214 14.6526L21.4319 9.34375H1.53125C1.30747 9.34375 1.09286 9.25485 0.934629 9.09662C0.776395 8.93838 0.6875 8.72377 0.6875 8.5Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                        </p>
                      </div>
                      <div class="right">$ 1,22,22</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cardbottom"></div>
            </div>
          </ul>
          <ul class="topnav-show" v-show="cur==2">
            <div class="mycard">
              <p class="wow animate__animated animate__flipInX">My NFTs</p>
              <!-- <div class="nftbox wow animate__animated animate__zoomIn" :style="nftbox3"> -->
              <div class="nftbox wow animate__animated animate__zoomIn">
                <img src="@/assets/Rectangle13.png" alt />
              </div>
            </div>
            <div class="farmscard">
              <p class="live">Live</p>
              <div class="cardtop">
                <div class="cardbox rippless wow animate__animated animate__flipInY" v-for="i in 3">
                  <div class="cardList content">
                    <p class="p_logo">
                      <span class="left doublelogo">
                        <img src="@/assets/farmsLogo.png" alt />
                        <span class="logosvg">
                          <svg
                            width="19"
                            height="18"
                            viewBox="0 0 19 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2 6H17.5L13.5 2"
                              stroke="white"
                              stroke-width="3"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M17.5 12H2L6 16"
                              stroke="white"
                              stroke-width="3"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                        <img src="@/assets/farmsLogo2.png" alt />
                      </span>
                      <span class="right bnb">SEA-BNB</span>
                    </p>
                    <p>
                      <span class="left">APR：</span>
                      <span class="right">715.53%</span>
                    </p>
                    <p>
                      <span class="left">Earn：</span>
                      <span class="right">SEA</span>
                    </p>
                    <p>
                      <span class="left">Staked SEA</span>
                    </p>
                    <p>
                      <span class="left harvestnum">0</span>
                      <button class="right harvest_btn">Harvest</button>
                    </p>
                  </div>
                  <div class="cardListBot">
                    <p>SEA-BNB LP Staked</p>
                    <button>Approve Contract</button>
                    <div class="detailbtn" @click="toggleShow()">
                      Details
                      <span class="point">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16 21.3333C15.6885 21.3339 15.3866 21.2254 15.1467 21.0267L7.14671 14.36C6.87442 14.1337 6.70319 13.8085 6.67068 13.4559C6.63817 13.1033 6.74706 12.7523 6.97338 12.48C7.19969 12.2077 7.52491 12.0365 7.87748 12.004C8.23005 11.9715 8.58109 12.0803 8.85338 12.3067L16 18.28L23.1467 12.52C23.2831 12.4092 23.44 12.3265 23.6085 12.2766C23.7769 12.2267 23.9536 12.2106 24.1283 12.2292C24.303 12.2478 24.4723 12.3007 24.6265 12.3849C24.7807 12.4691 24.9167 12.583 25.0267 12.72C25.1488 12.8571 25.2413 13.0179 25.2984 13.1924C25.3554 13.3669 25.3758 13.5513 25.3583 13.7341C25.3408 13.9168 25.2857 14.094 25.1965 14.2545C25.1073 14.4149 24.986 14.5553 24.84 14.6667L16.84 21.1067C16.5933 21.274 16.2975 21.3538 16 21.3333Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </div>
                    <div class="togglepanel" v-show="showtoggle">
                      <div class="left">
                        <p>Total Liquidity：</p>
                        <p>
                          Get SEA-BNB LP
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
                                d="M0.6875 8.5C0.6875 8.27622 0.776395 8.06161 0.934629 7.90338C1.09286 7.74514 1.30747 7.65625 1.53125 7.65625H21.4319L16.1214 2.34737C15.9629 2.18894 15.8739 1.97406 15.8739 1.75C15.8739 1.52594 15.9629 1.31106 16.1214 1.15262C16.2798 0.994189 16.4947 0.905182 16.7187 0.905182C16.9428 0.905182 17.1577 0.994189 17.3161 1.15262L24.0661 7.90262C24.1447 7.981 24.207 8.07411 24.2496 8.17662C24.2921 8.27912 24.314 8.38901 24.314 8.5C24.314 8.61098 24.2921 8.72087 24.2496 8.82338C24.207 8.92588 24.1447 9.01899 24.0661 9.09737L17.3161 15.8474C17.1577 16.0058 16.9428 16.0948 16.7187 16.0948C16.4947 16.0948 16.2798 16.0058 16.1214 15.8474C15.9629 15.6889 15.8739 15.4741 15.8739 15.25C15.8739 15.0259 15.9629 14.8111 16.1214 14.6526L21.4319 9.34375H1.53125C1.30747 9.34375 1.09286 9.25485 0.934629 9.09662C0.776395 8.93838 0.6875 8.72377 0.6875 8.5Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                        </p>
                      </div>
                      <div class="right">$ 1,22,22</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cardbottom"></div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cookie from "js-cookie";
import Swiper from "swiper";
import $ from "jquery";
import "../../../static/jquery.ripples.js";
export default {
  name: "home",
  data() {
    return {
      cur: 0,
      showtoggle: false,
      urlId: "",
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
      nftbox1: {
        backgroundImage: "url(" + require("@/assets/Rectangle11.png") + ")"
      },
      nftbox2: {
        backgroundImage: "url(" + require("@/assets/Rectangle12.png") + ")"
      },
      nftbox3: {
        backgroundImage: "url(" + require("@/assets/Rectangle13.png") + ")"
      }
    };
  },

  methods: {
    toggleShow() {
      this.showtoggle = !this.showtoggle;
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
  line-height: 155px;
  color: #29058d;
}
.homeinner {
  display: inline-flex;
  width: 100%;
  position: relative;
  z-index: 5;
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
  padding: 0px 0px 50px 0px;
  z-index: 5;
}
.homeSecond .show {
  margin-top: 30px;
  padding: 0px 10%;
}
.homeSecond .show .topnav-tab {
  margin: auto;
  width: 100%;
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
}

.homeSecond .topnav-tab li .tab {
  text-align: center;
  cursor: pointer;
  font-size: 30px;
}

.homeSecond .show ul .mycard {
  width: 100%;
  margin-top: 40px;
}
.homeSecond .show ul .mycard p {
  text-align: left;
  font-size: 26px;

}
.homeSecond .show ul .mycard .nftbox {
  background-repeat: no-repeat;
  background-size: cover;
  /* height: 582px; */
  margin-top: 30px;
  overflow: hidden;
}
.homeSecond .show ul .mycard img {
  width: 100%;
  margin-top: 30px;
  height: 582px;
  transition: all 2s ease;
}
.homeSecond .show ul .mycard img:hover {
  transform: scale(1.1, 1.1);
}
.homeSecond .show ul .live {
  text-align: left;
  margin: 20px 0px;
  font-size: 26px;
}
.farmscard {
}
.farmscard .cardtop {
  display: inline-flex;
  width: 100%;
  flex-wrap: wrap;
  /* justify-content: space-between; */
}
.farmscard .cardtop .cardbox {
  margin-top: 60px;
  flex: 1;
  margin: 8px 25px;
}
.farmscard .cardtop .cardbox:nth-child(1){
  margin-left: 0px;
}
.farmscard .cardtop .cardbox:nth-child(3){
  margin-right: 0px;
}
.farmscard .cardtop .cardList {
  float: left;
  background: rgba(125, 80, 247, 0.5);
  border-radius: 20px 20px 0px 0px;
  padding: 53px;
}

.farmscard .cardtop .cardList .p_logo {
}
.farmscard .cardtop .cardList .p_logo .left {
  float: left;
  font-size: 20px;
}
.farmscard .cardtop .cardList .p_logo .doublelogo {
  background: rgba(125, 80, 247, 0.5);
  width: 162px;
  height: 88px;
  border-radius: 23px;
  line-height: 88px;
}
.farmscard .cardtop .cardList .p_logo .doublelogo img {
  margin-top: 17px;
}
.farmscard .cardtop .cardList .p_logo .doublelogo .logosvg {
  display: inline-block;
  vertical-align: text-top;
  position: relative;
  top: -48px;
}

.farmscard .cardtop .cardList .p_logo .doublelog img:first-child {
}
.farmscard .cardtop .cardList .p_logo .right {
  float: right;
  font-size: 40px;
  line-height: 86px;
}
.farmscard .cardtop .cardList p {
  clear: both;
  display: inline-block;
  width: 100%;
}

.farmscard .cardtop .cardList p .left {
  float: left;
  font-size: 20px;
}
.farmscard .cardtop .cardList p .harvestnum {
  font-size: 30px;
  font-weight: bold;
}
.farmscard .cardtop .cardList p .right {
  float: right;
  font-size: 30px;
}
.farmscard .cardtop .cardList p .harvest_btn {
  background: #dc52ff;
  border-radius: 10px;
  color: #000000;
  border: none;
  outline: none;
  width: 122px;
  height: 43px;
  font-size: 20px;
}
.cardListBot {
  background: rgba(141, 99, 254, 0.85);
  border-radius: 0px 0px 20px 20px;
  padding: 25px 53px;
  clear: both;
}
.cardListBot p:first-child {
  color: rgba(255, 255, 255, 0.76);
  text-align: left;
}
.cardListBot button {
  background: #ffffff;
  border-radius: 10px;
  height: 58px;
  line-height: 58px;
  width: 100%;
  border: none;
  font-size: 20px;
  margin-top: 20px;
  cursor: pointer;
}
.cardListBot .detailbtn {
  margin-top: 22px;
  cursor: pointer;
  position: relative;
  z-index: 5;
}
.cardListBot .point {
  vertical-align: middle;
}
.cardListBot .togglepanel {
  margin-top: 25px;
  display: inline-block;
  width: 100%;
  transition-delay: 1;
}
.cardListBot .togglepanel .left {
  float: left;
  font-size: 20px;
}
.cardListBot .togglepanel .left p:last-child {
  margin-top: 20px;
  cursor: pointer;
}
.cardListBot .togglepanel .right {
  float: right;
  font-size: 30px;
}
.farmscard .cardbottom {
  background: rgba(141, 99, 254, 0.85);
  border-radius: 0px 0px 20px 20px;
}
@media screen and (max-width: 1700px) {
  
  .farmscard .cardtop .cardList {
    padding: 8%;
  }
  .farmscard .cardtop .cardList .p_logo .right {
    font-size: 38px;
  }
  .farmscard .cardtop .cardList .p_logo .doublelogo {
    height: 80px;
  }
  .farmscard .cardtop .cardList .p_logo .doublelogo img {
    margin-top: 12px;
  }
  .farmscard .cardtop .cardList .p_logo .right {
    line-height: 60px;
    font-size: 32px;
  }
  .farmscard .cardtop .cardList p .right,
  .cardListBot .togglepanel .right {
    font-size: 20px;
  }
  .cardListBot {
    padding: 20px;
  }
}

@media screen and (max-width: 1450px) {
  .farmscard .cardtop .cardList .p_logo .doublelogo img {
    width: 50px;
  }
  .container {
    width: 90%;
  }
  .homeSecond .show {
    padding: 0px 10%;
  }
  .homeinner .first_left {
    font-size: 60px;
  }
  .farmscard .cardtop .cardList .p_logo .right {
    font-size: 24px;
  }
  .farmscard .cardtop .cardList .p_logo .doublelogo {
    width: 138px;
    height: 75px;
  }
  .cardListBot .togglepanel {
    margin-top: 10px;
  }
}
@media screen and (max-width: 1200px) {
  .farmscard .cardtop .cardList {
    padding: 30px;
  }
  .cardListBot {
    padding: 25px 30px;
  }

  .farmscard .cardtop .cardList p .right {
    font-size: 20px;
  }
}
@media screen and (max-width: 1024px) {
  .homeSecond .show ul .mycard .nftbox,
  .homeSecond .show ul .mycard img {
    height: inherit;
  }
  .cardListBot button {
    height: 50px;
    line-height: 50px;
  }
  .homeSecond .show{
        padding: 0px 5%;
  }
}
@media screen and (max-width: 768px) {
 
  .homeSecond .topnav-tab li .tab {
    font-size: 24px;
  }
  .cardListBot button {
    font-size: 16px;
  }
  .farmscard .cardtop .cardList .p_logo .right {
    float: left;
  }
  .cardListBot p {
    font-size: 16px;
  }
  .farmscard .cardtop .cardList p .harvestnum {
    font-size: 20px;
  }

  .homeinner {
    position: relative;
  }
  .homeSecond .topnav-tab li{
    font-size: 30px;
  }
  .homeinner .first_left {
    font-size: 39px;
    height: 49px;
    line-height: 70px;
    height: 70px;
    width: inherit;
    flex: 1;
  }
  .homeinner .first_right {
    font-size: 20px;
    flex: 2;
    padding-top: 0px;
  }
  .homeSecond .topnav-tab li {
    padding: 10px;
  }
  .homeSecond .show {
    padding: 0px 5%;
  }
}
@media screen and (max-width: 540px) {
  .farmscard .cardtop .cardbox{
    width: 100%;
  }
  .farmscard .cardtop .cardList .p_logo .right{
    float: right;
  }
  .homeinner .first_right {
    font-size: 18px;
    line-height: 22px;
    padding-top: 0%;
  }
  .farmscard .cardtop .cardList,.cardListBot{
    padding: 20px;
  }
  .cardListBot .detailbtn{
    margin-top: 10px;
  }
  .homeSecond .show ul .mycard .nftbox{
    margin-top: 0px;
  }
  .homeinner {
    display: inline-block;
  }
  .homewrapper {
    margin-top: 68px;
  }
  .homeSecond .topnav-tab li .tab {
    font-size: 16px;
  }
  .homeSecond .show ul .mycard{
    margin-top: 0px;
  }
}
@media screen and (max-width: 320px) {
  .homeSecond .topnav-tab li .tab {
    font-size: 14px;
  }
}
.rippless .content {
  position: relative;
  z-index: 10;
}
</style>
