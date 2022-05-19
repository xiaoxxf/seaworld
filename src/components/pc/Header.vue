<template>
  <div class="header-container">
    <div class="mar-innercontainer">
      <div class="container">
        <!-- animate__delay-2s -->
        <div class="narbar-left wow animate__animated animate__fadeInDown animate__delay-1s">
          <router-link :to="{path:'/'}" class="logot">
            <span class="navtitle">
              <img src="@/assets/svg/f_logo.svg" alt />
            </span>
          </router-link>
        </div>
        <ul
          class="narbar-right pc_menu wow animate__animated animate__fadeInDown animate__delay-1s"
        >
          <span class="user_photo" @click="connectBtn()" v-show="showAccount">{{statusButtontext}}</span>
          <el-menu class="el-menu-demo menuselect person" mode="horizontal" v-show="!showAccount">
            <el-submenu index="2">
              <template slot="title">{{statusButtontext}}</template>
              <router-link :to="{path:'boxNFT'}" class="logot">
                <el-menu-item index="2-1">MY NFT</el-menu-item>
              </router-link>
            </el-submenu>
          </el-menu>
        </ul>
        <span
          class="narbar_right menu_icon"
          :class="{'on':itemshow === true}"
          @click="selectSort(itemshow)"
        >
          <span></span>
          <span></span>
          <span></span>
        </span>

        <!-- mobile -->
        <div class="menu-bg"></div>
        <div class="menu">
          <ul class="menu-splitL">
            <li>
              <a href>NFT</a>
            </li>
            <li>
              <a href>Mystery Box</a>
            </li>
            <li>
              <a href>Box NFT</a>
            </li>
            <li>
              <a href>Trade</a>
            </li>
            <li>
              <a href>Farms</a>
            </li>
            <li>
              <a href>NFT Mining</a>
            </li>
          </ul>
          <ul class="menu-splitR">
            <li>
              <a href>NFT</a>
            </li>
            <li>
              <a href>Mystery Box</a>
            </li>
            <li>
              <a href>Box NFT</a>
            </li>
            <li>
              <a href>Trade</a>
            </li>
            <li>
              <a href>Farms</a>
            </li>
            <li>
              <a href>NFT Mining</a>
            </li>
          </ul>
        </div>
        <div class="burger">
          <div class="x"></div>
          <div class="y"></div>
          <div class="z"></div>
        </div>

        <ul
          class="narbar-right narlist wow animate__animated animate__fadeInDown animate__delay-1s"
        >
          <li>
            <router-link :to="{path:'NFT'}" class="logot">NFT</router-link>
          </li>
          <li>
            <router-link :to="{path:'MysteryBox'}" class="logot">GameFi</router-link>
          </li>
          <li>
            <router-link :to="{path:'exchange'}" class="logot">Trade</router-link>
          </li>
          <li>
            <router-link :to="{path:'farms'}" class="logot">
              <el-menu class="el-menu-demo" mode="horizontal">
                <el-submenu index="2">
                  <template slot="title">Farms</template>
                  <router-link :to="{path:'farms'}" class="logot">
                    <el-menu-item index="2-1">Farms</el-menu-item>
                  </router-link>

                  <router-link :to="{path:'nftMining'}" class="logot">
                    <el-menu-item index="2-2">NFT Mining</el-menu-item>
                  </router-link>
                </el-submenu>
              </el-menu>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
// import Web3 from 'web3';
import Config from "@/config.js";

