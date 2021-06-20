const Activity = require('../src/models/activity');

module.exports.getAllActivities = async (req, res) => {
    const activities = await Activity.find({}).catch(err => { res.status(400).json('The data you are trying to reach is not available') });
    if(activities){
        res.json(activities);
    }
}

module.exports.getOneActivity = async (req, res) => {
    const id = req.params.id

    try {
        const activity = await Activity.findById(id) 
        res.json(activity);
    } catch (error) {
        res.status(400).json('Unable to find the data you are trying to reach')
    }
    
     
}

module.exports.postOneActivity = async (req, res) => {
    const { name, location, category, description  } = req.body

    try {
        const activity = await Activity.create({name: name, location: location, category: category, description: description});
        res.status(201).json({Activity: `The activity has been succesfully created`})
    } catch (error) {
        res.status(400).json('Unable to save this particular data')
    }
    
     
}

module.exports.deleteOneActivity = async (req, res) => {
    const id = req.params.id
    Activity.findByIdAndDelete(id)
    .then( (result) => { 
        res.json({ response: 'Succesfully deleted an activity' })
     })
     .catch( (error) => {
         res.status(404).json({ response: 'The user was not found' })
     })
}