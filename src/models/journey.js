const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const journeySchema = new Schema({
    event: {
        type: Schema.Types.ObjectId,
        ref: 'Event',
        required: true
    },
    traveller: {
        type: Schema.Types.ObjectId,
        ref: 'Traveller',
        required: true
    },
    activities: [{
        type: Schema.Types.ObjectId,
        ref: 'Activity'
    }]
}, { 
    versionKey: false,
    timestamps: true
});

const Journey = mongoose.model('Jorney', journeySchema);
module.exports = Journey;
