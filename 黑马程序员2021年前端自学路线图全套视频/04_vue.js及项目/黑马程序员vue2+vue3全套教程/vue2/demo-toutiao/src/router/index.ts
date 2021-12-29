import Vue from 'vue';
import VueRouter from 'vue-router';

// 导入需要的组件
import Home from '@/components/Home.vue'
import User from '@/components/User.vue'

Vue.use(VueRouter);

// 路由规则的数组
const routes = [
    // 定义首页的路由规则
    {path: '/', component: Home},
    // 定义我的路由规则
    {path: '/user', component: User}
]

const router = new VueRouter({
    routes,
});

export default router;