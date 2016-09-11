/**
 * Created by Rekey on 2016/9/11.
 */
const co = require('co');
const app = require('../../app.js');
const KoaRouter = require('koa-router');
const router = new KoaRouter({
  prefix: '/api'
});

router.get('/', co.wrap(function *(ctx, next) {
  ctx.body = {
    errno: 0,
    data: ctx
  };
}));

router.get('/user', co.wrap(function *(ctx, next) {
  ctx.body = {
    errno: 0,
    data: ctx
  };
}));

app.use(router.routes()).use(router.allowedMethods());