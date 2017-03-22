const House = require('../models/house');

module.exports = {
  newHouses: function(req,res) {
    House.create({
      title: req.body.title,
      fullname: req.body.fullname,
      phonenumber: req.body.phonenumber,
      price: req.body.price,
      address: req.body.address,
      image: req.body.image,
      long: req.body.long,
      lat: req.body.lat
    }, function (err,data) {
       if (err) {
         res.send(err)
       }else{
         res.send(data)
       }
    })
  },
  getHouses: function(req,res) {
    House.find({}, function(err,data){
      if(err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  getHouse: function(req,res) {
    House.findOne({_id:req.params.id}, function(err,data){
      if(err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  updateHouse: function(req,res) {
    House.findOneAndUpdate({_id: req.params.id},req.body,{new: true},
      function(err, data){
        if (err){
          res.send(err)
        }else{
          res.send(data)
        }
      })
  },
  deleteHouse: function(req,res){
    House.findOneAndRemove({_id:req.params.id}, function(err, data){
      if (err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  }
}
