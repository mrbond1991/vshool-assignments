import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios'
import Home from './Home'
import Manga from './Manga'
import Anime from './Anime'
import TopRated from './TopRated'
import './App.css'
import  otakuLogo from './assets/otaku_search_logo.png'
import { FaGithubSquare, FaDiscord, FaPatreon } from "react-icons/fa";


const baseURL = "https://api.jikan.moe/v4/manga/111"

function App() {
  // const [post, setPost] = useState(null);

  // const [formData, setFormData] = useState({
  //   title: '',
  //   genre: ''
  // })

  // function handleChange(e) {
  //   setFormData(prevFormData => {
  //     const {name, value} = e.target
  //     return {
  //       ...prevFormData,
  //       [name]: value
  //     }
  //   })
  // }

  // useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     setPost(response.data.data);
  //   });
  // }, []);

  // if (!post) return null;

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
        <Link className='link' to='/topRated'>
          Top Rated
        </Link>
      </nav>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/manga' element={<Manga />} />
        <Route path='/anime' element={<Anime />} />
        <Route path='/topRated' element={<TopRated />} />
      </Routes>
      <footer className='footer'>
        <div className='socIcons'>
          <a
            href='https://github.com/jikan-me/jikan'
          >
            <FaGithubSquare 
              style={{backgroundColor:'#FF443A',  fontSize:'80px', color:'#FFDE59'}}
            />
          </a>
          <a
            href='https://discord.gg/4tvCr36'
          >
            <FaDiscord
              style={{backgroundColor:'#FF443A',  fontSize:'80px', color:'#FFDE59'}}
            />
          </a>
          <a
            href='https://patreon.com/jikan'
          >
            <FaPatreon
              style={{backgroundColor:'#FF443A',  fontSize:'70px', color:'#FFDE59'}}
            />
          </a>
        </div>
          <a href='https://jikan.moe/'>
            <h1>Contact Us</h1>
          </a>
          <a href='https://docs.api.jikan.moe/#section/Information'>
            <h1>Jikan API Website</h1>
          </a>
      </footer>
      {/* <form>
        <input 
          type='text'
          placeholder='Anime Title'
          onChange={handleChange}
          name="title"
          className='form-input'
          value={formData.title}
        ></input>
      </form>
      <div>
        <h1>{post.title}</h1>
        <p>{post.synopsis}</p>
        <img src={post.images.jpg.image_url} />
      </div> */}
    </Router>
  );
}

export default App
