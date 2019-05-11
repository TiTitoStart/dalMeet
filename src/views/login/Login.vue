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
        <div class="my-input">
          <div class="input-item first">
            <van-icon name="envelop-o" />
            <input placeholder="Email Address or Phone Number" v-model="loginForm.phoneNumber"/>
          </div>
          <div class="input-item">
            <van-icon name="closed-eye" />
            <input type="password" placeholder="Password" v-model="loginForm.password"/>
          </div>
        </div>
        <div class="submit-btn" @click="toHome">{{activeTab ? '注册' : '登入'}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeTab: 0,
      loginForm: {
        phoneNumber: '',
        password: ''
      }
    };
  },
  methods: {
    changeTab(index) {
      this.activeTab = index;
    },
    toHome() {
      if(!this.$validation.isEmail(this.loginForm.phoneNumber) && !this.$validation.isCellPhone(this.loginForm.phoneNumber)) {
        this.$toast.fail({
          message: '账号格式不正确'
        });
        return;
      }
      if(!this.activeTab) {
        this.$api.login(this.loginForm).then(res => {
          this.$storage.set('userInfo', res);
          if(this.$storage.get('chatList')) {
            this.$storage.set('chatList', '')
          }
          if(this.$storage.get('chatData')) {
            this.$storage.set('chatData', '')
          }
          this.$router.push({
            path: '/'
          });          
        });
      }
      else {
        this.$api.signup(this.loginForm).then(res => {
          this.$storage.set('userInfo', res);
          this.$router.push({
            path: '/'
          });          
        });
      }
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
    .form {
      margin-top: 48px;
      padding: 48px;
      background: #fff;
      width: 90%;
      border-radius: 10px;
      height: 360px;
      position: relative;
      box-shadow: 6px 6px 4px rgba(0,21,41,.08);
      .my-input {
        padding: 24px;
        .first {
          margin-bottom: 30px;
          border-bottom: 1px solid #d1d1d1;
          padding-bottom: 30px;
        }
        .input-item {
          display: flex;
          justify-content: center;
          align-items: center;
          input {
            border: none;
            height: 100px;
            width: 90%;
            font-size: 30px;
            color: #333;
            font-weight: bold;
            margin-left: 24px;
          }
        }
      }
      .submit-btn {
        width: 80%;
        height: 100px;
        background: linear-gradient(to right, #f74889, #fba469);
        color: #fff;
        font-size: 50px;
        text-align: center;
        line-height: 100px;
        border-radius: 10px;
        position: absolute;
        bottom: -50px;
        left: 10%;
        letter-spacing: 20px;
      }
    }
  }
}
</style>
