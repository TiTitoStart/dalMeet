const Home = r => require.ensure([], () => r(require('@/views/home')), 'home');
const Main = r => require.ensure([], () => r(require('@/views/content/Main')), 'Main');
const Chat = r => require.ensure([], () => r(require('@/views/chat/Chat')), 'Chat');
const ChatDetails = r => require.ensure([], () => r(require('@/views/chat/ChatDetails')), 'ChatDetails');
const User = r => require.ensure([], () => r(require('@/views/user/User')), 'User');
const Share = r => require.ensure([], () => r(require('@/views/user/NewShare')), 'Share');
const ShareDetail = r => require.ensure([], () => r(require('@/views/user/ShareDetail')), 'ShareDetail');
const Follow = r => require.ensure([], () => r(require('@/views/user/Follow')), 'Follow');

export default [{
  path: '',
  name: 'Home',
  component: Home,
  children: [{
    path: '/',
    name: 'Main',
    component: Main,
    meta: {
      id: 0
    }
  },{
    path: '/chat',
    name: 'Chat',
    component: Chat,
    meta: {
      id: 1
    }
  },{
    path: '/user',
    name: 'User',
    component: User,
    meta: {
      id: 2
    }
  }]
},{
  path: '/chat/ChatDetails',
  name: 'ChatDetails',
  component: ChatDetails
},{
  path: '/share',
  name: 'Share',
  component: Share
},{
  path: '/ShareDetail',
  name: 'ShareDetail',
  component: ShareDetail
},{
  path: '/Follow',
  name: 'Follow',
  component: Follow
}];
