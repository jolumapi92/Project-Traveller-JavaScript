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

module.exports.loginTraveller = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Traveller.login(email, password);
        const token = createToken(user._id);
        res.cookie('travellerConcierge', token, { httpOnly: true, maxAge: maxAge * 3000});
        res.status(200).json({ user: user.name });
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

module.exports.logoutTraveler = (req, res) => {
    res.cookie('travellerConcierge', '', { maxAge: 1 });
    res.status(200).json({ notificaction: 'You have successfully logged out' });
};

module.exports.getCookie = async (req, res) => {
    const token = req.cookies.travellerConcierge;

    if(token){
        jwt.verify(token, 'papichulo', async (err, decodedToken) =>{
            if(err){
                console.log(err)
            }
            else {
                let user = await Traveller.findById(decodedToken.id);
                console.log(user);
                res.json({ user: user.name, admin: false })
            }
        })
    }
    else {
        res.status(206).json({ notification: 'user not found' });
    }
};