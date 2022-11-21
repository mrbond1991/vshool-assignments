import React from 'react'
import { useNavigate } from 'react-router-dom'
import BobaFettPic from '/Users/michaelbond/vschool/assignments/bounty-hunter/client/src/assets/boba-fett-pic.jpg'

export default function Home() {
    const navigate = useNavigate()

    return (
        <div className='homePage'>
            <div className='homePageNav'>
                <h1>Boba Fett<br/>Bounty Network</h1>
                <p>If you are looking for the place to find bounties for Jedi and Sith alike, look no further! You can add to and eliminate from the bounty list and get paid for doing it!</p>
                <div className='btnDiv'>
                    <button className='add-btn' onClick={() => navigate('/addBountyForm')}>Add Bounty</button>
                    <button className='list-btn' onClick={() => navigate('/bounty')}>Bounty List</button>
                </div>
            </div>
            <img className='homePageImg' src={BobaFettPic}></img>
        </div>
    )
}