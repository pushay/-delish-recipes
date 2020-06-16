import React from 'react';
import { Link } from "react-router-dom";
import ButtonText from './ButtonText'

function Button(props) {

    return(
             <div className='ButtonContainer'>
                 <button className='Button__Kitchen'>
                    <Link className='Button__Kitchen--link' to={ButtonText[props.text][0].link}>{ButtonText[props.text][0].linkText}</Link>
                 </button>
            </div>      
    )
}

export default Button