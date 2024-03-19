import Vue from 'vue'
import App from './App.vue'
// 导入路由模块
import router from './router/index.js'
import './element-ui'
import {Loading} from 'element-ui'

import axios from 'axios'
// 配置请求根路径
// axios.defaults.baseURL = 'https://www.escook.cn'
axios.defaults.baseURL = 'http://localhost:8080'
// 配置请求的拦截器
let loadingInstance = null
axios.interceptors.request.use(config => {
    // 调用Loading组件的service()方法，创建Loading组件的实例，并全屏展示loading效果
    loadingInstance = Loading.service({fullscreen: true})
    // 为当前配置Token认证字段
    config.headers.Authorization = 'Bearer xxx'
    console.log(config)
    // 这是固定写法
    return config
})
// 配置响应拦截器
axios.interceptors.response.use(response => {
    // 调用Loading实例的close方法即可关闭loading效果
    loadingInstance.close()
    return response
})
Vue.prototype.$http = axios

const app = new Vue({
    render: h => h(App),
    // 挂载路由模块
    // router: router
    router,
})

app.$mount('#app')
