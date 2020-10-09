const myLogger = store => next => action => {
    // action으로 넘어오는 함수
    // function (dispatch, getState) => {
    //     dispatch({type: 'HELLO'})
    //     dispatch({type: 'BYE'})
    // }

    // 액션을 function 으로 받았을 경우
    typeof action === 'function'
        ? action(store.dispatch, store.getState)
        : next(action)

    console.log(action)
}

export default myLogger