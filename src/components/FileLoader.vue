<template>
  <div class="loader-wrap">
    <div class="img-list" v-for="(item, index) in imgsList" :key="index" style="margin-right: 12px;">
      <img :src="item.uri"/>
    </div>
    <div class="file-upload" v-if="type !== 'single' || isSucess">
      <van-uploader :after-read="onRead" multiple>
        <van-icon name="photograph" size="1.6rem"/>
      </van-uploader>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  props: ['type'],
  data() {
    return {
      token: '',
      imgsList: [],
      isSucess: true
    };
  },
  watch: {
    imgsList(newVal) {
      let imgs_url = []
      newVal.forEach(item => {
        imgs_url.push(item.uri)
      })
      this.$emit('getImgsUrl', imgs_url)
    }
  },
  methods: {
    onRead(file) {
      this.isSucess = false
      console.log('file', file)
      axios({
        method: 'post',
        url: 'http://cs-bot.aqara.cn:80/care/file/upload',
        data: {
          file_name: 'img' + Date.parse (new Date()),
          file_base64: file.content.split(',')[1]
        },
      }).then(res => {
        this.isSucess = true
         this.imgsList.push(res.data.result)
      });
    }
  },
  mounted() {
  }
};
</script>
<style lang="less" scoped>
.loader-wrap {
  .img-list {
    float: left;
    background: #fff;
    width: 120px;
    height: 120px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
  .file-upload {
    width: 120px;
    height: 120px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }
}
</style>
