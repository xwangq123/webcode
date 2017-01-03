import  React, {Component} from  'react';
import  {bindActionCreators} from 'redux';
import TodoFooter from './TodoFooter';
import {connect}  from 'react-redux';
import actions from './action';
import TodoItem from './TodoItem';
import director from 'director';
import {ALL_TODOS, COMPLETED_TODOS, ACTIVE_TODOS} from './constants';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodo: ''
        };
        this.handleNewTodoKeyDown = this.handleNewTodoKeyDown.bind(this);
        this.handleNewTodoChange = this.handleNewTodoChange.bind(this);
        this.handleAllChecked = this.handleAllChecked.bind(this);
    }

    //组件渲染之后调用
    componentDidMount() {
        const router = new director.Router({
            '/': () => this.props.setVisibility(ALL_TODOS),
            '/active': () => this.props.setVisibility(ACTIVE_TODOS),
            '/completed': () => this.props.setVisibility(COMPLETED_TODOS),
        });
        router.init('/');
    }

    handleNewTodoKeyDown(e) {
        if (e.keyCode !== 13)
            return;
        const val = this.state.newTodo.trim();
        this.props.addTodo({
            Id: Date.parse(new Date()),
            Text: val,
            Completed: false
        });
        this.setState({newTodo: ''});
    }

    handleAllChecked(e) {
        this.props.checkedAllItem(e.target.checked);
    }

    handleNewTodoChange(e) {
        this.setState({newTodo: e.target.value});
    }

    render() {
        const todos = this.props.todosVisible;
        //如果不传入参数key会警告：每个子数组或迭代器应该有一个唯一的“密钥”支柱.。检查渲染方法` TodoApp `
        const todoItems = todos.map(todo => (
            <TodoItem key={todo.Id}
                      todo={todo}
                      updateTodo={this.props.updataTodo}
                      onItemChange={this.props.checkedItem}
                      onDelTodo={this.props.deleteTodo}>
            </TodoItem>
        ));
        //计算剩余项目
        const activeCount = this.props.todos.reduce((accum, todo) => todo.Completed ? accum : accum + 1, 0);

        //计算清楚已完成是否需要显示
        // const allChecked = todoItems - activeCount;

        let main = null;

        if (todos.length)
            main = (
                <section className='main'>
                    <input type='checkbox'
                           className='toggle-all'

                           onChange={this.handleAllChecked}
                           checked={activeCount === 0}/>
                    <ul className='todo-list'>
                        {todoItems}
                    </ul>
                </section>
            );

        let todoFooter = null;
        if (this.props.todos.length)
            todoFooter = (
                <TodoFooter activeCount={activeCount}
                            visibility={this.props.visibility}
                            isShow={todoItems.length !== activeCount}
                            onClearChecked={this.props.clearChecked}>
                </TodoFooter>
            );
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
                {todoFooter}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const visibility = state.get('visibility');
    const todos = state.get('todos');
    let visibleTodos = null;
    switch (visibility) {
        case COMPLETED_TODOS:
            visibleTodos = todos.filter(r => r.get('Completed') === true);
            break
        case ACTIVE_TODOS:
            visibleTodos = todos.filter(r => r.get('Completed') === false);
            break;
        default:
            visibleTodos = todos;
            break
    }
    return {
        visibility,
        todos: todos.toJS(),
        todosVisible: visibleTodos.toJS()
    };
};

//bindActionCreators 把 action creators 转成拥有同名 keys 的对象，但使用 dispatch 把每个 action creator 包围起来，这样可以直接调用它们。
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

//react-redux 将生成一个容器组件connect来包裹TodoApp
//mapStateToProps 获取store树下的state 取出TodoApp组件对应state树的数据返回。react-redux会将返回的数据当作TodoApp的props属性传入TodoApp
export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);