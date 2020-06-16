import React from 'react';

function ListImageInfo(props){
    return(
            <div className='listFood__info'>
                <div className='listFood__infobox'>
                    <p className='listFood__infobox--titleparagraph'>{props.item.title}</p>
                    <p className='listFood__infobox--minuteparagraph'>{props.item.readyInMinutes} minutes</p>
                </div>
        </div>  
    )
}

export default ListImageInfo