// createRouter：创建router实例对象
// createWebHistory：创建history模式的路由
import { createRouter, createWebHistory } from 'vue-router';

import Login from '@/views/login/index.vue';
import Layout from '@/views/layout/LayoutIndex.vue';
import Home from '@/views/home/HomeIndex.vue';
import Category from '@/views/category/CategoryIndex.vue';
import SubCategory from '@/views/SubCategory/SubCatrgoryIndex.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    // path和component对应关系的位置
    routes: [
        {
            path: '/',
            component: Layout,
            children: [
                {
                    path: '',
                    component: Home
                },
                {
                    path: '/category/:id',
                    component: Category
                },
                {
                    path: '/category/sub/:id',
                    component: SubCategory
                }
            ]
        },
        {
            path: '/login',
            component: Login
        }
    ],
    // 路由滚动行为定制
    scrollBehavior() {
        return {
            top: 0
        }
    }
});

export default router;
