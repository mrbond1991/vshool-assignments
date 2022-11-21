import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import axios from 'axios'
import Bounty from './components/Bounty.js'
import AddBountyForm from './components/AddBountyForm.js'
import Home from './components/Home'
import bfnbLogo from '/Users/michaelbond/vschool/assignments/bounty-hunter/client/src/assets/BFBN-logo.png'
import { FaGithubSquare, FaDiscord, FaPatreon } from "react-icons/fa";

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
        <Router className='app'>
            <nav>
                <Link to='/home'>
                    <img className='logo' src={bfnbLogo}></img>
                </Link>
                <Link className='link' to='/home'>
                    Home
                </Link>
                <Link className='link' to='/addBountyForm'>
                    Add Bounty
                </Link>
                <Link className='link' to='/bounty'>
                    Bounty List
                </Link>
            </nav>
            <Routes>
                <Route path='/home' element={<Home />}/>
                <Route path='/addBountyForm' element={<AddBountyForm 
                    submit={ addBounty }
                    btnText="Add Bounty"
                />}/>
                <Route path='/bounty' element={ 
                    bounties.map(bounty => 
                        <Bounty 
                        {...bounty} 
                        key={bounty.lName}
                        deleteBounty={deleteBounty}
                        editBounty={editBounty}
                        />
                    )
                }/>
            </Routes>
            <footer className='footer'>
                <div className='socIcons'>
                    <a
                        href='https://github.com/jikan-me/jikan'
                        target='_blank'
                    >
                        <FaGithubSquare 
                        style={{backgroundColor:'#7cc484',  fontSize:'80px', color:'#C44F37'}}
                        />
                    </a>
                    <a
                        href='#'
                        target='_blank'
                    >
                        <FaDiscord
                        style={{backgroundColor:'#7cc484',  fontSize:'80px', color:'#C44F37'}}
                        />
                    </a>
                    <a
                        href='#'
                        target='_blank'
                    >
                        <FaPatreon
                        style={{backgroundColor:'#7cc484',  fontSize:'80px', color:'#C44F37'}}
                        />
                    </a>
                </div>
                <a 
                    href='#'
                    target='_blank'
                >
                    <h1>Contact Us</h1>
                </a>
                <a 
                    href='#'
                    target='_blank'
                >
                    <h1>Boba Fett Wiki</h1>
                </a>
            </footer>
            {/* <div className='bounty-container'>
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
            </div> */}
        </Router>
    )
}