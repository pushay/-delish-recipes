import React, {useState} from 'react';
import Text from './SortText';
import {connect} from 'react-redux';
import * as actionTypes from '../../../store/actions'

function Sort(props){

    const [showSort, setShowSort] = useState(false)
    const [sortChoice, setSortChoice] = useState(0)

     const setSortChoiceHandler = (text) => {
        setSortChoice(text)
    }

    return(
        <div onClick={()=> setShowSort(!showSort)} className='sort'>
            <span>Sort by</span>
            <svg className='sort__svg' version="1.1" fill='#5A8392' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                <title>ctrl</title>
                <path d="M23 14c-0.278 0-0.555-0.116-0.753-0.341l-6.247-7.14-6.247 7.14c-0.364 0.416-0.995 0.458-1.411 0.094s-0.458-0.995-0.094-1.411l7-8c0.19-0.217 0.464-0.341 0.753-0.341s0.563 0.125 0.753 0.341l7 8c0.364 0.416 0.322 1.047-0.094 1.411-0.19 0.166-0.424 0.247-0.658 0.247z"></path>
            </svg>
            <div style={{display: showSort ? 'block' : 'none'}} className='sort__dropdown'>
                {Text.Sort.map((element,index)=> {
                    return(
                        <li style={{backgroundColor: sortChoice === element.text ? '#5A8392' : '#fff', color:sortChoice === element.text ? '#fff' : 'black'}} onClick={()=> {setSortChoiceHandler(element.text);props.onSendSortValue(element.name)}} key={index} className='sort__dropdown--element' value={element.name}>{element.text}</li>
                    )})}
            </div>

        </div>
    )
}

 const mapDispatchToProps = dispatch => {
    return {
        onSendSortValue:(value) => dispatch({
            type:actionTypes.SEND_SORT,
            sortV:value
        })
    }
}

export default connect(null, mapDispatchToProps)(Sort)