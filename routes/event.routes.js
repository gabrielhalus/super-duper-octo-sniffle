const Router = require('express').Router()
const EventController = require('../controllers/event.controller')

Router.get('/', EventController.listEvents)
Router.post('/', EventController.createEvents)

module.exports = Router