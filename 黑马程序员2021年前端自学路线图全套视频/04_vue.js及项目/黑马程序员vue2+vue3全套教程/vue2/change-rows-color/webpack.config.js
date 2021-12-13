const path = require("path");

// 导入html-webpack-plugin插件，得到一个构造函数
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 创建HTML插件的实例对象
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    // 指定原文件的存放路径
    template: './src/index.html',
    // 指定生成的文件的存放路径
    filename: './index.html'
});

// 使用Node.js中的导出语法，向外导出一个webpack的配置对象
module.exports = {
    // 代表webpack运行的模式，可选值有两个 development 和 production
    // 结论：开发时候一点要用development，因为追求的是打包的速度，而不是体积；
    // 反过来，发布上线的时候一定要用production，因为上线追求的是体积小，而不是打包速度快！
    mode: 'development',
    // 打包入口文件的路径
    entry: path.join(__dirname, './src/index.js'),
    output: {
        // 输出文件的存放路径
        path: path.join(__dirname, './dist'),
        // 输出文件的名称
        filename: "bundle.js",
    },
    // 通过plugins节点，使htmlWebpackPlugin插件生效
    plugins: [htmlWebpackPlugin],
    devServer: {
        // 初次打包完成后，自动打开浏览器
        open: true,
        // 实时打包所使用的主机地址
        host: "127.0.0.1",
        // 实时打包所使用的端口号
        port: 48080,
    },
    module: {
        //所有第三方文件模块的匹配规则
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                ],
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ],
            },
        ]
    }
}