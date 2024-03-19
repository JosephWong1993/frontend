// axios 基础的封装
import axios from 'axios';
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'

const axiosInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
});

// 拦截器
// axios请求拦截器
axiosInstance.interceptors.request.use(config => {
    return config;
}, e => Promise.reject(e));

// axios响应式拦截器
axiosInstance.interceptors.response.use(res => res.data, e => {
    // 统一错误提示
    ElMessage({
        type: 'warning',
        message: e.response.data.message
    })
    return Promise.reject(e);
});

export default axiosInstance;