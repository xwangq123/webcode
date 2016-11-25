
什么是WebPack，为什么要使用它？
为什要使用WebPack
现今的很多网页其实可以看做是功能丰富的应用，它们拥有着复杂的JavaScript代码和一大堆依赖包。为了简化开发的复杂度，前端社区涌现出了很多好的实践方法

模块化，让我们可以把复杂的程序细化为小的文件;
类似于TypeScript这种在JavaScript基础上拓展的开发语言：使我们能够实现目前版本的JavaScript不能直接使用的特性，并且之后还能能装换为JavaScript文件使浏览器可以识别；
Scss，less等CSS预处理器...这些改进确实大大的提高了我们的开发效率，但是利用它们开发的文件往往需要进行额外的处理才能让浏览器识别,而手动处理又是非常反锁的，这就为WebPack类的工具的出现提供了需求。

什么是Webpack

WebPack可以看做是模块打包机：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其打包为合适的格式以供浏览器使用。

WebPack和Grunt以及Gulp相比有什么特性
其实Webpack和另外两个并没有太多的可比性，Gulp/Grunt是一种能够优化前端的开发流程的工具，而WebPack是一种模块化的解决方案，不过Webpack的优点使得Webpack可以替代Gulp/Grunt类的工具。
Grunt和Gulp的工作方式是：在一个配置文件中，指明对某些文件进行类似编译，组合，压缩等任务的具体步骤，这个工具之后可以自动替你完成这些任务。




mpn 安装 Webpack
//全局安装
npm install -g webpack
//安装到你的项目目录
npm install --save-dev webpack


练习

src  文件夹用来存放原始数据和我们将写的JavaScript模块
static 文件夹用来存放准备给浏览器读取的数据（包括使用webpack生成的打包后的js文件以及一个index.html文件）
webpack可以在终端中使用，其最基础的命令是
webpack src/main.js(入口文件) static/bundle.js(输出文件)
执行结果  webpack同时编译了main.js 和Greeter,js 然后存放在static 下面的bundle.js文件


配置 Webpack

//注：“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。 使用./代替
      entry //唯一入口文件
      output //输出
      path//打包后的文件存放的地方
      filename//打包后输出文件的文件名
      在终端输入webpack，这条命令会自动参考webpack.config.js文件中的配置选项打包你的项目


npm可以引导任务执行 webpack

//创建一个package.json文件
npm init

package.json中对npm的脚本部分进行相关设置即可 "start": "webpack"  
//配置的地方就是这里啦，相当于把npm的start命令指向webpack命令 //配置完后可以执行npm start 会重新编译src下的main js 生成 bundle.js 文件

注：npm的start是一个特殊的脚本名称，它的特殊性表现在，在命令行中使用npm start就可以执行相关命令，如果对应的此脚本名称不是start，想要在命令行中运行时， 需要这样用npm run {script name}如npm run build，以下是执行npm start后命令行的输出显示




调试


我们浏览器F12发现看不到源码只能看到生成后的js文件。这样调试非常不便。webpack 提供了了Source Maps 来帮我们解决这个问题
通过简单的配置后，Webpack在打包时可以为我们生成的source maps，这为我们提供了一种对应编译文件和源文件的方法，使得编译后的代码可读性更高，也更容易调试。
在webpack的配置文件中配置source maps，需要配置devtool，它有以下四种不同的配置选项，各具优缺点:

devtool选项	配置结果
source-map	在一个单独的文件中产生一个完整且功能完全的文件。这个文件具有最好的source map，但是它会减慢打包文件的构建速度；会使目标目录生成一个                  js.map的文件
cheap-module-source-map	在一个单独的文件中生成一个不带列映射的map，不带列映射提高项目构建速度，但是也使得浏览器开发者工具只能对应到具体的行，不能对                         应到具体的列（符号），会对调试造成不便；
eval-source-map	使用eval打包源文件模块，在同一个文件中生成干净的完整的source map。这个选项可以在不影响构建速度的前提下生成完整的sourcemap，但是对                    打包后输出的JS文件的执行具有性能和安全的隐患。不过在开发阶段这是一个非常好的选项，但是在生产阶段一定不要用这个选项；
cheap-module-eval-source-map	这是在打包文件时最快的生成source map的方法，生成的Source Map 会和打包后的JavaScript文件同行显示，没有列映射，和

