import * as http from 'http';

http.createServer(function (req, res) {
    // 获取所有请求报文头
    // req.headers返回的是一个对象，这个对象中包含了所有的请求报文头
    // console.log(req.headers);

    // req.rawHeaders返回的是一个数组，数组中保存的都是请求报文头的字符串
    // console.log(req.rawHeaders);

    // httpVersion 获取请求客户端所使用的http版本
    // console.log(req.httpVersion);

    // method 获取客户端请求使用的方法（GET,POST）
    // console.log(req.method);

    // url 获取这次请求的路径（获取请求报文中的路径，不包含主机名称、端口号、协议）
    // console.log(req.url);
    // res.end('over');

    // res.write()
    res.write('Hello world！你好，世界！！！');

    // 每个请求都必须要调用的一个方法 res.end()
    // 结束响应（请求）
    // 告诉服务器该响应的报文头，报文体等待全部响应完毕了，可以考虑本次响应结束
    res.end();
}).listen(49091, function () {
    console.log('http://localhost:49091');
});