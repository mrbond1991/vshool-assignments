import React, { useState, useEffect } from 'react'

export default function AnimeWatchedList(props) {

    useEffect(() => {
        props.getMangaWatchList()
    })
}

