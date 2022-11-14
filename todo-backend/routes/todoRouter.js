const express = require("express")
const todoRouter = express.Router()
const {v4: uuid} = require("uuid")

const todos = [
    {
        name: "vacuum",
        description: "vacuum all rooms in home",
        imageUrl: "http://www.myImage/vacuum",
        completed: true,
        _id: uuid()
    },
    {
        name: "coding",
        description: "get on computer and complete lessons and assignments",
        imageUrl: "http://www.myImage/coding",
        completed: false,
        _id: uuid()
    },
    {
        name: "read scriptures",
        description: "read required scriptures for Come Follow Me",
        imageUrl: "http://www.myImage/scriptures",
        completed: true,
        _id: uuid()
    },
    {
        name: "merchandise",
        description: "start at walmart, then smiths, then albertsons",
        imageUrl: "http://www.myImage/merchandise",
        completed: false,
        _id: uuid()
    },
    {
        name: "work out",
        description: "go to Rock Island Gym and lift and cardio with hiit",
        imageUrl: "http://www.myImage/work out",
        completed: true,
        _id: uuid()
    },
]

//Get One Todo
todoRouter.get("/:todoId", (req, res) => {
    const foundTodo = todos.find(todo => todo._id === req.params.todoId)
    res.send(foundTodo)
})

//Delete Todo
todoRouter.delete("/:todoId", (req, res) => {
    const todoIndex = todos.findIndex(todo => todo._id === req.params.todoId)
    todos.splice(todoIndex, 1)
    res.send("Todo successfully completed!")
})

// Update Todo
todoRouter.put("/:todoId", (req, res) => {
    const todoIndex = todos.findIndex(todo => todo._id === req.params.todoId)
    const updatedTodo = Object.assign(todos[todoIndex], req.body)
    res.send(updatedTodo)
})


todoRouter.route("/")
    //Get all Todos
    .get((req, res) => {
        res.send(todos)
    })
    //Add todo
    .post((req, res) => {
        const newTodo = req.body
        newTodo._id = uuid()
        todos.push(newTodo)
        res.send(todos)
    })


module.exports = todoRouter