export default {
  name: "ShopHeader",
  data() {
    return {
      itemshow: false,
      showAccount: true
    };
  },
  computed: {
    //header 状态按钮文字
    statusButtontext() {
      if (this.$store.getters.isConntent == true) {
        this.showAccount = false;
        console.log("连接");
      } else {
        this.showAccount = true;
        console.log("wei连接");
      }

      let packagevalue = "";
      //检查网络是否正确
      if (this.$store.state.netWorkId != Config.netWorkId) {
        packagevalue = "Wrong Network";
      } else if (this.$store.state.account) {
        //检查是否获取到了用户的地址
        let userAddress = this.$store.state.account;
        //修改显示
        var subStr1 = userAddress.substr(0, 7);
        var subStr2 = userAddress.substring(userAddress.length - 4);
        packagevalue = subStr1 + "..." + subStr2;
      } else {
        packagevalue = "Connect Wallet";
      }
      return packagevalue;
    }
  },
  //渲染 dom 后的方法
  mounted() {
    //判断是否安装 metamask
    if (this.isMetaMaskInstalled()) {
      //改变 connectButton 状态
      this.checkConnectBtn();
      setTimeout(() => {
        this.checkConnectBtn();
      }, 1000);

      //订阅账号修改机制
      ethereum.on("accountsChanged", this.checkConnectBtn);
      //订阅切换网络机制
      ethereum.on("networkChanged", this.checkConnectBtn);
    } else {
      //弹出相关提醒
      alert("please install metamask");
    }
    // menu-nar

    if ("ontouchstart" in window) {
      var click = "touchstart";
    } else {
      var click = "click";
    }
    $("div.burger").on(click, function() {
      if (!$(this).hasClass("open")) {
        openMenu();
      } else {
        closeMenu();
      }
    });
    $("div.menu ul li a").on(click, function(e) {
      e.preventDefault();
      closeMenu();
    });
    function openMenu() {
      $("div.menu-bg").addClass("animate");
      $("div.burger").addClass("open");
      $("div.x, div.z").addClass("collapse");
      $(".menu li").addClass("animate");
      setTimeout(function() {
        $("div.y").hide();
        $("div.x").addClass("rotate30");
        $("div.z").addClass("rotate150");
      }, 70);
      setTimeout(function() {
        $("div.x").addClass("rotate45");
        $("div.z").addClass("rotate135");
      }, 120);
    }
    function closeMenu() {
      $(".menu li").removeClass("animate");
      setTimeout(function() {
        $("div.burger").removeClass("open");
        $("div.x")
          .removeClass("rotate45")
          .addClass("rotate30");
        $("div.z")
          .removeClass("rotate135")
          .addClass("rotate150");
        $("div.menu-bg").removeClass("animate");
        setTimeout(function() {
          $("div.x").removeClass("rotate30");
          $("div.z").removeClass("rotate150");
        }, 50);
        setTimeout(function() {
          $("div.y").show();
          $("div.x, div.z").removeClass("collapse");
        }, 70);
      }, 100);
    }

    // 判断是否连接metamask
    // function IfConnect() {
    //   if (this.$store.getters.isConntent == true) {
    //     this.showAccount = false;
    //     console.log("连接");
    //   } else {
    //     this.showAccount = true;
    //     console.log("wei连接");
    //   }
    // }
  },

  methods: {
    selectSort() {},
    //判断用户是否安装了 metamask
    isMetaMaskInstalled() {
      const { ethereum } = window;
      return Boolean(ethereum && ethereum.isMetaMask);
    },

    //连接方法
    async connectBtn() {
      
      //判断是否登录了
      if (this.$store.getters.isConntent) {
        return;
      }

      //申请连接 metamask
      // const accounts = await ethereum.enable(); //已弃用
      const accounts = await ethereum.request({
        method: "eth_requestAccounts"
      });
      //进行检测
      this.checkConnectBtn();
      
    },

    //检测账号账号状态，并且操作用户地址的 Cookie
    checkConnectBtn() {
      //检查网络是否正确
      if (ethereum.networkVersion != Config.netWorkId) {
        //两秒后询问是否切换网络
        setTimeout(() => {
          this.changeNetWork();
        }, 2000);
        //修改全局登录参数
        this.$store.commit("updateAccount", null);
        //尝试进行
      } else if (ethereum.selectedAddress) {
        //修改全局登录参数
        this.$store.commit("updateAccount", ethereum.selectedAddress);
      } else {
        //删除用户账户信息
        this.$store.commit("updateAccount", null);
      }
      //更新 用户网络
      this.$store.commit("updateNetId", ethereum.networkVersion);
    },

    //尝试切换用户网络
    async changeNetWork() {
      try {
        await ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x61" }]
        });
      } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (error.code === 4902) {
          try {
            await ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: "0x61",
                  chainName: "BSC Test",
                  nativeCurrency: {
                    name: "BNB",
                    symbol: "BNB",
                    decimals: 18
                  },
                  rpcUrls: ["https://data-seed-prebsc-2-s1.binance.org:8545/"],
                  blockExplorerUrls: ["https://testnet.bscscan.com/"]
                }
              ]
            });
          } catch (addError) {}
        }
      }
    }
  },
  created() {},
  filters: {
    formatDate: function(value) {
      let date = new Date(value);
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? "0" + MM : MM;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let m = date.getMinutes();
      m = m < 10 ? "0" + m : m;
      let s = date.getSeconds();
      s = s < 10 ? "0" + s : s;
      return y + "-" + MM + "-" + d + " " + h + ":" + m + ":" + s;
    }
  },
  watch: {}
};
</script>
<style scoped>
.v-enter {
  opacity: 0;
  transform: translateY(0px);
}
.v-leave-to {
  opacity: 0;
  transform: translateY(0px);
}
.v-enter-active {
  transition: all 1s ease;
  transform: translateY(0px);
}
.v-leave-active {
  transition: all 1s ease;
  transform: translateY(0px);
}
.el-popover {
  width: 200px !important;
}
.header-container {
  position: fixed;
  color: #333;
  font-size: 18px;
  height: 128px;
  line-height: 128px;
  background-color: #140049;
  width: 100%;
  z-index: 99;
}
.nodata {
  padding: 15px;
}
.mar-innercontainer {
  display: inline-block;
  width: 100%;
  height: 100%;
}
.el-menu--collapse .el-menu .el-submenu,
.el-menu--popup {
  min-width: 140px !important;
}
.container {
  height: 100%;
  width: 80%;
  margin: auto;
  display: inline-block;
}
.nopoint {
  cursor: not-allowed;
}

