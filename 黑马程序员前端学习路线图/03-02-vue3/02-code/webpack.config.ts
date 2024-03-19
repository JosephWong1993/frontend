// const path = require('path');
import path from 'path';
// 1. 导入插件，得到构造函数
import HtmlWebpackPlugin from 'html-webpack-plugin';
// 2. 创建插件的实例对象
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: './index.html'
});

module.exports = {
    mode: 'development', // 'production' // 'development', // mode 用来制定构建模式。可选值有 development 和 production
    devtool: 'nosources-source-map', // 'eval-source-map', // 'nosources-source-map'
    // 指定打包的入口
    entry: path.join(__dirname, './src/index.js'),
    // 指定打包的出口
    output: {
        // 表示输出文件的存放路径
        path: path.join(__dirname, './dist'),
        // 表示输出文件的名称
        filename: 'js/bundle.js',
        clean: true,
    },
    plugins: [htmlWebpackPlugin], // 3. 挂载插件的实例对象
    devServer: {
        open: true,
        host: '127.0.0.1',
        port: 80
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/,
                // include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            // {
            //     test: /\.jpg|png|gif$/,
            //     use: 'url-loader?limit=22229',
            // },
            // {
            //     test: /\.jpg|png|gif$/,
            //     use: {
            //         loader: 'url-loader',
            //         options: {
            //             limit: 22228,
            //             outputPath: 'image'
            //         },
            //     },
            // },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                include: path.resolve(__dirname, 'src'),
                type: 'asset/resource',
                generator: {
                    filename: 'image/[name][contenthash][ext]'
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            }
        ]
    }
};