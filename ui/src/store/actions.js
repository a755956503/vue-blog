import Request from '../config/request';
import * as Urls from '../config/urls';
import * as Types from './types';
async function getInitData({state, commit, dispatch}){
  try {
    const result = await Request.get(Urls.BLOG_GET);
    if (result.list) {
      commit(Types.INITDATA_GET_SUCCESS, { initData: result.list });
    }
  } catch (error) {
    
  }
}
export default {
  getInitData
};