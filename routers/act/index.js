/**
 * Created by Rekey on 2016/9/15.
 */
'use strict';
const log4js = require('../../libs/log.js');
const middlewareLogger = log4js.getLogger('middleware');
const requestLogger = log4js.getLogger('request');

module.exports = {
  render: function *(ctx) {
    ctx.body = {
      errno: 0,
      data: {}
    };
    requestLogger.info(ctx.ip, ctx.request.url, ctx.status, `action`);
  }
};