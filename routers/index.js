/**
 * Created by Rekey on 2016/9/11.
 */
const path = require('path');
const fs = require('fs');
const co = require('co');
const log4js = require('../libs/log.js');
const middlewareLogger = log4js.getLogger('middleware');
const app = require('../app.js');

function notFoundAct() {
  return {
    render: function *(ctx) {
      ctx.body = {
        errno: 404,
        data: {}
      };
      ctx.status = 404;
    }
  }
}

function getAction(requestUrl) {
  const requestUrlArr = requestUrl.slice(1).split('/');
  const action = requestUrlArr[0];
  const modulePath = path.resolve(__dirname, `./act/${action}.js`);
  return new Promise((resolve) => {
    fs.exists(modulePath, (exists) => {
      if (!exists) {
        resolve(notFoundAct());
        return;
      }
      const actModule = require(modulePath);
      resolve(actModule);
    });
  });
}

require('./api/index.js');

app.use(co.wrap(function *(ctx, next) {
  if (ctx.status === 404) {
    const action = yield getAction(ctx.request.path);
    yield action.render(ctx);
    yield next();
  }
}));

middlewareLogger.info('router', 'start');