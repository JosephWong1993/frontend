import Vue from "vue";
import App from "./App.vue";
// 导入 bootstrap 样式表
import "bootstrap/dist/css/bootstrap.min.css";

new Vue({
    el: "#app",
    render: function (h) {
        return h(App)
    },
});