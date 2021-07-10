const jwt = require('jsonwebtoken');
const Event = require('../src/models/event');
const Traveller = require('../src/models/traveller');
const User = require('../src/models/user');

module.exports.postEvent = async (req, res) => {
    const token = req.cookies.travellerConcierge;
    const { location, agent, number } = req.body;

    if(token){
        jwt.verify(token, 'papichulo', async (err, decodedToken) =>{
            if(err){
                console.log(err)
            }
            else {
                let user = await Traveller.findById(decodedToken.id);
                let idUser = user._id
                console.log(idUser);
                try {
                    const event = await Event.create({location: location, agent:{ _id: agent }, number: number, traveller: { _id: idUser }});
                    console.log(event);
                    res.status(201).json({ notification: event });
                } catch (error) {
                    res.status(404).json({ notification: error })
                }
            }
        })
    }
    else {
        res.status(404).json({ notification: 'user not found' });
    }
};

module.exports.getAllEvents = async (req, res) => {
    const token = req.cookies.travellerConcierge;

    if(token){
        jwt.verify(token, 'papichulo', async (err, decodedToken) =>{
            if(err){
                console.log(err)
            }
            else {
                let user = await Traveller.findById(decodedToken.id);
                let idUser = user._id
                let events = await Event.find({ traveller: idUser }).populate('agent', 'username').populate('traveller', 'name');
                console.log(events)
                res.status(200).json(events);
            }
        })
    }
    else {
        res.status(401).json({ notification: 'user not found' });
    }
}

module.exports.getOneEvent = async (req, res) => {
    const token = req.cookies.travellerConcierge;
    const id = req.params.id

    if(token){
        jwt.verify(token, 'papichulo', async (err, decodedToken) =>{
            if(err){
                console.log(err)
            }
            else {
                let user = await Traveller.findById(decodedToken.id);
                let idUser = user._id
                let event = await Event.findById(id).populate('agent', 'username');
                console.log(event)
                res.status(200).json(event);
            }
        })
    }
    else {
        res.status(401).json({ notification: 'user not found' });
    }
}

module.exports.getAllEventsAgent = async (req, res) => {
    const token = req.cookies.traveller;

    if(token){
        jwt.verify(token, 'papichulo', async (err, decodedToken) =>{
            if(err){
                console.log(err)
            }
            else {
                let user = await User.findById(decodedToken.id);
                let idUser = user._id
                let events = await Event.find({ agent: idUser }).populate('traveller', 'name');
                console.log(events)
                res.status(200).json(events);
            }
        })
    }
    else {
        res.status(401).json({ notification: 'user not found' });
    }
}

module.exports.getAllEventsTraveller = async (req, res) => {
    const token = req.cookies.travellerConcierge;

    if(token) {
        jwt.verify(token, 'papichulo', (error, decodedToken) => {
            if(error){
                console.log(error)
            } else {
                let user = await Traveller.findById(decodedToken.id);
                let idUser = user._id
                let events = await Event.findById({traveller: idUser}).populate('agent', 'username');
                console.log(events)
                res.status(200).json(events);
            }
        })
    }
}