// 使用ES6导入语法，导入jQuery
import $ from 'jquery';
// 导入样式
import './css/index.css'
import './css/index.less';

import './ts/test/info';

// 导入图片，得到图片文件
import logo from "./images/logo.jpg";

console.log(logo);
// 给img标签的src动态赋值
$(".box").attr("src", logo);

// 2.定义jQuery的入口函数
$(function () {
    // 3。实现奇偶行变色
    $('li:odd').css('background-color', 'red');
    $('li:even').css('background-color', 'pink');
});


function info(target: any): void {
    target.info = 'Person info.';
}

// 定义一个普通的类
@info
class Person {
    public static info: any;
}

console.log(Person.info);