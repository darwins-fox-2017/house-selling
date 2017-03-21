var mongoose = require('mongoose')
var Schema = mongoose.Schema

var houseSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  address: String,
  lat: String,
  lng: String,
  contact: String,
}, {
  timestamps: true
})


module.exports = mongoose.model('House', houseSchema)
