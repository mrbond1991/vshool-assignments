import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios'
import Home from './Home.jsx'
import './App.css'
import './assets/otaku_search_logo.png'

const baseURL = "https://api.jikan.moe/v4/manga/111"

function App() {
  const [post, setPost] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    genre: ''
  })

  function handleChange(e) {
    setFormData(prevFormData => {
      const {name, value} = e.target
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <Home />
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
    </div>
  );
}

export default App
