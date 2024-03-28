// 管理用户数据相关
import { ref } from "vue"
import { defineStore } from "pinia";
import { loginApi } from '@/apis/user';
import { useCartStore } from "./cartStore";
export class UserInfoVo {
    token: string = '';
    account: string = '';
}

export const useUserStore = defineStore('user', () => {
    const cartStore = useCartStore();
    // 1.定义管理用户数据的state
    const userInfo = ref<UserInfoVo>(new UserInfoVo());
    // 2.定义获取接口数据的action函数
    const getUserInfo = async ({ account, password }) => {
        const res = await loginApi({ account, password }) as any;
        userInfo.value = res.result;
    }

    // 退出时清楚用户信息
    const clearUserInfo = () => {
        userInfo.value = new UserInfoVo();
        // 执行清除购物车的action
        cartStore.clearCart();
    }

    // 3.以对象的格式把state和action return
    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }
}, {
    persist: true,
});