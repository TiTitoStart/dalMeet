import Vue from 'vue';
import Router from 'vue-router';
import DataTemp from './modules/home';
const Login = r => require.ensure([], () => r(require('@/views/login/Login')), 'Login');

let routes = [{
  path: '/login',
  name: 'Login',
  component: Login,
}].concat(DataTemp);
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});
