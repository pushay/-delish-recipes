import React from 'react';
import ListImage from './ListImage/ListImage';
import ListImageInfo from './ListImageInfo/ListImageInfo'

function ListSingleFood(props){

   
    return(
        <div index={props.index}>
            <a className='listFood__list--link' href={props.item.sourceUrl} >
                <div className='listFood__element'>
                    <ListImage item={props.item} />
                    <ListImageInfo item={props.item} />
                </div>
            </a>
        </div>
    )
}

export default ListSingleFood