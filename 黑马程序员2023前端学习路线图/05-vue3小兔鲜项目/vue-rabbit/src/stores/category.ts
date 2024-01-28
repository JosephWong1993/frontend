import { ref } from 'vue';
import { defineStore } from 'pinia';
import { getCategoryApi } from '@/apis/layout';

export const useCategoryStore = defineStore('category', () => {
    // 导航列表的数据管理
    // state 导航列表数据
    const categoryList = ref([] as any[]);

    // action 获取导航数据的方法
    const getCategory = async () => {
        const res = await getCategoryApi() as any;
        // console.log(res);
        categoryList.value = res.result;
    };

    return {
        categoryList,
        getCategory
    };
});