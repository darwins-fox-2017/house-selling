var express      = require('express');
var router       = express.Router();
var controller   = require('../controllers/controllerHouse')

/* GET house listing. */
router.post('/seed', controller.seedHouse);
router.get('/', controller.getAll);
router.get('/:id', controller.getOneHouse);
router.post('/', controller.createHouse);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
