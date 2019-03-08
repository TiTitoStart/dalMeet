<template>
  <div class="home-wrap">
    <Content :style="{}">
      <router-view></router-view>
    </Content>
    <div class="bottom-fix">
      <div class="bottom-item" v-for="(item, index) in bottomIcon" @click="changeTab(index)"><span :class="activeIndex === index ?'active' : ''"><van-icon :name="item" size="1.6em" :color="activeIndex === index ?'#fff' : '#bbd0e1'"/></span></div>
      <!-- <div class="bottom-item"><van-icon name="more-o" size="1.6em" color="#bbd0e1"/></div> -->
      <!-- <div class="bottom-item"><van-icon name="user-circle-o" size="1.6em" color="#bbd0e1"/></div> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: 0,
      bottomIcon: ['wap-home', 'more-o', 'user-circle-o']
    };
  },
  methods: {
    changeTab(index) {
      this.activeIndex = index;
    }
  }
};
</script>
<style lang="less" scoped>
.home-wrap {
  width: 100%;
  .bottom-fix {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
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

