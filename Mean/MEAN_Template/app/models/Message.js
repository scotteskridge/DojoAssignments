// require mongoose
var mongoose = require('mongoose');
// create the schema
var MessageSchema = new mongoose.Schema({
        name: String,
        message: String
    })
    // register the schema as a model
var Message = mongoose.model('Message', MessageSchema);