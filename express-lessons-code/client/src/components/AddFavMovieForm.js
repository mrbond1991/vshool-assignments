import React, { useState } from 'react'

export default function AddFavMovieForm(props) {
    const initInputs = { title: props.title || "", genre: props.genre || "" }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <input 
                type="text" 
                name="title" 
                value={inputs.title}
                onChange={handleChange} 
                placeholder="Title"
                className='form-input'
            />
            <input 
                type="text" 
                name="genre" 
                value={inputs.genre} 
                onChange={handleChange} 
                placeholder="Genre"
                className='form-input'
            />
            <button
                className='form-button'
            >{ props.btnText }</button>
        </form>
    )
}