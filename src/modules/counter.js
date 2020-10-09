const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'

// action creator
export const increase = () => ({type: INCREASE})
export const decrease = () => ({type: DECREASE})

// 비동기 action creator
export const increaseAsync = () => dispatch => {
    // 3초 뒤에 action 발생
    setTimeout(() => dispatch(increase()), 3000)
}
export const decreaseAsync = () => dispatch => {
    // 3초 뒤에 action 발생
    setTimeout(() => dispatch(decrease()), 3000)
}

const initalState = 0

export default function counter (state= initalState, action){
    switch(action.type){
        case INCREASE:
            return state + 1
        case DECREASE:
            return state - 1
        default:
            return state
    }
}