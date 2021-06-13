router = require('express').Router();
controller = require('../Controller/activities');

router.get('/activities', controller.getAllActivities);
router.get('/activities/:id', controller.getOneActivity);

module.exports = router;