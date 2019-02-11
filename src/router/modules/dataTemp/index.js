const Home = r => require.ensure([], () => r(require('@/views/home')), 'dataTemp');

export default [{
  path: '/',
  name: 'Home',
  component: Home,
  meta: {
    menuIdAndBreadcrumb: {
      menuId: '1-1',
      breadcrumbList: [{
        url: '',
        name: '数据模板配置'
      }, {
        url: '/Home',
        name: '测点字段配置'
      }],
    }
  }
}];
