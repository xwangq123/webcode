import React, {Component} from 'react';//  component 是react 自己定义了好了大量的 Components，从 "div" 到 "svg"，包含了几乎所有 HTML Tags。 如果要创建自己的Component 则用 React.createClass
import {Provider} from 'react-redux';//导入Provider 这应该是你的 React Components 树的根组件
import App from './App.jsx';
//文件名: React组件使用驼峰命名法且首字母必须大写
export default class Root extends Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <App />
            </Provider>
        );
    };
}