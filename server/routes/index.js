var express = require('express')
var router = express.Router()
var House = require('../controllers/house')
var Seeder = require('../seeders/seeder')

router.get('/houses', House.getHouses)
router.get('/house/:slug', House.getHouse)
router.post('/house', House.newHouse)
router.put('/house/:slug', House.updateHouse)
router.delete('/house/:slug', House.removeHouse)

// Seeder
router.post('/seedhouse', Seeder.createHouse)
router.post('/seedimage', Seeder.createImage)

module.exports = router;
