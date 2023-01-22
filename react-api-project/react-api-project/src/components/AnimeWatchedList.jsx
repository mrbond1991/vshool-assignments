import React, { useEffect, useState } from 'react'

export default function AnimeWatchedList(props) {
    const { title, _id } = props

    return (
        <div>
            <h3>{title}</h3>
            <button
                onClick={() => props.deleteWatchListItem(_id)}
            >Remove</button>
        </div>
    )
}