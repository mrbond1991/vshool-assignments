import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './styles/Anime.css'
import homePageImg from './assets/home_page_img.jpg'

function Anime() {
    const navigate = useNavigate

    const baseURL = "https://api.jikan.moe/v4/manga/111"

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
            <div className='animePage'>
                <div className='animeSearch'>
                    <h1>Anime Search</h1>
                    <p>Search by title, genre, or season</p>
                    <form className='animeForm'>
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
                <img className='animePageImg' src={homePageImg}></img>
            </div>
            <div>
                <h1>{post.title}</h1>
                <p>{post.synopsis}</p>
                <img src={post.images.jpg.image_url} />
            </div>
        </>
    )
}

export default Anime