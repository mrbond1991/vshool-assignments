const express = require("express")
const favMovieRouter = express.Router()
const {v4: uuid} = require("uuid")

const favMovies = [
    { 
      title: "Harry Potter 1", 
      genre: "fantasy", 
      _id: uuid()
    },
    { 
      title: "Die Hard", 
      genre: "christmas", 
      _id: uuid()
    },
    { 
      title: "Wakanda Forever", 
      genre: "action", 
      _id: uuid()
    },
    { 
      title: "The Notebook", 
      genre: "romance", 
      _id: uuid()
    }
  ]

//   favMovieRouter.get("/", (req, res) => {
//     res.send(favMovies)
//   })

// Get One
favMovieRouter.get("/:favMovieId", (req, res) => {
  const favMovieId = req.params.favMovieId
  const foundFavMovie = favMovies.find(favMovie => favMovie._id === favMovieId)
  res.send(foundFavMovie)
})

// Get by genre
favMovieRouter.get("/search/genre", (req, res) => {
  const genre = req.query.genre
  const filteredFavMovies = favMovies.filter(movie => movie.genre === genre)
  res.send(filteredFavMovies)
})

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