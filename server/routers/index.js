import Router from 'koa-router';
import User from './user';
import Blog from './blog';

const router = new Router();
router.use(async (ctx, next) => {
  try {
    await next();
  } catch(error) {
    ctx.status = 400;
    ctx.body = {
      code: error.code,
      message: error.message || error.errmsg || error.msg || 'unknown_error',
      error
    };
  }
});
router.use('/user', User);
router.use('/blog', Blog);
export default router.routes();