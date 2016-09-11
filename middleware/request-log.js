/**
 * Created by Rekey on 2016/9/11.
 */
const co = require('co');
const app = require('../app.js');

app.use(co.wrap(function *(ctx, next) {
  console.log(ctx.request);
  console.log(ctx.ip);
  yield next();
}));