import * as actionTypes from '../actions';

const initialState = {
    sort:''
}

const sendValueSortReducer = ( state = initialState, action) => {
    switch(action.type){
        case actionTypes.SEND_SORT:
           return {
               ...state,
               sort:action.sortV
           }
        default:
            return state
    }
}

export default sendValueSortReducer