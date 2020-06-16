import React from 'react';
import text from '../ImageSliderText'

function ImageSliderTextBox(props){
    return(
        <div className='imageSlider__textContainer'>
            <div className='imageSlider__textbox'>
                <p id='imageSParagraph' className='imageSlider__textbox--paragraph'>{text.ImageSliderText[props.state].paragraph}</p>
                <p id='imageSHeader' className='imageSlider__textbox--header'>{text.ImageSliderText[props.state].header}</p>
            </div>
        </div>
    )
}

export default ImageSliderTextBox