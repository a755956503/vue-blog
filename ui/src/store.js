import Vue from 'vue';
import Vuex from 'vuex';
import actions from './store/actions';
import mutations from './store/mutations';
import state from './store/state';

Vue.use(Vuex);

const debug = process.env.NODE_DEV !== 'production';
export default new Vuex.Store({
  actions,
  mutations,
  state,
  strict: debug
});