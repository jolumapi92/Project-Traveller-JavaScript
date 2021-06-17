const jwt = require('jsonwebtoken');
const Traveller = require('../src/models/traveller');

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, 'papichulo', {
        expiresIn: maxAge
    });
}

module.exports.signUpTraveller = async (req, res) => {
    const { name, email, password, age } = req.body;

    try {
        const user = await Traveller.create( {name, email, password, age} );
        token = createToken(user._id);
        res.cookie('travellerConcierge', token, {httpOnly: true, maxAge: maxAge * 3000});
        res.status(201).json(user._id);
    } catch (error) {
        res.status(400).json( { err } )
    }
};