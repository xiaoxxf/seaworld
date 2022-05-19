// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import qs from 'qs'
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min'

//引入全局配置
import config from "@/config.js";
Vue.prototype.$baseConfig = config;

//引入 store
import store from '@/store/Account.js'

//设置全局插件
Vue.use(ElementUI)
Vue.use(qs)
Vue.config.productionTip = false

// Vue.prototype.HOST='/api'
import Vuex from 'vuex'
Vue.use(Vuex)
import 'animate.css'
import { WOW } from 'wowjs';
new WOW({ live: true }).init();
// import 'lib-flexible'
/* eslint-disable no-new */
import 'jquery'

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',

})
