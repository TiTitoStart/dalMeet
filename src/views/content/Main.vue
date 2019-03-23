<template>
  <div class="main-page">
    <!-- <div class="title">
      <div class="icon"><img src="../../assets/images/title-icon.png"/></div>
      <div class="search" style="background: #fff;"><van-search placeholder="请输入搜索关键词" v-model="searchValue" background="none"/></div>
      <div class="user-icon"><van-icon name="contact" size="1.4em" color="#fff"></van-icon></div>
    </div>
    <div class="swiper-wrap">
      <van-swipe indicator-color="#fff">
        <van-swipe-item v-for="(image, index) in topImages" :key="index">
          <img :src="image"/>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="content-wrap">
      <div class="banner">
        <span class="item" v-for="(item, index) in tabArr" :key="index"  @click="changeTab(index)" :class="nowTab === index?'active':''">{{item}}</span>
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
        <div class="item">
          <img src="../../assets/images/user1.jpg"/>
          <div class="people-info">
            <div>Kyle, 21</div>
            <div>Office Manage @shanghai</div>
            <div>3 mutual friends</div>
          </div>
          <div class="bottom">
            <span><van-icon name="cross" size="1.6em" color="#f81616"/></span>
            <span><van-icon name="like-o" size="1.6em" color="#f96d7c"/></span>
          </div>
        </div>
      </div>
    </div> -->
    <div class="title">
      <span>Discover</span>
    </div>
    <div class="command">
      <div class="command-item">
        <div class="command-img">
          <img src="../../assets/images/user4.png"/>
        </div>
        <div class="info">
          <div class="name">Kyle, 21</div>
          <div class="career">office manage @shanghai</div>
        </div>
      </div>
      <div class="command-item command-small">
        <div class="command-img">
          <img src="../../assets/images/user4.png"/>
        </div>
        <div class="info">
          <div class="name">Kyle, 21</div>
          <div class="career">office manage @shanghai</div>
        </div>
      </div>
    </div>
    <div class="action-btn">
      <div class="btn">
        <img src="../../assets/images/btn.png"/>
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
      topImages: [img1, img2, img3, img4],
      nowTab: 0,
      tabArr: ['男', '女', '我关注的']
    };
  },
  methods: {
    changeTab(index) {
      this.nowTab = index;
    }
  }
};
</script>
<style lang="less" scoped>
.main-page {
  width: 100%;
  background: #f6f9fb;
  position: relative;
  height: 100vh;
  overflow: hidden;
  .title {
    width: 100%;
    height: 440px;
    border-radius: 0 0 70% 70%;
    background: linear-gradient(to left, #f74889, #fba469);
    span {
      display: inline-block;
      font-size: 60px;
      color: #fff;
      font-weight: bold;
      padding: 60px 40px;
    }
  }
  .command {
    width: 90%;
    height: 1040px;
    // overflow: hidden;
    position: absolute;
    top: -260px;
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto;
    position: relative;
    .command-item {
      background: #fff;
      width: 100%;
      height: 1040px;
      border-radius: 30px;
      padding-bottom: 24px;
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      box-shadow: 0 0 20px #dcdee2;
      .command-img {
        max-height: 900px;
        background: url('../../assets/images/bg.png');
        background-size: 100%;
        overflow: hidden;
        img {
          display: inline-block;
          width: 100%;
          height: 100%;
        }
      }

      .info {
        padding: 30px;
        .name {
          font-size: 40px;
          font-weight: bold;
        }
        .career {
          color: #808695;
          font-size: 34px;
          margin-top: 10px;
        }
      }
    }
    .command-small {
      width: 90%;
      position: absolute;
      top: 40px;
      left: 0; 
      right: 0; 
      margin-left: auto; 
      margin-right: auto;
      z-index: 1;
    }
  }
  .action-btn {
    position: absolute;
    position: relative;
    bottom: 190px;
    .btn {
      width: 400px;
      left: 0; 
      right: 0; 
      margin-left: auto; 
      margin-right: auto;
      img {
        width: 100%;
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

