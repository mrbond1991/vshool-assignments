import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Bounty from './components/Bounty.js'

export default function App() {
    const [bounties, setBounties] = useState([])
    useEffect(() => {
        axios.get('/bounties')
            .then(res => setBounties(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            { bounties.map(bounty => <Bounty {...bounty} key={bounty.lName}/>) }
        </div>
    )
}