'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {

    //devtool: '#inline-source-map',

   /* entry: [
        'webpack-hot-middleware/client', // for hot reload
        './client/index.js' // entry point for the client app
    ],*/

    //

    entry:path.resolve(__dirname, 'src/broadlink_react/routes')+'/client.js',

    output: {
        path: path.join(__dirname, 'public/broadlink/'),
        filename: 'bundle.js',
        publicPath: '/public/'
    },

    //
    /*plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],*/

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
    }
};