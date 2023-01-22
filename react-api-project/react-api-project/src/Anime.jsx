import {useState, useEffect} from 'react'
import axios from 'axios'
import './styles/Anime.css'
import homePageImg from './assets/home_page_img.jpg'
import AnimeWatchedList from './components/AnimeWatchedList'
import AnimeWishList from './components/AnimeWishList'

function Anime() {
    const [animeWatchList, setAnimeWatchList] = useState([])
    const [animeWishList, setAnimeWishList] = useState([])
    const [animeList, setAnimeList] = useState([])
    const [search, setSearch] = useState("")

    //Anime Wish List//
    //Get All
    function getAnimeWishList() {
        axios.get('/api/animeWishList')
            .then(res => setAnimeWishList(res.data))
            .catch(err => console.log(err))
    }

    //Post One
    function addAnimeWishListItem(newAnimeWishListItem) {
        axios.post('/api/animeWishList', {title: newAnimeWishListItem})
        .then(res => {
            setAnimeWishList(prevAnimeWishList => [...prevAnimeWishList, res.data])
        })
        .catch(err => console.log(err))
    }

    //Delete One
    function deleteAnimeWishListItem(animeWishListID) {
        axios.delete(`/api/animeWishList/${animeWishListID}`)
        .then(res => {
            setAnimeWishList(prevAnimeWishList => prevAnimeWishList.filter(item => item._id !== animeWishListID))
        })
        .catch(err => console.log(err))
    }

    //Anime Watched List//
    //Get All
    function getAnimeWatchList() {
        axios.get('/api/animeWatchList')
        .then(res => setAnimeWatchList(res.data))
        .catch(err => console.log(err))
    }

    //Post One
    function addAnimeWatchListItem(newAnimeWatchListID) {
        axios.post('/api/animeWatchList', {title: newAnimeWatchListID})
        .then(res => {
            setAnimeWatchList(prevAnimeWatchList => [...prevAnimeWatchList, res.data])
        })
        .catch(err => console.log(err))
    }

    //Delete One
    function deleteAnimeWatchListItem(animeWatchListID) {
        axios.delete(`/api/animeWatchList/${animeWatchListID}`)
        .then(res => {
            setAnimeWatchList(prevAnimeWatchList => prevAnimeWatchList.filter(item => item._id !== animeWatchListID))
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getAnimeWishList()
        getAnimeWatchList()
    },[])

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
                {/* <img className='animePageImg' src={homePageImg}></img> */}
                <div className='animeLists'>
                    <div className='animeReadList'>
                        <h1>Read List</h1>
                        {animeWatchList.map(item => 
                            <AnimeWatchedList 
                                className='animeWatchListItem'
                                {...item}
                                key={item._id}
                                deleteWatchListItem = {deleteAnimeWatchListItem}
                            />
                        )}
                    </div>
                    <div className='animeWishList'>
                        <h1>Wish List</h1>
                        {animeWishList.map(item => 
                            <AnimeWishList
                                className='animeWishListItem'
                                {...item}
                                key={item._id}
                                deleteWishListItem = {deleteAnimeWishListItem}
                            />
                        )}
                    </div>
                </div>
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
                        >
                            <img src={anime.images.jpg.image_url} alt="Anime Image"/>
                        </a>
                        <button 
                            onClick={() => addAnimeWishListItem(anime.title)}
                        >Add to Wish List</button>
                        <button
                            onClick={() => addAnimeWatchListItem(anime.title)}
                        >Add to Read List</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Anime