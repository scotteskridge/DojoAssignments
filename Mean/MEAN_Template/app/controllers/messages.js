var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');



// {
//   show: function(req, res) {
//     Quote.find({}, function(err, quotes) {
//       res.render('main', {quotes: quotes});
//     })
//   },
//   create: function(req, res) {
//     var quote = new Quote({name: req.body.name, quote: req.body.quote});
//     quote.save(function(err) {
//       if(err){
//         console.log("something went wrong");
//       } else {
//         res.redirect('/main');
//       }
//     })
//   }
// }

class Messages{
  constructor(req,res){
    this.req = req
    thi.res = res
  }
  show(req,res){
    Quote.find({}, function(err, quotes) {
      res.render('main', {quotes: quotes})
    })
  }
  quote(req, res){
    if(err){
        console.log("something went wrong");
      } else {
        res.redirect('/main');
      }
  }
  
}

module.exports = Messages