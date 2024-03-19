const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
    entry: {
        app: './src/main.ts',
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: "asset/[name][contenthash][ext]",
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "品牌列表案例",
            template: "index.html",
        }),
        new VueLoaderPlugin(),
    ],
    resolve: {
        extensions: [".ts", ".js",],
        alias: {
            '@': path.join(__dirname, './src/'),
        },
    },
    module: {
        rules: [

            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                include: path.resolve(__dirname, 'src'),
                type: 'asset/resource',
                generator: {
                    filename: "images/[name][contenthash][ext]"
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                include: path.resolve(__dirname, 'src'),
                type: 'asset/resource',
            },
            {
                test: /\.(csv|tsv)$/i,
                include: path.resolve(__dirname, 'src'),
                use: ['csv-loader'],
            },
            {
                test: /\.xml$/i,
                include: path.resolve(__dirname, 'src'),
                use: ['xml-loader'],
            },
            {
                test: /\.vue$/i,
                loader: 'vue-loader'
            },
        ],
    },
};