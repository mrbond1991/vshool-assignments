const express = require('express')
const userRouter = express.Router()
const User = require('../models/user.js')

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
    //Get All
    .get((req, res, next) => {
        User.find((err, users) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(users)
        })
    })

    //Post One
    .post((req, res, next) => {
        const newUser = new User(req.body)
        newUser.save((err, savedUser) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(savedUser)
        })
    })

module.exports = userRouter