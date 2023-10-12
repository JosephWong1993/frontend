// 加载http模块
import * as http from 'http';
import * as path from 'path';
import * as fs from 'fs';
import * as mime from 'mime';

// 创建服务
http.createServer(function (req, res) {
    if (req.url === '/index.do' || req.url === '/index.html') {
        // 读取index文件并返回
        fs.readFile(path.join(__dirname, 'index.html'), function (err, data) {
            if (err) {
                throw err;
            }
            res.end(data);
        });
    } else if (req.url === '/haha.xxx') {
        fs.readFile(path.join(__dirname, 'index.png'), function (err, data) {
            if (err) {
                throw err;
            }
            res.setHeader('Content-Type', mime.getType('index.png') as string);
            res.end(data);
        });
    }
}).listen(49090, function () {
    console.log('http://localhost:49090');
});