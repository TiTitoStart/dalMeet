<template>
  <div class="return-btn" @click="back">
    <van-icon name="arrow-left" size="1.2em" :color="color? color: '#000'"/>
  </div>
</template>
<script>
export default {
  props: ['color'],
  data() {
    return {

    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
.return-btn {
  display: inline-block;
  position:absolute;
  left: 24px;
  top: 18px;
}
</style>
