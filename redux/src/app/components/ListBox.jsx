import React, {Component}  from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions/actions.js';

export  default class ListBox extends Component {
    handleKeyUp(e) {
        if (e.keyCode === 13) {
            let text = e.target.value;
            if (!text) return;
            let {addItem} = this.props;
            addItem(text);
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


let mapStateToProps = state => {
    let listReducers = state.listReducers;
/*   // console.log(listReducers);*/
    return {
        listReducers: listReducers
    }
};

let mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListBox);