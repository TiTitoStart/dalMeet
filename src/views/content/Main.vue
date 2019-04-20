<template>
  <div class="main-page">
    <div class="title">
      <span>Discover</span>
    </div>
    <div class="command">
      <div class="command-item" @touchmove="changeNext" :class="isMove ? ['animation-hide', 'command-small'] : ['animation-show']">
        <div class="command-img">
          <img src="../../assets/images/user4.png"/>
        </div>
        <div class="info">
          <div class="name">Kyle, 21</div>
          <div class="career">office manage @shanghai</div>
        </div>
      </div>
      <div class="command-item command-small">
      </div>
      <div class="command-item" @touchmove="changeBefore" :class="isMove ? 'animation-show' : ['command-small', 'animation-hide']">
        <div class="command-img">
          <img src="../../assets/images/user3.jpg"/>
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
      <div class="my-btn">
        <div class="delete" @click="deleteNow"></div>
        <div class="like"></div>
      </div>
    </div>
  </div>  
</template>
<script>
export default {
  data() {
    return {
      isMove: false,
      flag: false
    };
  },
  methods: {
    changeTab(index) {
      this.nowTab = index;
    },
    changeNext() {
      this.isMove = true;
      // setTimeout(() => {
      //   this.isMove = false;
      // }, 1000)
    },
    changeBefore() {
      this.isMove = false;
    },
    deleteNow() {
      if(this.isMove) {
        this.changeBefore();
      }
      else {
        this.changeNext();
      }
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
      box-shadow: 0 0 20px #dcdee2;
      z-index: 2;
      position: relative;
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
    .my-btn {
      width: 400px;
      left: 0; 
      right: 0; 
      margin-left: auto; 
      margin-right: auto;
      position: absolute;
      top: -160px;
      position: relative;
      .like {
        position: absolute;
        width: 120px;
        height: 120px;
        display: inline-block;
        border-radius: 50%;
        margin-left: 96px;
      }
      .delete {
        width: 120px;
        height: 120px;
        display: inline-block;
        border-radius: 50%;
        margin-left: 40px;
      }
    }
  }
}
.animation-hide {
  animation-name: toHide;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
}
.animation-show {
  animation-name: toShow;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
  // animation-delay: 0.1s;
}
.animation-hide {
  animation-name: toHide;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
}
.animation-show {
  animation-name: toShow;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
  // animation-delay: 0.1s;
}
@keyframes toHide {
  0% {
    opacity: 1;
    bottom: 0;
  }
  25% {
    opacity: 1;
    // bottom: -33.5px;
    transform: scale(0.95,0.95) rotate(10deg);
    transform-origin: 40% 40%;
  }
  50% {
    opacity: 1;
    // bottom: -67px;
    transform: scale(0.9,0.9) rotate(30deg);
    transform-origin: 40% 40%;
  }
  75% {
    opacity: 0.45;
    // bottom: -100.5px;
    transform: scale(0.95,0.95) rotate(50deg);
    transform-origin: 40% 40%;
    opacity: 0;
  }
  100% {
    opacity: 0;
    // bottom: -134px;
    transform: scale(1,1);
    z-index: 1;
  }
}
@keyframes toShow {
  0% {
    transform: scale(0.9,0.9);
    transform-origin: 40% 40%;
    opacity: 0;
  }
  25% {
    opacity: 0.45;
    transform: scale(0.925,0.925);
    transform-origin: 40% 40%;
  }
  50% {
    opacity: 0.85;
    transform: scale(0.95,0.95);
    transform-origin: 40% 40%;
  }
  75% {
    opacity: 0.85;
    transform: scale(0.975,0.975);
    transform-origin: 40% 40%;
  }
  100% {
    opacity: 1;
    transform: scale(1,1);
    transform-origin: 40% 40%;
    z-index: 2;
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

