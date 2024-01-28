import httpInstance from '@/utils/http';

// 获取banner
export function getBannerApi() {
    return httpInstance({
        url: '/home/banner'
    });
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewApi = () => {
    return httpInstance({
        url: '/home/new'
    })
}

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
    return httpInstance({
        url: 'home/hot',
        method: 'get'
    })
}