"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const underscore_1 = __importDefault(require("underscore"));
// 演示
const name = ['张三', '香香', '小黄'];
const age = [18, 19, 20];
const genders = ['男', '女', '女'];
let result = underscore_1.default.zip(name, age, genders);
console.log(result);
result = underscore_1.default.unzip(result);
console.log(result);
// demo2
// 声明了一段带模板代码的 HTML 文档
let html = '<h2><%= name %></h2>';
//  template()函数的返回依然是一个函数
const fn = underscore_1.default.template(html);
// 调用template()返回的函数fn
// fn接收一个数据对象，并用该数据对象，将html中的模板内容替换，生成最终的HTML代码
html = fn({ name: '达达' });
console.log(html);
console.log(fn.toString());
