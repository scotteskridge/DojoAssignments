var messages = require('./messages.js');

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('index')
  })
  app.post('/quotes',   messages.create(req, res))
  app.get('/main'   ,   messages.show(req, res))
}