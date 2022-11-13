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

//Get One
userRouter.get("/:userId", (req, res) => {
    const userId = req.params.userId
    const foundUser = users.find(user => user._id === userId)
    res.send(foundUser)
})

//Delete One
userRouter.delete("/:userId", (req, res) => {
    const userId = req.params.userId
    const userIndex = users.findIndex(user => user._id === userId)
    users.splice(userIndex, 1)
    res.send("Succefully deleted user!")
})

//Update One
userRouter.put("/:userId", (req, res) => {
    const userId = req.params.userId
    const userIndex = users.findIndex(user => user._id === userId)
    const updatedUser = Object.assign(users[userIndex], req.body)
    res.send(updatedUser)
})

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