import Vue, {CreateElement} from "vue";
import VueRouter from 'vue-router';
import App from "./App.vue";
import "./styles.css";

Vue.use(VueRouter);

const Foo = Vue.extend({
    render: (h: CreateElement) => {
        return h("div", "foo");
    },
});
const Bar = Vue.extend({
    render: (h: CreateElement) => {
        return h("div", "bar");
    },
});

const routes = [
    {path: '/foo', component: Foo},
    {path: '/bar', component: Bar}
];

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

const indexVue = Vue.extend({
    render: (h) => {
        return h(App);
    },
    router,
});

new indexVue().$mount("#app");