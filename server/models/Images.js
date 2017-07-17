'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
require('../config/config')

let imageSchema = new Schema ({
  image1: String,
  image2: String,
  image3: String,
  image4: String,
  image5: String
}, {
  timestamps: true
})

let Image = mongoose.model('Images', imageSchema)

module.exports = Image
