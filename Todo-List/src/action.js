export const ADD_TODO = 'ADD_TODO';
export const SET_VISIBILITY = 'SET_VISIBILITY';

const setVisibility = visibility => ({
    type: SET_VISIBILITY,
    payload: visibility
});

const addTodo = newTodo => ({
    type: ADD_TODO,
    newTodo
})

export default {
    setVisibility,
    addTodo
}