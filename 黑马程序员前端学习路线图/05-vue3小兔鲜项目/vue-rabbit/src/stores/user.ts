// 管理用户数据相关
import { defineStore } from "pinia";
import { ref } from "vue"
import { loginApi } from '@/apis/user';
export class UserInfoVo {
    token: string = '';
    account: string = '';
}

export const useUserStore = defineStore('user', () => {
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