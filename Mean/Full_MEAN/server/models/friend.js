console.log('friends model');
var mongoose = require('mongoose');

let FriendSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    birthdate: Date
}, { timestamps: true })

mongoose.model("Friend", FriendSchema)