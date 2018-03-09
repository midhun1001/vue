// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0,
    username: 'no user'
  },
  getters: {
    increaseCount: state => {
      return state.count + 1
    }
  },
  mutations: {
    setValue (state, payload) {
      state.username = payload.message
      return state;
    }
  },
  actions: {
    setValue (context, payload) {
      context.commit('setValue', payload)
    }
  }
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
});
