import Immutable from 'immutable';
import {combineReducers} from 'redux-immutable';
import {QUERY} from './action';

const management = (state, action) => {
    if (state === undefined || state === null)
        state = Immutable.Map();
    switch (action.type) {
        case QUERY:
            state = state.setIn(['dataSource'],Immutable.fromJS(action.result));
            break;
    }
    return state;
};


const dataEditView = (state, action) => {
    return state;
}


export  default  combineReducers({
    management,
    dataEditView
});



