//调用API服务器接口
import axios from 'axios';

axios.defaults.headers = {
    'X-Request-With': XMLHttpRequest',
    'Content-Type': 'application/json'
};

axios.defaults.baseURL = "http://localhost:33000.api/";
// 请求超时的时间限制
axios.defaults.timeout = 2000;

export default class {
    static HOST = "http://localhost:3000/";

    static async getItems() {
        return axios.get('/items/list');
    }

    static async register(username: string, password: string) {
        return axios.get('/users/register', {username: username, password: password});
    }

    static async login(username: string, password: string) {
        return axios.get('/user/login', {username: username, password: password});
    }

    static async createOrder(order: any) {
        return axios.post('/orders/create', order);
    }

    static async getOrders(userId?: string) {
        return axios.get('/orders/list?user_id=' + (userId || ''));
    }

    static async getOrderById(id: string) {
        return axios.get('/orders/' + id);
    }

    static async changeOrderStatus(id: string, status: string) {
        return axios.post(`/orders/${id}/change_status`, {status: status});
    }
}