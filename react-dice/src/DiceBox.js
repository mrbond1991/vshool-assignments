import React from "react";


export default function DiceBox() {
    const [dice, setDice] = React.useState([1, 2, 3, 4, 5])


    function getRandomDice() {
        setDice([
            Math.floor(Math.random(dice[0]) * 6),
            Math.floor(Math.random(dice[1]) * 6),
            Math.floor(Math.random(dice[2]) * 6),
            Math.floor(Math.random(dice[3]) * 6),
            Math.floor(Math.random(dice[4]) * 6)
        ])
    }

    return (
        <div className="dice-container">
            <div className="die">
                <h1>{dice[0]}</h1>
            </div>
            <div className="die">
                <h1>{dice[1]}</h1>
            </div>
            <div className="die">
                <h1>{dice[2]}</h1>
            </div>
            <div className="die">
                <h1>{dice[3]}</h1>
            </div>
            <div className="die">
                <h1>{dice[4]}</h1>
            </div>
            <button
                className="random-dice-bttn"
                onClick={getRandomDice}
            >
                Get Random Dice!
            </button>
        </div>
    )
}