const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mangaListItemSchema = new Schema({
    title: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("MangaListItem", mangaListItemSchema)