const express = require('express');

const router = express.Router();

const carController = require('../controllers/car.controller');

router.get('/', carController.findAll);

router.post('/', carController.create);

router.put('/:id', carController.update);

router.delete('/:id', carController.delete);

module.exports = router;