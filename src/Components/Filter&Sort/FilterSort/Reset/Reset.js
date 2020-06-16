import React from 'react';
import {connect} from 'react-redux'

function Reset(props){
    return(
        <div onClick={() => props.infSetItems(props.infData)} className='reset'>
            Reset
        </div>
    )
}
const mapStateToProps = state => {
    return {
        infData:state.inf.data,
        infSetItems:state.inf.setItems
    }
}

export default connect(mapStateToProps)(Reset)