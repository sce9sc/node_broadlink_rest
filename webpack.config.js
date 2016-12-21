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

    entry:[
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', // for hot reload
        path.resolve(__dirname, 'src/broadlink_react/routes/client.js')
    ],

    output: {
        path: '/',
        filename: 'bundle.js',
        publicPath: '/broadlink/'
    },

    //
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

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
                loader:['babel-loader'],
                exclude: /node_modules/,
                include: path.join(__dirname, 'src'),
                query: {
                    presets: [ "es2015", "stage-0", "react" ],
                    //presets: [ 'react-hmre', "es2015", "stage-0", "react" ],
                    //plugins: [ "transform-decorators-legacy" ],
                }
            },
            /*{
                test: /\.js$/,
                loader: 'babel',
                include: path.join(__dirname, 'src'),
                query: {
                    "env": {
                        "development": {
                            "presets": ["react-hmre"],
                            "plugins": [
                                ["react-transform", {
                                    "transforms": [{
                                        "transform": "react-transform-hmr",
                                        "imports": ["react"],
                                        "locals": ["module"]
                                    }]
                                }]
                            ]
                        }
                    },
                }
            },*/
            {
                test: /\.css$/,
                loader: "style!css",
            },
        ]
    }
};