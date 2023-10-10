// 路由模块，主要负责路由判断

// 1. 创建一个 router 对象（router 对象即是一个对象，也是一个函数）
import express from "express";
import * as path from "path";
// 加载业务模块
const handler = require('./handler.js');
const router = express.Router();

// 2. 通过 router 对象设置（挂载）路由
router.get('/', handler.index);
router.get('/index', handler.index);

router.get('/submit', function (req, res) {
    // body...
});

router.get('/item', function (req, res) {
    // body...
});

router.get('/add', function (req, res) {
    // body...
});

router.post('/add', function (req, res) {
    // body...
});

// 实现对 resources 文件夹下的内容进行静态资源托管
router.use('/resources', express.static(path.join(__dirname, 'resources')));

// 3. 返回 router 对象
module.exports = router;