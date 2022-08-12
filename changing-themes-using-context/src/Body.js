import React, {useContext} from 'react'
import './Body.css'
import {ThemeContext} from "./themeContext"

function Body(props) {

    const {color, toggleTheme} = useContext(ThemeContext)

    return(
        <div className={`${color}-body`}>
            <h1>Click the use the {color} Theme!</h1>
            <button
                className={`${color}-toggle-button`}
                onClick={toggleTheme}
            >
                Toggle Light/Dark Mode
            </button>
        </div>
    )
}

export default Body