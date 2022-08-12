import React, {useContext} from 'react';
import './Header.css'
import {ThemeContext} from "./themeContext"

function Header(props) {

    const {color} = useContext(ThemeContext)

    return (
        <div className={`${color}-header`}>
            <h1 className='header--heading'>Michael Bond: WYANG Recruiter</h1>
            <ul className={`${color}-header--list`}>
                <li><a href='#'>Call</a></li>
                <li><a href='#'>Email</a></li>
                <li><a href='#'>Address</a></li>
            </ul>
        </div>
    )
}

export default Header