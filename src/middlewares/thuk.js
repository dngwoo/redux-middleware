function thunk(store) {
    return function (next) {
        return function (action){
            console.log(action)
            // dispatch => {
            //     // 3초 뒤에 action 발생
            //     setTimeout(() => dispatch(increase()), 3000);
            // }
            typeof action === 'function'
                ? action(store.dispatch, store.getState)
                : next(action)
        }
    }
}

export default thunk