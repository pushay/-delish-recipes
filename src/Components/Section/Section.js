import React from 'react';
import sectionText from './SectionText';
import {Link} from 'react-router-dom';




function Section(props) {
    return(
        <div className='section'>
            <div className='section__container'>
                <h1 className='section__container--header'>{sectionText[props.choice][0].header}</h1>
                <p className='section__container--paragraph'>{sectionText[props.choice][0].paragraph}</p>
                <p className='section__container--smallParagraph'>{sectionText[props.choice][0].smallParagraph}</p>
                <Link className='section__container--link' to={sectionText[props.choice][0].link[0].linkTo}>{sectionText[props.choice][0].link[0].linkText}</Link>
            </div>
        </div>
    )
}

export default Section