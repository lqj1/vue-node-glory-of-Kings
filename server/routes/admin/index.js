// 接受的app参数来源于外层的index.js
module.exports = app => {
  const express = require('express');
  const router = express.Router(); // express的子路由
  router.post('/categories', async (req, res) => {});
  app.use('/admin/api', router); // 挂载子路由
};
