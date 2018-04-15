import Router from 'koa-router';
import Blog from '../models/Blog';
const router = new Router();
router.get('/list', async (ctx, next) => {
  const result = await Blog.getBlogs();
  console.log(result);
  ctx.body = {
    code: 0,
    result: {
      list: result
    }
  };
  next();
});
router.post('/article',async (ctx, next) => {
  const article = ctx.request.body;
  let result;
  const body = { code: 0 };
  if (article.title && article.content) {
    result = await Blog.addArticle(article);
    console.log(result);
  } else {
    body.code = 1;
  }
  ctx.body = body;
  next();
})
export default router.routes();