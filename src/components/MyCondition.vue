<template>
  <div class="my-condition">
    <div class="con-item">
      <span class="dot"></span>
      <span class="time">2019-03-11</span>
      <div class="content">
        <div class="word">今天说的什么好呢</div>
        <div class="imgs">
          <img src="../assets/images/user3.jpg"/>
          <img src="../assets/images/user3.jpg"/>
          <img src="../assets/images/user3.jpg"/>
        </div>
      </div>
    </div>
    <div class="con-item">
      <span class="dot"></span>
      <span class="time">2019-03-11</span>
      <div class="content">
        <div class="word">今天说的什么好呢</div>
        <div class="imgs">
          <img src="../assets/images/user3.jpg"/>
          <img src="../assets/images/user3.jpg"/>
          <img src="../assets/images/user3.jpg"/>
        </div>
      </div>
    </div>
    <div class="con-item">
      <span class="dot"></span>
      <span class="time">2019-03-11</span>
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
  }
}
</style>
