console.log('friends controller');
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');


class Friends {
    get_friends(req, res) {
        // res.render('index')
        Friend.find({})
            .then(friends => { res.json(friends) })
            .catch(err => {
                console.log("Friends find error", err)
                res.status(500).json(err)
            })
    }

    create(req, res) {
        let new_friend = new Friend(req.body)
        new_friend.save()
            .then(() => { 
                console.log("and then the server sent a friend", new_friend)
                res.json(true)
                 })
            .catch(err => {
                console.log("Book save")
            })
        res.json({ placeholder: 'create' });
    }

    update(req, res) {
        //this should look an aweful lot like the show or inspect but need
        //the mongoose version of update note .save()
        Friend.findOne({_id : req.params.id})
            .then(friend => { 
                friend.firstName = req.params.firstName
                friend.lastName = req.params.lastName
                friend.birthdate = req.params.birthdate
                res.json(friend) 
            })
            .catch(err => {
                console.log("Friends find error", err)
                res.status(500).json(err)
            })
    }

    delete(req, res) {
       Friend.remove({_id : req.params.id})
            .then(() => {res.json(true)})
            .catch(err => {
                console.log("Friends find error", err)
                res.status(500).json(err)
            })
    }

    show(req, res) {
        //going to need to do a find based on the req.body._id
        //and then return that one friend
        
        Friend.findOne({_id : req.params.id})
            .then(friend => { res.json(friend) })
            .catch(err => {
                console.log("Friends find error", err)
                res.status(500).json(err)
            })
    }
}


module.exports = new Friends