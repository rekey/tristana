/**
 * Created by Rekey on 2016/9/11.
 */
require('./api/index.js');

const log4js = require('../libs/log.js');
const middlewareLogger = log4js.getLogger('middleware');

middlewareLogger.info('router', 'start');