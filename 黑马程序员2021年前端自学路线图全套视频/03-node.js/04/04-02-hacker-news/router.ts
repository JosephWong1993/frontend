// 该模块负责封装所有路由判断的代码

// 步骤：
// 1. 思考，该模块中要封装什么代码？
// 2. 思考，这些代码有用到外部的数据吗？如果用到了，是否需要通过参数将这些数据传递到当前模块中
// 3. 当前模块对外需要暴露的东西（module.exports的值）

// 加载 handler.js模块
const handler = require('./handler.js');

module.exports = function (req, res) {
    // 先根据用户请求的路径（路由），将对应的HTML页面显示出来
    if ((req.pathname === '/' || req.pathname === '/index') && req.method === 'get') {
        handler.index(req, res);
    } else if (req.pathname === '/submit' && req.method === 'get') {
        handler.submit(req, res);
    } else if (req.pathname === '/item' && req.method === 'get') {
        handler.item(req, res);
    } else if (req.url.startsWith('/add') && req.method === 'get') {
        handler.addGet(req, res);
    } else if (req.pathname === '/add' && req.method === 'post') {
        handler.addPost(req, res);
    } else if (req.url.startsWith('/resources') && req.method === 'get') {
        handler.static(req, res);
    } else {
        handler.handlerErrors(req, res);
    }
};