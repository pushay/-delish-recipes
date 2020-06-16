import * as actionTypes from '../actions'

const initialState = {
    setSidebar: '',
    sendState:''
}

const sendSetSidebarReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SEND_SETSIDE:
            return {
                ...state,
                setSidebar:action.send,
                sendState:action.sendState
            }
            default:
                return state
    }
    
}

export default sendSetSidebarReducer