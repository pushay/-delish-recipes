import React from 'react';
import Filter from './Filter/Filter';
import Reset from './Reset/Reset'

function FilterSort(){
    return(
        <div className='filterSort'>
            <Filter/>
            <Reset/>
        </div>
    )
}
export default FilterSort