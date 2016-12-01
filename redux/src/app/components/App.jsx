import React, {Component} from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions/actions.js';
import Category from './Category.jsx';
import  ListBox from './ListBox.jsx';

//文件名: React组件使用驼峰命名法且首字母必须大写
export default class App extends Component {
    render() {
        let {addItem} = this.props;
        return (
            <div>
                <h1>Todo-List-Demo</h1>
                <div className="box clearfix">
                    {/*  左边栏 */}
                    <Category />
                    {/*  右边栏  JSX的特性 …它的功能是将未知属性提取出来 http://blog.csdn.net/lcg910978041/article/details/53008996 ...this.props 和 ...other 区别和用法*/}
                    <ListBox addItem={addItem} {...this.props} />
                </div>
            </div>
        );
    };
}

let mapStateToProps = state => {
    return {
        ...state
    }
};

let mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);