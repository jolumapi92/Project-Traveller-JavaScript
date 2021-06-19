const router = require('./users');

const eventRouter = require('express').Router();
const controller = require('../Controller/events');

router.post('/postEventTraveller', controller.postEvent);
router.get('/events', controller.getAllEvents);

module.exports = router;
