const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    cost: {
        type: Number,
        required: true,
        default: 0,
    },
    date: {
        type: String,
        required: true,
    },
    booking_limit: {
        type: String,
    },
    picture: {
        type: String,
    },
}, { timestamps: true })

const Event = mongoose.model('event', eventSchema)
module.exports = Event