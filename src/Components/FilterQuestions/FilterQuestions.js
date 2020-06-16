import React from 'react';
import {connect} from 'react-redux'
import Text from './FilerQuestionsText';
import * as actionTypes from '../../store/actions'


function FilterQuestions(props){

    return(
        <div style={{display: props.sendSetShowFilter ? 'block' : 'none'}} className='filterQuestions'>
            {Text.FilterQuestions.map((element, index) => {
                return(
                    <div key={index} className='filterQuestions__div' >
                        <h1 className='filterQuestions__div--span'>{element.div}</h1>
                        <div className='filterQuestions__answears'>
                            <li onClick={()=> {props.onSendFValue(element.div, element.answear1)}}className='filterQuestions__answears--list'>{element.answear1}</li>
                            <li onClick={()=> props.onSendFValue(element.div, element.answear2)} className='filterQuestions__answears--list' >{element.answear2}</li>
                            <li onClick={()=> props.onSendFValue(element.div, element.answear3) } className='filterQuestions__answears--list' >{element.answear3}</li>
                        </div>
                    </div>
                )
            })}  
        </div>
    )
}

const mapStateToProps = state => {
    return{
        sentCook:state.fvalues.cookingTime,
        sentPrice:state.fvalues.price,
        sentDiets:state.fvalues.diets,
        sendSetShowFilter:state.ssf.sendSet


    }
}
const mapDispatchToProps= dispatch => {
    return {
        onSendFValue: (div, value) => dispatch({
            type:actionTypes.SEND_VALUE,
            value:value,
            div:div
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterQuestions)