const jwt = require('jsonwebtoken');
const User = require('../src/models/user');

const requireAuth = (req, res, next) => {
  const token = req.cookies.traveller;

  if(token){
    jwt.verify(token, process.env.SECRETWORD, (err, decodedToken)=> {
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
    res.status(403).json({notification: "You need to be logged in" });
  }
};

module.exports = { requireAuth }

