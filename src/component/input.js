import React, { forwardRef } from 'react'

function input(props,ref) {
    console.log('props',props)
    return (
        <div>
            <input type="text" placeholder='Please Focus The Button!' ref={ref} />
        </div>
    )
}

export default forwardRef(input);
