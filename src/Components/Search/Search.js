import React from 'react';
import { withRouter } from 'react-router-dom';
import {compose} from 'redux';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions'

function Search(props) {
    const keypressedHandler = (event) => {
        if (event.key === 'Enter') {
            props.onStoreInput(event.target.value)
            props.history.push({
                pathname:'/LookRecipes'
            })
        }
    }

    return(
        <div className='search'>
            <h1 className='search__header'>Find a recipe</h1>
            <svg className='search__input--svg' version="1.1" fill='#D62828' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 32 32">
                <title>search</title>
                <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
            </svg>
            <input id="search__input" onKeyPress={keypressedHandler} autoComplete="off"  className="search__input" type="text" name="" />
        </div>
    )
}
const mapStateToProps = state => {
    return {
        input:state.inp.input
    }
}
const mapDispatchToProps= dispatch => {
    return {
        onStoreInput: (value) => dispatch({
            type:actionTypes.STORE_INPUT,
            inputValue:value
        })
    }
}
export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Search)