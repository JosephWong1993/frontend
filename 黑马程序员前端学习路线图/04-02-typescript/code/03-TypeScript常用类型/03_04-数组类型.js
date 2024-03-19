"use strict";
(function () {
    // 数组类型：
    let numbers = [1, 3, 5];
    console.log(numbers);
    let numbers1 = [1, 3, 5];
    console.log(numbers1);
    let b = [true, false];
    console.log(b);
    // 联合类型：
    // 添加小括号，表示：首先是数组，然后，这个数组中能够出现 number 或 string 类型的元素
    let arr = [1, 3, 5, 'a', 'b'];
    console.log(arr);
    // 不添加小括号，表示：arr1 既可以是 number 类型，又可以是 string[]
    let arr1 = ['a', 'b'];
    console.log(arr1);
    let arr2 = 123;
    console.log(arr2);
})();
