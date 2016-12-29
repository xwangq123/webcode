import React, {Component} from 'react';

export default class TodoItem extends Component {
    render() {
        return (
            <li>
                <div className="view">
                    <input className="toggle" type="checkbox"/>
                    <label>{this.props.todo.Text}</label>
                    <button className="destroy"></button>
                </div>
            </li>
        )
    }
}