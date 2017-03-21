let House = require('../models/house')
let faker = require('faker')

module.exports = {
  index: function(req, res, next){
    House.find({}, function(err, houses){
      if(err){
        res.json(err)
      } else {
        res.json(houses)
      }
    })
  },
  create: function(req, res, next){
    let house = new House({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      address: req.body.address,
      lat: req.body.lat,
      lng: req.body.lng,
      contact: req.body.contact
    })

    house.save((err) => {
      if (err) {
        res.json(err)
      } else {
        res.json({
          status: true,
          msg: 'house saved'
        })
      }
    })
  },
  show: function(req, res, next){
    House.findById(req.params.id, function(err, house){
      if (err) {
        res.json(err)
      } else {
        res.json(house)
      }
    })
  },
  update: function(req, res, next){
    House.findById(req.params.id, function(err, house){
      if(err) throw err

      house.title= req.body.title
      house.description= req.body.description
      house.price= req.body.price
      house.address= req.body.address
      house.lat= req.body.lat
      house.lng= req.body.lng
      house.contact= req.body.contact

      house.save((err) => {
        if(err) throw err

        res.json({
          status: true,
          msg: 'House updated'
        })
      })
    })
  },
  destroy: function(req, res, next){
    House.findByIdAndRemove(req.params.id, function(err){
      if(err) throw err

      res.json({
        status: true,
        msg: 'House deleted'
      })
    })
  },

  generate: function(req, res, next){
    for (var i = 0; i < req.params.amount; i++) {
      let house = new House({
        title: faker.commerce.productName(),
        description: faker.lorem.paragraph(),
        price: faker.commerce.price(),
        address: faker.address.streetAddress(),
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
        contact: faker.phone.phoneNumber()
      })

      house.save((err) => {
        if (err) {
          // res.json(err)
          console.log(err);
        } else {
          // res.json({
          //   status: true,
          //   msg: 'house saved'
          // })
          console.log('House saved');
        }
      })
    }
  }
}
