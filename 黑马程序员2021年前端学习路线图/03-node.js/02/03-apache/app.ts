// 加载http模块
import * as http from 'http';
import * as path from 'path';
import * as fs from 'fs';
import * as mime from 'mime';

// 创建服务
http.createServer(function (req, res) {
    // 获取用户请求的路径
    // req.url

    if (req.url === undefined) {
        res.end();
        return;
    }

    // 获取public目录的完整路径
    const publicDir = path.join(__dirname, 'public');

    // 根据public的路径和用户请求的路径，最终计算出用户请求的静态资源的完整路径
    const filename: string = path.join(publicDir, req.url);
    // console.log(filename);
    // res.end('over');

    // 根据文件的完整路径去读取该文件，如果读取到了，则把文件返回给用户，如果读取不到，则返回404
    fs.readFile(filename, function (err, data) {
        if (err) {
            res.end('文件不存在 404');
        } else {
            let type = mime.getType(filename);
            if (type === null) {
                res.end();
                return;
            }
            // 通过第三方模块mine，来判断不同的资源对应的Content-Type类型
            res.setHeader('Content-Type', type);
            // 如果找到了用户要读取的文件，那么直接把文件返回给用户
            res.end(data);
        }
    });
}).listen(49090, function () {
    console.log('http://localhost:49090');
});