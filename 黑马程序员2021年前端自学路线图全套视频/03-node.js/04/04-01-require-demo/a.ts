// 加载b.js模块
// 一个模块，默认被require()加载后，返回的是一个对象{}
const b = require('./b.js');
console.log(b);
b("HHH666")

// 下面这些加载模块都是从缓存里面获取的，所以不会再去之下b.js文件了
require('./b.js');

// Module
// module
// console.log(module.paths);
// [
//     'E:\\self-taught-frontend\\黑马程序员2021年前端自学路线图全套视频\\03-node.js\\04\\04-01-require-demo\\node_modules',
//     'E:\\self-taught-frontend\\黑马程序员2021年前端自学路线图全套视频\\03-node.js\\04\\node_modules',
//     'E:\\self-taught-frontend\\黑马程序员2021年前端自学路线图全套视频\\03-node.js\\node_modules',
//     'E:\\self-taught-frontend\\黑马程序员2021年前端自学路线图全套视频\\node_modules',
//     'E:\\self-taught-frontend\\node_modules',
//     'E:\\node_modules'
// ]
