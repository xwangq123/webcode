import  Immutable from 'immutable';
export  default store = (storeName, state) => {
    if (state)
        localStorage.setItem(storeName, JSON.stringify(state.toJS()));
    const store = localStorage.getItem(storeName);
    return store ? Immutable.fromJS(store) : Immutable.Map();
};