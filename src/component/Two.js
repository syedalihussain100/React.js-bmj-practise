import React from 'react';
import './Two.css';

function Two() {
    // const [user, setUser] = useState([]);
    // useEffect(() => {
    //     getUser()
    // }, [])
    // let url = `https://api.github.com/users`;

    // const getUser = async () => {
    //     const response = await fetch(url);
    //     const users = await response.json();
    //     setUser(users)
    //     console.log(users)
    // }

    // const [size, setSize] = useState(window.innerWidth);
    // function checkResize() {
    //     setSize(window.innerWidth)
    // }

    // useEffect(() => {
    //     console.log('RESIZE...');
    //     window.addEventListener('resize', checkResize);
    //     return (() => {
    //         console.log('CLEANUP FUNCTION');
    //         window.removeEventListener('resize', checkResize)
    //     })
    // },[])
    return (
        <div className='main_container'>
            {/* <h1>Window Size Checking... {size}</h1> */}
            {/* <h1>Github Api Users...</h1>
            <ul className='container'>
                {
                    user.map((user) => {
                        const { id, login, avatar_url, html_url } = user;
                        return <li key={id}>
                            <img src={avatar_url} alt={login} />
                            <div>
                                <h4>{login}</h4>
                                <a href={html_url}>Profile</a>
                            </div>
                        </li>
                    })
                }
            </ul> */}
        </div>
    )
}

export default Two
