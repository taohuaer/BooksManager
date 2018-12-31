// 图书管理入口文件
const express = require('express');
const template = require('art-template');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./router.js');
const app = express();

// 启动静态资源服务
app.use('/www', express.static('public')); //加一个虚拟路径www

// 设置模板路径
app.set('views', path.join(__dirname, 'views'));
// 设置模板引擎
app.set("view engine", "art");
// 让express兼容art-template
app.engine('art', require('express-art-template'));

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
    // 配置路由
app.use(router)
app.listen(3000, (req, res) => {
    console.log('app is running')
})

