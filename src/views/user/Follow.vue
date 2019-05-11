<template>
  <div class="follow-wrap">
    <div class="follow-top">
      <!-- <img class="bg" src="../../assets/images/bg.jpg"/> -->
      <ReturnBtn color="#fff"></ReturnBtn>
      <div class="follower">
        <img :src="follow.avatar">
        <span class="name">{{follow.nickname}}</span>
        <span class="num">关注{{follow.like_list.length}}</span>
      </div>
    </div>
    <div class="follow-content">
       <div class="title">动态</div>
       <div>
         <MyFollow :id="follow._id"></MyFollow>
       </div>
    </div>
  </div>
</template>
<script>
const MyFollow = r => require.ensure([], () => r(require('@/components/MyFollow'), 'MyFollow'));
const ReturnBtn = r => require.ensure([], () => r(require('@/components/ReturnBtn'), 'ReturnBtn'));
export default {
  components: {MyFollow, ReturnBtn},
  data() {
    return {
      id: '',
      follow: ''
    };
  },
  methods: {
    getDetail() {
      this.$api.userGet({id: this.id}).then(res => {
        this.follow = res;
      });
    }
  },
  mounted() {
    this.id = this.$route.query.id;
    this.getDetail();
  }
};
</script>
<style lang="less" scoped>
.follow-wrap {
  width: 100%;
  .follow-top {
    width: 100%;
    height: 420px;
    position: relative;
    background: url('../../assets/images/bg.jpg') no-repeat;
    background-size: 100% 100%; 
    display: flex;
    justify-content: center;
    align-items: center;
    .follower {
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        // margin-bottom: 24px;
      }
      span {
        margin-top: 24px;
      }
      .name {
        font-size: 32px;
        font-weight: bold;
      }
      .num {
        font-size: 24px;
      }
    }
  }
  .follow-content {
    .title {
      height: 40px;
      text-align: left;
      padding: 24px;
      background: #f5f5f5;
      color: #2d2d2d;
      font-size: 32px;
      font-weight: bold;
      box-shadow: 0 6px 16px 0 #DDE2EA;
      border-left: 10px solid #f29619;

    }
  }
}
</style>
