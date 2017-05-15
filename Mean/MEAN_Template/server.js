// require express and path
var express = require("express");
var path = require("path");
// create the express app
var app = express();
// require bodyParser since we need to handle post data for adding a user
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quotes');
var QuoteSchema = new mongoose.Schema({
  name: String,
  quote: String
})
var Quote = mongoose.model('Quote', QuoteSchema);



const PORT = 5000

app.use(bodyParser.urlencoded({ extended: true }));
// static content 
app.use(express.static(path.join(__dirname, "./app/views/static")));


// setting up ejs and our views folder
app.set('views', path.join(__dirname, './app/views'));
app.set('view engine', 'ejs');

// invoke the function stored in routes_setter and pass it the "app" variable
var routes_setter = require('./app/controllers/_routes.js')(app)


// tell the express app to listen on port PORT
app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
})