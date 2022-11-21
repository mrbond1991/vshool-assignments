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
userRouter.get("/:userId", (req, res, next) => {
    const userId = req.params.userId
    const foundUser = users.find(user => user._id === userId)
    if(!foundUser) {
        const error = new Error(`The user with id ${userId} was not found.`)
        res.status(500)
        return next(error)
    }
    res.status(200).send(foundUser)
})

//Delete One
userRouter.delete("/:userId", (req, res, next) => {
    const userId = req.params.userId
    const userIndex = users.findIndex(user => user._id === userId)
    users.splice(userIndex, 1)
    if(!userIndex) {
        const error = new Error(`The user with id ${userId} was not found`)
        res.status(500)
        return next(error)
    }
    res.status(200).send("Succefully deleted user!")
})

//Update One
userRouter.put("/:userId", (req, res, next) => {
    const userId = req.params.userId
    const userIndex = users.findIndex(user => user._id === userId)
    const updatedUser = Object.assign(users[userIndex], req.body)
    if(!updatedUser) {
        const error = new Error(`The user with id ${userId} was not found`)
        res.status(500)
        return next(error)
    }
    res.status(201).send(updatedUser)
})

userRouter.route("/")
    .get((req, res) => {
        res.status(200).send(users)
    })
    .post((req, res) => {
        const newUser = req.body
        newUser._id = uuid()
        users.push(newUser)
        res.status(201).send( newUser )
    })

module.exports = userRouter