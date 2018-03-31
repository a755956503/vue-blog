import * as Types from './types';

const mutations = {
  [Types.INITDATA_GET_SUCCESS](state, payload) {
    state.initData = payload.initData;
  }
}
export default mutations;