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
        type: Date,
        required: true,
    },
    booking_limit: {
        type: Date,
    },
    picture: {
        type: String,
    },
}, { timestamps: true })

const Event = mongoose.model('event', eventSchema)
module.exports = Event