<template>
  <div class="my-follow">
    <div class="follow-item">
      <div class="title">
        <img src="../assets/images/user3.jpg"/>
        <span>Taylor</span>
      </div>
      <div class="content">
        <div class="word">今天说的什么好呢</div>
        <div class="imgs">
          <img src="../assets/images/user3.jpg"/>
          <img src="../assets/images/user3.jpg"/>
          <img src="../assets/images/user3.jpg"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
};
</script>
<style lang="less" scoped>
.my-follow {
  .follow-item {
    margin: 30px;
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
        font-size: 30px;
        font-weight: bold;
      }
    }
    .content {
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
    }
  }
}
</style>
