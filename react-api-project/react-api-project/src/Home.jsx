import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './styles/Home.css'
import homePageImg from './assets/home_page_img.jpg'


function Home() {
    const navigate = useNavigate()

    return (
        <div className='homePage'>
            <div className='search'>
                <h1>Jikan API Search</h1>
                <p>Calling all anime and manga nerds! If you are searching for your next binge or looking up an oldie but a goodie, look no further!</p>
                <div className='btnDiv'>
                    <button onClick={() => navigate('/manga')}>Manga Search</button>
                    <button onClick={() => navigate('/anime')}>Anime Search</button>
                    <button onClick={() => navigate('/topRated')}>Top Rated</button>
                </div>
            </div>
            <img className='homePageImg' src={homePageImg}></img>
        </div>
    )
}

export default Home