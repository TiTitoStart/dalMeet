<template>
  <div class="chat-page">
    <div class="title">Message</div>
    <div class="search-area">
      <van-search placeholder="Search" background="#e9ecee"/>
    </div>
    <div class="online-users" v-if="onlineData.length">
      <!-- <div class="o-title">我的 好友</div> -->
      <div class="swiper-right">
        <div class="online-item" v-for="(item, index) in onlineData" :key="index" @click="toChatDetail(item)">
          <div class="user-img"><img :src="item.avatar"/></div>
          <span class="dot-green"></span>
          <div class="name">{{item.nickname}}</div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="content-item" v-for="(item, index) in chatList" :key="index" @click="toChatDetail(item)">
        <div class="chat-wrap">
          <div class="chat-img"><img :src="item.avatar"/></div>
          <span class="dot-pink">3</span>
        </div>
        <div class="main">
          <div class="chatter">
            <span>{{item.nickname}}</span>
            <span class="time">1 hour</span>
          </div>
          <div class="last-chat">
            {{item.content}}
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>
<script>
export default {
  data() {
    return {
      onlineData: [],
      chatList: []
    };
  },
  watch: {
    chatList: {
      handler: function(newVal) {
        console.log('newVal', newVal)
        return newVal;
      },
      deep:true,
      immediate: true
    }
  },
  sockets: {
  //这里是监听connect事件
    connect: function () {
     console.log('连接');
    }, 
    //接收消息
    message: function(data) {
      console.log('message', data)
      if(this.onlineData && this.$utils.arrayObjIndexOf(this.onlineData, data.uid, '_id') === -1) {
        this.$api.userGet({
          id: data.uid
        }).then(res => {
          let index = this.$utils.arrayObjIndexOf(this.onlineData, '_id', data.uid)
          if(index == -1) {
            this.onlineData.push(res)
          }
          if(!this.chatList[index]) {
            
            let chatListItem ={
              _id: res._id,
              nickname: res.nickname,
              avatar: res.avatar,
              content: data.content,
              send_time: data.send_time
            }
            this.chatList[index] = Object.assign({}, this.chatList, chatListItem)
            // this.chatList.push(chatListItem)
          }
          else {
            console.log('index', this.chatList[index])
            this.chatList[index].nickname = res.nickname;
            this.chatList[index].avatar= res.avatar;
            this.chatList[index].content = data.content;
            this.chatList[index].send_time = data.send_time
          }
          console.log('this.chatList', this.chatList)
          this.$storage.set('chatList', this.chatList)
        })
      }
      else {
        let index = this.$utils.arrayObjIndexOf(this.onlineData, '_id', data.uid);
        this.chatList[index].nickname = this.onlineData[index].nickname;
        this.chatList[index].avatar = this.onlineData[index].avatar;
        this.chatList[index].content = data.content;
        this.chatList[index].send_time = data.send_time
        this.$storage.set('chatList', this.chatList)
      }
      let chatData = this.$storage.get('chatData')
      if(chatData) {
        let index = this.$utils.arrayObjIndexOf(chatData, 'fid', data.uid)
        if(index !== -1) {
          chatData[index].data.push(
            {
              type: 'receive',
              message: data.content,
              time: data.send_time
            }
          )
        }
        else {
          chatData.push({
            fid: data.uid,
            data: [{
              type: 'receive',
              message: data.content,
              time: data.send_time
            }]
          })
        }
        this.$storage.set('chatData', chatData)
      }
      else {
        this.$storage.set('chatData', [{
          fid: data.uid,
          data: [{
              type: 'receive',
              message: data.content,
              time: data.send_time
            }]
        }])
      }
    }
  },
  methods: {
    toChatDetail(item) {
      let index = this.$utils.arrayObjIndexOf(this.chatList, '_id', item._id);
      console.log('this.chatList', index)
      if(index == -1) {
        this.chatList.push({
          _id: item._id,
          nickname: item.nickname,
          avatar: item.avatar,
        })
        this.$storage.set('chatList', this.chatList)
      }
      this.$router.push({
        name: 'ChatDetails',
        params: {
          id: item._id,
          nickname: item.nickname,
          avatar: item.avatar
        }
      });
    },
    getLikeList() {
      this.$api.getLike({
        id: this.$storage.get('userInfo', '_id')
      }).then(res => {
        this.onlineData = res;
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
     this.getLikeList()
     this.chatList = this.$storage.get('chatList') || []
    //  this.$storage.set('chatData', '')
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
          text-align: center;
          width: 100%;
          font-size: 30px;
          color: #333;
          font-weight: 600;
          overflow:hidden; 
          text-overflow:ellipsis;
          display:-webkit-box; 
          -webkit-box-orient:vertical;
          -webkit-line-clamp:1; 
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

