<template>
  <div class="chat-page">
    <div class="title">Message</div>
    <div class="search-area">
      <van-search placeholder="Search" background="#e9ecee"/>
    </div>
    <div class="online-users">
      <div class="o-title">ONLINE USERS</div>
      <div class="swiper-right">
        <div class="online-item">
          <div class="user-img"><img src="../../assets/images/user-icon1.png"/></div>
          <span class="dot-green"></span>
          <div class="name">Taylor</div>
        </div>
        <div class="online-item">
          <div class="user-img"><img src="../../assets/images/user-icon1.png"/></div>
          <span class="dot-green"></span>
          <div class="name">Taylor</div>
        </div>
        <div class="online-item">
          <div class="user-img"><img src="../../assets/images/user-icon1.png"/></div>
          <span class="dot-green"></span>
          <div class="name">Taylor</div>
        </div>
        <div class="online-item">
          <div class="user-img"><img src="../../assets/images/user-icon1.png"/></div>
          <span class="dot-green"></span>
          <div class="name">Taylor</div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="content-item" @click="toChatDetail">
        <div class="chat-wrap">
          <div class="chat-img"><img src="../../assets/images/user-icon1.png"/></div>
          <span class="dot-pink">3</span>
        </div>
        <div class="main">
          <div class="chatter">
            <span>Taylor</span>
            <span class="time">1 hour</span>
          </div>
          <div class="last-chat">
            hello!
          </div>
        </div>
      </div>
      <div class="content-item">
        <div class="chat-wrap">
          <div class="chat-img"><img src="../../assets/images/user-icon1.png"/></div>
          <!-- <span class="dot-pink">3</span> -->
        </div>
        <div class="main">
          <div class="chatter">
            <span>Taylor</span>
            <span class="time">1 hour</span>
          </div>
          <div class="last-chat">
            hello!
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>
<script>
export default {
  data() {
    return {};
  },
  sockets: {
  //这里是监听connect事件
    connect: function () {
     console.log('连接');
    }, 
    // 方法名与服务端的保持一致
    getVal: function(data) {
      console.log('online', data);
    }
  },
  methods: {
    toChatDetail() {
      this.$router.push({
        path: '/chat/ChatDetails'
      });
    }
  },
  created() {
    if(!this.$storage.get('userInfo', 'accessToken')) {
      this.$router.push({path: '/login'})
    }
  },
  mounted() {
     this.$socket.emit('connect');
     this.$socket.emit('online', this.$storage.get('userInfo'));
  }
};
</script>
<style lang="less" scoped>
.chat-page {
  background: #f6f9fb;
  min-height: 100vh;
  padding: 60px 40px;
  .title {
    color: #000;
    font-size: 60px;
    font-weight: bold;
    letter-spacing: 4px;
    margin-bottom: 12px;
  }
  .search-area {
    width: 100%;
    margin-bottom: 24px;
  }
  .online-users {
    border-top: 2px solid #dde0e1;
    padding-top: 24px;
    .o-title {
      color: #9d9fa0;
      font-size: 34px;
      font-weight: bold;
      letter-spacing: 4px;
    }
    .swiper-right {
      height: 180px;
      overflow-x: scroll;
      margin-top: 12px;
      display: flex;
      flex-direction: row;
      .online-item {
        width: 120px;
        position: relative;
        margin-right: 40px;
        .user-img {
          display: inline-block;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          overflow: hidden;
          img {
            height: 100%;
            width:100%;
          }
        }
        .name {
          font-size: 30px;
          color: #333;
          font-weight: 600;
        }
        .dot-green {
          width: 20px;
          height: 20px;
          border: 5px solid #fff;
          border-radius: 50%;
          background: #52cc56;
          position: absolute;
          top: 80px;
          right: 0;
        }
      }
    }
  }
  .content {
    margin-top: 24px;
    .content-item {
      height: 120px;
      border-top: 1px solid #dde0e1;
      padding: 24px 0;
      .chat-wrap {
        position: relative;
        width: 120px;
        height: 120px;
        float: left;
        .chat-img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          overflow: hidden;
          img {
            height: 100%;
            width: 100%;
          }

        }
        .dot-pink {
          color: #fff;
          width: 36px;
          height: 36px;
          border: 5px solid #fff;
          border-radius: 50%;
          background: linear-gradient(to bottom, #f74889, #fba469);;
          position: absolute;
          top: 80px;
          right: 0;
          font-size: 30px;
          line-height: 36px;
          text-align: center;
        }
      }
      .main {
        width: 76%;
        float: left;
        margin: 24px;
        .chatter {
          width: 100%;
          font-size: 34px;
          font-weight: bold;
          color: #000;
          .time {
            font-size: 30px;
            font-weight: normal;
            color: #caccce;
            float: right;
          }
        }
        .last-chat {
          font-size: 34px;
          color: #caccce;
          margin-top: 12px; 
        }
      }
    }
  }
}
</style>
<style>
.van-cell {
  line-height: 60px;
  padding: 0;
  background: transparent;
}
.van-search {
  border-radius: 10px;
}
</style>

