/*
 * @Author: wuhaiwei
 * @Date: 2018-10-19 11:48:50
 * @Last Modified by: wuhaiwei
 * @Last Modified time: 2018-11-08 15:51:06
 */
/**
 * 配置开发环境地址
 */

const options = {
  // 本地环境
  // localUrl: '//127.0.0.1:4400',
  localUrl: '//192.168.43.42:4400',
  // localUrl: '///10.0.14.229:4400',

  // 线上环境
  baseUrl: `${location.hostname}`
};
export const baseUrl =
  process.env.NODE_ENV === 'production' ? options.baseUrl : options.localUrl;
