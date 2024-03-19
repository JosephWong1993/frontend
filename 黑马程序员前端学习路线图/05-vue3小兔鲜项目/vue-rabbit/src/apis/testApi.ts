import axiosInstance from '@/utils/http';

export function getCategory() {
    return axiosInstance({
        url: 'home/category/head'
    });
}