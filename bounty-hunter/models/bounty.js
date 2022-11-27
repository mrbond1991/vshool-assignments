const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BountySchema = new Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    living: Boolean,
    bountyAmount: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        enum: ['Sith', 'Jedi'],
        required: true
    },
})

module.exports = mongoose.model('BountyModel', BountySchema)