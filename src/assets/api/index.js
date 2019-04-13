/*
 * @Author: wuhaiwei
 * @Date: 2018-10-19 11:26:30
 * @Last Modified by: wuhaiwei
 * @Last Modified time: 2018-11-19 22:05:40
 */
import ajax from './../ajax/index';
import { baseUrl } from './../config/index';

export default {
  login: data => {
    return ajax.post(`${baseUrl}/api/login`, data);
  },
  signup: data => {
    return ajax.post(`${baseUrl}/api/signup`, data);
  },
};
