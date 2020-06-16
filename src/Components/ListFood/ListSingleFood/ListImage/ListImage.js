import React from 'react'
import hat from '../../../../Images/chefs-hat.png'

function ListImage(props){

    const renderBadges = (vegetarian, dairyFree, glutenFree, cuisines) => {
        let text = ''

        if (vegetarian) {
            text = 'vegetarian'
        } else if (dairyFree) {
            text = 'dairy-free'
        } else if (glutenFree) {
            text = 'gluten-free'
        } else if (cuisines) {
            text = cuisines
        }

        if (text === '') return null
        return (
            <div className='listFood__imagebox--text'>
                {text}
            </div>
        )
    }

    return(
        <div className='listFood__imagebox'>
            <img className='listFood__imagebox--image' src={props.item.image ? props.item.image : hat }    alt='NotFoundImage'/>
            {renderBadges(props.item.vegetarian, props.item.dairyFree, props.item.glutenFree, props.item.cuisines[0])}
        </div> 
    )
}

export default ListImage