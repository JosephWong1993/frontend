// 根据用户的不同请求，服务器做出不同的响应

// 加载http模块
import http from 'http';

// 创建http服务
http.createServer(function (req, res) {
    // 获取用户请求的路径
    // console.log(req.url);
    // 结束响应
    // res.end();

    res.setHeader('Content-Type', 'text/plain;charset=utf-8');
    // 通过req.url获取用户请求的路径，根据不同的请求路径服务器做出不同的响应
    if (req.url === '/' || req.url === '/index') {
        // res.write('hello index');
        // res.end();
        res.end('Hello Index');
    } else if (req.url === 'login') {
        res.end('Hello login');
    } else if (req.url === '/list') {
        res.end('Hello List');
    } else if (req.url === '/register') {
        res.end('Hello Register');
    } else {
        res.end('404，not Found。客户端错误！');
    }
}).listen(8080, function () {
    console.log('http://localhost:8080');
});
