const express = require('express');
const app = express();
app.use(require('cors')); // 使用跨域模块
app.use(express.json()); // 使用routes/admin/index.js中的mongoose的中间件
require('./routes/admin')(app); // 引用的是函数，所以加括号并将参数传进去
require('./plugins/db')(app);
app.listen(3000, () => {
  console.log('App listening on port 3000');
});
