import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './styles/Anime.css'
import homePageImg from './assets/home_page_img.jpg'

function Anime() {
    const navigate = useNavigate
    const [animeList, setAnimeList] = useState([])
    const [search, setSearch] = useState("")

    const baseURL = "https://api.jikan.moe/v4/manga/111"

    const [post, setPost] = useState(null);

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

    useEffect(() => {
        axios.get(baseURL).then((response) => {
        setPost(response.data.data);
        });
    }, []);

    if (!post) return null;

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
                        <img src={anime.images.jpg.image_url} alt="Anime Image"/>
                        <p>{anime.synopsis}</p>
                        <a 
                            href={anime.url}
                            target="_blank"
                        >Click here to see page!</a>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Anime