import  React from 'react';
import {memo, useMemo} from 'react'
 
 
let renderCount = 0

const IsFive = ({value}) => {

    console.warn(`isFive render: ${++renderCount}`)

    const getResult = useMemo(() =>  {
        let i = 0;
        while (i < 900000000) i++;
        return value === 5 ? "It's Five" : "It's not a Five"
    }, [value])



    return (
        <div className='isFive'>
            {getResult}
        </div>
    );
};

export default memo(IsFive, (x, y) =>{
    if(y.value  === 5  || y.value === 6 ){
        return false
    }
    else {
        return true
    }
})
