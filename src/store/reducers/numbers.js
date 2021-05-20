export function numberReducer(state, action, payload) {
    switch(action.type) {
        case 'numberAdd2':
            return{...state, number: state.number +2}
        case 'numberMultipliedBy7':
            return{...state, number: state.number * 7}
        case 'numberDividedBy25':
            return{...state, number: state.number / 25}
        case 'numberInt':
            return{...state, number: parseInt(state.number)}
        case 'numberAddN':
            return{...state, number: state.number + action.payload}
        default:
            return state
    }
}