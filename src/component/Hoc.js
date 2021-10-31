import React, { useState } from 'react'

function Hoc() {
    return (
        <div>
        <MyHoc/>
        <MyHoc/>
        <MyHoc/>
        </div>
    )
}




function MyHoc() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Counting:{count}</h1>
            <button onClick={() => setCount(count+1)}>Increament ++</button>
        </div>
    )
}

export default Hoc