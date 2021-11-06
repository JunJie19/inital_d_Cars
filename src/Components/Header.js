import React from 'react'
import '../Styles/head_foot.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <div className='logo'><Link to='/'>Initial D</Link></div>
            <div className='navBar'>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='gallery'>Gallery</Link></li>
                        <li><Link to='about'>About</Link></li>
                        <li><Link to='contact'>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header
