const express = require('express')
const userRouter = express.Router()
const {v4: uuid} = require("uuid")

const users = [
    { name: "John Bond", age: 32, _id: uuid() },
    { name: "Mike Bond", age: 31, _id: uuid() },
    { name: "Aly Bond", age: 28, _id: uuid() },
    { name: "Inge Bond", age: 73, _id: uuid() },
    { name: "David Bond", age: 63, _id: uuid() }
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
        res.send( newUser )
    })

module.exports = userRouter