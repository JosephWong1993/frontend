// 入口文件
// 模拟静态资源服务器（Apache服务器)

// 加载 express 模块
const express = require('express');
const path = require('path');

// 创建 app 对象
var app = express();

// // 处理静态资源的方法
// var fn = express.static(path.join(__dirname, 'public'));
// console.log(fn.toString());
// // 注册路由
// // /index.html
// app.use('/', fn);

// // 这种写法完全等价于上面的写法
// // 参数1叫做：虚拟路径
// app.use('/xxx', express.static(path.join(__dirname, 'public')));

// /index.html
// /xxx/index.html

// 问题1：
// app.use('/xxx', express.static(path.join(__dirname, 'public')));
// app.use('/www', express.static(path.join(__dirname, 'public')));

// 问题2：
app.use('/xxx', express.static(path.join(__dirname, 'public')));
app.use('/xxx', express.static(path.join(__dirname, 'pp')));

// 启动服务
app.listen(9999, function () {
    console.log('http://localhost:9999');
});