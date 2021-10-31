import React, { useState, useEffect } from 'react';
import './multiple.css';

function MultipleReturn() {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    let url = `https://api.github.com/users`;
    useEffect(() => {
        getUser()
    }, [])
    const getUser = async () => {
        await fetch(url)
            .then((response) => {
                if (response.status >= 200 && response.status <= 299) {
                    return response.json();
                } else {
                    setTimeout(() => {
                        setError(true)
                    }, 2000);
                }
            })
            .then((user) => {
                setTimeout(() => {
                    setLoading(false)
                }, 2000);
                console.log(user);
                setUser(user)
            }).catch((error) => {
                console.log(error);
                setError(error)
            })
    }

    if (error) {
        return <div>
            <h1 className='error'>Error 404 Not Found</h1>
        </div>
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>MultiPle Return</h1>
            <br />
            <hr />
            {
                loading ? <h4 style={{ color: 'blue', fontSize: '40px', fontStyle: 'italic' }}>Loading...</h4> :
                    <ul>
                        {
                            user.map((user) => {
                                const { login, avatar_url, html_url, id } = user;
                                return <li key={id}>
                                    <h1>{login}</h1>
                                    <img src={avatar_url} alt='logo' />
                                    <a href={html_url} target='_blank'>Github User Link</a>

                                </li>
                            })
                        }
                    </ul>


            }
        </div>
    )
}

export default MultipleReturn
