const mongoose = require('mongoose')
const Schema = mongoose.Schema

const animeListItemSchema = new Schema({
    title: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("AnimeListItem", animeListItemSchema)