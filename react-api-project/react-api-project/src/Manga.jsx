import {useState, useEffect} from 'react'
import axios from 'axios'
import './styles/Manga.css'
import mangaImg from './assets/manga_pic_2.jpg'

function Manga() {

    const [mangaList, setMangaList] = useState([])
    const [search, setSearch] = useState("")

    function handleSearch(e) {
        e.preventDefault();

        FetchManga(search)
    }

    const FetchManga = async (query) => {
        await axios.get(`https://api.jikan.moe/v4/manga?q=${query}?order_by=title?sort=asc&limit=20`).then((res) => {
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
                <img className='mangaPageImg' src={mangaImg}></img>
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
                        ><img src={manga.images.jpg.image_url} alt="Manga Image"/></a>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Manga