const mongoose = require('mongoose')
const Schema = mongoose.Schema

// FavMovie BluePrint
const favMovieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("FavMovie", favMovieSchema)