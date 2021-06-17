const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const travellerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    }
}, {
    versionKey: false,
    timestamps: true
});


travellerSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next();
});

travellerSchema.statics.login = async function(email, password){
    const user = await this.findOne({ email });
    if(user) {
        const auth =  await bcrypt.compare(password, user.password)
        if(auth) {
            return user
        }
        throw Error('Incorrect password')
    }
    throw Error('Incorrect Email')
}


const Traveller = mongoose.model('Traveller', travellerSchema);
module.exports = Traveller