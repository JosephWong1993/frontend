"use strict";
(function () {
    // 单独指定参数、返回值类型：
    function add1(num1, num2) {
        return num1 + num2;
    }
    console.log(add1(3, 2));
    const add2 = (num1, num2) => {
        return num1 + num2;
    };
    console.log(add2(3, 2));
    // 同时指定参数、返回值类型：
    const add3 = (num1, num2) => {
        return num1 + num2;
    };
    console.log(add3(3, 2));
    // 如果函数没有返回值，那么，函数返回值类型为：void
    function greet(name) {
        console.log('Hello', name);
    }
    greet('jack');
    // 可选参数
    function mySlice(start, end) {
        console.log('起始索引：', start, '结束索引：', end);
    }
    mySlice(10);
    mySlice(1);
    mySlice(1, 3);
})();
