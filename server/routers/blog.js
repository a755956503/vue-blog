import Router from 'koa-router';
const router = new Router();
router.get('/list', (ctx, next) => {
  const list = [
    {
      title: '橘子皮秒开指纹锁”这是真的吗',
      content: '手机厂商采用新潮技术，得将用户信息安全等放在更优先位置，而不能看似功能强大，安全指数却跟不上，结果成了安全黑洞。据央视报道，近日，网上一篇《一块橘子皮就能秒开你的手机指纹锁 还能转账付款》的文章及视频引起了广泛的关注。里面提到，对于需要指纹验证的手机，通过使用一些简单的处理手段，任何人的指纹都可以解...'
      + '手机厂商采用新潮技术，得将用户信息安全等放在更优先位置，而不能看似功能强大，安全指数却跟不上，结果成了安全黑洞。据央视报道，近日，网上一篇《一块橘子皮就能秒开你的手机指纹锁 还能转账付款》的文章及视频引起了广泛的关注。里面提到，对于需要指纹验证的手机，通过使用一些简单的处理手段，任何人的指纹都可以解...'
    },
    {
      title: '橘子皮秒开指纹锁”这是真的吗',
      content: '手机厂商采用新潮技术，得将用户信息安全等放在更优先位置，而不能看似功能强大，安全指数却跟不上，结果成了安全黑洞。据央视报道，近日，网上一篇《一块橘子皮就能秒开你的手机指纹锁 还能转账付款》的文章及视频引起了广泛的关注。里面提到，对于需要指纹验证的手机，通过使用一些简单的处理手段，任何人的指纹都可以解...'
      + '手机厂商采用新潮技术，得将用户信息安全等放在更优先位置，而不能看似功能强大，安全指数却跟不上，结果成了安全黑洞。据央视报道，近日，网上一篇《一块橘子皮就能秒开你的手机指纹锁 还能转账付款》的文章及视频引起了广泛的关注。里面提到，对于需要指纹验证的手机，通过使用一些简单的处理手段，任何人的指纹都可以解...'
    },
    {
      title: '橘子皮秒开指纹锁”这是真的吗',
      content: '手机厂商采用新潮技术，得将用户信息安全等放在更优先位置，而不能看似功能强大，安全指数却跟不上，结果成了安全黑洞。据央视报道，近日，网上一篇《一块橘子皮就能秒开你的手机指纹锁 还能转账付款》的文章及视频引起了广泛的关注。里面提到，对于需要指纹验证的手机，通过使用一些简单的处理手段，任何人的指纹都可以解...'
      + '手机厂商采用新潮技术，得将用户信息安全等放在更优先位置，而不能看似功能强大，安全指数却跟不上，结果成了安全黑洞。据央视报道，近日，网上一篇《一块橘子皮就能秒开你的手机指纹锁 还能转账付款》的文章及视频引起了广泛的关注。里面提到，对于需要指纹验证的手机，通过使用一些简单的处理手段，任何人的指纹都可以解...'
    },
  ]
  ctx.body = {
    code: 0,
    result: {
      list
    }
  };
  next();
});
export default router.routes();