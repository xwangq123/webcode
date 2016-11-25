Gulp是一个构建系统，
　基于nodejs流的自动化构建工具，可以快速构建项目并减少频繁的I/0操作。你可以利用gulp插件完成各种自动化任务：测试、检查、合并、压缩、格式化、浏览器自动刷新、部署文件生成，并监听文件在改动后重复指定的这些步骤

安装 Gulp  全局 安装
npm install -g gulp
安装到项目
npm install --save-dev gulp


创建一个Gulp任务来压缩JavaScript文件。首先创建一个名为gulpfile.js的文件，这是定义Gulp任务的地方，它可以通过gulp命令来运行，接着把下面的代码放到gulpfile.js文件里面。

//创建任务 第一个参数任务名称 第二个任务
gulp.task('default', function() {  });


//执行任务  gulp  或者 gulp default

官网API http://www.gulpjs.com.cn/docs/api/

gulp.src（gobs[, options])//输出符合所提供的匹配模式（glob）或者匹配模式的数组（array of globs）的文件  将返回一个 Vinyl files 的 stream 它可以被 piped 到别的插件中
         globs  类型： String 或 Array 所要读取的 glob 或者包含 globs 的数组。
         options 类型： Object 通过 glob-stream 所传递给 node-glob 的参数。
                       除了 node-glob 和 glob-stream 所支持的参数外，gulp 增加了一些额外的选项参数：
                        options.buffer     类型： Boolean 默认值： true
                        如果该项被设置为 false，那么将会以 stream 方式返回 file.contents 而不是文件 buffer 的形式。这在处理一些大文件的时候将会很有用。**注意：**插件可能并不会实现对 stream 的支持。
                        options.read
                        类型： Boolean 默认值： true
                        如果该项被设置为 false， 那么 file.contents 会返回空值（null），也就是并不会去读取文件。
                        options.base类型： String 默认值： 将会加在 glob 之前


gulp.dest(path[, options])//能被 pipe 进来，并且将会写文件。并且重新输出所有数据，因此你可以将它 pipe 到多个文件夹。如果某文件夹不存在，将会自动创建它。