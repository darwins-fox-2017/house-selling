'use strict'

const Model = require('../models/houses')
const Slug = require('slug')
const House = {}

House.getHouses = (req, res, next) => {
  Model.find({}).sort({createdAt: 'desc'}).then((houses) => {
    res.send(houses)
  })
}

House.getHouse = (req, res, next) => {
  Model.findOne({ slug: req.params.slug }).then((house) => {
    res.send(house)
  }).catch((error) => {
    res.send(error)
  })
}

House.newHouse = (req, res, next) => {
  Model.create({
    title: req.body.title,
    image: req.body.image,
    spesification: req.body.spesification,
    price: req.body.price,
    address: req.body.address,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    slug: Slug(req.body.title).toLowerCase()
  }).then((house) => {
    res.send(house)
  }).catch((err) => {
    res.send(err)
  })
}

House.updateHouse = (req, res, next) => {
  Model.update({slug: req.params.slug}).then((house) => {
    res.send(house)
  }).catch((err) => {
    res.send(err)
  })
}

House.removeHouse = (req, res, next) => {
  Model.remove({slug: req.params.slug}).then((house) => {
    res.send(house)
  }).catch((err) => {
    res.send(err)
  })
}

module.exports = House
