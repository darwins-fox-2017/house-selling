const House      = require('../models/house')
const Seeders    = require('../seeders/houseSeed.js')

module.exports = {
  seedHouse : (req, res, next) => {
    House.insertMany(Seeders).then((data) => {
      res.send(data)
    }).catch((err) => {
      console.log(err);
    })
  },

  getAll : (req, res) => {
    House.find({}, (err, houses) => {
      if (err) {
        res.json(err)
      } else {
        res.json(houses)
      }
    })
  },

  getOneHouse : (req, res) => {
    let id = req.params.id

    House.find({_id : id}, (err, house) => {
      if (err) {
        res.json(err)
      } else {
        res.json(house)
      }
    })
  },

  createHouse : (req, res) => {
    let newHouse = House(
      {
        title : req.body.title,
        price : req.body.price,
        detail : req.body.detail,
        image : req.body.image,
        latitude : req.body.latitude,
        longitude : req.body.longitude
      })

    newHouse.save((err, house) => {
      if (err) {
        res.json(err)
      } else {
        res.json(house)
      }
    })
  },

  update: (req, res) => {
    House.findOneAndUpdate(
      {_id : req.params.id}, req.body, {new: true}, (err, house) => {
        if (err) {
          res.json(err)
        } else {
          res.json(house)
        }
      })
  },

  delete: (req, res) => {
    House.findOneAndRemove(
      {_id : req.params.id}, (err, house) => {
        if (err) {
          res.json(err)
        } else {
          res.json(house)
        }
      })
  }

}
