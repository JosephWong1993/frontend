import Vue from "vue";
import dayjs from "dayjs";
import App from "./App.vue";

Vue.filter("dataFormat", function (time: Date) {
    return dayjs(time).format("YYYY-MM-DD HH:mm:ss");
})

new Vue({
    el: "#app",
    render: function (h) {
        return h(App)
    },
});