eval-source-map          选项具有相似的缺点；方法构建速度更快，但是不利于调试，推荐在大型项目考虑da时间成本是使用。

上述选项由上到下打包速度越来越快，不过同时也具有越来越多的负面作用，较快的构建速度的后果就是对打包后的文件的的执行有一定影响。





使用webpack构建本地服务器


安装依赖
npm install --save-dev webpack-dev-server

devserver作为webpack配置选项中的一项
    contentBase	默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到“public"目录）
    port	设置默认监听端口，如果省略，默认为”8080“
    inline	设置为true，当源文件改变时会自动刷新页面
    colors	设置为true，使终端输出的文件为彩色的
    historyApiFallback	在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html





Loaders
//安装可以装换JSON的loader
npm install --save-dev json-loader
Loaders是webpack中最让人激动人心的功能之一了。通过使用不同的loader，webpack通过调用外部的脚本或工具可以对各种各样的格式的文件进行处理，比如说分析JSON文件并把它转换为JavaScript文件，
或者说把下一代的JS文件（ES6，ES7)转换为现代浏览器可以识别的JS文件。或者说对React的开发而言，合适的Loaders可以把React的JSX文件转换为JS文件。

Loaders需要单独安装并且需要在webpack.config.js下的modules关键字下进行配置，
    test：一个匹配loaders所处理的文件的拓展名的正则表达式（必须）
    loader：loader的名称（必须）
    include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
    query：为loaders提供额外的设置选项（可选）

Babel
    Babel其实是一个编译JavaScript的平台，它的强大之处表现在可以通过编译帮你达到以下目的：

    下一代的JavaScript标准（ES6，ES7），这些标准目前并未被当前的浏览器完全的支持；
    使用基于JavaScript进行了拓展的语言，比如React的JSX
Babel的安装与配置
    Babel其实是几个模块化的包，其核心功能位于称为babel-core的npm包中，不过webpack把它们整合在一起使用，但是对于每一个你需要的功能或拓展，你都需要安装单独的包
    （用得最多的是解析Es6的babel-preset-es2015包和解析JSX的babel-preset-react包）。
// npm一次性安装多个依赖模块，模块之间用空格隔开
npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
//安装react  React 使用 ES6语法 Bable 会给ES6转换为ES5 并且给React的jsx语法转为js语法
npm install --save react react-dom



//待研究 React 组件使用.jsx文件 如何转译为javascript文件 目前报错

Babel的配置选项
Babel其实可以完全在webpack.config.js中进行配置，但是考虑到babel具有非常多的配置选项，在单一的webpack.config.js文件中进行配置往往使得这个文件显得太复杂，
因此一些开发者支持把babel的配置选项放在一个单独的名为 ".babelrc" 的配置文件中。我们现在的babel的配置并不算复杂，不过之后我们会再加一些东西，因此现在我们就提取出相关部分，
分两个配置文件进行配置（webpack会自动调用.babelrc里的babel配置选项）


一切皆模块
Webpack有一个不可不说的优点，它把所有的文件都可以当做模块处理，包括你的JavaScript代码，也包括CSS和fonts以及图片等等等，只有通过合适的loaders，它们都可以被当做模块被处理。



CSS
webpack提供两个工具处理样式表，css-loader 和 style-loader，二者处理的任务不同，css-loader使你能够使用类似@import 和 url(...)的方法实现 require()的功能,style-loader将所有的计算后的样式加入页面中，
二者组合在一起使你能够把样式表嵌入webpack打包后的JS文件中。


//安装
npm install --save-dev style-loader css-loader


插件（Plugins）--后面用到再说
插件（Plugins）是用来拓展Webpack功能的，它们会在整个构建过程中生效，执行相关的任务。
Loaders和Plugins常常被弄混，但是他们其实是完全不同的东西，可以这么来说，loaders是在打包构建过程中用来处理源文件的（JSX，Scss，Less..），一次处理一个，插件并不直接操作单个文件，它直接对整个构建过程其作用。

要使用某个插件，我们需要通过npm安装它，然后要做的就是在webpack配置中的plugins关键字部分添加该插件的一个实例（plugins是一个数组）继续看例子，我们添加了一个实现版权声明的插件。


摘自：
文／zhangwang（简书作者）
原文链接：http://www.jianshu.com/p/42e11515c10f
著作权归作者所有，转载请联系作者获得授权，并标注“简书作者”。