a {
  color: #fff;
}
.l {
  float: left;
}
.r {
  float: right;
}
p {
  display: block;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
a:-webkit-any-link {
  text-decoration: none;
}
.el-popper[x-placement^="top"] .popper__arrow {
  display: none;
}
.annoucepoper {
  width: 200px;
}
.narbar-left {
  display: inline-block;
  cursor: pointer;
  float: left;
  height: 100%;
}
.narbar-left .logot,
.narbar-left .narbaritem {
  float: left;
}

.narbar-search {
  float: right;
}
.narbar-left .logo {
  top: 8px;
  position: relative;
  margin-right: 30px;
  width: 100px;
}
div.menu {
  display: none;
}
.pclogo {
  display: inline-block;
}
.mobilelogo {
  display: none;
  width: 100px;
}
.narbar-left span {
  transition: opacity 1s;
  color: #18191f;
  opacity: 1;
}
.narbar-left span:hover {
  opacity: 0.7;
  transition-duration: 1s;
}
.narbar-left .navtitle img {
  width: 79px;
  vertical-align: middle;
}

.notifycontent:first-child {
  margin-top: 15px;
}
.notifycontent:nth-child(5) {
  margin-bottom: 15px;
}
.notifycontent p {
  line-height: 30px;
  padding: 0px 15px;
}
.notifycontent p a {
  text-decoration: none;
  color: #909090;
}
.notifycontent .circle {
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 60px;
  background-color: #8c30f5;
  margin-right: 13px;
}

.narbar-right {
  margin: 0;
  float: right;
  margin-left: 20px;
  line-height: 128px;
}
.narbar-right .el-button,
.narbar-right >>> .el-button:hover {
  border: none;
  padding: 0px;
  border-radius: 15px;
}
.narbar-right >>> .el-menu--horizontal > .el-submenu .el-submenu__icon-arrow {
  display: none;
}
.narbar-right .el-button:hover,
.narbar-right >>> .el-button:hover {
  background-color: #fff;
}
.narbar-right >>> .el-menu--popup {
  padding: 10px;
}
.narbar-right .timer {
  font-size: 12px;
  color: #a9a9a9;
}
.narbar-right .user_photo {
  display: inline-block;
  color: #370ab4;
  border-radius: 15px;
  font-size: 19px;
  background-color: #dc52ff;
  height: 69px;
  line-height: 69px;
  width: 170px;
  animation-delay: 1s;
  cursor: pointer;
}
.narbar-right .person {
  margin-top: 30px;
  border-radius: 15px;
  height: 69px;
  line-height: 69px;
  width: 170px !important;
  background-color: #dc52ff;
  border: none;
}
.narbar-right >>> .el-menu--horizontal > .el-submenu .el-submenu__title {
  font-size: 19px;
  color: #370ab4;
  height: 69px;
  line-height: 69px;
}
.narbar-right >>>.el-menu--horizontal>.el-submenu.is-active .el-submenu__title{
  border-bottom: none;

}
.narbar-right >>>.el-submenu.is-active .el-submenu__title {
  border-bottom: none;
}
.narbar-right >>> .el-submenu__title:focus,
.narbar-right >>> .el-submenu__title:hover {
  background-color: rgb(255 255 255 / 0%) !important;
}
.narlist {
  display: inline-flex;
}
.narlist li {
  list-style-type: none;
  padding: 0px 25px;
  color: #fff;
  cursor: pointer;
}
.narlist li:hover {
  opacity: 0.7;
  transition: opacity 1s;
}
.narlist li span {
  margin-left: 10px;
}
.narlist li >>> .el-menu.el-menu--horizontal {
  border-bottom: solid 1px #e6e6e6;
  margin-top: 30px;
  background-color: #140049;
  border-bottom: none;
}

.narlist li >>> .el-menu--horizontal > .el-submenu .el-submenu__title {
  font-size: 18px;
  color: #fff;
  padding: 0px;
}
.narlist li >>> .el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background-color: #140049;
  opacity: 0.7;
}
.narlist
  li
  >>> .el-menu--horizontal
  > .el-submenu.is-active
  .el-submenu__title {
  border-bottom: none;
}

