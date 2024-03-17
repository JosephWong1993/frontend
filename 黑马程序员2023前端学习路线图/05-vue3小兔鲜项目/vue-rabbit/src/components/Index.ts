// 把components中的所有组件都进行全局化注册
// 通过插件的方式
import type { App } from 'vue';
import ImageView from './ImageView/ImageViewIndex.vue';
import XtxSku from './XtxSku/XtxSkuIndex.vue';
export const componentPlugin = {
    install(app: App<Element>) {
        // app.component('组件名字',组件配置对象)
        app.component('XtxImageView', ImageView);
        app.component('XtxSku', XtxSku);
    }
}