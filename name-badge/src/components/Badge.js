import React from "react"

export default function Badge(props) {
    return (
        <div className="badge--div">
            <div className="badge--title">Badge:</div>
            <p>Name: {props.name}</p>
            <p>Phone: {props.phone}</p>
            <p>Place of Birth: {props.placeOfBirth}</p>
            <p>Favorite Food: {props.favoriteFood}</p>
            <p>Email: {props.emial}</p>
            <div className="badge--about">{props.about}</div>
        </div>
    )
}