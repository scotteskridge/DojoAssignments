var messages = require('./messages.js');

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('index')
    })
    app.post('/quotes', messages.create)
    app.get('/main', messages.show)
}