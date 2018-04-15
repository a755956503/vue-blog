import Request from '../config/request';
import * as Urls from '../config/urls';
import * as Types from './types';

async function getInitData({ commit }) {
  try {
    const result = await Request.get(Urls.BLOG_GET);
    if (result.list) {
      commit(Types.INITDATA_GET_SUCCESS, { initData: result.list });
    }
  } catch (error) {
    
  }
}

async function addArticle({ dispatch }, { article }) {
  try {
    await Request.post(Urls.ARTICLE_ADD, article);
    console.log(JSON.stringify(article));
    dispatch('getInitData');
  } catch (error) {
    
  }
}
export default {
  getInitData,
  addArticle,
};
