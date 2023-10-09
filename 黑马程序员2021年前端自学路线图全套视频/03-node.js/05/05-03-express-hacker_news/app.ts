// app.js 模块职责：负责启动服务

// 1. 加载 express 模块
const express = require('express');
// 加载 config.js 模块
const config = require('./config.js');
// 加载路由模块
const router = require('./router.js');

// 2. 创建 app 对象
const app = express();

// 3. 注册路由
router(app);

// 4. 启动服务
app.listen(config.port, function () {
    console.log('/http://localhost:' + config.port)
});
