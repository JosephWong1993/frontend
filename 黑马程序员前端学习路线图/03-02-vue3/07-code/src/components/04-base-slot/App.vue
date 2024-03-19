<template>
    <div>
        <h1>App 根组件</h1>
        <hr/>
        <!-- 使用组件 -->
        <my-com>
            <!--  在使用MyCom组件时，为插槽指定具体的内容  -->
            <!--            <p>~~~用户自定义的内容~~~</p>-->
        </my-com>
    </div>
</template>

<script>
// 导入组件
import MyCom from './MyCom.vue'

export default {
    name: 'MyApp',
    // 注册组件
    components: {
        MyCom,
    },
}
</script>

<style lang="less" scoped></style>
