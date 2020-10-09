function thunk(store) {
    return function (next) {
        return function (action){
            console.log(action)
            typeof action === 'function'
                ? action(store.dispatch, store.getState)
                : next(action)
        }
    }
}

export default thunk