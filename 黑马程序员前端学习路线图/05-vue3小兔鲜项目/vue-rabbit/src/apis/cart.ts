import axiosInstance from '@/utils/http';


// 加入购物车
export const insertCartApi = ({ skuId, count }) => {
    return axiosInstance({
        url: '/member/cart',
        method: 'POST',
        data: {
            skuId,
            count
        }
    })
};


// 获取最新的购物车列表
export const findNewCartListApi = () => {
    return axiosInstance({
        url: '/member/cart',
        method: 'GET'
    })
};


// 删除购物车
export const delCartApi = (ids: Array<string>) => {
    return axiosInstance({
        url: '/member/cart',
        method: 'DELETE',
        data: {
            ids
        }
    })
}

// 合并购物车
export const mergeCartApi = (data: Array<{ skuId: string, selected: boolean, count: number }>) => {
    return axiosInstance({
        'url': '/member/cart/merge',
        method: 'POST',
        data: data
    })
}