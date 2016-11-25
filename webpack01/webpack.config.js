
module.exports = {
    devtool: "source-map",//在一个单独的文件中产生一个完整且功能完全的文件。这个文件具有最好的source map，但是它会减慢打包文件的构建速度；
    entry: "./src/main.js",//唯一入口文件
    output: {
        path: "./static",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    module: {//在配置文件里添加JSON loader
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',//在webpack的module部分的loaders里进行配置即可
                // query: { 注释 新增文件在.bablerc 里面配置 webpack会自动调用.babelrc里的babel配置选项
                //   presets: ['es2015', 'react']
                //}
            }, {
                test: /\.css$/,
                loader: 'style!css'//添加对样式表的处理  感叹号的作用在于使同一文件能够使用不同类型的loader
            }
        ]
    },
    devServer: {
        contentBase: "./static",//本地服务器所加载的页面所在的目录
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,
        port:3001,
        inline: true//实时刷新
    }
}