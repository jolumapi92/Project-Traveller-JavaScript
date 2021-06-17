const router = require('express').Router();
const controller = require('../Controller/travellers');



router.post('/travellerLogin', controller.loginTraveller);
router.post('/travellerSignUp', controller.signUpTraveller);
// router.get('/travellerLogout');
// router.get('/getCookie');


module.exports = router;