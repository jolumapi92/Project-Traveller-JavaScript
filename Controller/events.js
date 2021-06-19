mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Event = require('../src/models/event');
const Traveller = require('../src/models/traveller');

module.exports.postEvent = async (req, res) => {
    const token = req.cookies.travellerConcierge;
    const { location, agent, number } = req.body

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
                let events = await Event.find({ traveller: idUser });
                res.status(200).json(events);
            }
        })
    }
    else {
        res.status(404).json({ notification: 'user not found' });
    }
}