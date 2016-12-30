import  React from 'react';
import ReactDOM from 'react-dom';
import  {Provider} from 'react-redux';
import reducers from './reducers';
import {createStore} from 'redux';
import Immutable from 'immutable';
import  TodoApp from './TodoApp';

const store = createStore(reducers, Immutable.fromJS({
    visibility: '',
    todos: Immutable.List.of()
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}><TodoApp></TodoApp></Provider>,
    document.getElementById('app')
);
