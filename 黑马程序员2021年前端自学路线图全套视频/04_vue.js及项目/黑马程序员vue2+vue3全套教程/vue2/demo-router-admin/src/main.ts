import Vue from "vue";
import App from "@/App.vue";

// 导入路由模块
import router from '@/router';

// 导入样式
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

Vue.config.productionTip = true;

const indexVue = Vue.extend({
    render: function (h) {
        return h(App)
    },
    router,
});
new indexVue({
    el: "#app"
});