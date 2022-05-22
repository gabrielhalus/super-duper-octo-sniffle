const Router = require('express').Router()
const EventController = require('../controllers/event.controller')

Router.get('/', EventController.listEvents)
Router.post('/', EventController.createEvents)
Router.get('/upcoming', EventController.upcomingEvents)
Router.get('/next', EventController.nextEvent)
Router.get('/last', EventController.lastEvent)

module.exports = Router