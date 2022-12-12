import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios'
import Home from './Home'
import Manga from './Manga'
import Anime from './Anime'
import './styles/App.css'
import  otakuLogo from './assets/otaku_search_logo.png'
import { FaGithubSquare, FaDiscord, FaPatreon } from "react-icons/fa";

function App() {
  const [mangaWatchList, setMangaWatchList] = useState([])
  const [mangaWishList, setMangaWishList] = useState([])
  const [animeWatchList, setAnimeWatchList] = useState([])
  const [animeWishList, setAnimeWishList] = useState([])

  //Manga Watch List
  //Get all
  function getMangaWatchList() {
    axios.get('/mangaWatchList')
      .then(res => setMangaWatchList(res.data))
      .catch(err => console.log(err))
  }

  //Post new Watch List Item
  function addMangaWatchListItem(newMangaListItem) {
    axios.post('/mangaWatchList')
      .then(res => {
        setMangaWatchList(prevMangaWatchList => [...prevMangaWatchList, res.data])
      })
      .catch(err => console.log(err))
  }

  //Delete Watch List Item
  function deleteWatchListItem(mangaWatchListID) {
    axios.delete(`/mangaWatchList/${mangaWatchListID}`)
      .then(res => {
        setMangaWatchList(prevMangaWatchList => prevMangaWatchList.filter(item => item._id !== mangaWatchListID))
      })
      .catch(err => console.log(err))
  }

  return (
    <Router>
      <nav>
        <Link to='/home'>
          <img className='logo' src={otakuLogo}></img>
        </Link>
        <Link className='link' to='/home'>
          Home
        </Link>
        <Link className='link' to='/manga'>
          Manga
        </Link>
        <Link className='link' to='/anime'>
          Anime
        </Link>
      </nav>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/manga' element={<Manga />} />
        <Route path='/anime' element={<Anime />} />
      </Routes>
      <footer className='footer'>
        <div className='socIcons'>
          <a
            href='https://github.com/jikan-me/jikan'
            target='_blank'
          >
            <FaGithubSquare 
              style={{backgroundColor:'#FF443A',  fontSize:'80px', color:'#FFDE59'}}
            />
          </a>
          <a
            href='https://discord.gg/4tvCr36'
            target='_blank'
          >
            <FaDiscord
              style={{backgroundColor:'#FF443A',  fontSize:'80px', color:'#FFDE59'}}
            />
          </a>
          <a
            href='https://patreon.com/jikan'
            target='_blank'
          >
            <FaPatreon
              style={{backgroundColor:'#FF443A',  fontSize:'70px', color:'#FFDE59'}}
            />
          </a>
        </div>

          <a 
            href='https://jikan.moe/'
            target='_blank'
          >
            <h1>Contact Us</h1>
          </a>
          <a 
            href='https://docs.api.jikan.moe/#section/Information'
            target='_blank'
          >
            <h1>Jikan API Website</h1>
          </a>
      </footer>
    </Router>
  );
}

export default App
