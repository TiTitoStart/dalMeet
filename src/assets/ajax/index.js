/*
 * @Author: wuhaiwei
 * @Date: 2018-10-18 14:58:44
 * @Last Modified by: wuhaiwei
 * @Last Modified time: 2018-11-08 16:34:26
 */
import axios from 'axios';
/**
 * 封装axios发送请求
 */
export default {
  /**
   * get请求
   * @param {访问地址} url
   * @param {请求数据} params
   * @param {默认true:有 loading 样式, false:没有 loading 样式} loading
   */
  get(url, params = {}) {
    // let paramStr = "";
    // Object.keys(data).forEach(key => {
    //   if (data[key] || data[key] === 0 || data[key] === "") {
    //     paramStr += key + "=" + data[key] + "&";
    //   }
    // });
    // if (paramStr !== "") {
    //   paramStr = paramStr.substr(0, paramStr.lastIndexOf("&"));
    //   url = url + "?" + paramStr;
    // }
    return new Promise((resolve, reject) => {
      axios.get(url, { params: params }).then(
        res => {
          res = res.data;
          if (res.code === 0) {
            resolve(res.result);
          } else {
            reject(res);
          }
        },
        err => {
          reject(err);
        }
      );
    });
  },
  /**
   * post请求
   * @param {访问地址} url
   * @param {请求数据} data
   * @param {默认true:有 loading 样式, false没有 loading 样式} loading
   */
  post(url, data = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, data).then(
        res => {
          res = res.data;
          if (res.code === 0) {
            resolve(res.result);
          } else {
            reject(res);
          }
        },
        err => {
          reject(err);
        }
      );
    });
  }
};
