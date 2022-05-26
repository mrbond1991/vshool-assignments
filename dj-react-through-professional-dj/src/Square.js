import React from "react"

export default function Square(props) {
    // const squareColor = props.color
    return (
        <div
            className="board--square"
            style={{
                backgroundColor: `${props.color}`
            }}
        ></div>
    )
}