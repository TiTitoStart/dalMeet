/*
 * @Author: wuhaiwei
 * @Date: 2018-10-19 11:26:30
 * @Last Modified by: wuhaiwei
 * @Last Modified time: 2018-11-19 22:05:40
 */
import ajax from './../ajax/index';
import { baseUrl } from './../config/index';

export default {
  dataTemp: {
    //各类测点的字段数量表查询
    pointCountList: () => {
      return ajax.get(`${baseUrl}/datacenter/point/count/list`);
    },
    //测点内容修改
    pointTypeUpdate: data => {
      return ajax.post(`${baseUrl}/datacenter/point/type/update`, data);
    },
  }
};
