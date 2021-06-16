const router = require('express').Router();
const controller = require('../Controller/users');

router.post('/userSignUp', controller.postSignUp);
router.post('/userLogin', controller.postLogin);
router.get('/logOut', controller.getLogout);
router.get('/cookie', controller.cookie);

module.exports = router;
