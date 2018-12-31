// 渲染主页  index.art
// 路由模块
const express = require('express')
const app = express();
const service = require('./service.js');
const router = express.Router();
// 渲染主页
router.get('/', service.showIndex)
    // 跳转到图书编辑页面
router.get('/toEditBook', service.toEditBook)
    // 编辑图书提交表单
router.post('/editBook', service.editBook)
    // 删除图书信息
router.get('/deleteBook', service.deleteBook)
    // 添加图书信息
router.get('/toAddBook', service.toAddBook)
    // 添加图书提交表单
router.post('/addBook', service.addBook)

module.exports = router;

