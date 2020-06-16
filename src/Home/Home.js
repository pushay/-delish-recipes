import React from 'react';
import Search from '../Components/Search/Search';
import ListFood from '../Components/ListFood/ListFood';
import Section from '../Components/Section/Section';
import ImageSlider from '../Components/ImageSlider/ImageSlider';
import Hamburger from '../Sidebar/Navigation/HamburgerNavigation/Hamburger'




function Home() {
    
    return(
        <div className="home">
            <div className='home__background'>
                <Hamburger fill='white'/>
                <Search />
            </div>
            <ListFood dot='ListFoodWhatToCook'/>
            <Section choice='SectionStory' />
            <div className='findStore'>
                <div className='findStore__box'>
                    <Section choice='SectionFind'/>
                </div>
            </div>
            <ImageSlider/>
        </div>
    )
}

export default Home