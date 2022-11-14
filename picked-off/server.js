const express = require("express")
const app = express()

app.use(express.json())

app.use("/animes", (req, res, next) => {
    console.log("Database innitialized...")
    req.body = {
        title: "Attack on Titan",
        genre: "action",
        dubbed: true
    }
    next()
})

app.get("/animes", (req, res, next) => {
    console.log("GET REQUEST RECIEVED")
    res.send(req.body)
    next()
})

app.use("/animesList", require("./routes/animeRouter.js"))

app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})