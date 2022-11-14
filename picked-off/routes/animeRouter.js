const express = require("express")
const animeRouter = express.Router()
const {v4: uuid} = require("uuid")

const animes = [
    {
        title: "Attack on Titan",
        genre: "action",
        dubbed: true,
        _id: uuid()
    },
    {
        title: "My Hero Acadamia",
        genre: "action",
        dubbed: true,
        _id: uuid()
    },
    {
        title: "Demon Slayer",
        genre: "action",
        dubbed: true,
        _id: uuid()
    },
    {
        title: "Fushigi Yugi",
        genre: "romance",
        dubbed: false,
        _id: uuid()
    }
]

animeRouter.route("/")
    .get((req, res, next) => {
        res.send(animes)
    })
    .post((req, res, next) => {
        const newAnime = req.body
        newAnime._id = uuid()
        animes.push(newAnime)
        res.send(`New anime, ${newAnime.title}, has been added to the database`)
        // next()
    })

module.exports = animeRouter