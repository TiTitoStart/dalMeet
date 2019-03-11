<template>
  <div class="main-page">
    <div class="title">
      <div class="icon"><img src="../../assets/images/title-icon.png"/></div>
      <div class="search"><van-search placeholder="请输入搜索关键词" v-model="searchValue" background="none"/></div>
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
    margin-bottom: 90px;
    .banner {
      width: 94%;
      height: 84px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      background: linear-gradient(to right, #fba469,#f74889);
      color: #fff;
      border-radius: 20px;
      margin-top: 12px;
      .item {
        display: inline-block;
        width: 160px;
        text-align: center;
        padding-bottom: 12px;
        margin-right: 24px;
        border-bottom: 4px;        
      }
      .active {
        border-bottom: 4px solid #fff;
      }
    }
    .conetnt {
      padding-top: 12px;
      width: 94%;
      margin: 0 auto;
      background: #fff;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      flex-direction: row;
      .item {
        display: inline-block;
        width: 45%;
        height: 500px;
        border-radius: 30px;
        background: #fff;
        // margin-right: 24px;
        position: relative;
        overflow: hidden;
        border: 2px solid #d1d1d1;
        box-shadow: 4px 4px 12px 0px rgba(0, 0, 0, 0.45);
        font-size: 17px;
        color: #fff;
        margin-bottom: 24px;
        margin-left: 24px;
        img {
          width: 100%;
          height: 100%;
        }
        .people-info {
          width: 100%;
          background: rgba(0, 0, 0, 0.45);
          position: absolute;
          bottom: 0;
          padding: 12px;
        }
      }
      .bottom {
        position: absolute;
        bottom: 12px;
        right: 10px;
        span {
          // display: inline-block;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #fff;
          margin-right: 14px;
          display: flex;
          justify-content: center;
          align-items: center;
          float: left;
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

