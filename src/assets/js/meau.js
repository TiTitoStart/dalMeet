/*
 * @Author: wuhaiwei 
 * @Date: 2018-11-07 19:22:54 
 * @Last Modified by: wuhaiwei
 * @Last Modified time: 2018-11-08 18:27:09
 */

export default  {
  sysTypeId: 1,
  name: '配置平台',
  code: 'deviceSym',
  menus: [
    {
      level: '1',
      menuName: '数据模板配置',
      icon:'ios-home',
      url:'',
      child:[
        {
          level: '1-1',
          menuName: '测点类型分配',
          icon:'',
          url:'pointTypeHome',
        },
        {
          level: '1-2',
          menuName: '测点字段管配',
          icon:'',
          url:'pointFieldHome',
        }
      ]
    },
    {
      level: '2',
      menuName: '设备模板配置',
      icon:'ios-cube',
      url:'',
      child:[
        {
          level: '2-1',
          menuName: '自有设备模板',
          icon:'',
          url:'',
        },
        {
          level: '2-2',
          menuName: '中间件设备模板',
          icon:'',
          url:'',
        },
        {
          level: '2-3',
          menuName: '赋能设备模板',
          icon:'',
          url:'',
        }
      ]
    },
    {
      level: '3',
      menuName: '项目管理中心',
      icon:'ios-list-box',
      url:'',
      child:[
        {
          level: '3-1',
          menuName: '数据配置',
          icon:'',
          url:'',
        },
        {
          level: '3-2',
          menuName: '位置管理',
          icon:'',
          url:'',
        },
        {
          level: '3-3',
          menuName: '场景管理',
          icon:'',
          url:'',
        },
        {
          level: '3-4',
          menuName: '设备管理',
          icon:'',
          url:'',
        },
        {
          level: '3-5',
          menuName: '自动化管理',
          icon:'',
          url:'',
        },
        {
          level: '3-6',
          menuName: '告警配置',
          icon:'',
          url:'',
        },
        {
          level: '3-7',
          menuName: '资源管理',
          icon:'',
          url:'',
        }
      ]
    },{
      level: '4',
      menuName: '日志配置中心',
      icon:'ios-sad',
      url:'',
      child:[]
    },{
      level: '5',
      menuName: '统计策略配置',
      icon:'md-pie',
      url:'',
      child:[]

    }
    
  ]
};