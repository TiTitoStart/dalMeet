<template>
  <div class="my-follow">
    <div class="follow-item" v-for="item in followList">
      <div class="title">
        <img :src="item.avatar"/>
        <div class="info">
          <span class="follow-name">{{item.nickname}}</span>
          <span class="state-time">34分钟之前</span>
        </div>
      </div>
      <div class="content">
        <div class="word">{{item.content}}</div>
        <div class="imgs" v-for="itemImg in item.imgs_url">
          <img :src="itemImg"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      followList: ''
    };
  },
  methods: {
    getFollowList() {
      this.$api.share.getLike().then(res => {
        this.followList = res.reverse()
      })
    }
  },
  mounted() {
    this.getFollowList();
  }
};
</script>
<style lang="less" scoped>
.my-follow {
  .follow-item {
    margin: 30px 0;
    background: #fff;
    padding: 48px;
    .title {
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
      }
      span {
        display: inline-block;
        margin-left: 20px;
        font-size: 32px;
        font-weight: bold;
      }
      .info {
        display: flex;
        flex-direction: column;
        .follow-name {
          // min-width: 300px;
          // height: 32px;
        }
        .state-time {
          color: #c5c8ce;
          margin-top: 30px;
          font-weight: normal;
          font-size: 24px;
        }
      }
    }
    .content {
      .imgs {
        margin-top: 24px;
        display: inline-block;
        img {
          display: inline-block;
          width: 200px;
          height: 200px;
          border: 10px solid #f6f9fb;
          border-radius: 10px;
          margin-right: 24px;
        }
      }
    }
  }
}
</style>
