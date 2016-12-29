'use strict';

const webpack = require('webpack');

module.exports = {
    target: 'web',
    cache: true,
    debug: true,
    devtool: 'source-map',
    entry: {
        common: ['react', 'react-dom', 'redux', 'react-redux','immutable','redux-immutable'],
        client: './src/app.js'
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
    ]
};
