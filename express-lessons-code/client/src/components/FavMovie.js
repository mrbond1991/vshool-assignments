import React, { useState } from 'react'
import AddFavMovieForm from './AddFavMovieForm'

export default function FavMovie(props) {
    const { title, genre, _id } = props
    const [editToggle, setEditToggle] = useState(false)

    return(
        <div className='favMovie'>
            { !editToggle ?
                <>
                    <h1>Title: { title }</h1>
                    <h2>Genre: { genre }</h2>
                    <button
                        className='dlt-btn'
                        onClick={() => props.deleteFavMovie(_id)}>
                        Delete
                    </button>
                    <button
                        className='edit-btn'
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Edit
                    </button>
                </>
            :
                <>
                    <AddFavMovieForm
                        title= { title }
                        genre= { genre }
                        btnText="Submit Edit"
                        submit={ props.editFavMovie}
                    />
                    <button
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Close
                    </button>
                </>
            }
        </div>
    )
}