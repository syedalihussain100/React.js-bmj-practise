import React, { useState, useMemo, useEffect, useRef } from 'react'
import MyInput from './input';

function One() {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(2);
    const [user, setUser] = useState([]);
    let inputRef = useRef(null);

    const multiCount = useMemo(function getCount() {
        console.log('getCount')
        return count * 5
    }, [count]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => {
                setUser(data);
                console.log(data)
            }).catch((error) => {
                console.log(error)
            })
    }, []);

    function handleFocus() {
        inputRef.current.value = 'Mern Stack Developer'
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "red";
        inputRef.current.style.color = "#fff"
    }
    return (
        <div>
            <MyInput ref={inputRef} />
            <button onClick={handleFocus}>Foucs Input!</button>
            <br /><br />
            <h1>Counting... {count}</h1>
            <button onClick={() => setCount(count + 1)}>Click Counting...</button>
            <br /> <br />
            <h1>Nested Counting: {item}</h1>
            <button onClick={() => setItem(item * 10)}>Nested Counting</button>
            <br /><br /><br />
            <h2>Final Check Counting!: {multiCount}</h2>
            <br /> <br />
            <h1>Fetching Api Calling...</h1>
            <ul>
                {
                    user.map((user, index) => {
                        return <li key={index}>{user.id}: {user.title}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default One



















// import React, { PureComponent } from 'react'

// class One extends PureComponent {
//     constructor(props) {
//         super(props);
//         this.state = {

//         }
//         console.log(props)
//     }
//     componentDidUpdate(prevProps,prevState){
//         console.log('prevProps',prevProps);
//         console.log('prevState',prevState);
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Learning Pure Component in Class Component</h1>
//                 <h2>Pure Component Counting: {this.props.count}</h2>
//             </div>
//         )
//     }
// }

// export default One

