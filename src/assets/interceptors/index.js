/*
 * @Author: wuhaiwei 
 * @Date: 2018-10-23 17:27:19 
 * @Last Modified by: wuhaiwei
 * @Last Modified time: 2018-11-19 22:05:01
 */
/**
 * 封装axios 请求的拦截配置
 */
import axios from 'axios';
import { isEmptyObj } from './../js/validation';


function interceptors(router,store){
  /**
 * 路由拦截设置
 */
  router.beforeEach((to, from, next) => {
    const meta = to.meta;
    if (!isEmptyObj(meta)){
      // store.commit('updateMenuIdAndBreadcrumb', meta.menuIdAndBreadcrumb);
      store.commit('updateActiveIndex', meta.id);
    }
    next();
  });
  
  //http request 拦截器
  axios.interceptors.request.use(
    config => {
      config.headers['content-type'] = 'application/json';
      let userInfo = JSON.parse(window.localStorage.getItem('userInfo'))?JSON.parse(window.localStorage.getItem('userInfo')) : '';
      if(userInfo && userInfo['accessToken']) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers.Token = userInfo.accessToken;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
  
  //http response 拦截器
  axios.interceptors.response.use(
    response => {
      if(response.data.code === 408 || response.data.code === 407) {
        router.replace({path: '/login'});
      }
      else {
        return response;
      }
    },
    error => {
      return Promise.reject(error);
    }
  );
}
export default interceptors;
