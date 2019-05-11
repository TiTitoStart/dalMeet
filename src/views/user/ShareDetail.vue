<template>
  <div class="detail-wrap">
    <ReturnBtn></ReturnBtn>
    <div class="content-top">
      <span>{{content.meta ? $utils.formatDate(content.meta.createAt, 'yyyy-MM-dd') : '2019-04-16'}}</span>
    </div>
    <div class="content-wrap">
      <div class="imgs">
        <van-image-preview
          v-model="show"
          :images="content.imgs_url"
          @close="onClose"
          @change="onChange">
        </van-image-preview>
        <div class="content">{{content.content}}</div>
      </div>
    </div>
  </div>
</template>
<script>
const ReturnBtn = r => require.ensure([], () => r(require('@/components/ReturnBtn'), 'ReturnBtn'));
export default {
  components: {ReturnBtn},
  data() {
    return {
      content: '',
      show: true,
      index: ''
    };
  },
  methods: {
    onChange(index) {
      this.index = index;
    },
    onClose() {
      this.$router.push({path: '/user', query: {tabIndex: this.index}});
    }
  },
  mounted() {
    this.content = JSON.parse(this.$route.query.content);
    this.index = this.$route.query.tabIndex;
  }
};
</script>
<style lang="less" scoped>
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
  .content {
    color: #fff;
    position: absolute;
    z-index: 2229;
    bottom: 40px;
    left: 30px;
  }
</style>
