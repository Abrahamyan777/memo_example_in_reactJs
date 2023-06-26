import  React from 'react';
import {memo} from 'react'

const render = {
    count1: 0,
    count2: 0
}

const Count = ({id , value}) => {

    console.warn(`Count ${id} render: ${++render[`count${id}`]}`)

    return (
        <div>
            <h1 className='countValue'>{value}</h1>
        </div>
    );
};

export default memo(Count)
