/**
 * Created by Rekey on 2016/9/11.
 */
const log4js = require('./libs/log.js');
const systemLogger = log4js.getLogger('system');
const app = require('./app.js');
require('./middleware/index.js');
require('./routers/index.js');
app.listen(3000);
systemLogger.info(`app listen 3000`);