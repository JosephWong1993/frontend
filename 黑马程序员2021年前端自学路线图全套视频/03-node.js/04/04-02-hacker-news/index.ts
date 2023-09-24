// 模块一（服务模块）：负责启动服务
// 模块二（扩展模块）：负责扩展 req 和 res 对象，为 req 和 res 增加一些更方便好用的 api
// 模块三（路由模块）：负责路由判断
// 模块四（业务模块）：负责处理具体路由的业务的代码
// 模块五（数据操作模块）：负责进行数据库操作
// 模块六（配置模块）：负责保存项目中用到的配置信息

// 1 加载 http 模块
import * as http from 'http';

const context = require('./context.js');
const router = require('./router.js');

console.log('1');

let count = 0;

// 2 创建服务
http.createServer(function (req: any, res: any) {
    count++;
    console.log(count);

    console.log('哈哈');

    // 调用context.js模块的返回值（函数），并将req和res对象传递给context.js模块的返回值
    context(req, res);

    // 调用 路由模块的返回值（函数），并将req和res对象传递给router.js模块的返回值
    router(req, res);
}).listen(9090, function () {
    console.log('http://localhost:9090');
});
