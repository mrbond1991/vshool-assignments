import React, {useContext} from 'react'
import './Body.css'
import {ThemeContext} from "./themeContext"

function Body(props) {

    const {color, toggleTheme} = useContext(ThemeContext)

    return(
        <div className={`${color}-body`}>
            <h1>See what the Wyoming Army National Guard has to offer you!</h1>
            <button
                className={`${color}-toggle-button`}
                onClick={toggleTheme}
                >
                Toggle Light/Dark Mode
            </button>
            <h2>You are currently using the {color} Theme!</h2>
        </div>
    )
}

export default Body