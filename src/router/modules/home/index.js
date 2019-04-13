const Home = r => require.ensure([], () => r(require('@/views/home')), 'home');
const Main = r => require.ensure([], () => r(require('@/views/content/Main')), 'Main');
const Chat = r => require.ensure([], () => r(require('@/views/chat/Chat')), 'Chat');
const ChatDetails = r => require.ensure([], () => r(require('@/views/chat/ChatDetails')), 'ChatDetails');
const User = r => require.ensure([], () => r(require('@/views/user/User')), 'User');
const Share = r => require.ensure([], () => r(require('@/views/user/NewShare')), 'Share');

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
},{
  path: '/chat/ChatDetails',
  name: 'ChatDetails',
  component: ChatDetails
},{
  path: '/share',
  name: 'Share',
  component: Share
}];
