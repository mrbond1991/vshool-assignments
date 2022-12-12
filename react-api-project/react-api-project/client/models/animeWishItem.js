const mongoose = require('mongoose')
const Schema = mongoose.Schema

const animeWishListItemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
    }
})

module.exports = mongoose.model("AnimeWishListItem", animeWishListItemSchema)