// 加载 ejs 模块
const ejs = require('ejs');
const path = require('path');

// // render
// const html = '<h1><%= username %></h1>'
// const result = ejs.render(html, {username: '张三'});
// console.log(result);

// renderFile

ejs.renderFile(path.join(__dirname, 'index.html'), {
    title: '这是一个演示标题',
    msg: '你好世界！'
}, function (err, result) {
    console.log(result);
});