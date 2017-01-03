import React, {Component} from 'react';
import {ALL_TODOS, COMPLETED_TODOS, ACTIVE_TODOS} from './constants';

const TodoFooter = props => {
    const clearButton = props.isShow ?
        <button className="clear-completed" onClick={props.onClearChecked}> 清除已完成 </button> : null;
    return (
        <footer className="footer">
            <span className="todo-count">
                剩余
                <strong>{props.activeCount}</strong>
                项
            </span>
            <ul className="filters">
                <li>
                    <a href="#/" className={props.visibility === ALL_TODOS ? 'selected' : ''}>
                        全部
                    </a>
                </li>
                <li>
                    <a href="#/active" className={props.visibility === ACTIVE_TODOS ? 'selected' : ''}>
                        待办
                    </a>
                </li>
                <li>
                    <a href="#/completed"
                       className={props.visibility === COMPLETED_TODOS ? 'selected' : ''}>
                        已完成
                    </a>
                </li>
            </ul>
            {clearButton}
        </footer>
    );
};
export default  TodoFooter;