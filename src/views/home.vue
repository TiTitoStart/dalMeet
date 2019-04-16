<template>
  <div class="home-wrap">
    <Content :style="{}">
      <router-view></router-view>
    </Content>
    <div class="bottom-fix">
      <div class="bottom-item" v-for="(item, index) in bottomIcon" @click="changeTab(index)" :key="index"><span :class="$store.state.activeIndex === index ?'active' : ''"><van-icon :name="item" size="3.4em" :color="$store.state.activeIndex === index ?'#fff' : '#bbd0e1'"/></span></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bottomIcon: ['wap-home', 'more-o', 'user-circle-o']
    };
  },
  methods: {
    changeTab(index) {
      switch(index) {
        case 0: this.$router.push({path: '/'});break;
        case 1: this.$router.push({path: '/chat'});break;
        case 2: this.$router.push({path: '/user'});break;
      }
    }
  },
  mounted() {

  }
};
</script>
<style lang="less" scoped>
.home-wrap {
  width: 100%;
  overflow-y: auto;
  .bottom-fix {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    background: #fff;
    .bottom-item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30%;
      padding: 24px;
      span {
        display: inline-block;
        width: 1.6em;
        height: 1.6em;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .active {
        background: linear-gradient(#fba26a, #f7458a);
        opacity: 0.8;
        box-shadow: 2px 2px 16px 12px #fddbda;
      }
    }
  }
}
</style>

