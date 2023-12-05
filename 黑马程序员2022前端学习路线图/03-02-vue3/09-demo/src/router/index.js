// 导入 Vue2 的构造函数
import Vue from 'vue'
// 导入 3.x 路由的构造函数
import VueRouter from 'vue-router'
// 导入需要使用路由切换的组件
import Home from '@/components/Home.vue'
import Movie from '@/components/Movie.vue'

// 调用Vue.use()函数，把路由配置为Vue的插件
Vue.use(VueRouter);

// 创建路由对象
const router = new VueRouter({
    // 声明路由规则
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: Home},
        {path: '/movie', component: Movie},
    ],
})

// 向外共享路由对象
export default router
