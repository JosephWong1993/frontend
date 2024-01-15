// new Vue() 创建一个应用实例对象

import './assets/main.css';

import {createApp} from 'vue';
// import App from './App.vue';
// import App from './components/01_11/App.vue';
// import App from './components/01_12/App.vue';
import App from './components/01_13/App.vue';

// 1. 以App作为参数生成一个应用实例对象
// 2. 挂载到id为app的节点上
createApp(App).mount('#app');
