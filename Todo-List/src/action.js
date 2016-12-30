export const ADD_TODO = 'ADD_TODO';
export const SET_VISIBILITY = 'SET_VISIBILITY';
export const DELETE_TODO = 'DELETE_TODO';
export const CHECKED_ITEM = 'CHECKED_ITEM';
export const CHECKED_ALL_ITEM = 'CHECKED_ALL_ITEM';
export const CLEAR_CHECKED = 'CLEAR_CHECKED';
export const UPDATE_TODO = 'UPDATE_TODO';

const setVisibility = visibility => ({
    type: SET_VISIBILITY,
    visibility
});

const addTodo = newTodo => ({
    type: ADD_TODO,
    newTodo
})

const deleteTodo = delId => ({
    type: DELETE_TODO,
    delId
})

const checkedItem = (checkedId, checked) => ({
    type: CHECKED_ITEM,
    checkedId,
    checked
})
const checkedAllItem = checked => ({
    type: CHECKED_ALL_ITEM,
    checked
})

const updataTodo = (id, text) => ({
    type: UPDATE_TODO,
    id,
    text
})

const clearChecked = () => ({type: CLEAR_CHECKED});

export default {
    setVisibility,
    addTodo,
    deleteTodo,
    checkedItem,
    checkedAllItem,
    clearChecked,
    updataTodo
}
