<template>
  <div class="main-page">
    <div class="title">
      <div class="icon"><img src="../../assets/images/title-icon.png"/></div>
      <div class="search"><van-search placeholder="请输入搜索关键词" v-model="searchValue" background="none"/></div>
      <div class="user-icon"><van-icon name="contact" size="1.4em" color="#fff"></van-icon></div>
    </div>
    <div class="swiper-wrap">
      <van-swipe :autoplay="3000" indicator-color="#fff">
        <van-swipe-item v-for="(image, index) in topImages" :key="index">
          <img :src="image"/>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="content-wrap">
      <div class="banner">
        <span class="item">男</span>
        <span class="item">女</span>
        <span class="item">我关注的</span>
      </div>
      <div class="conetnt">
        <div class="item">
          <img src="../../assets/images/user1.jpg"/>
          <div class="people-info">
            <div>Kyle, 21</div>
            <div>Office Manage @shanghai</div>
            <div>3 mutual friends</div>
          </div>
          <div class="bottom">
            <span><van-icon name="cross" size="1.4em" color="#f81616"/></span>
            <span><van-icon name="like-o" size="1.4em" color="#f96d7c"/></span>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>
<script>
const img1 = require('../../assets/images/banner1.jpeg');
const img2 = require('../../assets/images/banner2.jpg');
const img3 = require('../../assets/images/banner3.jpg');
const img4 = require('../../assets/images/banner14.jpg');
export default {
  data() {
    return {
      activeTab: 0,
      searchValue: '',
      topImages: [img1, img2, img3, img4]
    };
  }
};
</script>
<style lang="less" scoped>
.main-page {
  background: url('../../assets/images/bg.png');
  background-size: 100%;
  height: 100vh;
  overflow: auto;
  .title {
    width: 100%;
    height: 128px;
    background: linear-gradient(to right, #f74889, #fba469);
    display: flex;
    align-items: center;
    justify-content: center;
    .icon {
      margin-right: 24px;
      img {
        width: 64px;
        height: 64px;
      }
    }
    .search {
      width: 72%;
    }
    .user-icon {
      margin-left: 24px;
    }
  }
  .swiper-wrap {
    // height: 460px;
    width: 94%;
    margin: 14px auto;
    box-shadow: 2px 2px 16px 4px #fff;
    border-radius: 20px;
    padding: 8px;
    background: #fff;
    padding-bottom: 0;
    margin-bottom: 0;
    img {
      width: 100%;
      height: 360px;
      border-radius: 20px;
    }
  }
  .content-wrap {
    .banner {
      width: 94%;
      height: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      background: linear-gradient(to right, #fba469,#f74889);
      color: #fff;
      border-radius: 0 0 100px 100px;
      .item {
        display: inline-block;
        width: 160px;
        text-align: center;
        padding-bottom: 12px;
        border-bottom: 2px solid #fff;
        margin-right: 24px;
      }
    }
    .conetnt {
      width: 94%;
      margin: 0 auto;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      .item {
        display: inline-block;
        width: 45%;
        height: 500px;
        border-radius: 30px;
        background: #fff;
        margin-right: 24px;
        position: relative;
        overflow: hidden;
        img {
          width: 100%;
          border-radius: 30px;
        }
        .people-info {
          position: absolute;
          bottom: 0;
        }
      }
    }

  }
}
</style>
<style lang="less">
.van-search .van-cell {
  color: red;
}
.van-field {
  height: 64px;
  line-height: 64px;
}
.van-swipe__indicator {
  height: 12px;
  width: 12px;
  margin-bottom: 24px;
  background: linear-gradient(to right, #f74889, #fba469);
}
</style>

