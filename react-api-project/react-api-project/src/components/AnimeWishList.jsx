import React, { useEffect, useState } from 'react'

export default function AnimeWishList(props) {
    const { title, _id } = props

    return (
        <div>
            <h3>{title}</h3>
            <button
                onClick={() => props.deleteWishListItem(_id)}
            >Remove</button>
        </div>
    )
}