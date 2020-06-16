import React, { useEffect, useState } from 'react';
import Button from '../Components/Button/Button';
import Navigation from './Navigation/Navigation';
import Credits from './Navigation/Credits/Credits';
import {connect} from 'react-redux';
import * as actionTypes from '../store/actions';


function Sidebar(props) {

    const [showSidebarOnMobile, setShowSidebarOnMobile] = useState(false);

    useEffect( () => {
        props.onSetSidebar(setShowSidebarOnMobile, showSidebarOnMobile)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showSidebarOnMobile]);

    return(
        <div className='sidebar' style={{display:showSidebarOnMobile ? 'block' : ''}}>
            
            <div className='sidebar__container'>
                <div className='sidebar__logo'>
                    <h1 className='sidebar__logo--header'>Delish</h1>
                </div>
                <Button text='MyKitchenButton' />
                <Navigation/>
                <Credits/>
            </div>
        </div>
    )
}

const mapDispatchToProps= dispatch => {
    return {
        onSetSidebar:(sendSet, sendState) => dispatch({
            type:actionTypes.SEND_SETSIDE,
            send:sendSet, 
            sendState:sendState
        })
    }
}

const mapStateToProps = state => {
    return {
        sendSet:state.sss.setSidebar,
        sendState:state.sss.sendState
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)