const eventRouter = require('express').Router();
const controller = require('../Controller/events');

eventRouter.post('/postEventTraveller', controller.postEvent);
eventRouter.get('/events', controller.getAllEvents);
eventRouter.get('/events/:id', controller.getOneEvent);
eventRouter.get('/eventsAgent', controller.getAllEventsAgent);
eventRouter.get('/eventsTraveller', controller.getAllEventsTraveller);

module.exports = eventRouter;
