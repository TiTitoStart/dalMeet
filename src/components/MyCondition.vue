<template>
  <div class="my-condition">
    <div class="con-item">
      <span class="dot"></span>
      <span class="time">今天</span>
      <div class="content">
        <div class="new" @click="toShare">
          <van-icon name="photograph" size="1.6em"/>
        </div>
      </div>
    </div>
    <div class="con-item" v-for="(item, index) in shareList" @click="toDetail">
      <span class="dot"></span>
      <span class="time">{{ item.meta ? $utils.formatDate(item.meta.createAt, 'yyyy-MM-dd') : '2019-04-16'}}</span>
      <div class="content">
        <div class="word">{{item.content}}</div>
        <div class="imgs">
          <img :src="itemImg" v-for="itemImg in item.imgs_url"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      shareList: []
    };
  },
  methods: {
    toShare() {
      this.$router.push({path: '/share'});
    },
    toDetail() {
      this.$router.push({path: '/ShareDetail'});
    },
    getShareList() {
      this.$api.share.get().then(res => {
         this.shareList = res.reverse();
      });
    }
  },
  mounted() {
    this.getShareList();
  }
};
</script>
<style lang="less" scoped>
.my-condition {
  padding: 60px;
  .con-item {
    border-left: 10px solid #fff;
    position: relative;
    padding-left: 40px;
    .dot {
      display: inline-block;
      width: 26px;
      height: 26px;
      border: 6px solid #f6f9fb;
      background: #2db7f5;
      border-radius: 50%;
      position: absolute;
      left: -24px;
      top: 20px;
    }
    .time {
      display: inline-block;
      margin-top: 10px;
      height: 60px;
      line-height: 60px;
      position: relative;
      font-size: 22px;
      font-weight: bold;
    }
    .imgs {
      margin-top: 24px;
      img {
        // float: left;
        width: 200px;
        height: 200px;
        border: 10px solid #fff;
        border-radius: 10px;
        margin-right: 24px;
      }
    }
    .content {
      .new {
        width: 120px;
        height: 120px;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
      }
    }
  }
}
</style>
