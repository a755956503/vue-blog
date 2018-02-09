import Route from 'koa-router';
import User from '../models/User';
const router = new Route();
router.post('/user', async (ctx, next) => {
  const body = ctx.request.body;
  const user = {
    username: body.username,
    password: body.password
  };
  console.log(user);
  ctx.body = 'success';
  // User.create(user);
})
router.use('/test', async (ctx, next) => {
  ctx.body = 'success';
  console.log('test');
  // User.create(user);
})
export default router.routes();