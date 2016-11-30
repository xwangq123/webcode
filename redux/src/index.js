import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators, combineReducers, createStore} from 'redux';
import {Provider, connect} from 'react-redux';

// React Component
class Counter extends React.Component {
    render() {
        const {value, onIncreaseClick} = this.props;

        console.log('render');

        return (
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>click</button>
            </div>
        )
    }
}
Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired
};

// Action
const increaseAction = {type: 'increase2'};

// Reducer1
function count(state = 0, action) {
    switch (action.type) {
        case 'increase':
            console.log('count');
            return state + 1
        default:
            return state
    }
}
//Reducer2
function count2(state = 0, action) {

    switch (action.type) {
        case 'increase2':
            console.log('count2');
            return state + 1
        default:
            return state
    }
}

//Redux 提供了一个combineReducers方法，用于 Reducer 的拆分。你只要定义各个子 Reducer 函数，然后用这个方法，将它们合成一个大的 Reducer。
let todoApp = combineReducers({
    count, count2
});

// Redux 提供createStore这个函数，用来生成 Store。
let store = createStore(todoApp);

//mapStateToProps是connect函数的第一个参数。它的作用，建立一个从（外部的）state对象到（UI 组件的）props对象的映射关系。
//作为函数，mapStateToProps执行后应该返回一个对象
function mapStateToProps(state) {
    console.log('mapStateToProps')
    return {value: state.count2};
}


//mapDispatchToProps是connect函数的第二个参数，用来建立 UI 组件的参数到store.dispatch方法的映射。也就是说，它定义了哪些用户的操作应该当作 Action，传给 Store。它可以是一个函数，也可以是一个对象。
//如果mapDispatchToProps是一个函数，会得到dispatch和ownProps（容器组件的props对象）两个参数。
function mapDispatchToProps(dispatch) {
    console.log('mapDispatchToProps')
    store.getState()
    // return {onIncreaseClick: dispatch(increaseAction)}
    return {onIncreaseClick: () => dispatch(increaseAction)}
    // return bindActionCreators(increaseAction, dispatch);
}

//React-Redux 提供connect方法，用于从 UI 组件生成容器组件。connect的意思，就是将这两种组件连起来。
let App = connect(mapStateToProps, mapDispatchToProps)(Counter/*ui组件*/);


//react render 渲染页面
ReactDOM.render(
    /* // Provider在你原有的App Container的基础上再包上一层，它的工作很简单，就是接受Redux的store作为props，并将其声明为context的属性之一，
     // 子组件可以在声明了contextTypes之后可以方便的通过this.context.store访问到store。
     //不过我们的组件通常不需要这么做，将store放在context里，是为了给下面的connect用的。*/
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);