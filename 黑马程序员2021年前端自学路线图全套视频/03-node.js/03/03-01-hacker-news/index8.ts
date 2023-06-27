// 当前项目（包）的入口文件

// 封装一个 render() 函数
// 将 render 函数挂载到 res 对象上，可以通过 res.render() 来访问
// 实现 get 方式添加新闻
// - 实现在原来list数组的基础上追加新闻，而不是覆盖
// 实现post方式提交新闻
// 实现首页显示新闻列表
// 实现显示新闻详情页
// 封装读取 data.json 文件和写入 data.json 文件的方法

// 1 加载 http 模块
import http from 'http';
import fs from 'fs';
import path from 'path';
import mime from 'mime';
import url from 'url';
import * as querystring from "querystring";
import _ from 'underscore';

// 2 创建服务
http.createServer(function (req, res) {
    // 为 res 对象添加一个 render() 函数，方便后续使用
    // 因为现在渲染的 index.html 中需要用到模板数据，所以给 render 函数增加了第二个参数
    // 第二个参数的作用就是用来传递 html 页面中要使用的模板数据
    res.render = function (filename: string, tplData) {
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

    // 将用户请求的url和method转换为小写字母
    req.url = req.url.toLowerCase();
    req.method = req.method.toLowerCase();

    // 通过 url 模块，调用 url.parse() 方法解析用户请求的url (req.url)
    const urlObj = url.parse(req.url, true);

    // 先根据用户请求的路径（路由），将对应的HTML页面显示出来
    if ((req.url === '/' || req.url === '/index') && req.method === 'get') {
        // 1. 读取 data.json 文件中的数据，并将读取到的数据转换为 list 数组
        readNewsData(function (list) {
            // 2. 在服务器端使用模板引擎，将 list 中的数据和 index.html 文件中的内容结合，渲染给客户端
            // 读取 index.html 并返回
            res.render(path.join(__dirname, 'views', 'index.html'), {list: list});
        });
    } else if (req.url === '/submit' && req.method === 'get') {
        // 读取 submit.html 并返回
        res.render(path.join(__dirname, 'views', 'submit.html'));
    } else if (urlObj.pathname === '/item' && req.method === 'get') {
        // 1.获取当前用户请求的新闻的 id
        // urlObj.query.id
        // 2.读取 data.json 文件中的数据，根据 id 找到对应的新闻
        readNewsData(function (list_news) {
            let model = null;

            // 循环 list_news 中的数据，找到和 id 值相等的数据
            for (let i = 0; i < list_news.length; i++) {
                // 判断集合中是否有与用户提交的 id 相等的新闻
                if (list_news[i].id.toString() === urlObj.query.id) {
                    // 如果找到了相等的新闻，则将其记录下来
                    model = list_news[i];
                    break;
                }
            }

            if (model) {
                // 3.调用 res.render() 函数进行模板引擎的渲染
                res.render(path.join(__dirname, 'views', 'details.html'), {item: model});
            } else {
                res.end('No Such Item');
            }
        });
    } else if (req.url.startsWith('/add') && req.method === 'get') {
        // 此处，读取文件的时候可以直接写一个utf8编码，这样的话，回调函数中的data就是一个字符串了
        readNewsData((list) => {
            // 在把新闻添加到list之前，为新闻增加一个 id 属性
            urlObj.query.id = list.length;

            // 向数组对象 list 中 push 一条新闻
            list.push(urlObj.query);

            // 2 把用户提交的新闻数据保存到 data.json 文件中
            // 把 list 数组中的数据写入到 data.json 文件中
            fs.writeFile(path.join(__dirname, 'data', 'data.json'), JSON.stringify(list), function (err) {
                if (err) {
                    throw err;
                }

                console.log('ok');

                // 设置响应报文头，通过响应报文头告诉浏览器，执行一次页面跳转操作
                // 3 跳转到新闻列表页
                // 重定向
                res.statusCode = 302;
                res.statusMessage = 'Found';
                res.setHeader('Location', '/');
                res.end();
            });
        });
    } else if (req.url === '/add' && req.method === 'post') {
        // 读取data.json
        readNewsData(function (list) {
            const array = [];
            req.on("data", function (chunk) {
                // 此处的chunk参数，就是浏览器本次提交过来的一部分数据
                // chunk的数据类型时Buffer(chunk就是一个Buffer对象)
                array.push(chunk);
            });

            // 监听 request 对象的 end 事件
            // 当 end 事件被触发的时候，表示所有数据都已经提交完毕了
            req.on('end', function () {
                // 在这个事件中只要把 array 中的所有数据汇总起来就好了
                // 把 array 中的每个 buffer 对象，集合起来转换为一个 buffer 对象
                const postBodyBuffer = Buffer.concat(array);
                // console.log(postBody);
                // 把获取到的 buffer 对象转换为一个字符串
                const postBodyStr = postBodyBuffer.toString('utf-8');
                // 把 post 请求的查询字符串，转换为一个 json 对象
                // title=abc&url=abcabc&text=abcabcabc
                // {title:'abc',url:'abcabc',text:'abcabcabc'}
                // JSON.parse()
                const postBody = querystring.parse(postBodyStr);
                console.log(postBody);

                // 在把新闻添加到list之前，为新闻增加一个 id 属性
                postBody.id = list.length;

                list.push(postBody);

                writeNewsData(JSON.stringify(list), () => {
                    // 重定向
                    res.statusCode = 302;
                    res.statusMessage = 'Found';
                    res.setHeader('Location', '/');
                    res.end();
                });
            })
        })

        // 表示 post 方法提交一条新闻
        // 1.读取data.json文件中的数据
        readNewsData((list) => {
            // 2.获取用户post提交的数据
            // 因为post提交数据的时候，数据量可能比较大，所以会分多次进行提交
            // 此时要想在服务器中获取用户提交的所有数据，就必须监听request事件的data事件（因为每次浏览器提交一部分数据到服务器就会触发一次data事件）
            // 那么，什么时候才表示浏览器把所有数据都提交到服务器了呢？就是当request对象的end事件被触发的时候。

            // 监听request的对象的data事件和end事件代码如下
            // 声明一个数组，用来保存用户每次提交过来的数据

        });
    } else if (req.url.startsWith('/resources') && req.method === 'get') {
        // 如果用户请求是以 /resources 开头，并且是 get 请求，就认为用户是要请求静态资源
        res.render(path.join(__dirname, req.url));
    } else {
        res.writeHead(404, 'Not Found', {
            'Content-Type': 'text/html; charset=utf-8'
        });
        res.end('404, Page Not Found');
    }
}).listen(9090, function () {
    console.log('http://localhost:9090');
});

// 封装一个读取data.json文件的函数
function readNewsData(callback: (list: any) => void) {
    fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf-8', function (err, data) {
        if (err && err.code !== 'ENOENT') {
            throw err;
        }
        const list = JSON.parse(data || '[]');

        // 通过调用回调函数 callback() 将读取到的数据 list 传递出去
        callback(list);
    });
}

// 封装一个写入data.json文件的函数
function writeNewsData(data: string, callback: () => void) {
    fs.writeFile(path.join(__dirname, 'data', 'data.json'), data, function (err) {
        if (err) {
            throw err;
        }

        // 调用callback()来执行当写入数据完毕后的操作
        callback();
    });
}