import Immutable from 'immutable';
import {combineReducers} from 'redux-immutable';
import {
    ADD_TODO,
    CLEAR_CHECKED,
    DELETE_TODO,
    CHECKED_ITEM,
    CHECKED_ALL_ITEM,
    SET_VISIBILITY,
    UPDATE_TODO
} from './action';
import {ALL_TODOS} from './constants';


const visibility = (state, action) => {
    if (state === undefined || state === null)
        state = ALL_TODOS;
    switch (action.type) {
        case SET_VISIBILITY:
            state = action.visibility;
    }
    return state;
};
const todos = (state, action) => {
    if (state === undefined || state === null)
        state = Immutable.List.of();
    switch (action.type) {
        case ADD_TODO:
            //Date.parse(new Date())这个是纯函数吗？
            /* state = state.push{todo: action.newTodo});//这样也可以不会报错和下面有什么区别难道这样写如果修改这一项不会返回新的对象？*/
            state = state.push(Immutable.Map({
                Id: action.newTodo.Id,
                Text: action.newTodo.Text,
                Completed: action.newTodo.Completed
            }));
            break;
        case DELETE_TODO:
            state = state.filter(f => f.get("Id") !== action.delId);
            break;
        case CHECKED_ITEM:
            state = state.update(state.findIndex(items => items.get('Id') === action.checkedId),
                item => item.set('Completed', action.checked));
            break;
        case CLEAR_CHECKED:
            state = state.filter(f => f.get('Completed') === false);
            break;
        case CHECKED_ALL_ITEM:
            state = state.map(item => item.set('Completed', action.checked));
            break;
        case UPDATE_TODO:
            state = state.update(state.findIndex(items => items.get("Id") === action.id), item => item.set("Text", action.text));
            break;
    }
    return state;
};

export default (combineReducers({
    visibility,
    todos
}))
