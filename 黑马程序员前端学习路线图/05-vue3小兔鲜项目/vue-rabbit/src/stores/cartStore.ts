// 封装购物车模块
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { useUserStore } from './userStore';
import { delCartApi, findNewCartListApi, insertCartApi } from '@/apis/cart';

export interface CartStoreItem {
    id: string
    name: string
    picture: string,
    price: number,
    count: number,
    skuId: string,
    attrsText: string,
    selected: boolean,
}

export const useCartStore = defineStore('cart', () => {
    const userStore = useUserStore();
    const isLogin = computed(() => !!userStore.userInfo.token);

    //1. 定义state - cartList
    const cartList = ref<Array<CartStoreItem>>([]);
    // 获取最新购物车列表action
    const updateNewList = async () => {
        const res: any = await findNewCartListApi();
        cartList.value = res.result;
    }

    //2. 定义action - addCart
    const addCart = async (goods: CartStoreItem) => {
        const { skuId, count } = goods;
        if (isLogin.value) {
            // 登录之后的加入购物车逻辑
            await insertCartApi({ skuId, count });
            updateNewList();
        } else {
            // 添加购物车操作
            // 已添加过 - count+1
            // 没有添加过 - 直接push
            // 思路：通过匹配传递过来的商品对象中的skuId能不能再cartList中找到，找到了就是添加过
            const item = cartList.value.find(item => item.skuId === goods.skuId)
            if (item) {
                // 找到了
                item.count += goods.count;
            } else {
                // 没找到
                cartList.value.push(goods);
            }
        }
    }

    // 删除购物车
    const delCart = async (skuId: string) => {
        if (isLogin.value) {
            // 调用接口实现接口购物车中的删除功能
            await delCartApi([skuId])
            updateNewList();
        } else {
            // 思路：1.找到要删除项的下标值 - splice
            // 2. 使用数组的过滤方法 - filter
            const idx = cartList.value.findIndex((item) => item.skuId === skuId);
            cartList.value.splice(idx, 1);
        }
    }

    // 清楚购物车
    const clearCart = async () => {
        cartList.value = [];
    }

    // 单选功能
    const singleCheck = (skuId: string, selected: boolean) => {
        // 通过skuId找到要修改的那一项，然后把它的selected修改为传过来的selected
        const item = cartList.value.find((item) => item.skuId === skuId);
        item.selected = selected;
    }

    // 全选功能
    const allCheck = (selected: boolean) => {
        // 把cartList中的每一项的selected都设置为当前的全选框状态
        cartList.value.forEach(item => item.selected = selected);
    }

    // 计算属性
    // 1. 总的数量 所有项的count之和
    const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0));
    // 2. 总计 所有项的count*price之和
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0));
    // 3. 已选择数量
    const selectedCount = computed(() =>
        cartList.value.filter(item => item.selected === true)
            .reduce((a, c) => a + c.count, 0));
    // 4. 已选择商品价钱合计
    const selectedPrice = computed(() =>
        cartList.value.filter(item => item.selected === true)
            .reduce((a, c) => a + c.count * c.price, 0));
    // 4. 已选择商品合计

    // 是否全选
    const isAll = computed(() => cartList.value.every(item => item.selected));
    return {
        cartList,
        allCount,
        allPrice,
        isAll,
        selectedCount,
        selectedPrice,
        updateNewList,
        addCart,
        delCart,
        singleCheck,
        allCheck,
        clearCart,
    }
}, {
    persist: true
})
