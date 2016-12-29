import React, {Component} from 'react';

const TodoFooter = props => {
    return (
        <footer className="footer">
            <span className="todo-count">
                剩余
                <strong>1</strong>
                项
            </span>
            <ul className="filters">
                <li><a href="#/" className="selected">全部</a></li>
                <li><a href="#/active" className="selected">待办</a></li>
                <li><a href="#/completed" className="selected">已完成</a></li>
            </ul>
            <button className="clear-completed">清除已完成</button>
        </footer>
    );
}
export default  TodoFooter;