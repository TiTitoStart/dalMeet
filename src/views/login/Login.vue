<template>
  <div class="login-wrap">
    <div class="title">
      <img src="../../assets/images/login-title.png"/>
    </div>
    <div class="form-wrap">
      <div class="tab-header">
        <span :class="activeTab === 0?'active-tab': ''" @click="changeTab(0)">登入</span>
        <span :class="activeTab === 1?'active-tab': ''" @click="changeTab(1)">注册</span>
      </div>
      <div class="form">
        <div>
          <div class="input-item"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeTab: 0
    };
  },
  methods: {
    changeTab(index) {
      this.activeTab = index;
    }
  }
};
</script>
<style lang="less" scoped>
.login-wrap {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: linear-gradient(to top, #f74889, #fba469);
  .title {
    width: 80%;
    margin: 60px auto;
    img {
      width: 100%;
    }
  }
  .form-wrap {
    width: 80%;
    margin: 60px auto;
    .tab-header {
      width: 80%;
      height: 80px;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 60px;
      margin:  0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        display: inline-block;
        width: 48%;
        height: 80%;
        border-radius: 30px;
        color: #fff;
        font-size: 34px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .active-tab {
        background: #fff;
        color: #000;
        box-shadow: 0 0 10px #dcdee2;
      }
    }
  }
}
</style>
