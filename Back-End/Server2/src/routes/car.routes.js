const express = require('express');

const router = express.Router();

const carController = require('../controllers/car.controller');

router.get('/', carController.findAll);

router.get('/', carController.create);

router.get('/:id', carController.findById);

router.get('/:id', carController.update);

router.get('/:id', carController.delete);

module.exports = router;