.narlist li >>> .el-menu--horizontal .el-menu .el-menu-item {
  text-indent: 14px;
  font-size: 16px;
}

.lookmore,
.lookmore a {
  color: #8c30f5;
  text-decoration: none;
}
.narbar-right button a {
  text-decoration: none;
  color: #fff;
}
.narbar-right img {
  position: relative;
  margin: 0px 12px;
  width: 25px;
  height: 25px;
  border-radius: 30px;
}
.narbar-right .lock {
  top: 7px;
}
.togglepanel p {
  cursor: pointer;
  /* overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; */
  padding: 0px 10px;
  height: 33px;
  line-height: 33px;
}
.togglepanel p:hover,
.togglepanel p a:hover {
  color: #8c30f5;
  background-color: rgba(238, 238, 254, 0.5);
}
.togglepanel p span {
  position: relative;
  top: 7px;
  padding: 3px;
  margin-right: 5px;
}
.togglepanel .logout {
  border-top: solid 1px #e4e4e4;
  padding: 10px;
  text-align: left;
}
.togglepanel .logout:hover {
  background-color: rgba(117, 227, 234, 0.2);
  color: #75e3ea;
}
.togglepanel p {
  margin: 10px 0px;
}
.togglepanel p a {
  color: #909090;
  text-decoration: none;
}
.gs-nav-item {
  margin-left: 12px;
  display: inline-block;
}
@media screen and (max-width: 1440px) {
  .narbar-left .search-center {
    width: 180px;
  }
  .narbar-left .search-center input {
    width: 120px;
  }
  .narbar-right {
    margin-left: 0px;
  }
  .container {
    width: 90%;
  }
}
@media screen and (max-width: 1200px) {
  .container {
    width: 90%;
  }
  .search-center {
    display: none !important;
  }
  .narbar-search {
    margin-left: 0%;
  }
  .narbar-right {
    padding-inline-start: 0px !important;
  }
}
@media screen and (max-width: 1024px) {
  /* narbar-menu */
  div.burger {
    height: 30px;
    width: 40px;
    position: absolute;
    top: 38px;
    right: 50px;
    cursor: pointer;
  }
  div.x,
  div.y,
  div.z {
    position: absolute;
    margin: auto;
    top: 0px;
    bottom: 0px;
    background: #fff;
    border-radius: 2px;
    -webkit-transition: all 200ms ease-out;
    -moz-transition: all 200ms ease-out;
    -ms-transition: all 200ms ease-out;
    -o-transition: all 200ms ease-out;
    transition: all 200ms ease-out;
  }
  div.x,
  div.y,
  div.z {
    height: 3px;
    width: 40px;
  }
  div.y {
    top: 22px;
  }
  div.z {
    top: 45px;
  }
  div.collapse {
    top: 20px;
    -webkit-transition: all 70ms ease-out;
    -moz-transition: all 70ms ease-out;
    -ms-transition: all 70ms ease-out;
    -o-transition: all 70ms ease-out;
    transition: all 70ms ease-out;
  }

  div.rotate30 {
    -ms-transform: rotate(30deg);
    -webkit-transform: rotate(30deg);
    transform: rotate(30deg);
    -webkit-transition: all 50ms ease-out;
    -moz-transition: all 50ms ease-out;
    -ms-transition: all 50ms ease-out;
    -o-transition: all 50ms ease-out;
    transition: all 50ms ease-out;
  }
  div.rotate150 {
    -ms-transform: rotate(150deg);
    -webkit-transform: rotate(150deg);
    transform: rotate(150deg);
    -webkit-transition: all 50ms ease-out;
    -moz-transition: all 50ms ease-out;
    -ms-transition: all 50ms ease-out;
    -o-transition: all 50ms ease-out;
    transition: all 50ms ease-out;
  }

  div.rotate45 {
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transition: all 100ms ease-out;
    -moz-transition: all 100ms ease-out;
    -ms-transition: all 100ms ease-out;
    -o-transition: all 100ms ease-out;
    transition: all 100ms ease-out;
  }
  div.rotate135 {
    -ms-transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
    -webkit-transition: all 100ms ease-out;
    -moz-transition: all 100ms ease-out;
    -ms-transition: all 100ms ease-out;
    -o-transition: all 100ms ease-out;
    transition: all 100ms ease-out;
  }

  div.navbar {
    height: 73px;
    background: #385e97;
  }

  div.menu-bg {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #140049;
    opacity: 0;
    -webkit-transition: all 300ms cubic-bezier(0, 0.995, 0.99, 1);
    -moz-transition: all 300ms cubic-bezier(0, 0.995, 0.99, 1);
    -ms-transition: all 300ms cubic-bezier(0, 0.995, 0.99, 1);
    -o-transition: all 300ms cubic-bezier(0, 0.995, 0.99, 1);
    transition: all 300ms cubic-bezier(0, 0.995, 0.99, 1);
  }
  div.menu-bg.animate {
    opacity: 0.9;
    -webkit-transition: all 400ms cubic-bezier(0, 0.995, 0.99, 1);
    -moz-transition: all 400ms cubic-bezier(0, 0.995, 0.99, 1);
    -ms-transition: all 400ms cubic-bezier(0, 0.995, 0.99, 1);
    -o-transition: all 400ms cubic-bezier(0, 0.995, 0.99, 1);
    transition: all 400ms cubic-bezier(0, 0.995, 0.99, 1);
  }
  div.menu {
    height: 568px;
    width: 160px;
    display: inline;
  }
  .menu-splitL,
  .menu-splitR {
    overflow: hidden;
    position: absolute;
    top: 90px;
    left: 0px;
    width: 160px;
    margin-top: 10%;
  }
  .menu-splitR {
    left: 160px;
  }

  div.menu ul li {
    list-style: none;
    width: 320px;
    text-align: center;
    font-size: 19px;
    -webkit-transition: all 150ms cubic-bezier(0, 0.995, 0.99, 1);
    -moz-transition: all 150ms cubic-bezier(0, 0.995, 0.99, 1);
    -ms-transition: all 150ms cubic-bezier(0, 0.995, 0.99, 1);
    -o-transition: all 150ms cubic-bezier(0, 0.995, 0.99, 1);
    transition: all 150ms cubic-bezier(0, 0.995, 0.99, 1);
  }
  div.menu ul li a {
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 3px;
  }

  section > div {
    transition: transform 1s;
    transform: translateX(0px);
  }

  div.menu li.animate {
    font-size: 30px;
    opacity: 1;
    -webkit-transition: all 200ms cubic-bezier(0, 0.995, 0.99, 1);
    -moz-transition: all 200ms cubic-bezier(0, 0.995, 0.99, 1);
    -ms-transition: all 200ms cubic-bezier(0, 0.995, 0.99, 1);
    -o-transition: all 200ms cubic-bezier(0, 0.995, 0.99, 1);
    transition: all 200ms cubic-bezier(0, 0.995, 0.99, 1);
  }

  .menu-splitL li:nth-of-type(1) {
    margin-left: 44px;
    transition-delay: 0.12s;
  }
  .menu-splitL li.animate:nth-of-type(1) {
    margin-left: 0;
    transition-delay: 0s;
  }

  .menu-splitL li:nth-of-type(2) {
    margin-left: 84px;
    transition-delay: 0.09s;
  }
  .menu-splitL li.animate:nth-of-type(2) {
    margin-left: 0;
    transition-delay: 0.05s;
  }

  .menu-splitL li:nth-of-type(3) {
    margin-left: 57px;
    transition-delay: 0.046s;
  }
  .menu-splitL li.animate:nth-of-type(3) {
    margin-left: 0;
    transition-delay: 0.1s;
  }

  .menu-splitL li:nth-of-type(4) {
    margin-left: 61px;
    transition-delay: 0.03s;
  }
  .menu-splitL li.animate:nth-of-type(4) {
    margin-left: 0;
    transition-delay: 0.15s;
  }

  .menu-splitL li:nth-of-type(5) {
    margin-left: 59px;
    transition-delay: 0s;
  }
  .menu-splitL li.animate:nth-of-type(5) {
    margin-left: 0;
    transition-delay: 0.2s;
  }
  .menu-splitL li:nth-of-type(6) {
    margin-left: 80px;
    transition-delay: 0s;
  }
  .menu-splitL li.animate:nth-of-type(6) {
    margin-left: 0;
    transition-delay: 0.2s;
  }
  .menu-splitR li:nth-of-type(1) {
    margin-left: -201px;
    transition-delay: 0.12s;
  }
  .menu-splitR li.animate:nth-of-type(1) {
    margin-left: -160px;
    transition-delay: 0s;
  }

  .menu-splitR li:nth-of-type(2) {
    margin-left: -250px;
    transition-delay: 0.069s;
  }
  .menu-splitR li.animate:nth-of-type(2) {
    margin-left: -160px;
    transition-delay: 0.05s;
  }

  .menu-splitR li:nth-of-type(3) {
    margin-left: -214px;
    transition-delay: 0.06s;
  }
  .menu-splitR li.animate:nth-of-type(3) {
    margin-left: -160px;
    transition-delay: 0.1s;
  }
  .menu-splitR li:nth-of-type(4) {
    margin-left: -214px;
    transition-delay: 0.06s;
  }
  .menu-splitR li.animate:nth-of-type(4) {
    margin-left: -160px;
    transition-delay: 0.1s;
  }
  .menu-splitR li:nth-of-type(5) {
    margin-left: -214px;
    transition-delay: 0.06s;
  }
  .menu-splitR li.animate:nth-of-type(5) {
    margin-left: -160px;
    transition-delay: 0.1s;
  }
  .menu-splitR li:nth-of-type(6) {
    margin-left: -230px;
    transition-delay: 0.06s;
  }
  .menu-splitR li.animate:nth-of-type(6) {
    margin-left: -160px;
    transition-delay: 0.1s;
  }
  /* menu-narbar */

  .narlist {
    display: none;
  }

  .pc_menu {
    display: none;
  }
  #cover {
    position: fixed;
    left: 0px;
    top: 0px;
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    z-index: 999;
    display: block;
    margin-top: 128px;
    /* transition-duration: 2s; */
    padding-top: 50px;
  }
  #cover p {
    color: #fff;
    line-height: 40px;
    text-align: left;
    display: flex;
    font-size: 35px;
    margin-top: 30px;
  }
  #cover p a {
    color: #fff;
  }
}
@media screen and (max-width: 780px) {
  div.menu li.animate {
    font-size: 26px;
  }
  div.menu li {
    line-height: 80px;
  }
  .narbar-left .navtitle {
    font-size: 50px;
  }
  .container {
    width: 95%;
  }
  .pclogo {
    display: none;
  }
  .pc_menu {
    /* display: none; */
  }

  .narlist li {
    font-size: 16px;
  }

  .mobilelogo {
    display: inline-block;
  }
  .narbaritem {
    display: none;
  }
  .narbar-right {
    margin-left: 0px;
    padding-left: 0px;
  }

  .narbar-right img {
    margin-left: 0px;
  }

  .narbar-right button a {
    font-size: 12px;
  }
  .tab-container .tab-context .con .contnetBottom li .list-box .ltime {
    font-size: 15px;
  }
  .tab-container .tab-btn span {
    font-size: 14px;
  }
}
@media screen and (max-width: 570px) {
  div.menu li.animate {
    font-size: 20px;
  }
  div.burger {
    height: 42px;
    width: 17px;
    top: 4px;
    right: 33px;
  }
  div.menu li {
    line-height: 60px;
  }
  div.x,
  div.y,
  div.z {
    width: 22px;
  }
  .menu-splitL,
  .menu-splitR {
    top: 50px;
  }
  #cover {
    margin-top: 68px;
  }
  .narbar-left .navtitle img {
    width: 50px;
  }
  .narbar-right img:nth-child(2) {
    display: none !important;
  }
  .narbar-left span {
    margin: 0px 5px;
    font-weight: normal;
  }

  .narbar-right img {
    margin-right: 5px;
  }
  .narbar-left .logo {
    margin-right: 0px;
  }
}
@media screen and (max-width: 400px) {
  .header-container {
    height: 68px;
    line-height: 68px;
  }

  .homewrapper {
    margin-top: 64px;
  }
  .narbar-left .navtitle {
    font-size: 30px;
  }
}
</style>

