var path = require('path');

var mongoose        = require('mongoose');
var Book            = mongoose.model('Book');

module.exports = function(app) {

  //Get the book's info through the ISBN
  app.get("/book/:bookISBN", function (req,res) {

    Book.findOne({ISBN: req.params.bookISBN}, function (err,book) {
      if (err)
        res.send(err);

      res.json(book);


    });
  });
}
