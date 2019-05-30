<template>
  <div class="info-wrap">
    <div class="info">
      <div class="item">
        <span>头像</span>
        <div class="right" v-if="type !== 'modify'">
          <img :src="userInfo.avatar" style="border-radius:50%;"/>
        </div>
        <div class="right" v-else>
          <FileLoader @getImgsUrl="getImgsUrl" type="single"></FileLoader>
        </div>
      </div>
      <div class="item">
        <span>昵称</span>
        <div class="right" v-if="type !== 'modify'">
          <span>{{userInfo.nickname}}</span>
        </div>
        <div class="right" v-else>
          <input v-model="userForm.nickname"/>
        </div>
      </div>
      <div class="item">
        <span>真名</span>
        <div class="right" v-if="type !== 'modify'">
          <span v-if="userInfo.real_name">{{userInfo.real_name}}</span>
          <span v-else>未填写</span>
        </div>
        <div class="right" v-else>
          <input v-model="userForm.real_name"/>
        </div>
      </div>
      <div class="item">
        <span>性别</span>
        <div class="right" v-if="type !== 'modify'">
          <span v-if="userInfo.gender">{{userInfo.gender === 'male'? '男': '女'}}</span>
          <span v-else>未填写</span>
        </div>
        <div class="right" v-else>
          <!-- <van-radio-group v-model="userForm.gender" @change="getGender">
            <van-radio name="male" style="float: right">男</van-radio>
            <van-radio name="female" style="float: right">女</van-radio>
          </van-radio-group> -->
          <van-radio-group v-model="userForm.gende4" @change="getGender">
            <van-radio name="male" style="float: right">男</van-radio>
            <van-radio name="female" style="float: right">女</van-radio>
          </van-radio-group>
        </div>
      </div>
      <div class="item">
        <span>职业</span>
        <div class="right" v-if="type !== 'modify'">
          <span v-if="userInfo.career">{{userInfo.career}}</span>
          <span v-else>未填写</span>
        </div>
        <div class="right" v-else>
          <input v-model="userForm.career"/>
        </div>
      </div>
      <div class="item">
        <span>生日</span>
        <div class="right" v-if="type !== 'modify'">
          <span v-if="userInfo.age">{{ $utils.formatDate(Date.parse(userInfo.age), 'yyyy-MM')}}</span>
          <span v-else>未填写</span>
        </div>
        <div class="right width-200" v-else>
          <van-datetime-picker
            v-model="userForm.age"
            type="year-month"
            :visible-item-count = "3"
            :min-date="minDate"
            :max-date="maxDate"
            :show-toolbar = "false"
          />
        </div>
      </div>
      <div class="item">
        <span>自我评价</span>
        <div class="right" v-if="type !== 'modify'">
          <span class="tag" v-for="(item, index) in userInfo.own_tags" :key="index"><van-tag mark type="danger" size="large">{{item}}</van-tag></span>
        </div>
        <div class="right" v-else>
          <span @click="tagChoose(0, index)" class="tag" v-for="(item,index) in tagList" :key="index"><van-tag color="#f2826a" :plain="item.isChoose" size="large">{{item.content}}</van-tag></span>
        </div>
      </div>
      <div class="item">
        <div>交友期望<van-icon name="like" color="#ff4444"/></div>
        <div v-if="type !== 'modify'">
          <div class="command-item">
            <span class="title">好友标签</span>
            <div class="right" v-if="userInfo.command.tags && userInfo.command.tags.length > 0">
              <span class="tag" v-for="(item,index) in userInfo.command.tags" :key="index"><van-tag color="#f2826a" :plain="item.isChoose" size="large">{{item}}</van-tag></span>
            </div>
            <span class="right" v-else>未填写</span>
          </div>
          <div class="command-item">
            <span class="title">年龄段</span>
            <div class="right" v-if="userInfo.command.age">
               <span class="tag"><van-tag type="danger" size="large">{{userInfo.command.age}}</van-tag></span>
            </div>
            <span class="right" v-else>未填写</span>
          </div>
          <div class="command-item">
            <span class="title">职业</span>
            <span class="right" v-if="userInfo.command.career">{{userInfo.command.career}}</span>
            <span class="right" v-else>未填写</span>
          </div>
        </div>
        <div v-else>
          <div class="command-item">
            <span class="title">好友标签</span>
            <div class="right">
              <span @click="tagChoose(1, index)" class="tag" v-for="(item,index) in commandList" :key="index"><van-tag color="#f2826a" :plain="item.isChoose" size="large">{{item.content}}</van-tag></span>
            </div>
          </div>
          <div class="command-item">
            <span class="title">年龄段</span>
            <div class="right">
               <span class="tag" @click="getCommandAge(1, '10代')"><van-tag type="danger" :plain='ageActiveTab == 1 ? false: true' size="large">10代</van-tag></span>
               <span class="tag"  @click="getCommandAge(2, '20代')"><van-tag type="danger" :plain='ageActiveTab == 2 ? false: true' size="large">20代</van-tag></span>
               <span class="tag"  @click="getCommandAge(3, '30代')"><van-tag type="danger" :plain='ageActiveTab == 3 ? false: true' size="large">30代</van-tag></span>
            </div>
          </div>
          <div class="command-item">
            <span class="title">职业</span>
            <input class="right" v-model="userForm.command.career"/>
          </div>
        </div>
      </div>
    </div>
    <div class="btn" @click="changeFunc(type)">{{type === 'modify' ? '确定' : '修改'}}</div>
  </div>
