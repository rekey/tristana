/**
 * Created by Rekey on 2016/9/11.
 */
const co = require('co');
const app = require('../app.js');

app.use(co.wrap(function *(ctx, next) {
  const start = Date.now();
  yield next();
  const ms = Date.now() - start;
  ctx.set('x-response-time', `${ms}ms`);
  ctx.body = {
    ms: ms
  };
}));