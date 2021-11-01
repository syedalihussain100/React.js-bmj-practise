import React, { useState } from 'react'

function Hoc() {
    return (
        <div>
            <HocRed cmd={MyHoc} />
            <HocGreen cmd={MyHoc} />
        </div>
    )
}


function HocRed(props) {
    return <h2 style={{ color: 'red' }}><props.cmd /></h2>
}

function HocGreen(props) {
    return <h2 style={{ color: 'green' }}><props.cmd /></h2>
}


function MyHoc() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Counting:{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increament ++</button>
        </div>
    )
}

export default Hoc;