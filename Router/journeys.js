const router = require('express').Router();
const controller = require('../Controller/journeys');

router.post('/startingJourney', controller.postJourney);

module.exports = router;