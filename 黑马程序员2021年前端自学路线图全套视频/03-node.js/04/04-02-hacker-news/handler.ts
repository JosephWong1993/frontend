// 该模块负责对具体的业务进行处理

// 步骤：
// 1. 思考，该模块中要封装什么代码？
// 2. 思考，这些代码有用到外部的数据吗？如果用到了，是否需要通过参数将这些数据传递到当前模块中
// 3. 当前模块对外需要暴露的东西（module.exports的值

// 处理 /index路由对应的请求
// 1. 读取 data.json 文件中的数据，并将读取到的数据转换为 list 数组
readNewsData(function (list) {
    // 2. 在服务器端使用模板引擎，将 list 中的数据和 index.html 文件中的内容结合，渲染给客户端
    // 读取 index.html 并返回
    res.render(path.join(__dirname, 'views', 'index.html'), {list: list});
});

// 处理/submit的请求
// 读取 submit.html 并返回
res.render(path.join(__dirname, 'views', 'submit.html'));