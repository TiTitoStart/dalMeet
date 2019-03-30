<template>
  <div class="chatting">
      <ReturnBtn></ReturnBtn>
      <div class="content-top">
        
        <span>Taylar</span>
      </div>
      <div class="chat">
        <div class="chat-item" v-for="(item, index) in content">
          <div class="time" v-if="item.timestamp">{{$utils.formatDate((parseInt(item.timestamp)),'yyyy-MM-dd hh:mm:ss')}}</div>
          <div class="user">
            <div class="user-img"><img src="../../assets/images/user-icon1.png"/></div>
            <div class="chat-content bg-green tri-dot-right">{{item.question}}</div>
          </div>
          <div class="robot" v-if="item.answer_content">
            <div class="user-img"><img src="../../assets/images/user-icon1.png"/></div>
            <div class="chat-content tri-dot-left">{{item.answer_content}}</div>
          </div>
        </div>
      </div>
      <div class="content-bottom">
        <input placeholder="输入回复..." class="border-color: red" v-model="testContent"/>
        <div class="replay-btn">发送</div>
      </div>
    </div>
</template>
<script>
const ReturnBtn = r => require.ensure([], () => r(require('@/components/ReturnBtn'), 'ReturnBtn'));
export default {
  components: {
    ReturnBtn
  },
  watch: {
    chatData(newVal, oldVal) { 
      this.content = newVal;
    }
  },
  data() {
    return {
      content: [{
        question: 'what?',
        answer_content: 'That is a test'
      }],
      activeAnswerIndex: '',
      testContent: ''
    }
  },
  methods: {
  },
  created() {
    let that = this;
    document.onkeypress = function(e) {
      let keycode = document.all ? event.keyCode : e.which;
      if (keycode == 13) {
        that.modelTest();
        return false;
      }
    }
  },
  mounted() {
    document.querySelector('.chat').scrollTop = document.querySelector('.chat').scrollHeight;
  }
};
</script>
<style lang="less" scoped>
.chatting {
  overflow: hidden;
  background: #F3F3F3;
  position: relative;
  height: 100vh;
  width: 100%;
  .content-top {
    border-bottom: 1px solid #E2E2E2;
    height: 80px;
    background: #fff;
    text-align: center;
    span {
      display: inline-block;
      margin: 14px;
      color: #333;
      font-weight: bold;
    }
  }
  .content-bottom {
    position: fixed;
    bottom: 0;
    width: 98%;
    background: #F3F3F3;
    position: relative;
    padding-bottom: 12px;
    display: flex;
    justify-content: center;
    input {
      width: 80%;
      height: 60px;
      border-radius: 6px;
      border: none;
      padding-left: 24px;
    }
    .replay-btn {
      width: 10%;
      height: 60px;
      text-align: center;
      line-height: 60px;
      margin-left: 12px;
      color: #2d8cf0;
    }
  }
  .chat {
    width: 100%;
    margin-top: 48px;
    min-height: 86vh;
    .chat-item {
      width: 100%;
      .time {
        text-align: center;
        width: 100%;
        margin: 12px 0;
      }
      .chat-content {
        display: inline;
        border-radius: 6px;
        padding: 12px;
        background: #fff;
        border: 2px solid #e2e2e2;
        margin-left: 12px;
        margin-right: 12px;
        position: relative;
        text-align: left;
        max-width: 56%;
        position: absolute;
        cursor: pointer;
        top: 60px;
      }          
      .bg-green {
        background: #85f042;
      }
      .bg-blue {
        background: #daebff;
      }
      .robot {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: left;
        position: relative;
        .chat-content {
          left: 164px;
        }
      }
      .user {
        width: 100%;
        display: flex;
        flex-direction: row-reverse;
        position: relative;
        .chat-content {
          // position: absolute;
          right: 164px;
        }
      }
    }
  }
}
.user-img {
  display: inline-block;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin: 24px;
  position: relative;
  img {
    height: 100%;
    width:100%;
  }
}
</style>
<style scoped>
.tri-dot-left:after, .tri-dot-left:before {
  border: solid transparent;
  content: ' ';
  height: 0;
  top: 8px;
  position: absolute;
  width: 0;
}

.tri-dot-left:after {
  border-width: 10px;
  border-color: transparent #fff transparent transparent;
  left: -20px;
  margin-top: 2px;
}

.tri-dot-left:before {
  border-width: 11px;
  border-color: transparent #e2e2e2 transparent transparent;
  left: -24px;
  top: 9px;
}


.tri-dot-right:after, .tri-dot-right:before {
  border: solid transparent;
  content: ' ';
  height: 0;
  top: 8px;
  position: absolute;
  width: 0;
}

.tri-dot-right:after {
  border-width: 10px;
  border-color: transparent transparent transparent #85f042;
  right: -20px;
  margin-top: 2px;
}

.tri-dot-right:before {
  border-width: 11px;
  border-color: transparent transparent transparent #e2e2e2;
  right: -24px;
  top: 9px;
}

</style>

