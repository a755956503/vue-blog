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
export default router.routes();