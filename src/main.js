import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
// import i18n from './locale/index';
// import './iview';

import interceptors from './assets/interceptors/index';
import api from './assets/api/index';
import * as validation from './assets/js/validation';
import utils from './assets/js/utils';
import storage from './assets/js/storage';
import cache from './assets/js/cache';
// import {loadScript} from './assets/js/consoleLoader';

import Vant from 'vant';
import VueSocketio from 'vue-socket.io';
// import socketio from 'socket.io-client';

import 'vant/lib/index.css';
import './assets/css/common.less';

import './assets/js/rem.js';

Vue.use(Vant);

Vue.config.productionTip = false;
Vue.config.lang = 'zh-CN';

// Vue.use(new VueSocketio({
//   debug: true,
//   connection: 'http://127.0.0.1:4200'
// }));
Vue.use(VueSocketio, 'http://127.0.0.1:4200/');

/**
 * 挂载api方法
 */
Vue.prototype.$api = api;
/**
 * 挂载validation,utils方法
 */
Vue.prototype.$validation = validation;
Vue.prototype.$utils = utils;
Vue.prototype.$storage = storage;
Vue.prototype.$cache = cache;

/**
 *路由跟http请求拦截控制
 */
interceptors(router,store);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

// loadScript(
//   'https://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/vconsole/3.0.0/vconsole.min.js',
//    () => {
//   // eslint-disable-next-line
//   new VConsole()
//    });
