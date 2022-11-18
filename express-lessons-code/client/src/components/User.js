import React from "react"

export default function User(props) {
    const { name, age, _id } = props
    return (
        <div className="user">
            <h1>{ name }</h1>
            <h2>{ age }</h2>
        </div>
    )
}