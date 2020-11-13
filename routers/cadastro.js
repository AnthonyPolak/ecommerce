const express = require('express');
const router = express.Router();

const userController = require('../controllers/UserController')

router.get('/PF', (req, res)=>{
    res.render('pessoa_fisica')
});

router.post('/PF', userController.add)

router.get('/PJ', (req, res)=>{
    res.render('pessoa_juridica')
});

module.exports = router;