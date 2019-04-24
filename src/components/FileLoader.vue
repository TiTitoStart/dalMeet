<template>
  <div class="loader-wrap">
    <van-uploader :after-read="onRead" multiple>
      <van-icon name="photograph" size="1.6rem"/>
    </van-uploader>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    onRead(file, detail) {
      
    }
  }
};
</script>
<style lang="less" scoped>
.loader-wrap {
    width: 120px;
    height: 120px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}
</style>
