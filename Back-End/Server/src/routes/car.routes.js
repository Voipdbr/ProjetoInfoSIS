const express = require('express');
var dbConnection = require('../../config/db.config');

const router = express.Router();

const carController = require('../controllers/car.controller');

router.get('/', carController.findAll);

router.post('/', carController.create);

router.get('/:id', carController.findById);

router.put('/:id', carController.update);

router.delete('/:id', carController.delete);

module.exports = router;