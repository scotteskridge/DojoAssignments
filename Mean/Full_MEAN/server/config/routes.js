console.log('routes');
let friends = require('./../controllers/friends')

module.exports = function(app) {
    // app.get('/', friends.index)

    app.get('/get_friends', friends.get_friends)
    app.post('/create', friends.create)
    app.post('/update', friends.update)
    app.post('/delete/:id', friends.delete)
    app.get('/user/show/:id', friends.show)
        // app.get('/get_friends', friends.get_friends)
        // app.post('/create', friends.create)
        // app.post('/update', friends.update)
        // app.post('/delete/:id', friends.delete)
        // app.get('/user/show/:id', friends.show)
}