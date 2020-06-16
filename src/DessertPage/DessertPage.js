import React from 'react';
import ListFood from '../Components/ListFood/ListFood';
import FilterSortArea from '../Components/Filter&Sort/FilterSortArea';
import FilterQuestions from '../Components/FilterQuestions/FilterQuestions';
import {connect} from 'react-redux';
import * as actionTypes from '../store/actions';
import Hamburger from '../Sidebar/Navigation/HamburgerNavigation/Hamburger'



function DessertPage(props){

    return (
        <div className='lookRecipes'>
            <Hamburger/>
            <FilterSortArea/>
            {props.sendSetShowFilter === false ? null : <FilterQuestions/>}
            <ListFood dot='BreakfastPage' />
        </div>
    )
}

const mapStateToProps = state => {
    return{
        sendSetShowFilter:state.ssf.sendSet
    }
}
const mapDispatchToProps = dispatch => {
    return{
        onSendSetFilter:(set) => dispatch({
            type:actionTypes.SEND_SETFILT,
            sendShowF:set
        })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DessertPage)