// 执行文件操作
// 实现文件写入操作

import fs from 'fs'; // 加载文件操作模块,fs 模块
// 实现文件写入操作
const msg = 'Hello World，你好世界！';
// 调用fs.writeFile()进行文件写入
fs.writeFile('./hello.txt', msg, 'utf-8', function (err) {
    // 如果err===null,表示写入文件成功，没有错误！
    // 如果err里面不是null，就表示写入文件失败了！
    if (err) {
        console.log(`写文件出错啦！具体错误：${err}`);
    } else {
        console.log('ok');
    }
});