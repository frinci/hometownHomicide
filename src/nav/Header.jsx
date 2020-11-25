import React from 'react';
import '../styles/Header.css'

import logo from '../images/HHLogo.png'

const Header = () => {
    return (
        <div>
            <nav>
                <a href="/" ><img src={logo} className='headerLogo' alt="hometown homicide logo"/></a>

                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Episodes">Episodes</a></li>
                    <li><a href="#Music">Music</a></li>
                    {/* <li><a href="#Contact">Contact</a></li> */}
                </ul>
            </nav>
        </div>
    )
}
 
export default Header