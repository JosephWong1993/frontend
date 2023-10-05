// 入口文件

// ----------------------------实现了一个基本的 Hello World
// // 1. 加载 express 模块
// const express = require('express');
//
// // 2. 创建一个 app 对象（类似于创建一个 server 对象）
// const app = express();
//
// // 通过中间件监听指定路由的请求
// app.get('/index', function (req, res) {
//     // body...
//     // res.end('hello world!你好世界!');
//     res.send('Hello World.你好世界！');
//
//     // res.end() 和 res.send() 区别
//     // 1. 参数类型区别：
//     // - res.send() 参数可以是a Buffer object,a String,an object,an Array.
//     // - res.end() 参数类型只能是 Buffer 对象或者是字符串
//     // 2. res.send() 会自动发送更多的响应报文头，其中就包括 Content-Type: text/html; charset=utf-8，所有没有乱码
// });
//
// // 3，启动服务
// app.listen(9092, function () {
//     console.log('http://localhost:9092');
// });

//------------------------express 中注册路由的方法
// 1. 加载 express 模块
const express = require('express');

// 2. 创建一个 app 对象（类似于创建一个 server 对象）
const app = express();

// ----------------------注册路由---------------
// // 通过中间件监听指定路由的请求
// // req.url 中的 pathname 部分必须和 /index 一致
// app.get('/index', function (req, res) {
//     res.send('Hello World.你好世界！');
// });

// // 1.在进行路由匹配的时候不限定方法，什么请求方法都可以
// // 2.请求路径中的第一部分只要与/index 相等即可，并不要求请求路径(pathname)完全匹配
// app.use('/index', function (req, res) {
//     res.send('hello world!你好世界！');
// });

// 通过正则表达式注册路由
// app.get(/^\/index(\/.+)*$/, function (req, res) {
//     res.send('Hello World.你好世界！');
// });

// 通过req.params获取路由参数
app.get('/news/:years/:month/:day', function (req, res) {
    // console.log(req.params);
    res.send(req.params);
});

// app.get() 和 app.use() 注册路由的区别
// app.all()
// 通过 app.all() 注册路由：1，不限定请求方法；2，请求的路径的pathname必须完全限定
// app.all('/index', function (req, res) {
//     res.send('hello world！你好世界！');
// });

// 注册一个请求 / 的路由
app.get('/', function (req, res) {
    res.send("Index");
});

// 含义：
// 1. 请求方法必须是 get
// 2. 请求路径的 pathname 必须等于（===）/submit
app.get('/submit', function (req, res) {
    res.send("submit");
});

app.get('/item', function (req, res) {
    res.send("item");
});

app.get('/add', function (req, res) {
    res.send('get 请求 /add');
});

app.post('/add', function (req, res) {
    res.send('post 请求 /add');
});

// 3，启动服务
app.listen(9092, function () {
    console.log('http://localhost:9092');
});