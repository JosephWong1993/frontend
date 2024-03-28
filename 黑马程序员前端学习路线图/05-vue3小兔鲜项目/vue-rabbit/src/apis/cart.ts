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


export const findNewCartListApi = () => {
    return axiosInstance({
        url: '/member/cart',
        method: 'GET'
    })
};
