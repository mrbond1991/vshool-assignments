// First Express Server
const express = require("express")
const app = express()

// Fake Data
const users = [
    { name: "john", age: 32 },
    { name: "mike", age: 31 },
    { name: "aly", age: 28 },
    { name: "inge", age: 73 },
    { name: "david", age: 63 }
]
    // 1. Endpoint (mount path)
    // 2. CallBack function
app.get("/users", (req, res) => {
  res.send(users)
})

    // 1: PORT  2: CB
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})