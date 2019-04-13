import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isDev:process.env.NODE_ENV == 'development',
    activeIndex: 0
  },
  mutations: {
    updateActiveIndex: function (state, payload) {
      state.activeIndex = payload;
    },
  },
  actions: {},
  modules: {}
});
