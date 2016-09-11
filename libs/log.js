/**
 * Created by Rekey on 2016/9/11.
 */
const log4js = require('log4js');
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
    return log4js.getLogger(category || '');
  }
};