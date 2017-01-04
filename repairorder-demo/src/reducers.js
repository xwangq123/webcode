import Immutable from 'immutable';
import {combineReducers} from 'redux-immutable';
import actions from './action';

const repairOrder = (state, action) => {
    if (state === undefined || state === null)
        state = Immutable.Map();
    switch (action.type) {
        case actions.QUERY:
            state = Immutable.fromJS(JSON.parse(actions.json));
            break;
    }
    return state;
};


export  default  combineReducers({
    repairOrder
});



