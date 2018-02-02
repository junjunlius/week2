const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
module.exports = {
    //TODO 多入口
    //入口js
    entry: path.join(__dirname, "src/app.js"),
    //输出
    output: {
        //输出路径
        path: path.join(__dirname, "dist"),
        //打包后的文件名 - main.js
        filename: "[name].js"
    },
    //解析器
    module: {
        //规则
        rules: [{
                test: /\.js$/,
                //将es6代码转为es5
                loader: "babel-loader"
            }, {
                test: /\.html$/,
                loader: "html-loader"
            }, {
                test: /\.css$/,
                // use:["style-loader","css-loader"]
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }, {
                test: /\.(eot|svg|ttf|woff|woff2|otf)/,
                use: "url-loader?limit=50000&name=[path][name].[ext]"
            },
            {
                test: /\.(jpg|jpeg|png|gif)/,
                loader: "file-loader"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("main.css"),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name:"index",
            filename:"index.js"
        }),
        new HtmlWebpackPlugin({
            //生成的html文档的标题
            title: "index",
            //输出文件的文件名称
            filename: 'index.html',
            //本地模板文件的位置
            template: "./index.html",
            //可以指定模板的内容
            //templateContent
            //注入模板位置
            inject: "body",
            hash: true
        })
    ]
}