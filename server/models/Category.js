const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  // 定义模型的字段
  name: {
    type: String,
  },
});
// 导出mongoose模型,给admin里的index.js使用
module.exports = mongoose.model('Category', schema);
