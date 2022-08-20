import * as fs from 'fs';

// 异步操作，try-catch是无法捕获异常的
// 对于异步操作，要通过判断错误号（err.code）来进行出错处理
try {
    fs.writeFile('./xxx/abc.txt', '大家早上好', 'utf-8', err => {
        // if (err) {
        //     console.log('出错了！');
        //     throw err;
        // }
        console.log('ok');
    });
} catch (e) {
    console.log('出错了~' + e);
}
