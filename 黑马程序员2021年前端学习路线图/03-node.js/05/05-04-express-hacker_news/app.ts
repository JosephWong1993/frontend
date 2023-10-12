// app.js 模块职责：负责启动服务

// 1. 加载 express 模块
const express = require('express');
// 加载 config.js 模块
const config = require('./config.js');
// 加载路由模块
const router = require('./router.js');

// 2. 创建 app 对象
const app = express();

console.log(router.toString());

// 3. 注册路由
// 设置 app 与 router 相关联
// app.use('/', router);
app.use(router);

// 4. 启动服务
app.listen(config.port, function () {
    console.log('/http://localhost:' + config.port)
});
