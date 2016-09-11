/**
 * Created by Rekey on 2016/9/11.
 */
const log4js = require('log4js');
const loggers = {};
log4js.configure({
  appenders: [
    {
      type: 'console',
      category: 'middleware'
    }, {
      type: 'console',
      category: 'request'
    }, {
      type: 'console',
      category: 'system'
    }
  ]
});
module.exports = {
  getLogger: (category) => {
    if (!loggers[category]) {
      const originLogger = log4js.getLogger(category || '');
      const logger = {};
      const methods = ['trace', 'debug', 'info', 'warn', 'error', 'fatal'];
      methods.forEach((method) => {
        logger[method] = function () {
          const args = [].join.call(arguments, '|');
          originLogger[method](args);
        };
      });
      loggers[category] = logger;
    }
    return loggers[category];
  }
};