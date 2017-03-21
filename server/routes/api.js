var express = require('express');
var router = express.Router();
var controller = require('../controllers/houseController')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/house', controller.getHouses);

router.get('/house/:id', controller.getHouse);

router.post('/house', controller.newHouses);

router.put('/house/:id', controller.updateHouse);

router.delete('/house/:id', controller.deleteHouse);

module.exports = router;
