const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        hot: true,
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                include: path.resolve(__dirname, 'src'),
                use: [{
                    loader: "ts-loader",
                    options: {
                        transpileOnly: true,
                    }
                }],
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader'],
            },
        ]
    }
});