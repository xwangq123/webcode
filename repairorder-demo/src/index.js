import React from 'react';
import ReactDOM from 'react-dom';
import Redux,{createStore,compose,applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import RepairOrder from './RepairOrder';
import reducers from './reducers';
import state from './state';
import Immutable from 'immutable';
import {thunkMiddleware} from 'redux-thunk';

const store = createStore(reducers, Immutable.fromJS(state),
    compose(applyMiddleware(thunkMiddleware), window.devToolsExtension ? window.devToolsExtension() : f => f));


ReactDOM.render(
    <Provider store={store}>
        <RepairOrder>
        </RepairOrder>
    </Provider>,
    document.getElementById('app')
);
