var mongoose = require('mongoose');
var Message = mongoose.model('Message');

class Messages {

    show(req, res) {
        Message.find({}, function(err, messages) {
            res.render('main', { messages: messages })
        })
    }

    create(req, res) {
        var created_message = new Message({ name: req.body.name, message: req.body.message });
        created_message.save(function(err) {
            if (err) {
                console.log("something went wrong");
            } else {
                res.redirect('/main');
            }
        })
    }
}

module.exports = new Messages