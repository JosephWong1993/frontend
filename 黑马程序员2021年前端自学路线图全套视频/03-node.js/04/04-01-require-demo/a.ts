// 加载b.js模块
require('./b.js');

// 下面这些加载模块都是从缓存里面获取的，所以不会再去之下b.js文件了
require('./b.js');

require('./b.js');

require('./b.js');

require('./b.js');

require('./b.js');

require('./b.js');

require('./b.js');

// Module
// module
console.log(module.paths);
// [
//     'E:\\self-taught-frontend\\黑马程序员2021年前端自学路线图全套视频\\03-node.js\\04\\04-01-require-demo\\node_modules',
//     'E:\\self-taught-frontend\\黑马程序员2021年前端自学路线图全套视频\\03-node.js\\04\\node_modules',
//     'E:\\self-taught-frontend\\黑马程序员2021年前端自学路线图全套视频\\03-node.js\\node_modules',
//     'E:\\self-taught-frontend\\黑马程序员2021年前端自学路线图全套视频\\node_modules',
//     'E:\\self-taught-frontend\\node_modules',
//     'E:\\node_modules'
// ]
