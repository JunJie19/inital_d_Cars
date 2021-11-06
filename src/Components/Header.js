import React, { useState } from 'react'
import '../Styles/head_foot.css'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    const [showLink, setshowLink] = useState(false)

    return (
        <div className={showLink ? 'headerSmallScreen' : 'header'}>
            <div className='logo'><Link to='/'>Initial D</Link></div>
            <div className='navBar'>
                <nav>
                    <ul id={showLink ? 'hidden' : ''}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='gallery'>Gallery</Link></li>
                        <li><Link to='about'>About</Link></li>
                        <li><Link to='contact'>Contact</Link></li>
                    </ul>
                    <button onClick={() => setshowLink(!showLink)}><MenuIcon /></button>
                </nav>
            </div>
        </div>
    )
}

export default Header
