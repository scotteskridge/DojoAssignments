// take a look at building out a user class with CRUD class methods 
// require('../config/mongoose.js')

let mongoose = require('mongoose')



var UserSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 6 },
    last_name: { type: String, required: true, maxlength: 20 },
    age: { type: Number, min: 1, max: 150 },
    email: { type: String, required: true }
}, { timestamps: true });


var User = mongoose.model('User', UserSchema)


//exports have to go last!!! wtf
module.exports = User;