import React from 'react'
import { FaGlobeAmericas } from 'react-icons/fa';

export default function Navbar () {
    return (
        <nav className='navBar'>
            <h1 className='logo'><FaGlobeAmericas className='globe' />Bond Vacation Bucket List</h1>
        </nav>
    )
}