import * as actionTypes from '../actions'

const initialState = {
    cookingTime: '',
    price: '',
    diets:''
}

const sendValueFilterReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SEND_VALUE:
            if (action.div === 'COOKING TIME') {
                if (action.value === 'less than 30m') action.value =30
                else if  (action.value === 'less than 1Hr') action.value =60
                else if (action.value === 'less than 2Hr') action.value =120
                return{
                    ...state,
                    cookingTime:action.value
                }
            }
            else if (action.div === 'PRICE PER SERVING') {
                if (action.value === 'less than 150$') action.value =150
                else if  (action.value === 'less than 200$') action.value =200
                else if (action.value === 'less than 350$') action.value =350
                return{
                    ...state,
                    price:action.value
                }
            }
            else if (action.div === 'DIETS') {
                return{
                    ...state,
                    diets:action.value
                }
            }
            break;
            default:
                return state
    }
}
export default sendValueFilterReducer