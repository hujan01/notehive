const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: path.resolve(__dirname, '../src/index.js'),
        App: path.resolve(__dirname, '../src/App.js'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'notehive',
            template: path.resolve(__dirname, '../public/index.html'),
            favicon: path.resolve(__dirname, '../public/favicon.png'),
        }),
    ],
    output: {
        path: path.resolve(__dirname, '../dist'), // 打包后的代码放在dist目录下
        filename: '[name].bundle.js', // 打包的文件名
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s[ca]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                // 匹配js/jsx
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    useBuiltIns: "usage",
                                    corejs: "3",
                                },
                            ],
                            "@babel/preset-react",
                        ],
                        plugins: ["@babel/plugin-transform-runtime"],
                    },
                }
            }
        ]
    }
}
