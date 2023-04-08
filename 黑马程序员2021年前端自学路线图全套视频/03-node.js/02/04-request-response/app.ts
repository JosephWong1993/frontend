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

    // res.statusCode = 404;
    // res.statusMessage = 'Not Found';
    // res.setHeader('Content-Type', 'text/plain;charset=utf-8');
    // 通过res.writeHead()来实现
    // res.writeHead(404, 'Not Found', {
    //     'Content-Type': 'text/plain;charset=utf-8'
    // });
    res.writeHead(200, 'OK', {
        'Content-Type': 'text/plain;charset=utf-8'
    });

    // res.write()
    res.write('Hello world！你好，世界！！！');

    // 每个请求都必须要调用的一个方法 res.end()
    // 结束响应（请求）
    // 告诉服务器该响应的报文头，报文体等待全部响应完毕了，可以考虑本次响应结束
    // res.end()要响应数据的话，数据必须是String类型或者是Buffer类型
    res.end();

    // res.setHeader()来设置响应报文头
    // res.setHeader()要放在res.write()和res.end()之前设置
    // 因为即便我们不设置响应报文头，系统也会默认有响应报文头，并且默认发送给浏览器，当已经发送过响应报文头后，就不能再通过res.setHeader()来再次设置，否则就会报错
    // res.setHeader('Content-Type', 'text/plain;charset=utf-8');

    // 设置http响应状态码
    // res.statusCode 设置http响应状态码
    // res.statusMessage 设置http响应状态码对应的消息
    // res.statusCode = 404;
    // res.statusMessage = 'Not Found';

    // res.writeHead() 直接向客户端响应（写入）http响应报文头
    // 建议在res.write()和res.end()之前调用
}).listen(49091, function () {
    console.log('http://localhost:49091');
});