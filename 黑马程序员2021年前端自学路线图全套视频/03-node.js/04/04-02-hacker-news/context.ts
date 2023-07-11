// 该模块负责对 req 和 res 对象进行扩展

// 期望：
// 1. 为 req 增加一个 query 属性，该属性保存的是用户 get 请求提交过来的数据
// - req.query
// 2. 为 req 增加一个 pathname 属性
// - req.pathname
// 3. 为 res 增加一个 render 函数

import url from "url";
import fs from "fs";
import _ from 'underscore';
import mime from "mime";

// 让当前模块对外暴露一个函数，通过这个函数将 index.js 中的 req 和 res 传递到当前 context.js 这个模块中
module.exports = function (req, res) {
    const urlObj = url.parse(req.url.toLowerCase(), true);
    // 1. 为 req 增加一个 query 属性
    req.query = urlObj.query;
    // 2. 为 req 增加一个 pathname 属性
    req.pathname = urlObj.pathname;

    // 3. 为 res 增加一个 render 函数
    res.render = function (filename: string, tplData: any) {
        fs.readFile(filename, function (err, data) {
            if (err) {
                res.writeHead(404, 'Not Found', {'Content-Type': 'text/html;charset=utf-8'});
                res.end(data);
                return;
            }

            // 如果用户传递了模板数据，那么就使用 underscore 的 template 方法进行替换
            // 如果用户没有传递模板数据，那么就不进行替换
            if (tplData) {
                // 如果用户传递了模板数据，表示要进行模板替换
                const fn = _.template(data.toString('utf-8'));
                data = fn(tplData);
            }
            res.setHeader('Content-Type', mime.getType(filename));
            res.end(data);
        });
    };
};

// 步骤：
// 1. 思考，该模块中要封装什么代码？
// 2. 思考，这些代码有用到外部的数据吗？如果用到了，是否需要通过参数将这些数据传递到当前模块中
// 3. 当前模块对外需要暴露的东西（module.exports的值）