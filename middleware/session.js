/**
 * Created by Rekey on 2016/9/11.
 */
const session = require('koa-session');
const convert = require('koa-convert');
const log4js = require('../libs/log.js');
const middlewareLogger = log4js.getLogger('middleware');

const app = require('../app.js');
app.use(convert(session(app)));

middlewareLogger.info('session', 'start');