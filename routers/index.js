/**
 * Created by Rekey on 2016/9/11.
 */
const log4js = require('../libs/log.js');
const middlewareLogger = log4js.getLogger('middleware');

require('./api/index.js');

middlewareLogger.info('router', 'start');