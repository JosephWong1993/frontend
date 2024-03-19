import {createApp} from 'vue'
import App from './App.vue'

// 导入 bootstrap 样式表
import './assets/css/bootstrap.css'
import './index.css'

// 1. 导入 axios
import axios from 'axios'

const app = createApp(App)

// 2. 将 axios 挂载到全局，今后，每个组件中，都可以直接通过 this.$http 代替 axios 发起 Ajax 请求
app.config.globalProperties.$http = axios;
// 3. 配置请求的根路径
axios.defaults.baseURL = 'https://www.escook.cn';

app.mount('#app')
