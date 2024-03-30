import axiosInstance from '@/utils/http'

export class GetOrderResponseVo {
    payMoney: number = null;
}
export const getOrderApi = (id: string) => {
    return axiosInstance({
        url: `/member/order/${id}`
    }) as unknown as {
        code: string,
        msg: string,
        result: GetOrderResponseVo
    }
}