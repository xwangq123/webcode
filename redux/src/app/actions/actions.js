import {ADD_ITEM, UPDATE_ITEM} from './actionType'

export function addItem(text) {
    return {
        type: ADD_ITEM,
        text
    }
}

export function deleteItems(id) {
    return {
        type: UPDATE_ITEM,
        id
    }
}
