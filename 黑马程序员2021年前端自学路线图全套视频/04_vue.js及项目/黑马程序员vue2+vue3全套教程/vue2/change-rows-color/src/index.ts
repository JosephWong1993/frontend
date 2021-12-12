// 使用ES6导入语法，导入jQuery
import $ from 'jquery';
// 导入样式
import './css/index.css'

// 2.定义jQuery的入口函数
$(function () {
    // 3。实现奇偶行变色
    $('li:odd').css('background-color', 'red');
    $('li:even').css('background-color', 'pink');
});