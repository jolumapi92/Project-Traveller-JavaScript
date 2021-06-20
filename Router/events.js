const eventRouter = require('express').Router();
const controller = require('../Controller/events');

eventRouter.post('/postEventTraveller', controller.postEvent);
eventRouter.get('/events', controller.getAllEvents);
eventRouter.get('/eventsAgent', controller.getAllEventsAgent);

module.exports = eventRouter;
