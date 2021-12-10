"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 1.使用ES6导入语法，导入jQuery
var jquery_1 = __importDefault(require("jquery"));
// 2.定义jQuery的入口函数
(0, jquery_1.default)(function () {
    // 3。实现奇偶行变色
    (0, jquery_1.default)('li.odd').css('background-color', 'red');
    (0, jquery_1.default)('li.even').css('background-color', 'pink');
});
