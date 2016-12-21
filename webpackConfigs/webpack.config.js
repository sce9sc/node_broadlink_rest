'use strict';

var path = require('path');
var webpack = require('webpack');
var env = process.env.NODE_ENV

module.exports = {

    //devtool: '#inline-source-map',

    entry: [
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', // for hot reload
        './src/broadlink_react/routes/client.js' // entry point for the client app
    ],

    //
    output: {
        path: path.join(__dirname, 'public/broadlink'),
        filename: 'bundle.js',
        publicPath: '/public/'
    },

    //


    //
    resolve: {
        alias: {
        },
        // require() file without adding .jsx and .js .suffix
        extensions: ['', '.js', '.jsx']
    },

    // be sure to add 'stage-0' in .babelrc to support es7 syntax
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                include: __dirname,
                query: {
                    presets: [ "es2015", "stage-0", "react" ],
                    //presets: [ 'react-hmre', "es2015", "stage-0", "react" ],
                    //plugins: [ "transform-decorators-legacy" ],
                }
            },
            {
                test: /\.css$/,
                loader: "style!css",
            },
        ]
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),

    ]
};