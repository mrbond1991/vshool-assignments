const express = require('express')
const userRouter = express.Router()
const {v4: uuid} = require("uuid")

const users = [
    { name: "john", age: 32, _id: uuid() },
    { name: "mike", age: 31, _id: uuid() },
    { name: "aly", age: 28, _id: uuid() },
    { name: "inge", age: 73, _id: uuid() },
    { name: "david", age: 63, _id: uuid() }
]


// userRouter.get("/", (req, res) => {
//     res.send(users)
//   })
  
// userRouter.post("/", (req, res) => {
// const newUser = req.body
// newUser._id = uuid()
// users.push(newUser)
// res.send( `Successfully added ${newUser.name} to the database!` )
// })

userRouter.route("/")
    .get((req, res) => {
        res.send(users)
    })
    .post((req, res) => {
        const newUser = req.body
        newUser._id = uuid()
        users.push(newUser)
        res.send( `Successfully added ${newUser.name} to the database!` )
    })

module.exports = userRouter