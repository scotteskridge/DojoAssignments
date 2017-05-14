let User = require('../models/user.js')
require('../config/setup')

module.exports = function Route(app) {
	app.get('/', function (req, res) {
        var response_var = {};
        var new_user = [
            {name: "Michael", email: "michael@codingdojo.com"}, 
            {name: "Jay", email: "jay@codingdojo.com"}, 
            {name: "Brendan", email: "brendan@codingdojo.com"}, 
            {name: "Andrew", email: "andrew@codingdojo.com"}
            ];
        response_var.users = new_user
        console.log("users is this:", response_var)
        User.find({}, function(err, users) {
            for (user of users){
                console.log(user)
            response_var.users.push(user)

            }           
            console.log("users is this:", response_var)
            res.render("index", response_var);
            // console.log("all_users is this:", all_users)
            // This is the method that finds all of the users from the database
            // Notice how the first parameter is the options for what to find and the second is the
            //   callback function that has an error (if any) and all of the users
            // Keep in mind that everything you want to do AFTER you get the users from the database must
            //   happen inside of this callback for it to be synchronous 
            // Make sure you handle the case when there is an error, as well as the case when there is no error
           
        })
        
		
	})

	app.get('/test', function (req, res) {
		
	})
	app.post('/users', function(req, res) {
	
		// create a new User with the name and age corresponding to those from req.body
		var user = new User({name: req.body.name, age: req.body.age});
		console.log("the user is :", user.name, user.age)
		// Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
		user.save(function(err) {
			// if there is an error console.log that something went wrong!
			if(err) {
			console.log('something went wrong');
			} else { // else console.log that we did well and then redirect to the root route
			console.log('successfully added a user!', user );
			res.redirect('/');
			}
		})
	})



	


};