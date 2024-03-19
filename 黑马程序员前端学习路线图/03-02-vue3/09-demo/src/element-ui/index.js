import Vue from 'vue'
// 完整引入 Element UI
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)

// 按需导入
import { Button, Input } from 'element-ui'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Input)