function add(x: number, y: number): number {
    return x + y;
}

const result = add(100, 1000);

console.log(result);

/*------ module.exports介绍 ------*/
// // return 'hello';
// // module.exports = 'hello world!';
// // module.exports = 666;
// // module.exports = function (msg) {
// //     console.log(msg);
// // }
// module.exports.name = '张三';
// module.exports.age = 18;
// module.exports.show = function () {
//     console.log(this.name + this.age);
// }
//
// function require(/* ... */) {
//     const module = { exports: {} };
//     ((module, exports) => {
//         // Module code here. In this example, define a function.
//         function someFunc() {}
//         exports = someFunc;
//         // At this point, exports is no longer a shortcut to module.exports, and
//         // this module will still export an empty default object.
//         module.exports = someFunc;
//         // At this point, the module will now export someFunc, instead of the
//         // default object.
//     })(module, module.exports);
//     return module.exports;
// }

/*------ exports介绍 ------*/
// exports和module.exports指向的是同一个对象
// 最终require()函数返回的是module.exports中的数据
// return module.exports;
module.exports.name = '张三';
exports.age = 18;
exports.show = function () {
    console.log(this.name + ":" + this.age);
};

// module.exports = 'Hello World!';
exports = 'Hello World!';