import httpInstance from '@/utils/http'


export const getDetail = (id: string): any => {
    return httpInstance({
        url: '/goods',
        params: {
            id
        }
    })
}