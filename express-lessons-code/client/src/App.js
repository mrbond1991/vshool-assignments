import React, {useState, useEffect} from "react"
import axios from "axios"
import User from "./components/User.js"

export default function App() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("/users")
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
          { users.map(user => <User {...user} key={user.name}/>)}
        </div>
    )
}