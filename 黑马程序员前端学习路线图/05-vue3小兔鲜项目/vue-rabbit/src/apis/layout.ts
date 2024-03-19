import axiosInstance from '@/utils/http';

export function getCategoryApi() {
    return axiosInstance({
        url: '/home/category/head'
    });
}