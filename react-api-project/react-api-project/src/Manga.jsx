import {useState, useEffect} from 'react'
import axios from 'axios'
import './styles/Manga.css'
import mangaImg from './assets/manga_pic_2.jpg'
import MangaWatchedList from './components/MangaWatchedList.jsx'
import MangaWishList from './components/MangaWishList'

function Manga() {
    const [mangaWatchList, setMangaWatchList] = useState([])
    const [mangaWishList, setMangaWishList] = useState([])
    const [mangaList, setMangaList] = useState([])
    const [search, setSearch] = useState("")
    //Manga Wish List
        //Get All
        function getMangaWishList() {
            axios.get('/api/mangaWishList')
                .then(res => setMangaWishList(res.data))
                .catch(err => console.log(err))
        }

        //Post One
        function addMangaWishListItem(newMangaWishListItem) {
            axios.post('/api/mangaWishList', {title: newMangaWishListItem})
            .then(res => {
                setMangaWishList(prevMangaWishList => [...prevMangaWishList, res.data])
            })
            .catch(err => console.log(err))
        }

        //Delete One
        function deleteWishListItem(mangaWishListID) {
            axios.delete(`/api/mangaWishList/${mangaWishListID}`)
            .then(res => {
                setMangaWishList(prevMangaWishList => prevMangaWishList.filter(item => item._id !== mangaWishListID))
            })
            .catch(err => console.log(err))
        }
    //Manga Watch List
    //Get all
    function getMangaWatchList() {
        axios.get('/api/mangaWatchList')
        .then(res => setMangaWatchList(res.data))
        .catch(err => console.log(err))
    }

    //Post One
    function addMangaWatchListItem(newMangaListItem) {
        axios.post('/api/mangaWatchList', {title: newMangaListItem})
        .then(res => {
            setMangaWatchList(prevMangaWatchList => [...prevMangaWatchList, res.data])
        })
        .catch(err => console.log(err))
    }

    //Delete One
    function deleteWatchListItem(mangaWatchListID) {
        axios.delete(`/api/mangaWatchList/${mangaWatchListID}`)
        .then(res => {
            setMangaWatchList(prevMangaWatchList => prevMangaWatchList.filter(item => item._id !== mangaWatchListID))
        })
        .catch(err => console.log(err))
    }

    //Edit One
    function editWatchListItem(updates, mangaWatchListID) {
        axios.put(`/api/mangaWatchList/${mangaWatchListID}`, updates)
        .then(res => {
            setMangaWatchList(prevMangaWatchList => prevMangaWatchList.map(item => item._id !== mangaWatchListID ? item : res.data))
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getMangaWatchList()
        getMangaWishList()
    }, [])

    function handleSearch(e) {
        e.preventDefault();

        FetchManga(search)
    }

    const FetchManga = async (query) => {
        await axios.get(`https://api.jikan.moe/v4/manga?q=${query}?order_by=title?sort=asc&limit=50`).then((res) => {
            setMangaList(res.data.data)

            console.log(res.data.data)
        })
    }

    return (
        <>
            <div className='mangaPage'>
                <div className='mangaSearch'>
                    <h1>Manga Search</h1>
                    <p>Search by title</p>
                    <form 
                        className='mangaForm'
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
                {/* <img className='mangaPageImg' src={mangaImg}></img> */}
                <div className='mangaLists'>
                    <div className='mangaReadList'>
                        <h1>Read List</h1>
                        {mangaWatchList.map(item => 
                            <MangaWatchedList 
                                className='mangaWatchListItem'
                                {...item}
                                key={item._id}
                                deleteWatchListItem = {deleteWatchListItem}
                            />
                        )}
                    </div>
                    <div className='mangaWishList'>
                        <h1>Wish List</h1>
                        {mangaWishList.map(item => 
                            <MangaWishList
                                className='mangaWishListItem'
                                {...item}
                                key={item._id}
                                deleteWishListItem = {deleteWishListItem}
                            />
                        )}
                    </div>
                </div>
            </div>
            <div className='mangaList'>
                {mangaList.map(manga => (
                    <div
                        className='mangaListDiv'
                        key={manga.mal_id}
                    >
                        <h3>{manga.title}</h3>
                        
                        <a 
                            href={manga.url}
                            target="_blank"
                        >
                        <img src={manga.images.jpg.image_url} alt="Manga Image"/></a>
                        <button 
                            onClick={() => addMangaWishListItem(manga.title)}
                        >Add to Wish List</button>
                        <button
                            onClick={() => addMangaWatchListItem(manga.title)}
                        >Add to Read List</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Manga