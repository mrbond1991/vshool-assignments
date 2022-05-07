import React from "react"
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import Data from "./Data"

export default function App() {
    const cards = Data.map(item => {
        return (
            <Card 
                key={item.id}
                item={item}
            />
        )
    })
    
    return(
        <div>
            <Navbar />
            {cards}
        </div>
    )   
}