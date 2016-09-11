/**
 * Created by Rekey on 2016/9/11.
 */
const app = require('./app.js');
console.log(`app listen 3000`);
require('./middleware/index.js');
app.listen(3000);