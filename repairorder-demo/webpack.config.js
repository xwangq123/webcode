'use strict';

const webpack = require('webpack');

module.exports = {
    target: 'web',
    cache: true,
    debug: true,
    devtool: 'source-map',
    entry: {
        common: ['immutable', 'react', 'react-dom', 'redux', 'react-redux', 'director', 'redux-thunk', 'redux-immutable'],
        client: './src/repairOrder.js'
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"]
    },
    output: {
        path: `${__dirname}/dist/javascripts`,
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common', 'common.js')
    ],
};
