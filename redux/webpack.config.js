var webpack = require("webpack");

module.exports = {
    entry: './src/default.js',//'./src/index.js',
    debug: true,
    devtool: 'source-map',
    output: {
        path: __dirname + '/src/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /(\.js|\.jsx)$/, loader: 'babel-loader'}
        ]
    },

    resolve: {
        root: [__dirname + '/node_modules']
    }
};

/*
 * 压缩代码配置项
 *
 plugins: [
 new webpack.optimize.UglifyJsPlugin({
 compress: {
 warnings: false
 }
 })
 ]
 */