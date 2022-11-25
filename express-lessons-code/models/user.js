const mongoose = require('mongoose')
const Schema = mongoose.Schema

// User Blueprint
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    dateOfBirth: Number
})

module.exports = mongoose.model("User", userSchema)