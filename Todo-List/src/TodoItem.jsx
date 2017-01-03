import ReactDOM from 'react-dom';
import React, {Component} from 'react';


export default class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editText: props.todo.Text,
            isEdit: false
        };
        this.handleSave = this.handleSave.bind(this);
        this.handleDelItem = this.handleDelItem.bind(this);
        this.handleCheckChange = this.handleCheckChange.bind(this);
        this.handleDoubleClick = this.handleDoubleClick.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleTextKeyDown = this.handleTextKeyDown.bind(this);
    }

    handleDelItem() {
        this.props.onDelTodo(this.props.todo.Id);
    }

    handleCheckChange(e) {
        this.props.onItemChange(this.props.todo.Id, e.target.checked);
    }

    handleDoubleClick() {
        this.setState({"isEdit": true});
    }

    //组件渲染完后 给TextBox 获取焦点光标
    componentDidUpdate() {
        if (this.state.isEdit) {
            const node = ReactDOM.findDOMNode(this.refs.editTodo);
            node.focus();
            node.setSelectionRange(node.value.length, node.value.length);
        }
    }

    handleTextChange(e) {
        this.setState({"editText": e.target.value});
    }

    handleTextKeyDown(e) {
        if (e.which === 13) {
            this.setState({"isEdit": false});
            this.props.updateTodo(this.props.todo.Id, this.state.editText);
        }
    }

    handleSave() {
        this.setState({"isEdit": false});
        this.props.updateTodo(this.props.todo.Id, this.state.editText);
    }

    render() {
        return (
            <li className={(this.props.todo.Completed ? "completed" : "" ) + " " + (this.state.isEdit ? "editing" : "") }>
                <div className="view">
                    <input className="toggle"
                           checked={this.props.todo.Completed}
                           onChange={this.handleCheckChange}
                           type="checkbox"/>
                    <label onDoubleClick={this.handleDoubleClick}>{this.props.todo.Text}</label>
                    <button onClick={this.handleDelItem}
                            className="destroy">
                    </button>
                </div>
                <input ref="editTodo"
                       type="text"
                       onBlur={this.handleSave}
                       value={this.state.editText}
                       onChange={this.handleTextChange}
                       className="edit"
                       onKeyDown={this.handleTextKeyDown}/>
            </li>
        )
    }
}