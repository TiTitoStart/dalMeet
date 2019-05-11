<template>
  <div class="user-page">
    <div class="user-top">
      <div class="user">
        <div class="user-img"><img :src="userInfo.avatar"/></div>
        <span class="user-name">{{userInfo.nickname}}</span>
      </div>
      <!-- <div class="login" @click="loginOut">退出登入</div> -->
    </div>
    <div class="user-content">
      <ul @click="changeTab">
        <li data-index = '0'>我的动态</li>
        <li data-index = '1'>我的关注</li>
        <li data-index = '2'>我的资料</li>
        <span class="underline" :class="activeTabClass"></span>
      </ul>
      <!-- <component :is="MyCondition"></component> -->
      <div class="component-wrap">
        <MyCondition v-if="activeTabClass === 'target-1'"></MyCondition>
        <MyFollow v-if="activeTabClass === 'target-2'"></MyFollow>
        <MyInfo v-if="activeTabClass === 'target-3'"></MyInfo>
      </div>
    </div>
  </div>  
</template>
<script>
const MyCondition = r => require.ensure([], () => r(require('@/components/MyCondition'), 'MyCondition'));
const MyFollow = r => require.ensure([], () => r(require('@/components/MyFollow'), 'MyFollow'));
const MyInfo = r => require.ensure([], () => r(require('@/components/MyInfo'), 'MyInfo'));
export default {
  components: {
    MyCondition,
    MyFollow,
    MyInfo
  },
  data() {
    return {
      activeTabList: ['target-1', 'target-2', 'target-3'],
      activeTabClass: 'target-1',
      userInfo: this.$storage.get('userInfo')
    };
  },
  methods: {
    changeTab(e) {
      this.activeTabClass = this.activeTabList[e.target.dataset.index];
    },
    loginOut() {
      this.$router.push({path: '/login'});
    }
  },
  created() {
    if(!this.$storage.get('userInfo', 'accessToken')) {
      this.$router.push({path: '/login'})
    }
  },
  mounted() {
    this.activeTabClass = this.activeTabList[this.$route.query.tabIndex || 0];
  }
};
</script>
<style lang="less" scoped>
.user-page {
  background: #f6f9fb;
  height: 100vh;
  .user-top {
    width: 100%;
    height: 280px;
    background: linear-gradient(to right, #f74889, #fba469);
    display: flex;
    align-items: center;
    .user {
      display: flex;
      align-items: center;
      margin-left: 48px;
      .user-img {
        width: 140px;
        height: 140px;
        display: inline-block;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .user-name {
        color: #fff;
        font-size: 34px;
        font-weight: 600;
        margin-left: 24px;
      }
    }
    .login {
      margin-left: 250px;
      color: #fff;
      font-size: 34px;
      border: 1px solid #fff;
      border-radius: 10px;
      padding: 12px;
    }
  }
  .user-content {
    margin-top: 30px;
    ul {
      li {
        width: 22%;
        display: inline-block;
        color: #333;
        font-weight: bold;
        text-align: center;
        margin-left: 8%;
      }
      .underline {
        display: inline-block;
        width: 22%;
        height: 8px;
        background: linear-gradient(to left, #f74889, #fba469);
        border-radius: 30px;
      }
      .target-1 {
        margin-left: 8%;
        transition: 0.5s;
      }
      .target-2 {
        margin-left: 38%;
        transition: 0.5s;
      }
      .target-3 {
        margin-left: 68%;
        transition: 0.5s;
      }
    }
  }
  .component-wrap {
    height: 70vh;
    overflow-y: auto;
  }
}

</style>
