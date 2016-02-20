var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
  ISBN: {type: String, index:{unique: true}},
  center: {
    x: Number,
    y: Number
    },
  zoom: Number,
  itinerary: [{
    character: String,
    coords: [{
      x: Number,
      y: Number,
      description: String
      }]
    }]
  });


module.exports = mongoose.model("Book", bookSchema, "initialSample");
