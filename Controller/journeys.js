const Journey = require('../src/models/journey');
const Traveller = require('../src/models/traveller');
const jwt = require('jsonwebtoken');


module.exports.postJourney = async (req, res) => {
    const token = req.cookies.travellerConcierge;
    const { collectedActivities, idEvent } = req.body;
    console.log( collectedActivities, idEvent );

   if(token){
       jwt.verify(token, 'papichulo', async (err, decodedToken)=>{
           if(err){
               console.log(err)
           }
           else {
                const user = await Traveller.findById(decodedToken.id);
                try {
                    const journey = await Journey.create({ event: idEvent, traveller: user, activities:  collectedActivities });
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