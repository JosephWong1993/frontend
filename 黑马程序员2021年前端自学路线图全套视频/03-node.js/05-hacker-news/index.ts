// 当前项目（包）的入口文件

// 1 加载 http 模块
import http from 'http';

http.createServer(function (req, res) {
    // 设计路由
    // 当用户请求 / 或 /index 时，显示新闻列表 - get 请求
    // 当用户请求 /item 时，显示新闻详情 - get 请求
    // 当用户请求 /submit 时，显示添加新闻页面 - get 请求
    // 当用户请求 /add 时，将用户提交的新闻保存到 data.json 文件中 - get 请求
    // 当用户请求 /add 时，将用户提交的新闻保存到 data.json 文件中 - post 请求
}).listen(49090, function () {
    console.log('http://localhost:49090');
});