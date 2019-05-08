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
          <span v-if="userInfo.age">{{userInfo.age}}</span>
          <span v-else>未填写</span>
        </div>
        <div class="right width-200" v-else>
          <van-datetime-picker
            v-model="userForm.age"
            type="year-month"
            :formatter="formatterAge"
            :visible-item-count = "3"
            :min-date="minDate"
            :max-date="maxDate"
            :show-toolbar = "false"
            @change = "getAge"
          />
        </div>
      </div>
      <div class="item">
        <span>自我评价</span>
        <div class="right" v-if="type !== 'modify'"></div>
        <div class="right" v-else></div>
      </div>
      <div class="item">
        <span>交友期望</span>
        <div class="right" v-if="type !== 'modify'"></div>
        <div class="right" v-else></div>
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
      minDate: new Date(1970),
      maxDate: new Date(),
      userForm: {
        nickname: '',
        age: '',
        avatar: ''
      },
      test: ''
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
    }
  },
  mounted() {
    let userInfo = this.$storage.get('userInfo');
    this.userForm.age =  userInfo.age ? new Date(userInfo.age).toDateString() : '';
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
