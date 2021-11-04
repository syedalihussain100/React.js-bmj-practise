import React from 'react';
// import '../App.css';
import '../component/Navbar.css';

import {Link} from "react-router-dom";

function Navbar() {
    return (
        <header>
            <a href="#" className='logo'>Logo</a>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/location'>Location</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
