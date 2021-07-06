const router = require('express').Router();
const controller = require('../Controller/journeys');

router.post('/startingJourney', controller.postJourney);
router.get('/getAllJourneysFromAnEvent/:id', controller.getJourneyFromEvent);

module.exports = router;