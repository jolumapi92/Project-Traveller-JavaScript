const User = require('../src/models/user');
const jwt = require('jsonwebtoken');

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, 'papichulo', {
        expiresIn: maxAge
    });
}

module.exports.postSignUp = async (req, res) => {
    const { email, password, username } = req.body;

    try {
        const user = await User.create({ email, password, username });
        const token = createToken(user._id);
        res.cookie('traveller', token, { httpOnly: true, maxAge: maxAge * 3000 })
        res.status(201).json(user._id)
    } catch (err) {
        res.status(400).json( { err } )
    }
};

module.exports.postLogin = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie('traveller', token, { httpOnly: true, maxAge: maxAge * 3000 })
    res.status(200).json({ user: user._id })
  } catch(e) {
    console.log(e);
    res.status(400).json({ e })
  }
}

module.exports.getLogout = async (req, res) => {
    res.cookie('traveller', '', { maxAge: 1 });
    res.json({Action: "You have succesfully logout, we hope to see you again soon"});
}

