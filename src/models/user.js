const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { 
    versionKey: false,
    timestamps: true
 });


userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next();
});

userSchema.statics.login = async function(email, password){
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



 const User = mongoose.model('User', userSchema);
 module.exports = User;