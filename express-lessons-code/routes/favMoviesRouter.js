const express = require("express")
const favMovieRouter = express.Router()
const FavMovie = require('../models/favMovies.js')

// Get One
favMovieRouter.get("/:favMovieId", (req, res, next) => {
  const favMovieId = req.params.favMovieId
  const foundFavMovie = favMovies.find(favMovie => favMovie._id === favMovieId)
  if(!foundFavMovie) {
    const error = new Error("The item was not found.")
    return next(error)
  }
  res.send(foundFavMovie)
})

// Get by genre
favMovieRouter.get("/search/genre", (req, res) => {
  const genre = req.query.genre
  const filteredFavMovies = favMovies.filter(movie => movie.genre === genre)
  res.send(filteredFavMovies)
})

//Delete One
favMovieRouter.delete("/:favMovieId", (req, res, next) => {
  FavMovie.findOneAndDelete({ _id: req.params.favMovieId }, (err, deletedFavMovie) => {
    if(err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(`Successfully deleted item ${deletedFavMovie.title} from the database!`)
  })
})

// Update One
favMovieRouter.put("/:favMovieId", (req, res, next) => {
  FavMovie.findOneAndUpdate(
    { _id: req.params.favMovieId },
    req.body,
    { new: true },
    (err, updatedFavMovie) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedFavMovie)
    }
  )
})

  favMovieRouter.route("/")
    //Get All
    .get((req, res, next) => {
      FavMovie.find((err, movies) => {
        if(err) {
          res.status(500)
          return next(err)
        }
        return res.status(200).send(movies)
      })
    })

    //Post One
    .post((req, res, next) => {
      const newFavMovie = new FavMovie(req.body)
      newFavMovie.save((err, savedMovie) => {
        if(err) {
          res.status(500)
          return next(err)
        }
        return res.status(200).send(savedMovie)
      })
    })


module.exports = favMovieRouter