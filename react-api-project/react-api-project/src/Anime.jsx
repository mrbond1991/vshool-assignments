import {useState, useEffect} from 'react'
import axios from 'axios'
import './styles/Anime.css'
import homePageImg from './assets/home_page_img.jpg'

function Anime() {

    const [animeList, setAnimeList] = useState([])
    const [search, setSearch] = useState("")

    function handleSearch(e) {
        e.preventDefault();

        FetchAnime(search)
    }

    const FetchAnime = async (query) => {
        await axios.get(`https://api.jikan.moe/v4/anime?q=${query}?order_by=title?sort=asc&limit=10&genre_exclude=12`).then((res) => {
            setAnimeList(res.data.data)

            console.log(res.data.data)
        })
    }

    return (
        <>
            <div className='animePage'>
                <div className='animeSearch'>
                    <h1>Anime Search</h1>
                    <p>Search by the title!</p>
                    <form 
                        className='animeForm'
                        onSubmit={handleSearch}
                    
                    >
                        <div>
                            <input 
                                type='text'
                                placeholder='Title'
                                onChange={e => setSearch(e.target.value)}
                                name="title"
                                className='form-input'
                                value={search.title}
                            />
                        </div>
                        <button>Search</button>
                    </form>
                </div>
                <img className='animePageImg' src={homePageImg}></img>
            </div>
            <div className='animeList'>
                {animeList.map(anime => (
                    <div
                        className='animeListDiv'
                        key={anime.mal_id}
                    >
                        <h3>{anime.title}</h3>
                        
                        <a 
                            href={anime.url}
                            target="_blank"
                        ><img src={anime.images.jpg.image_url} alt="Anime Image"/></a>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Anime