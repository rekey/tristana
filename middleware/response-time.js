/**
 * Created by Rekey on 2016/9/11.
 */
const co = require('co');
const app = require('../app.js');
const log4js = require('../libs/log.js');
const middlewareLogger = log4js.getLogger('middleware');
const requestLogger = log4js.getLogger('request');

app.use(co.wrap(function *(ctx, next) {
  requestLogger.info(ctx.ip, ctx.request.url);
  const start = Date.now();
  yield next();
  const ms = Date.now() - start;
  ctx.set('x-response-time', `${ms}ms`);
  requestLogger.info(ctx.ip, ctx.request.url, `${ms}ms`);
}));

middlewareLogger.info('response-time', 'start');