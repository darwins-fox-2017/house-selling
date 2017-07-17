'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
require('../config/config')

let houseSchema = new Schema ({
  title: String,
  image: String,
  ImageId: [{ type: Schema.Types.ObjectId, ref: 'Image' }],
  spesification: String,
  price: String,
  address: String,
  latitude: String,
  longitude: String,
  slug: String
}, {
  timestamps: true
})

let House = mongoose.model('Houses', houseSchema)

module.exports = House
