import React, {useState, useEffect} from "react"
import axios from "axios"
import User from "./components/User.js"
import AddUserForm from "./components/AddUserForm.js"
import FavMovie from "./components/FavMovie.js"
import AddFavMovieForm from "./components/AddFavMovieForm.js"

export default function App() {
    const [users, setUsers] = useState([])
    const [favMovies, setFavMovies] = useState([])

    //Get all
    function getUsers() {
        axios.get("/users")
            .then(res => setUsers(res.data))
            .catch(err => console.log(err.response.data.errMsg))
    }
    function getFavMovies() {
        axios.get("/favMovies")
            .then(res => setFavMovies(res.data))
            .catch(err => console.log(err.response.data.errMsg))
    }

    // Add One
    function addUser(newUser) {
        axios.post("/users", newUser)
            .then(res => {
                setUsers(prevUsers => [...prevUsers, res.data])
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    function addFavMovie(newFavMovie) {
        axios.post("/favMovies", newFavMovie)
            .then(res => {
                setFavMovies(prevFavMovies => [...prevFavMovies, res.data])
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    // Delete One
    function deleteUser(userId) {
        axios.delete(`/users/${userId}`)
            .then(res => {
                setUsers(prevUsers => prevUsers.filter(user => user._id !== userId))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    function deleteFavMovie(favMovieId) {
        axios.delete(`/favMovies/${favMovieId}`)
            .then(res => {
                setFavMovies(prevFavMovies => prevFavMovies.filter(favMovie => favMovie._id !== favMovieId))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    // Edit One
    function editUser(updates, userId) {
        axios.put(`/users/${userId}`, updates)
            .then(res => {
                setUsers(prevUsers => prevUsers.map(user => user._id !== userId ? user : res.data))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    function editFavMovie(updates, favMovieId) {
        axios.put(`/favMovies/${favMovieId}`, updates)
            .then(res =>  {
                setFavMovies(prevFavMovies => prevFavMovies.map(favMovie => favMovie._id !== favMovieId ? favMovie : res.data))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    useEffect(() => {
        getUsers()
        getFavMovies()
    }, [])

    return (
        <div>
            <div className="user-container">
                <AddUserForm 
                    submit={ addUser }
                    btnText="Add User"
                />
                {
                    users.map(user => 
                        <User
                            {...user} 
                            key={user.name}
                            deleteUser={deleteUser}
                            editUser={editUser}
                        />
                    )
                }
            </div>
            <div className="favMovie-container">
                <AddFavMovieForm
                    submit={ addFavMovie }
                    btnText="Add Movie"    
                />
                {
                    favMovies.map(favMovie => 
                        <FavMovie
                            {...favMovie}
                            key={favMovie.title}
                            deleteFavMovie={deleteFavMovie}
                            editFavMovie={editFavMovie}
                        />
                    )
                }
            </div>
        </div>
    )
}