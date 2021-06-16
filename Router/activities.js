router = require('express').Router();
controller = require('../Controller/activities');
const { requireAuth } = require('../middleware/AuthMiddleware');

router.get('/activities', controller.getAllActivities);
router.get('/activities/:id', requireAuth, controller.getOneActivity);
router.post('/activities', requireAuth, controller.postOneActivity);
router.delete('/activities/:id', requireAuth, controller.deleteOneActivity);

module.exports = router;
