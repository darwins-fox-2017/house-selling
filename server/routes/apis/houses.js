var express = require('express');
var router = express.Router();

let houseController = require('../../controllers/houseController')

/* GET home page. */
router.get('/', houseController.index);

router.post('/', houseController.create)

router.get('/:id', houseController.show)

router.put('/:id', houseController.update)

router.delete('/:id', houseController.destroy)

router.get('/generate/:amount', houseController.generate)

module.exports = router;
