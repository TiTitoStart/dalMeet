<template>
  <div class="user-page">
    <div class="user-top">
      <div class="user">
        <div class="user-img"><img src="../../assets/images/people2.png"/></div>
        <span class="user-name">Taylor</span>
      </div>
      <div class="login">退出登入</div>
    </div>
    <div class="user-content">
      <ul>
        <li>我的动态</li>
        <li>我的关注</li>
        <li>我的资料</li>
        <span class="underline"></span>
      </ul>
      <component :is=""></component>
    </div>
  </div>  
</template>
<script>
export default {
  
}
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
        margin-left: 8%;
        width: 22%;
        height: 8px;
        background: linear-gradient(to left, #f74889, #fba469);
        border-radius: 30px;
      }
    }
  }
}
</style>
