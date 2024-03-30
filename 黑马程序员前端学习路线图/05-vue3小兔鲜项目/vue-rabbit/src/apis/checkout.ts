import axiosInstance from '@/utils/http'

export class CheckoutVo {
    goods: Array<CheckoutGoodsVo> = [];
    userAddresses: Array<UserAddressVo> = [];
    summary: CheckoutSummary = null;
}

export interface CheckoutGoodsVo {
    id: string
    name: string
    picture: string,
    price: number,
    count: number,
    skuId: string,
    attrsText: string,
    totalPayPrice: string,
    totalPrice: string
}

export class UserAddressVo {
    id: string = null;
    isDefault: number = null;
    receiver: string = null;
    contact: string = null;
    fullLocation: string = null;
    address: string = null;
}

export interface CheckoutSummary {
    goodsCount: number,
    totalPrice: number,
    totalPayPrice: number,
    postFee: number,
    discountPrice: number
}

/**
 * 获取结算信息
 */
export const getCheckoutInfoApi = () => {
    return axiosInstance({
        url: '/member/order/pre'
    })
}


// 创建订单
export class CreateOrderRequestVo {
    deliveryTimeType: number = null;
    payType: number = null;
    payChannel: number = null;
    buyerMessage: string = null;
    goods: Array<{
        skuId: string,
        count: number
    }> = null;
    addressId: string = null;
}
export class createOrderResponseVo {
    id: string = null;
    createTime: string = null;
    payType: number = null;
    orderState: number = null;
    payLatestTime: string = null;
    postFee: number = null;
    payMoney: number = null;
    totalMoney: number = null;
    totalNum: number = null;
    skus: unknown = null;
    payChannel: number = null;
    countdown: unknown = null;
}
export const createOrderApi = (data: CreateOrderRequestVo) => {
    return axiosInstance({
        url: '/member/order',
        method: 'POST',
        data
    }) as unknown as Promise<{
        code: string,
        msg: string,
        result: createOrderResponseVo
    }>;
}