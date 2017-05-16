var express = require("express");
var path = require("path");
var app = express();

// require bodyParser to have access to res.body
// var ang = require('angular')
// var ang = angular.module('ang', []);
// console.log(ang);
var bodyParser = require("body-parser");
const PORT = 5000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./app/views/static")));

app.set('views', path.join(__dirname, './app/views'));
app.set('view engine', 'ejs');

require('./config/mongoose')
    // invoke the function stored in routes_setter and pass it the "app" variable
var routes_setter = require('./app/controllers/_routes.js')(app)


// tell the express app to listen on port PORT
app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`);
})