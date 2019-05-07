<template>
  <div class="share-wrap">
    <div class="share-top">
      <ReturnBtn></ReturnBtn>
    </div>
    <div class="content">
      <van-cell-group>
        <van-field
          v-model="shareForm.content"
          type="textarea"
          placeholder="这一刻想法"
          rows="1"
          :autosize="autoSize"
        />
      </van-cell-group>
      <div class="imgs"><FileLoader @getImgsUrl="getImgsUrl"></FileLoader></div>
    </div>
    <div class="bottom-btn" @click="toShare">
      发表
    </div>
  </div>  
</template>
<script>
const ReturnBtn = r => require.ensure([], () => r(require('@/components/ReturnBtn'), 'ReturnBtn'));
const FileLoader = r => require.ensure([], () => r(require('@/components/FileLoader'), 'FileLoader'));
export default {
  components: {ReturnBtn, FileLoader},
  data() {
    return {
      autoSize: {
        maxHeight: 100,
        minHeight: 60
      },
      shareForm: {
        content: '',
        imgs_url: []
      }
    };
  },
  methods: {
    toShare() {
      if(!this.shareForm.content) {
        this.$toast.fail({
          message: '内容不能为空'
        });
        return;
      }
      this.$api.share.add(this.shareForm).then(res => {
        this.$toast.success({
          message: '分享成功'
        });
        this.$router.push({path: '/user'});
      });
    },
    getImgsUrl(data) {
      console.log('data', data)
      this.shareForm.imgs_url = data;
    }
  }
};
</script>
<style lang="less" scoped>
.share-wrap {
  background: #f6f9fb;
  height: 100vh;;
  .share-top {
    border-bottom: 1px solid #E2E2E2;
    height: 80px;
    background: #fff;
    text-align: center;
  }
  .content {
    margin: 40px;
    .imgs {
      margin-top: 40px;
    }
  }
  .bottom-btn {
    width: 80%;
    height: 80px;
    background: linear-gradient(90deg, #2db7f5 0%, #187EEE 100%);
    box-shadow: 0 4px 10px 0 rgba(23,103,218,0.24);
    position: absolute;
    bottom: 40px;
    left: 10%;
    color: #fff;
    border-radius: 10px;
    font-size: 40px;
    text-align: center;
    line-height: 80px;
  }
}
</style>
