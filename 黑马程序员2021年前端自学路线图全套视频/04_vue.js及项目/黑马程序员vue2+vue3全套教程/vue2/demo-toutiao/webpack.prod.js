const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
    mode: "production", devtool: "nosources-source-map", optimization: {
        moduleIds: 'deterministic', runtimeChunk: 'single', splitChunks: {
            chunks: 'all', cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/, name: 'vendors', chunks: 'all',
                },
            },
        }, minimize: true, minimizer: [new CssMinimizerPlugin(), new TerserPlugin(),],
    }, plugins: [new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
    }),], module: {
        rules: [{
            test: /\.tsx?$/i,
            include: path.resolve(__dirname, 'src'),
            loader: "ts-loader",
            options: {appendTsSuffixTo: [/\.vue$/i]},
        }, {
            test: /\.css$/i, include: path.resolve(__dirname, 'src'), use: [MiniCssExtractPlugin.loader, 'css-loader'],
        }, {
            test: /\.less$/i,
            include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, "node_modules/_vant@2.12.37@vant/lib/index.less"),],
            use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
        },]
    }
});