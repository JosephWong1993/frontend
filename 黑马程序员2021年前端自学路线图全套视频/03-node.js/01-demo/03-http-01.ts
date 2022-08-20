// 创建一个简单的http服务器程序
// 加载http模块
import http from 'http';

// 创建一个http服务对象
const server = http.createServer();

// 监听用户的请求事件（request事件）
// request对象包含了用户请求报文中的所有内容，通过request对象可以获取所有用户提交过来的数据
// response对象用来向用户响应一些数据，当服务器要向客户端响应数据的时候必须使用response对象
// 有了request对象和response对象，就既可以获取用户提交的数据，也可以向用户响应数据了
server.on('request', function (req, res) {
    // req.url

    // 解决乱码的思路：服务器通过设置http响应报文头，告诉浏览器使用相应的编码来解析网页
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    res.write('Hello <h1>World</h1>!!!你好世界！');

    // 对应每一个请求，服务器必须结束响应，否则客户端（浏览器）会一直等待服务器响应结束
    res.end();
});

server.listen(8080, function () {
    console.log('服务器启动了，请访问：http://localhost:8080');
});