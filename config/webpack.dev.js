
const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '../dist', //服务器内容 publicPath是静态文件内容
        hot: true //启动热更新
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),//热更新插件
        new CleanWebpackPlugin(['dist']),        //清理目录插件
        new HtmlWebpackPlugin({                  // 自动生成html插件
            title: 'Output Management',
            template: "./src/index.html" //指定index.html 的模板
        }),
        new FriendlyErrorsWebpackPlugin({ //webpack错误友好提示插件
            compilationSuccessInfo: {  //成功提示
                messages: ['You application is running here http://localhost:8080'],
                notes: ['Some additionnal notes to be displayed unpon successful compilation']
            },
            onErrors: function (severity, errors) {
                // You can listen to errors transformed and prioritized by the plugin
                // severity can be 'error' or 'warning'
            },
            // should the console be cleared between each compilation?
            // default is true
            clearConsole: true,
        }),
    ]
});
