// 根据用户不同请求，做出不同响应（响应现有的HTML文件）

// 加载http模块
import * as http from 'http';
// 加载fs模块
import * as fs from 'fs';
// 加载path模块
import * as path from 'path';

http.createServer(function (req, res) {
    // 通过req.url获取用户请求的路径，根据不同的请求路径服务器做出不同的响应
    if (req.url === '/' || req.url === '/index') {
        // 读取index.html文件
        fs.readFile(path.join(__dirname, 'htmls', 'index.html'), function (err, data) {
            if (err) {
                throw err;
            }

            //把读取到的index.html中的内容直接发送给浏览器
            res.end(data);
        });
    } else if (req.url === '/login') {
        fs.readFile(path.join(__dirname, 'htmls', 'login.html'), function (err, data) {
            if (err) {
                throw err;
            }

            //把读取到的index.html中的内容直接发送给浏览器
            res.end(data);
        });
    } else if (req.url === '/list') {
        fs.readFile(path.join(__dirname, 'htmls', 'list.html'), function (err, data) {
            if (err) {
                throw err;
            }

            //把读取到的index.html中的内容直接发送给浏览器
            res.end(data);
        });
    } else if (req.url === '/register') {
        fs.readFile(path.join(__dirname, 'htmls', 'register.html'), function (err, data) {
            if (err) {
                throw err;
            }

            //把读取到的index.html中的内容直接发送给浏览器
            res.end(data);
        });
    } else if (req.url === '/images/index.png') {
        // 表示用户要请求images下的index.png图片
        fs.readFile(path.join(__dirname, 'images', 'index.png'), function (err, data) {
            if (err) {
                throw err;
            }
            res.setHeader('Content-Type', 'image/png');
            res.end(data);
        });
    } else if (req.url === '/css/index.css') {
        // 表示用户要请求images下的index.png图片
        fs.readFile(path.join(__dirname, 'css', 'index.css'), function (err, data) {
            if (err) {
                throw err;
            }
            res.setHeader('Content-Type', 'text/css');
            res.end(data);
        });
    } else {
        fs.readFile(path.join(__dirname, 'htmls', '404.html'), function (err, data) {
            if (err) {
                throw err;
            }

            //把读取到的index.html中的内容直接发送给浏览器
            res.end(data);
        });
    }
}).listen(49090, function () {
    console.log('http://localhost:49090');
});