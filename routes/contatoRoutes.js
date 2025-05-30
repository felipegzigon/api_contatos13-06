const express = require('express');

const router = express.Router();

const contatoController = require('../controllers/contatoController');


// GET /api/contatos

router.get('/', contatoController.getAllContatos);


// GET /api/contatos/:id

router.get('/:id', contatoController.getContatoById);


// POST /api/contatos

router.post('/', contatoController.createContato);


// PUT /api/contatos/:id

router.put('/:id', contatoController.updateContato);


// DELETE /api/contatos/:id

router.delete('/:id', contatoController.deleteContato);


module.exports = router;