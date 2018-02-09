import Koa from 'koa';
const bodyparser  = require('koa-bodyparser');
// const bodyParser = require('body-parser');
// import multer from 'koa-multer';
import router from './routers';

const app = new Koa();
const port = process.env.PORT || 8989;


// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())
app.use(bodyparser());
app.use(router);
app.use(async (ctx) => {
  console.log('get request');
});
(async () => {
  try {
    await app.listen(port);
  } catch(e) {
    
  }
})();