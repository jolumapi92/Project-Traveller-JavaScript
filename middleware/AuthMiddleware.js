const jwt = require('jsonwebtoken');
const User = require('../src/models/user');

const requireAuth = (req, res, next) => {
  const token = req.cookies.traveller;

  if(token){
    jwt.verify(token, 'papichulo', (err, decodedToken)=> {
      if(err){
        console.log(err.message);
      }
      else {
        console.log(decodedToken)
        next();
      }
    })
  }
  else {
    res.json({ user: 'The user needs to be logged in' });
  }
};

module.exports = { requireAuth }

