import React from 'react';
import text from '../ImageSliderText'

function ImageSliderLogoBox(props){

    const changeSlideHandler = (index) => {
        props.setState(index);
    }
  
    return(
        <div className='imageSlider__logoContainer'>
            {text.ImageSliderText.map((element, index) => {
                return(
                    <div className='imageSlider__imagebox' key={index}>
                        <img onClick={()=> changeSlideHandler(index)} style={{opacity: props.state === index ? '1' : '0.3'}}  src={element.logo} alt='logo' className='imageSlider__imagebox--image' />
                    </div>
                )
            })}
        </div> 
    )
}
export default ImageSliderLogoBox