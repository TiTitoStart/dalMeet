const Home = r => require.ensure([], () => r(require('@/views/home')), 'home');
const Main = r => require.ensure([], () => r(require('@/views/content/Main')), 'Main');
const Chat = r => require.ensure([], () => r(require('@/views/chat/Chat')), 'Chat');
const User = r => require.ensure([], () => r(require('@/views/user/User')), 'User');

export default [{
  path: '',
  name: 'Home',
  component: Home,
  children: [{
    path: '/',
    name: 'Main',
    component: Main
  },{
    path: '/chat',
    name: 'Chat',
    component: Chat
  },{
    path: '/user',
    name: 'User',
    component: User
  }]
}];
