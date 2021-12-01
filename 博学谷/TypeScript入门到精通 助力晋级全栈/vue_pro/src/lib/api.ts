//调用API服务器接口
import axios from 'axios';

axios.defaults.headers = {
    'X-Request-With': 'XMLHttpRequest',
    'Content-Type': 'application/json'
};

axios.defaults.baseURL = "http://localhost:33000/api/";
// 请求超时的时间限制
axios.defaults.timeout = 2000;

export default class {
    static HOST = "http://localhost:33000/";

    static async getItems(name?: string, order = '-1') {
        const q = [];
        if (name) {
            q.push("name=" + name);
        }
        q.push("order=" + order)
        return axios.get('/items/list?' + q.join('&'));
    }

    static async register(username: string, password: string) {
        return axios.post('/users/register', {username: username, password: password});
    }

    static async login(username: string, password: string) {
        return axios.post('/users/login', {username: username, password: password});
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