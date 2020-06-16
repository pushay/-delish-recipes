import React from 'react';
import {connect} from 'react-redux'

function Hamburger(props){

    return(
        <div className='hamburger' onClick={()=> {props.sendSet(!props.sendState)}} >
            <svg version="1.1" style={{fill: props.sendState ? 'black' : props.fill}} xmlns="http://www.w3.org/2000/svg" fill='black' width="28" height="28" viewBox="0 0 32 32">
                <title>menu</title>
                <path d="M2 6h28v6h-28zM2 14h28v6h-28zM2 22h28v6h-28z"></path>
            </svg>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        sendSet:state.sss.setSidebar,
        sendState:state.sss.sendState
    }
}

export default connect(mapStateToProps)(Hamburger)