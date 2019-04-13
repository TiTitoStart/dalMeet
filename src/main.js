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

import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/css/common.less';

import './assets/js/rem.js';

Vue.use(Vant);

Vue.config.productionTip = false;
Vue.config.lang = 'zh-CN';
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
