const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    entry: {
        main: [
            './static/reset.css',
            './src/main.js',
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        // publicPath: "",
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: 'vue-style-loader!css-loader!sass-loader',
                    },
                    
                },
                
            },
            {
                test: /\.scss$/,
                // loader: "!!sass-loader",
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'postcss-loader',
                    "sass-loader",
                    // {
                    //     loader: 'sass-loader',
                    // },
                
                    // "style-loader",
                    // "css-loader",
                    // "sass-loader",
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [
                                path.resolve(__dirname, "./src/template/_definition.scss"),
                            ],
                        }
                    },
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ],
            },
            {
                test: /\.(jpg|png)$/,
                loaders: 'url-loader'
            },
        ],
    },
    
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./src/index.html")
        }),
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm.js',
        }
    },
    performance: {
        hints: false
    },
}