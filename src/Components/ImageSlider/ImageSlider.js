import React, { useState, useEffect } from 'react';
import text from './ImageSliderText'
import ImageSliderTextBox from './imageSliderTextBox/ImageSliderTextBox';
import ImageSliderLogoBox from './ImageSliderLogoBox/ImageSliderLogoBox';

function ImageSlider() {
    const [choosen, setChoosen] = useState(0)

    const changeHandler = (i) => {
        setChoosen(i)
        if (text.ImageSliderText[i + 1]) setTimeout(() => changeHandler(i + 1), 5000)
        else setTimeout(() => changeHandler(0), 5000)
    }
    useEffect(()=> {
        setTimeout(() => changeHandler(1), 5000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const clickChange = (newIndex) => {
        let id = window.setTimeout(function() {}, 0);
        while (id--) {
            window.clearTimeout(id);
        }
        changeHandler(newIndex);
    }

    return(
        <div className='imageSlider'>
            <ImageSliderTextBox state={choosen}/>
            <ImageSliderLogoBox setState={clickChange} state={choosen}/>             
        </div>
    )
}

export default ImageSlider