
let express = require("express");
let app = express();
let path = require("path");
let bodyParser = require('body-parser');
let user = require('./models/user.js')
require('./config/setup.js')
require('./config/routes.js')

const PORT = 5000


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


let route = require('./config/routes.js')(app);



	




app.listen(PORT, function() {
    console.log(`listening on port ${PORT}!`);
})

