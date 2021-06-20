const router = require('express').Router();
const controller = require('../Controller/travellers');



router.post('/travellerLogin', controller.loginTraveller);
router.post('/travellerSignUp', controller.signUpTraveller);
router.get('/logoutTraveler', controller.logoutTraveler );
router.get('/getCookie', controller.getCookie);



module.exports = router;