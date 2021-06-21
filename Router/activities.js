router = require('express').Router();
controller = require('../Controller/activities');
const { requireAuth } = require('../middleware/AuthMiddleware');

router.get('/activities', controller.getAllActivities);
router.get('/activities/:id', controller.getOneActivity);
router.get('/eventActivities/:id', controller.getCertainActivities);
router.post('/activities', requireAuth, controller.postOneActivity);
router.delete('/activities/:id', requireAuth, controller.deleteOneActivity);

module.exports = router;