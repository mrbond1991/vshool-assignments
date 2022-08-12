import React, {useState, useEffect} from 'react'
import UglyThing from './UglyThing'

function Form(props) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [imgUrl, setImgUrl] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        const thing = { title, description, imgUrl }

        fetch("https://api.vschool.io/mikebond/thing", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(thing)
        }).then(() => {
            console.log('new ugly thing added')
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    className='title'
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Title'
                ></input>
                <input
                    className='description'
                    type="text"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder='Description'
                ></input>
                <input
                    className='imgUrl'
                    type="text"
                    required
                    value={imgUrl}
                    onChange={(e) => setImgUrl(e.target.value)}
                    placeholder='Img URL'
                ></input>
                <br/>
                <button
                    className='submit'    
                >Submit</button>
            </form>
        </>
    )
}

export default Form