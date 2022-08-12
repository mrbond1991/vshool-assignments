import React, {useContext} from 'react'
import './Footer.css'
import {ThemeContext} from "./themeContext"

function Footer(props) {

    const {color} = useContext(ThemeContext)

    return (
        <div className={`${color}-footer--heading`}>
            <h1>Wyoming Army National Guard</h1>
        </div>
    )
}

export default Footer