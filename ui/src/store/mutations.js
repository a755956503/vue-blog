import * as Types from './types';
import Cache from '../config/cache';

const mutations = {
  [Types.INITDATA_GET_SUCCESS](state, payload) {
    state.initData = payload.initData;
  },
  [Types.LOGIN_SUCCESS](state) {
    Cache.login();
    state.isLogin = 'logined';
  },
  [Types.ARTICLE_ADD_SUCCESS](state, payload) {
    state.initData = payload.initData;
  },
};
export default mutations;
