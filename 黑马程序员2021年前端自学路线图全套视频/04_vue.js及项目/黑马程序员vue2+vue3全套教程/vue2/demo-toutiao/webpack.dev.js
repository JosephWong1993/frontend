const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = merge(common, {
    mode: "development", devtool: 'eval-cheap-module-source-map', devServer: {
        static: './dist', hot: true, host: "127.0.0.1", port: 40080,
    }, plugins: [new ForkTsCheckerWebpackPlugin(),], module: {
        rules: [{
            test: /\.tsx?$/i, include: path.resolve(__dirname, 'src'), use: [{
                loader: "ts-loader", options: {
                    transpileOnly: true, appendTsSuffixTo: [/\.vue$/i],
                },
            }],
        }, {
            test: /\.css$/i, include: [path.resolve(__dirname, 'src')], use: ['style-loader', 'css-loader'],
        }, {
            test: /\.less$/i,
            include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, "node_modules/_vant@2.12.37@vant/lib/index.less")],
            use: ["style-loader", "css-loader", "less-loader"],
        },]
    }
});