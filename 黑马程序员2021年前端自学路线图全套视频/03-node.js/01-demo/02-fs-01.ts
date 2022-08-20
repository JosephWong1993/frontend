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

// 实现文件读取操作
// 调用fs.readFile() 方法来读取文件
// 在读取文件的时候，如果传递了编码，那么回调函数中的data默认就会转换为 字符串
fs.readFile('./hello.txt', 'utf-8', function (err, data) {
    if (err) {
        throw  err;
    }
    // data参数的数据类型时一个Buffer对象，里面保存的就是一个一个的字节（理解为字节数组）
    // 把 buffer 对象转换为字符串，调用 toString()方法
    // console.log(data.toString('utf-8'));
    console.log(data);

    // 5242880
    // 1024*1024*5
});