<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <app-header></app-header>
    <router-view />
    <app-footer></app-footer>
  </div>
</template>
<script src="./common/font/txt.wav.min.js"></script>
<script>
import AppHeader from "./components/pc/Header";
import AppFooter from "./components/pc/Footer";

export default {
  name: "App",
  methods: {
    //判断
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    }
  },
  created() {
    if (this._isMobile()) {
      //手机端
      this.ismOrpc = "Moperation";
      //设置rem
      window.onload = function() {
        getRem(750, 100);
      };
      window.onresize = function() {
        getRem(750, 100);
      };
      function getRem(pwidth, prem) {
        var html = document.getElementsByTagName("html")[0];
        var oWidth =
          document.body.clientWidth || document.documentElement.clientWidth;
        html.style.fontSize = (oWidth / pwidth) * prem + "px";
      }
    } else {
      //pc端
      this.ismOrpc = "PCoperation";
    }
  },
  components: {
    AppHeader,
    AppFooter
  }
};
</script>

<style>
@import "./common/font/font.css";
@import "./assets/css/base.css";

html,
body {
  margin: 0px;
  font-family: "Poppins";
  height: 100%;
  font-size: 19px;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  min-height: 100%;
}
.el-popover {
  min-width: auto;
  padding: 0px;
  max-width: 150px;
  white-space: normal;
  color: #909090;
}
/* .el-select-dropdown{
  min-width: 272px !important;
} */
.mui-popover .mui-popover-arrow.mui-bottom {
  display: none;
}
/* .el-menu--collapse .el-menu .el-submenu,
.el-menu--popup {
  min-width: 140px;
} */
.el-menu-item {
  text-indent: 15px;
  font-size: 16px;
}

.el-menu--horizontal .el-menu .el-menu-item,
.el-menu--horizontal .el-menu .el-submenu__title {
  background-color: rgb(255 255 255 / 0%) !important;
  color: #fff !important;
}
.el-menu--popup-bottom-start {
  margin-top: 35px;
  border-radius: 8px;
  background: linear-gradient(
    354.99deg,
    #0e0035 0%,
    #29058d 63.55%,
    #140049 100.01%
  );
}
.el-menu--horizontal .el-menu .el-menu-item.is-active, .el-menu--horizontal .el-menu .el-submenu.is-active>.el-submenu__title{
  color: #fff;
}
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover{
  color: #fff;
}
.el-collapse-item__header{
  font-size: 19px;
}
.el-collapse-item__content{
  font-size: 17px;

}
</style>
