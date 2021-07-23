const Journey = require('../src/models/journey');
const Traveller = require('../src/models/traveller');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');


module.exports.postJourney = async (req, res) => {
    const token = req.cookies.travellerConcierge;
    const { collectedActivities, idEvent, selectedDate } = req.body;
    console.log( collectedActivities, idEvent, selectedDate );

   if(token){
       jwt.verify(token, process.env.SECRETWORD, async (err, decodedToken)=>{
           if(err){
               console.log(err)
           }
           else {
                const user = await Traveller.findById(decodedToken.id);
                try {
                    const journey = await Journey.create({ event: idEvent, traveller: user, activities:  collectedActivities, date: selectedDate });
                    console.log(journey);
                    res.status(201).json({ journey: `A new journey has been created${ journey }` });
                } catch (error) {
                    console.log(error);
                    status(400).json({ notification: 'Bad request' });
                }
           }
       })
   } else {
       res.status(401).json({ notification: 'Not a valid traveller' });
   }
}

module.exports.getJourneyFromEvent = async (req, res) => {
    const token = req.cookies.travellerConcierge;
    const idEvent = req.params.id
    console.log(idEvent)


    if(token) {
        jwt.verify(token, process.env.SECRETWORD, async (err, decodedToken) => {
            if(err){
                console.log(err)
            } else {
                try {
                    const journeys = await Journey.find({ event: idEvent }).populate('activities').populate('event').populate('agent')
                    console.log(journeys)
                    res.status(200).json(journeys); 
                } catch (error) {
                    console.log(error)
                }
            }
        })
    }
}