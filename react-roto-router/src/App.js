import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import './styles-sheet/App.css';
import './otaku_search_logo.png'

function App() {

  const img = './otaku_search_logo.png'

  return (
    <Router>
      <nav>
        <Link to='/'>
          <img src={img}></img>
          Home
        </Link>
        <Link to='/about'>
          About
        </Link>
        <Link to='/services'>
          Services
        </Link>
        <button><a href='#'>307-123-4567</a></button>
      </nav>
      <main>
        <h1>Bond Plumbing</h1>
      </main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
      </Routes>
      <footer>
        <a href='#'>Contact Us</a>
        <a href='#'>Social</a>
        <a href='#'>References</a>
      </footer>
    </Router>
  );
}

export default App;
