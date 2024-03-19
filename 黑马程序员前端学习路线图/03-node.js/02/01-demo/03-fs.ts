// 读取文件中的路径问题
import * as fs from 'fs';
import * as path from 'path';

// 此处的./相对路径，相对的是执行node命令的路劲
// 而不是相对于正在执行的这个.js文件来查找hello.txt
// fs.readFile('./hello.txt', 'utf-8', (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log(data);
// });

// 解决在文件读取中 ./ 相对路径的问题
// 解决： __dirname,__filename
// __dirname：表示，当前正在执行的js文件所在的目录
// __filename：表示，当前正在执行的js文件的完整路径
// console.log(__dirname);
// console.log(__filename);

// const filename = __dirname + '\\' + 'hello.txt';
const filename = path.join(__dirname, 'hello.txt');
fs.readFile(filename, 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
});

fs.mkdir('./test-mkdir', function (err) {
    if (err) {
        throw err;
    }
});