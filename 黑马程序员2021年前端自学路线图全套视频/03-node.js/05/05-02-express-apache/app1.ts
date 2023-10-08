// 加载 express 模块
const express = require('express');
const path = require('path');

// 创建 app 对象
const app = express();

app.get('/', function (req, res) {
    // res.send({name: '张三', age: 18});

    // res.redirect('http://www.baidu.com');
    // res.redirect(301, 'http://www.baidu.com');

    // res.sendFile(path.join(__dirname, 'public', 'screenshot.jpg'), function (err) {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log('ok');
    // });

    res.status(404).send('文件不存在！');
});

app.listen(9000, function () {
    console.log('http://localhost:9000');
});