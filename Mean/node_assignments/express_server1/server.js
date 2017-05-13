let express = require('express')
let path = require("path")
    // var session = require('express-session');
let app = express()
let bodyParser = require("body-parser")

const PORT = 5000

// This sets the location where express will look for the ejs views
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "./static")))
app.use(express.static(path.join(__dirname, "./client")))
app.use(express.static(path.join(__dirname, "./node_modules")))

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs');

// require("./server/config/mongoose.js")
// require("./server/config/routes.js")(app)

app.get('/', function(req, res) {
        res.render('./index')
            //res.redirect('/')
            //res.send("Some response string or JSON")
    })
    ///////////////////////////////////////////////
    // app.post('/users', function (req, res){
    //     console.log("POST DATA \n\n", req.body)
    //     //code to add user to db goes here!
    //     // redirect the user back to the root route.
    //     res.redirect('/')
    // });

app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);
    // This is where we would add the user to the database
    // Then redirect to the root route
    res.redirect('/');
})

app.listen(PORT, function() {
    console.log(`Listening on port: ${PORT}`)
})