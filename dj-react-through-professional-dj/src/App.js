import React from "react"
import Square from "./Square"
// import useSound from "use-sound"
// import boopSfx from '../../sounds/boop.mp3';

export default function App() {
    const [color, setColor] = React.useState(["white", "white", "white", "white"])
    
    function changeAll() {
        setColor(prevColor => {
            if(prevColor[0] !== "white") {
                return prevColor.map(each => "white")
            } else if (prevColor[0] !== "black") {
                return prevColor.map(each => "black")
            }
        })
    }
    
    // function boopSound() {
    //     const [play] = useSound(boopSfx);
    //     console.log("Boop Sound")
    //     return {play}
    // }

    function partyDj() {
        setColor(["purple", "purple", color, color])
    }

    function proDjRight() {
        setColor([color, color, "blue", color])
    }

    function proDjLeft() {
        setColor([color, color, color, "blue"])
    }

    function bigDj1() {
        setColor(["pink", color, color, color])
    }

    function bigDj2() {
        setColor([color, "red", color, color])
    }

    function bigDj3() {
        setColor([color, color, "brown", color])
    }

    function bigDj4() {
        setColor([color, color, color, "green"])
    }
    

    return (
        <div className="board--container">
            <Square color={color[0]}/>
            <Square color={color[1]}/>
            <Square color={color[2]}/>
            <Square color={color[3]}/>
            {/* <div className="button--container"> */}
                <button
                    className="small-time-dj"
                    onClick={changeAll}
                >
                    Small Time DJ
                </button>
                <button
                    className="party-dj"
                    onClick={partyDj}
                >
                    Party DJ
                </button>
                <button
                    className="pro-dj-rt"
                    onClick={proDjRight}
                >
                    Pro DJ Left
                </button>
                <button
                    className="pro-dj-lt"
                    onClick={proDjLeft}
                >
                    Pro DJ Right
                </button>
                <button
                    className="big-dj-1"
                    onClick={bigDj1}
                >
                    Big DJ 1
                </button>
                <button
                    className="big-dj-2"
                    onClick={bigDj2}
                >
                    Big DJ 2
                </button>
                <button
                    className="big-dj-3"
                    onClick={bigDj3}
                >
                    Big DJ 3
                </button>
                <button
                    className="big-dj-4"
                    onClick={bigDj4}
                >
                    Big DJ 4
                </button>
            {/* </div> */}
        </div>
    )
}