const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const TARGET = process.env.npm_lifecycle_event;
const OUTPUT_DIR = TARGET === 'build' ? path.join(__dirname, 'dist') : path.join(__dirname, 'dist');
const SOURCE_DIR = path.join(__dirname, 'src');

console.log("current directory is... " + __dirname);
console.log("output directory is... " + OUTPUT_DIR);
console.log("source directory is... " + SOURCE_DIR);
console.log("environment event is... " + TARGET);

var common = {
    entry: {
        app: './src/app.js'
    },
    output: {
        filename: 'bundle-[name].js',
        path: OUTPUT_DIR,
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    SOURCE_DIR,
                    path.join(__dirname, 'node_modules/react-router'),
                    path.join(__dirname, 'node_modules/react-router-dom')
                ],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: path.join(__dirname, 'src/components'),
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.css$/,
                include: path.join(__dirname, 'src/components'),
                use: [{
                    loader: 'style-loader'
                },{
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        importLoaders: 1,
                        localIdentName: '[name]__[local]___[hash:base64:5]'
                    }
                },{
                    loader: 'postcss-loader',
                    options: {
                        plugins: (loader) => [
                            require('postcss-cssnext')
                        ]
                    }
                }]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new ExtractTextPlugin('styles.css'),
        new HtmlWebpackPlugin({
                title: 'RTPI Directory - Development',
                inject: 'body',
                template: './src/templates/index.ejs',
                chunks: ['app']
            })
    ]
};

if(TARGET === 'dev' || !TARGET) {
    module.exports = merge.smart(common,{
        devtool: 'inline-source-map',
        devServer: {
            contentBase: OUTPUT_DIR,
            hot: true,
            publicPath: '/',
            historyApiFallback: true
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    });
}

if(TARGET === 'build') {
    module.exports = merge.smart(common,{
        devtool: 'source-map'
    });
}
