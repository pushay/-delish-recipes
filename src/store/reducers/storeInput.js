import * as actionTypes from '../actions'

const initialState = {
    input:''
}

const storeInputReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_INPUT:
            return{
                ...state,
                input:action.inputValue
            }
        default:
            return state
    }
}
export default storeInputReducer