const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: "development",
    stats: {
        children: true,
    },
    entry: {
        index: {
            import: './src/index.js',
            filename: 'js/index.js'
        },
    },
    output: {
        publicPath: "/",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: "fonts/[name][ext]",
                },
            },
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", {
                    loader: 'sass-loader',
                },],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: "images/[name][ext]",
                },
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },

        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".scss"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            inject: "body",
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            filename: 'list-Tour.html',
            template: './src/list-Tour.html',
            inject: "body",
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            filename: 'tour-Detail.html',
            template: './src/tour-Detail.html',
            inject: "body",
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            filename: 'news.html',
            template: './src/news.html',
            inject: "body",
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            filename: 'news-Detail.html',
            template: './src/news-Detail.html',
            inject: "body",
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            filename: 'contact.html',
            template: './src/contact.html',
            inject: "body",
            chunks: ['index'],
        }),
        // new BaseHrefWebpackPlugin({ baseHref: '/' }),
        new MiniCssExtractPlugin({
            filename: "css/[name].min.css",
          }),
    ],
    // devServer: {
    //     static: {
    //         directory: path.join(__dirname, 'dist')
    //     }
    // }
};