import axiosInstance from '@/utils/http';

interface getBannerApiRequestVo {
    distributionSite: string;
}

// 获取banner
export function getBannerApi(params: getBannerApiRequestVo = { distributionSite: '1' }) {
    // 默认为1 商品为2
    const { distributionSite = '1' } = params
    return axiosInstance({
        url: '/home/banner',
        params: {
            distributionSite
        }
    });
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewApi = () => {
    return axiosInstance({
        url: '/home/new'
    })
}

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
    return axiosInstance({
        url: 'home/hot',
        method: 'get'
    })
}

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsApi = () => {
    return axiosInstance({
        url: '/home/goods'
    })
}