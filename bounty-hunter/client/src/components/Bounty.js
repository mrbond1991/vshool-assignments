import React, { useState } from 'react'

export default function Bounty(props) {
    const { fName, lName, type, bountyAmount, living, _id } = props

    return (
        <div>
            <h1>Name: {fName} {lName}</h1>
            <h2>Type: {type}</h2>
            <h2>Bounty: {bountyAmount}</h2>
            <h3>Eliminate?: {living.toString()}</h3>
        </div>
    )
}