</template>
<script>
const FileLoader = r => require.ensure([], () => r(require('@/components/FileLoader'), 'FileLoader'));
export default {
  components: { FileLoader},
  data() {
    return {
      type: '',
      userInfo: this.$storage.get('userInfo'),
      minDate: new Date(1980,0,1),
      maxDate: new Date(),
      userForm: {
        nickname: '',
        age: '',
        avatar: '',
        tagList: [],
        command: {
          tags: [],
          age: '',
          career: ''
        }
      },
      test: '',
      tagList: [{
        content: '逗比劲儿',
        isChoose: true,
        color: ''
      },{
        content: '热心肠',
        isChoose: true,
        color: ''
      },{
        content: '爱笑',
        isChoose: true,
        color: ''
      },{
        content: '讲义气',
        isChoose: true,
        color: ''
      }],
      commandList: [{
        content: '长得好看',
        isChoose: true,
        color: ''
      },{
        content: '高',
        isChoose: true,
        color: ''
      },{
        content: '有酒窝',
        isChoose: true,
        color: ''
      },{
        content: '搞笑',
        isChoose: true,
        color: ''
      }],
      ageActiveTab: ''
    };
  },
  methods: {
    changeFunc(type) {
      if(type === 'modify') {
        this.$api.userUpdate(this.userForm).then((res) => {
          this.userInfo = res;
          this.$storage.set('userInfo', res);
          this.type = '';
        });
      }
      else {
        this.type = 'modify';
        this.fomaterContent();
      }
    },
    formatterAge(type, value) {
      // if (type === 'year') {
      //   return `${value}年`;
      // } else if (type === 'month') {
      //   return `${value}月`
      // }
      return value;
    },
    getAge(date) {
      let age = date.getValues();
      this.userForm.age = age.join(',').replace(',', '-')
    },
    getGender(value) {
      this.userForm.gender = value;
    },
    getImgsUrl(data) {
      this.userForm.avatar = data[0]
    },
    tagChoose(type, index) {
      if(type) {
        if(this.commandList[index].isChoose) {
          this.commandList[index].isChoose = false;
          this.userForm.command.tags.push(this.commandList[index].content)
        }
        else {
          this.commandList[index].isChoose = true;
          if(this.userForm.command.indexOf(this.commandList[index].content) != -1) {
            this.userForm.command.splice(this.userForm.tagList.indexOf(this.commandList[index].content), 1);
          }
        }
      }
      else {
        if(this.tagList[index].isChoose) {
          this.tagList[index].isChoose = false;
          this.userForm.tagList.push(this.tagList[index].content)
        }
        else {
          this.tagList[index].isChoose = true;
          if(this.userForm.tagList.indexOf(this.tagList[index].content) != -1) {
            this.userForm.tagList.splice(this.userForm.tagList.indexOf(this.tagList[index].content), 1);
          }
        }
      }
    },
    getCommandAge(index, age) {
      this.ageActiveTab = index;
      this.userForm.command.age = age;
    },
    fomaterContent() {
      let that = this;
      this.userInfo.own_tags.forEach(item => {
        let index = that.$utils.arrayObjIndexOf(that.tagList, 'content', item);
        if(index != -1) {
          that.tagList[index].isChoose = false;
        }
      });
      this.userInfo.command.tags.forEach(item => {
        let index = that.$utils.arrayObjIndexOf(that.commandList, 'content', item);
        if(index != -1) {
          that.commandList[index].isChoose = false;
        }
      });
      if(this.userInfo.command.age == '10代') {
        that.ageActiveTab = 1;
      }
      if(this.userInfo.command.age == '20代') {
        that.ageActiveTab = 2;
      }
      if(this.userInfo.command.age == '30代') {
        that.ageActiveTab = 3;
      }
      this.userForm.age = this.userInfo.age;
    }
  },
  mounted() {
    let userInfo = this.$storage.get('userInfo');
    this.userForm.age =  userInfo.age ? Date.parse((userInfo.age)) : '';
    this.userForm.nickname =  userInfo.nickname ? userInfo.nickname : '';
    this.userForm.real_name =  userInfo.real_name ?userInfo.real_name : '';
    this.userForm.avatar =  userInfo.avatar ? userInfo.avatar : '';
    this.userForm.gender =  userInfo.gender ? userInfo.gender : '';
    this.userForm.career =  userInfo.career ? userInfo.career : '';
  }
};
</script>
<style lang="less" scoped>
.info-wrap {
  // background: #fff;
  height: 69vh;
  .info {
    margin-top: 16px;
    background: #fff;
    .item {
      font-size: 30px;
      border-bottom: 1px solid #f8f8f9;
      margin: 0 80px;
      padding: 30px 0;
      overflow: hidden;
      img {
        width: 100px;
        height: 100px;
      }
      input {
        border: none;
        text-align: right;
      }
      .width-200 {
        width: 200px;
      }
      .command-item {
        margin-top: 24px;
        span {
          font-size: 28px;
        }
        .title {
          font-weight: bold;
        }
      }
    }
  }
  .btn {
    width: 60%;
    height: 80px;
    background: linear-gradient(to right, #f74889, #fba469);
    color: #fff;
    font-size: 50px;
    text-align: center;
    line-height: 80px;
    border-radius: 10px;
    letter-spacing: 20px;
    margin: 40px auto;
  }
}
</style>
<style>
.van-tab, .van-tag--large {
  font-size: 0.7333rem;
}
.tag {
  display:inline-block;
  margin-left:10px;
}
</style>

