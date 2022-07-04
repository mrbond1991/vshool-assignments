import React from "react"
import axios from "axios"

export default function RandomColor(props) {

    const [color, setColor] = React.useState("")


    React.useEffect(() => {
        getColor()
    }, [])

    const getColor = () => {
        axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
            .then(res => setColor(res.data.colors[0].hex))
            console.log("button worked")
        }
    
    return (
        <main>
            <header>
                <h1>Random Color Generator</h1>
            </header>
            <div className="box" style={{background: `#${color}`}}></div>
            <button className="box--button" onClick={getColor}>Click for New Color!</button>
        </main>
    )
}