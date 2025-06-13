const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');


router.post('/registrar', userController.registrar); // Criação de usuário

router.post('/login', userController.login); // Login do usuário


module.exports = router;