const router = require('express').Router();
const petsRoutes = require('./pets');

router.use('/pets', petsRoutes);

module.exports = router;