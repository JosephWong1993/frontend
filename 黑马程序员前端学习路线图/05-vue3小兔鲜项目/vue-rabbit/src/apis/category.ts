import axiosInstance from '@/utils/http'

interface getSubCategoryApiRequest {
    categoryId: string,
    page: number,
    pageSize: number,
    sortField: string
}

/**
 * @description: 获取分类数据
 * @param {*} id 分类id 
 * @return {*}
 */
export const getTopCategoryApi = (id: string): any => {
    return axiosInstance({
        url: '/category',
        params: {
            id
        }
    })
}

/**
 * @description: 获取二级分类列表数据
 * @param {*} id 分类id 
 * @return {*}
 */
export const getCategoryFilterApi = (id: string) => {
    return axiosInstance({
        url: '/category/sub/filter',
        params: {
            id
        }
    })
}

/**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
export const getSubCategoryApi = (data: getSubCategoryApiRequest): any => {
    return axiosInstance({
        url: '/category/goods/temporary',
        method: 'POST',
        data
    })
}