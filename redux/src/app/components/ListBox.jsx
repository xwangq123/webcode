import React, {Component}  from 'react';

export  default class ListBox extends Component {
    handleKeyUp(e) {
        if (e.keyCode === 13) {
            let text = e.target.value;
            if (!text) return;
            this.props.addItem(text);
            e.target.value = '';
        }
    }

    render() {
        let listLable = this.props.listReducers.map(function (item) {
            return (<li><label>{item.text}</label></li>);
        });
        return (
            <div className="list">
                <header className="list-header">
                    <input id="new-todo" placeholder="What needs to be done?" onKeyUp={this.handleKeyUp.bind(this)}/>
                </header>
                <ul className="todo-list">
                    {listLable}
                </ul>
            </div>
        );
    };
}