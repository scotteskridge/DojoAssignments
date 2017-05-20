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
            .then(() => { res.json(true) })
            .catch(err => {
                console.log("Book save")
            })
        res.json({ placeholder: 'create' });
    }

    update(req, res) {
        //this should look an aweful lot like the create but need
        //the mongoose version of update note .save()
        res.json({ placeholder: 'update' });
    }

    delete(req, res) {
        //again find a friend by id and then use mongoose to destroy it
        res.json({ placeholder: 'delete' });
    }

    show(req, res) {
        //going to need to do a find based on the req.body.id
        //and then return that one friend
        res.json({ placeholder: 'show' });
    }
}


module.exports = new Friends