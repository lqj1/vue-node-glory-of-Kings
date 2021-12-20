// 接受的app参数来源于外层的index.js
module.exports = app => {
  const express = require('express');
  const router = express.Router(); // express的子路由
  // 导入models中的Category.js
  const Category = require('../../models/Category');
  router.post('/categories', async (req, res) => {
    // 创建数据,数据来源是客户端提交过来的数据
    const model = await Category.create(req.body);
    res.send(model); // 发回客户端,让客户端知道创建完成了
  });
  app.use('/admin/api', router); // 挂载子路由
};
