/**
 * Created by Rekey on 2016/9/11.
 */
const log4js = require('./libs/log.js');
const systemLogger = log4js.getLogger('system');
const app = require('./app.js');

// 加载中间件
require('./middleware/index.js');
// 加载路由
require('./routers/index.js');

app.listen(3000);

systemLogger.info('app', 'start', 'port', 3000);