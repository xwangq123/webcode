import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import Root from './app/components/Root.jsx';
import rootReducers from './app/reducers/RootReducers.js';

//创建store 第一个参数是 reducers  后面参数是官网给的 浏览器redux用来监听store输的 不加后面参数 浏览器 redux插件树不出来
const store = createStore(rootReducers, {
    listReducers: [{text:"dasdas"}],
    page: ""
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('app')
);