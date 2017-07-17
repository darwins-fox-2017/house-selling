'use strict'

const House = require('../models/houses')
const Image = require('../models/images')
const Faker = require('faker/locale/id_ID')
const Slug = require('slug')
const Seeder = {}

Seeder.createHouse = (req, res, next) => {
  let title = Faker.address.secondaryAddress()

  House.create({
    title: title,
    image: Faker.image.city(),
    spesification: Faker.lorem.sentence(),
    price: Faker.commerce.price(),
    address: Faker.address.streetName(),
    latitude: Faker.address.latitude(),
    longitude: Faker.address.longitude(),
    slug: Slug(title).toLowerCase()
  }).then((seeder) => {
    res.send(seeder)
  })
}

Seeder.createImage = (req, res, next) => {
  Image.create({
    image1: Faker.image.city(),
    image2: Faker.image.city(),
    image3: Faker.image.city(),
    image4: Faker.image.city(),
    image5: Faker.image.city()
  }).then((seeder) => {
    res.send(seeder)
  })
}

module.exports = Seeder
