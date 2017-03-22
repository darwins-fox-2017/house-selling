const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

var houseSchema = new Schema({
	'title' : String,
	'price' : Number,
	'detail' : String,
	'image' : String,
	'latitude' : Number,
	'longitude': Number
}, {timestamps: true});

module.exports = mongoose.model('House', houseSchema);
