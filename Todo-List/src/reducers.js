import Immutable from 'immutable';
import {combineReducers} from 'redux-immutable';
import {ADD_TODO, SET_VISIBILITY} from './action';

const visibility = (state, action) => {
    return state;
}
const todos = (state, action) => {
    if (state === undefined || state === null)
        state = Immutable.List.of();
    switch (action.type) {
        case ADD_TODO:
            //Date.parse(new Date())这个是纯函数吗？
            /* state = state.push{todo: action.newTodo});//这样也可以不会报错和下面有什么区别难道这样写如果修改这一项不会返回新的对象？*/
            state = state.push(Immutable.Map({Id:action.newTodo.Id, Text: action.newTodo.Text}));
            break;
    }
    return state;
}

export default (combineReducers({
    visibility,
    todos
}))
