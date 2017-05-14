let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/basic_mongoose')
mongoose.Promise = global.Promise;

var fs = require('fs')
var path = require('path')

//this next bit of code goes through every .js file in the models folder and requires it
//this might be handy in the future for multiple controlers as well
var models_path = path.join(__dirname, '/../models')
fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js') > 0){
        require(`${models_path}/${file}`)
    }
})