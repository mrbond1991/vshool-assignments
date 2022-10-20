import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './styles/Manga.css'
import mangaImg from './assets/manga_pic_2.jpg'

function Manga() {
    const navigate = useNavigate

    const baseURL = "https://api.jikan.moe/v4/manga/2"

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
        <>
            <div className='mangaPage'>
                <div className='mangaSearch'>
                    <h1>Manga Search</h1>
                    <p>Search by title, genre, or volume</p>
                    <form className='mangaForm'>
                        <input 
                            type='text'
                            placeholder='Title'
                            onChange={handleChange}
                            name="title"
                            className='form-input'
                            value={formData.title}
                        />
                        <input 
                            type='text'
                            placeholder='Genre'
                            onChange={handleChange}
                            name="genre"
                            className='form-input'
                            value={formData.genre}
                        />
                        <input 
                        
                        />
                    </form>
                    <button>Search</button>
                </div>
                <img className='mangaPageImg' src={mangaImg}></img>
            </div>
            <div>
                <h1>{post.title}</h1>
                <p>{post.synopsis}</p>
                <img src={post.images.jpg.image_url} />
            </div>
        </>
    )
}

export default Manga