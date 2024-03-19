import Vue from 'vue'
import App from './App.vue'
// 导入路由模块
import router from './router'
// 导入axios
import axios from 'axios'
// 导入 element-ui
import ElementUI from 'element-ui'
// 导入 element-ui 的样式表
import 'element-ui/lib/theme-chalk/index.css'
import {Loading} from 'element-ui'

Vue.config.productionTip = false
// 将 ElementUI安装为vue的插件
Vue.use(ElementUI)

// 声明格式化时间的全局过滤器
Vue.filter('dateFormat', dtStr => {
    const dt = new Date(dtStr)

    const y = dt.getFullYear()
    const m = padZero(dt.getMonth() + 1)
    const d = padZero(dt.getDate())

    const hh = padZero(dt.getHours())
    const mm = padZero(dt.getMinutes())
    const ss = padZero(dt.getSeconds())

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

// 补零的函数
function padZero(n) {
    return n > 9 ? n : '0' + n
}

// 全局配置 axios
// axios.defaults.baseURL = 'https://www.escook.cn'
axios.defaults.baseURL = 'http://localhost:3000'
Vue.prototype.$http = axios

// 声明请求拦截器
let loadingInstance = null
axios.interceptors.request.use(config => {
    // 展示 Loading 效果
    loadingInstance = Loading.service({fullscreen: true})
    return config
})

// 声明响应拦截器
axios.interceptors.response.use(response => {
    // 隐藏 Loading 效果
    loadingInstance.close()
    return response
})

new Vue({
    // 挂载路由
    router,
    render: h => h(App),
}).$mount('#app')
