const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'

// action creator
export const increase = () => ({type: INCREASE})
export const decrease = () => ({type: DECREASE})

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