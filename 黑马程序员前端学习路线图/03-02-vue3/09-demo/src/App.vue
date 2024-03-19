<template>
    <div>
        <h1>App 根组件</h1>
        <el-button>默认按钮</el-button>
        <el-button type="primary" @click="getInfo">主要按钮</el-button>
        <el-button type="success" @click="getUsers">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>

        <el-input placeholder="请输入内容"></el-input>

        <router-link to="/home">首页</router-link>&nbsp;
        <router-link to="/movie">电影</router-link>

        <hr/>

        <!-- 声明路由的占位符 -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'MyApp',
    methods: {
        // 测试 GET 请求
        async getInfo() {
            const {data: res} = await this.$http.get('/api/get', {params: {name: 'zs', age: 20}})
            console.log(res)
        },
        // 获取用户列表的数据
        async getUsers() {
            const {data: res} = await this.$http.get('/api/users')
            console.log(res)
        },
    },
}
</script>

<style lang="less" scoped></style>
