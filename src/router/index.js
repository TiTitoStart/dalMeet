import Vue from 'vue';
import Router from 'vue-router';
import DataTemp from './modules/home';

let routes = [].concat(DataTemp);
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});
