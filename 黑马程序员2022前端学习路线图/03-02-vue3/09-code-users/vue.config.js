module.exports = {
    devServer: {
        port: 3000,
        open: true,
        // 当前项目在开发调试阶段
        // 会将任何未知请求（没有匹配到静态文件的请求）代理到 https://www.escook.cn
        proxy: 'https://www.escook.cn'
    }
}