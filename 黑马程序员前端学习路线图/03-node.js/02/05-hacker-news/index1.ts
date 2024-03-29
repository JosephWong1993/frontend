// 当前项目（包）的入口文件

// 1 加载 http 模块
import http, {ServerResponse} from 'http';
import fs from 'fs';
import path from 'path';
import mime from 'mime';

// 2 创建服务
http.createServer(function (req, res) {
    // 设计路由
    // 当用户请求 / 或 /index 时，显示新闻列表 - get 请求
    // 当用户请求 /item 时，显示新闻详情 - get 请求
    // 当用户请求 /submit 时，显示添加新闻页面 - get 请求
    // 当用户请求 /add 时，将用户提交的新闻保存到 data.json 文件中 - get 请求
    // 当用户请求 /add 时，将用户提交的新闻保存到 data.json 文件中 - post 请求

    // 将用户请求的url和method转换为小写字母
    req.url = req.url.toLowerCase();
    req.method = req.method.toLowerCase();

    // 先根据用户请求的路径（路由），将对应的HTML页面显示出来
    if ((req.url === '/' || req.url === '/index') && req.method === 'get') {
        // 读取 index.html 并返回
        render(path.join(__dirname, 'views', 'index.html'), res);
    } else if (req.url === '/submit' && req.method === 'get') {
        // 读取 submit.html 并返回
        render(path.join(__dirname, 'views', 'submit.html'), res);
    } else if (req.url === '/item' && req.method === 'get') {
        // 读取 details.html 并返回
        render(path.join(__dirname, 'views', 'details.html'), res);
    } else if (req.url === '/add' && req.method === 'get') {
        // 表示 get 方法提交一条新闻
    } else if (req.url === '/add' && req.method === 'post') {
        // 表示 post 方法提交一条新闻
    } else if (req.url.startsWith('/resources') && req.method === 'get') {
        // 如果用户请求是以 /resources 开头，并且是 get 请求，就认为用户是要请求静态资源
        render(path.join(__dirname, req.url), res);
    } else {
        res.writeHead(404, 'Not Found', {
            'Content-Type': 'text/html; charset=utf-8'
        });
        res.end('404, Page Not Found');
    }
}).listen(49090, function () {
    console.log('http://localhost:49090');
});

// 封装一个render函数
function render(filename: string, res: ServerResponse) {
    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, 'Not Found', {'Content-Type': 'text/html;charset=utf-8'});
            res.end(data);
            return;
        }
        res.setHeader('Content-Type', mime.getType(filename));
        res.end(data);
    });
}