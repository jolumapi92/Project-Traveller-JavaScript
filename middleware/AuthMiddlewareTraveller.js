const jwt = require('jsonwebtoken');
const Traveller = require('../src/models/event');

const requireAuthTraveller = (req, res, next) => {
    const token = req.cookies.travellerConcierge;

    if(token) {
        jwt.verify(token, 'papichulo', (err, decodedToken)=>{
            if(err){
                console.log(err)
            }
            else {
                console.log(decodedToken);
                next();
            }
        })
    }
    else {
        res.status(403).json({ notification: 'The usermust be logged in' });
    }
};

module.exports = { requireAuthTraveller }