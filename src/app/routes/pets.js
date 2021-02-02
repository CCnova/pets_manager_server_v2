const express = require('express');
const router = express.Router();
const { petsController } = require('../controllers');

router.get('/', petsController.getPets);
router.get('/:petId', petsController.getPet);
router.post('/', petsController.createPet);
router.put('/:petId', petsController.updatePet);

module.exports = router;