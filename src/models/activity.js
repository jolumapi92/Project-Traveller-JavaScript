const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const activitySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        required: true
    }
    }, { 
    versionKey: false,
    timestamps: true
 });

 const Activity = mongoose.model('Activity', activitySchema);

 module.exports = Activity;
