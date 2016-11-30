const redux = require('redux');


const createStore = redux.createStore;

const ActionType = {
    ADD: Symbol()
}

let initState = {
    products: []
};

const addProducts = (product)=> {
    return {
        type: ActionType.ADD,
        product
    }
}


const getProducts = (state=initState, action) => {
    switch(action.type) {
        case ActionType.ADD :
            return Object.assign({}, state, {
                products: state.products.concat(action.product)
            });
        default :
            return state;

    }
}


let store = createStore(getProducts);
console.log(store.getState());

store.dispatch(addProducts(1));
console.log(store.getState());