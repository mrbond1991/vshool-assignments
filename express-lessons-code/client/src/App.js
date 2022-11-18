import React, {useState, useEffect} from "react"
import axios from "axios"
import User from "./components/User.js"
import AddUserForm from "./components/AddUserForm.js"

export default function App() {
    const [users, setUsers] = useState([])

    function getUsers() {
        axios.get("/users")
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    }

    function addUser(newUser) {
        axios.post("/users", newUser)
            .then(res => {
                setUsers(prevUsers => [...prevUsers, res.data])
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div>
            <div className="user-container">
                <AddUserForm 
                    addUser= { addUser }
                />
                { users.map(user => <User {...user} key={user.name}/>)}
            </div>
        </div>
    )
}