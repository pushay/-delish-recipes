import React,{useState} from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../../store/actions'

function Filter(props){

    const [showFilterQ, setShowFilterQ] = useState(false)

    return(
        <div onClick={()=> {setShowFilterQ(!showFilterQ);props.onSendSetFilter(showFilterQ)} } className='filter'>
            <svg className='filter__svg' fill ='#5A8392' version="1.1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 32 32">
                <title>equalizer</title>
                <path d="M14 4v-0.5c0-0.825-0.675-1.5-1.5-1.5h-5c-0.825 0-1.5 0.675-1.5 1.5v0.5h-6v4h6v0.5c0 0.825 0.675 1.5 1.5 1.5h5c0.825 0 1.5-0.675 1.5-1.5v-0.5h18v-4h-18zM8 8v-4h4v4h-4zM26 13.5c0-0.825-0.675-1.5-1.5-1.5h-5c-0.825 0-1.5 0.675-1.5 1.5v0.5h-18v4h18v0.5c0 0.825 0.675 1.5 1.5 1.5h5c0.825 0 1.5-0.675 1.5-1.5v-0.5h6v-4h-6v-0.5zM20 18v-4h4v4h-4zM14 23.5c0-0.825-0.675-1.5-1.5-1.5h-5c-0.825 0-1.5 0.675-1.5 1.5v0.5h-6v4h6v0.5c0 0.825 0.675 1.5 1.5 1.5h5c0.825 0 1.5-0.675 1.5-1.5v-0.5h18v-4h-18v-0.5zM8 28v-4h4v4h-4z"></path>
            </svg>
            <span className='filter__span'>Filter</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return{
        onSendSetFilter:(set) => dispatch({
            type:actionTypes.SEND_SETFILT,
            sendShowF:set
        })
    }
}



export default connect( undefined,mapDispatchToProps)(Filter)