const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    location: {
        type: String,
        required: true
    },
    agent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    number: {
        type: Number,
        required: true
    },
    traveller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Traveller'
    }
    }, { 
    versionKey: false,
    timestamps: true
 });

 const Event = mongoose.model('Event', eventSchema);

 module.exports = Event;
