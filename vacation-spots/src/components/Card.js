import React from "react";


export default function Card(props) {
    let dollarSign
    if (props.item.price <= 500) {
        dollarSign = "Cheap"
    } if (props.item.price <= 1000) {
        dollarSign = "$$"
    } if (props.item.price >= 1000) {
        dollarSign = "$$$"
    }

    // let cardBgColor = document.getElementsById("vaca-card--time-to-go")
    // if (props.timeToGo === "Spring") {
    //     cardBgColor.style.backgroundColor = "red" 
    // }

    return (
        <div className="vaca-card-container">
            <img src={props.item.img} alt="pic of location" className="vaca-card--img"/>
            <h1 className="vaca-card--location">Location: {props.item.place}</h1>
            <h4 className="vaca-card--price">Price: {dollarSign}</h4>
            <h2 className="vaca-card--time-to-go" id="vaca-card--time-to-go">Best Time To Go: {props.item.timeToGo}</h2>
        </div>
    )
}