router = require('express').Router();
controller = require('../Controller/activities');
const { requireAuth } = require('../middleware/AuthMiddleware');

router.get('/activities', controller.getAllActivities);
router.get('/activities/:id', requireAuth, controller.getOneActivity);
router.post('/activities', requireAuth, controller.postOneActivity);

module.exports = router;
