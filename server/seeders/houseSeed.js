'use strict'
const faker = require('faker');

let houseArray = []
for (let i = 1; i <= 10; i++) {
  houseArray.push({
    'title': faker.lorem.word(),
    'price': faker.commerce.price(),
    'detail': faker.address.streetAddress(),
    'image': faker.image.image(),
    'latitude': faker.address.latitude(),
    'longitude': faker.address.longitude(),
  })
}

module.exports = houseArray
