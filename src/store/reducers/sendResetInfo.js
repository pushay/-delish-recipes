import * as actionTypes from '../actions';

const initialState = {
    data:'',
    setItems:''
}

const sendResetInfoReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SEND_INFO:
            return {
                ...state,
                data:action.data,
                setItems:action.setItems
            }
            default:
                 return state
        }
}
export default sendResetInfoReducer