import axiosInstance from '@/utils/http'

export class GetOrderResponseVo {
    payMoney: number = 0;
    countdown: number = 0;
}
export const getOrderApi = (id: string) => {
    return axiosInstance({
        url: `/member/order/${id}`
    }) as unknown as Promise<{
        code: string,
        msg: string,
        result: GetOrderResponseVo
    }>
}