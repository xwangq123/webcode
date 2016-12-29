import  React, {Component} from  'react';
import  {bindActionCreators} from 'redux';
import TodoFooter from './TodoFooter';
import {connect}  from 'react-redux';
import actions from './action';
import TodoItem from './TodoItem';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodo: ''
        }
        this.handleNewTodoKeyDown = this.handleNewTodoKeyDown.bind(this);
        this.handleNewTodoChange = this.handleNewTodoChange.bind(this);
    }

    handleNewTodoKeyDown(e) {
        if (e.keyCode !== 13)
            return;
        const val = this.state.newTodo.trim();
        this.props.addTodo({
            Id: Date.parse(new Date()),
            Text: val
        });
        this.setState({newTodo: ''});

    }

    handleNewTodoChange(e) {
        this.setState({newTodo: e.target.value});
    }

    render() {
        const todos = this.props.todos;
        //如果不传入参数key会警告：每个子数组或迭代器应该有一个唯一的“密钥”支柱.。检查渲染方法` TodoApp `
        const todoItems = todos.map(todo => (
            <TodoItem key={todo.Id}
                      todo={todo}></TodoItem>
        ));
        let main = null;
        if (todos.length) {
            main = (
                <section className='main'>
                    <input type='checkbox' className='toggle-all'/>
                    <ul className='todo-list'>
                        {todoItems}
                    </ul>
                </section>
            );
        }

        return (
            <div>
                <header className='header'>
                    <h1>todos</h1>
                    <input className='new-todo'
                           value={this.state.newTodo}
                           onKeyDown={this.handleNewTodoKeyDown}
                           onChange={this.handleNewTodoChange}
                           placeholder='有什么需要做的事情?'/>
                </header>
                {main}
                <TodoFooter></TodoFooter>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const visibility = state.get('visibility');
    const todos = state.get('todos');
    return {
        visibility,
        todos: todos.toJS()
    };
}

//bindActionCreators 把 action creators 转成拥有同名 keys 的对象，但使用 dispatch 把每个 action creator 包围起来，这样可以直接调用它们。
let mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

//react-redux 将生成一个容器组件connect来包裹TodoApp
//mapStateToProps 获取store树下的state 取出TodoApp组件对应state树的数据返回。react-redux会将返回的数据当作TodoApp的props属性传入TodoApp
export default  connect(mapStateToProps, mapDispatchToProps)(TodoApp);