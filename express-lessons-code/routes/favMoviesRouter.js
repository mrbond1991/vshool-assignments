const express = require("express")
const favMovieRouter = express.Router()
const {v4: uuid} = require("uuid")

const favMovies = [
    { title: "Harry Potter 1", genre: "Fantasy", _id: uuid() },
    { title: "Harry Potter 2", genre: "Fantasy", _id: uuid() },
    { title: "Harry Potter 3", genre: "Fantasy", _id: uuid() },
    { title: "Harry Potter 4", genre: "Fantasy", _id: uuid() }
  ]

//   favMovieRouter.get("/", (req, res) => {
//     res.send(favMovies)
//   })
  
//   favMovieRouter.post("/", (req, res) => {
//     const newFavMovie = req.body
//     newFavMovie._id = uuid()
//     favMovies.push(newFavMovie)
//     res.send( `Successfully added ${newFavMovie.title} to the database!` )
//   })

  favMovieRouter.route("/")
    .get((req, res) => {
        res.send(favMovies)
    })
    .post((req, res) => {
        const newFavMovie = req.body
        newFavMovie._id = uuid()
        favMovies.push(newFavMovie)
        res.send( `Successfully added ${newFavMovie.title} to the database!` )
      })


module.exports = favMovieRouter