mongoose = require('mongoose');
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