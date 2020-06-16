import Text from '../NavigationText';
import React from 'react';
import LinkCustom from './LinkCustom'
import SVGCutlery from './SVGCutlery'

function NavigationPrimary(){
    return(
        <div>
            {Text.Navigation.NavigationPrimary.map((element, index)=> {
                    return(
                        <div key={index} className='navigation__primary'>
                            <SVGCutlery/>
                        <LinkCustom element={element} index={index}/>
                        </div>
                    )
                })}
        </div>
    )
}

export default NavigationPrimary