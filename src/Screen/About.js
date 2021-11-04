import React, { useState, useEffect } from 'react';
import './error.css';

function About() {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    let url = `https://jsonplaceholder.typicode.com/users`;
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        await fetch(url)
            .then((res) => {
                if (res.status >= 200 && res.status <= 299) {
                    return res.json();
                } else {
                    setError(true)
                }
            }).then((user) => {
                setTimeout(() => {
                    setLoading(false)
                }, 2000);
                console.log(user);
                setUser(user)
            }).catch((error) => console.log(error))
    }

    if (error) {
        return (
            <div className='error'>
                <h1>Api Error 404 Not Found!</h1>
            </div>
        )
    }
    return (
        <div>
            <h1>Hello About.js</h1>
            <hr />
            <br />
            {
                loading ? <h4 style={{ color: 'blue', fontSize: '40px', fontStyle: 'italic', textAlign: 'center' }}>Loading....</h4> : (
                    <ul style={{ textAlign: 'center' }}>
                        {
                            user.map((data) => {
                                const { id, name, website, phone } = data
                                return <li key={id}>
                                    <div>
                                        <h3>{name}</h3>
                                        <br />
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                )
            }
        </div>
    )
}

export default About
