const path = require("path")

const HtmlWebPackPlugin = require("html-webpack-plugin")

const baseUrl = "/"

module.exports = {
    entry: './src/index.js',
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].[hash].js',
        publicPath: baseUrl
    },
    resolve: {
        extensions: ['.js', 'jsx']
    },
    devServer: {
        port: 9000,
        contentBase: path.resolve(__dirname, "dist"),
        watchContentBase: true,
        publicPath: baseUrl,
        historyApiFallback: true,
        compress: false,
        progress: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(mp4|png|jpg)$/,
                exclude: /(node_modules)/,
                loader: 'file-loader'
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            {
                test: /\.css/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            baseUrl: baseUrl,
            hash: true,
            template: "./index.html",
            filename: "index.html"
        })
    ]
}