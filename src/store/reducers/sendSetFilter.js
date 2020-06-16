import * as actionTypes from '../actions'

const initialState = {
    sendSet:''
}

const sendSetFilterReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SEND_SETFILT:
            return{
                ...state,
                sendSet:action.sendShowF
            }
        default:
            return state
    }
}

export default sendSetFilterReducer