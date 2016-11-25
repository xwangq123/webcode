//获取Greeter创建的div 放到index.html 的root div下面
var greeter = require('./Greeter.js');

//es6 语法使用react
import React from "react";
import {render} from "react-dom";
import GreeterReact from "./GreeterReact";
//因为webpack 是一个单一的入口,为了让webpack能找到”main.css“文件 需要通过 import, require, url等导入相关位置
import './main.css';

document.getElementById('root').appendChild(greeter());

render(<GreeterReact />, document.getElementById('rootReact'));