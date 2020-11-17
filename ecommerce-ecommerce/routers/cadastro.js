const express = require('express');
const router = express.Router();
const person = require('../models/IndividualPerson')
const UserController = require('../controllers/UserController')

router.get('/PF', UserController.index);
router.post('/PF', UserController.add);

module.exports = router;