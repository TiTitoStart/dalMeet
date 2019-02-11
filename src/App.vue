<template>
  <div id="app">
      <Content :style="{}">
        <router-view></router-view>
      </Content>
  </div>
</template>
<script>
  import meau from './assets/js/meau';
  export default {
    data() {
      return {
        meau: meau.menus

      };
    },
    components: {

    }
  };

</script>
<style scoped>
  .layout {
    background: #f5f7f9;
    position: relative;
    overflow: hidden;
  }

  .layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }

  .layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }

  .ivu-layout-header {
    height: 50px;
    line-height: 50px;
  }

</style>
<style lang="less">


</style>
