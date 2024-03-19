// 封装所有和用户相关的接口函数
import axiosInstance from "@/utils/http"
export const loginApi = ({ account, password }: { account: string, password: string }) => {
    return axiosInstance({
        url: '/login',
        method: 'POST',
        data: {
            account, password
        }
    })
}