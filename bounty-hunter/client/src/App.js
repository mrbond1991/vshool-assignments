import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Bounty from './components/Bounty.js'
import AddBountyForm from './components/AddBountyForm.js'
import Header from './components/Header.js'

export default function App() {
    const [bounties, setBounties] = useState([])

    // Get all bounties
    function getBounties() {
        axios.get('/bounties')
            .then(res => setBounties(res.data))
            .catch(err => console.log(err))
    }

    // Post New Bounty
    function addBounty(newBounty) {
        axios.post('/bounties', newBounty)
            .then(res => {
                setBounties(prevBounties => [...prevBounties, res.data])
            })
            .catch(err => console.log(err))
    }

    // Delete Bounty
    function deleteBounty(bountyId) {
        axios.delete(`/bounties/${bountyId}`)
            .then(res => {
                setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
            })
            .catch(err => console.log(err))
    }

    // Edit Bounty
    function editBounty(updates, bountyId) {
        axios.put(`/bounties/${bountyId}`, updates)
            .then(res => {
                setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getBounties()
    }, [])

    return (
        <div className='app'>
            <Header />
            <div className='bounty-container'>
                { 
                    bounties.map(bounty => 
                        <Bounty 
                        {...bounty} 
                        key={bounty.lName}
                        deleteBounty={deleteBounty}
                        editBounty={editBounty}
                        />
                    )
                }
                <h1>Add New Bounty Here:</h1>
                <AddBountyForm 
                    submit={ addBounty }
                    btnText="Add Bounty"
                />
            </div>
        </div>
    )
}