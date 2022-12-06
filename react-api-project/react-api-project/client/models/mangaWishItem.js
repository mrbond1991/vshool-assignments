const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mangaWishListItemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
    }
})