import React from 'react';
import FilterSort from './FilterSort/FilterSort';
import Sort from './Sort/Sort'

function FilterSortArea() {
    return(
        <div className='FilterSortArea'>
            <FilterSort/>
            <Sort/>
        </div>
    )
}

export default FilterSortArea