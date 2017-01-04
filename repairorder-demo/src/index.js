import React from 'react';
import ReactDOM from 'react-dom';
import  {createStore, applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux'
import RepairOrder from './RepairOrder';
import reducers from './reducers';
import state from './state';
import Immutable from 'immutable';
import thunk from 'redux-thunk';


const middleware = compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f)
const store = createStore(reducers, Immutable.fromJS(state), middleware);

ReactDOM.render(
    <Provider store={store}>
        <RepairOrder>
        </RepairOrder>
    </Provider>,
    document.getElementById('app')
);