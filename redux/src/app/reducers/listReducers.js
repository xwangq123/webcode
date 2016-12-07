import {ADD_ITEM, UPDATE_ITEM} from '../actions/actionType';
let createItem = text => {
    let time = Date.now();
    return {
        id: Math.random().toString(36).split('.').join(''),
        addTime: time,
        updateTime: time,
        status: false,
        text
    }
}
export default (state = [], action) => {
    console.log(state);
    switch (action.type) {
        case ADD_ITEM:
            return Object.assign([], state, state.push(createItem(action.text)));
        case UPDATE_ITEM:
            return []
        default:
            return state
    }
}