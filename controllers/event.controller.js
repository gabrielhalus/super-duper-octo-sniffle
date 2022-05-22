const EventModel = require('../models/event.model')

module.exports.listEvents = async (req,res) => {
    const docs = await EventModel.find().sort('-date')
    return res.status(200).json(docs)
}

module.exports.createEvents = async (req,res) => {
    const { title, cost, date, booking_limit, picture } = req.body
    try {
        const docs = await EventModel.create({
            title, cost, date, booking_limit, picture
        })
        res.status(201).json(docs)
    } catch (err) {
        return res.status(400).send(err)
    }
}

module.exports.upcomingEvents = async (req,res) => {
    const docs = await EventModel.find().where('date').gt(Date.now()).sort('date')
    return res.status(200).json(docs)
}

module.exports.nextEvent = async (req,res) => {
    const docs = await EventModel.find().where('date').gt(Date.now()).sort('date').limit(1)
    return res.status(200).json(docs)
}

module.exports.lastEvent = async (req,res) => {
    const docs = await EventModel.find().where('date').lt(Date.now()).sort('-date').limit(1)
    return res.status(200).json(docs)
}