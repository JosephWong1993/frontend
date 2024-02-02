// 封装分类数据业务相关代码

import { getTopCategoryApi } from "@/apis/category";
import { onMounted, ref } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";

export function useCategory() {
    // 获取分类数据
    const categoryData = ref({} as any);

    const route = useRoute();
    const getTopCategory = async (id: string = route.params.id as string) => {
        const res = await getTopCategoryApi(id);
        categoryData.value = res.result;
    }

    onMounted(() => getTopCategory());

    // 目标：路由参数变化的时候 可以吧分类数据接口重新发送
    onBeforeRouteUpdate((to) => {
        console.log('路由变化了');
        // 存在问题：使用最新的路由参数请求最新的分类数据
        console.log(to);
        getTopCategory(to.params.id as string);
    });

    return {
        categoryData
    };
}