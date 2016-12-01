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
    switch (action.type) {
        case ADD_ITEM:
            return [createItem(action.text), ...state]
        case UPDATE_ITEM:
            return []
        default:
            return state
    }
}