const mongoose = require('mongoose');


const contatoSchema = new mongoose.Schema({

nome: {

type: String,

required: [true, 'O nome é obrigatório']

},

email: {

type: String,

required: [true, 'O email é obrigatório']

},

endereco: {

type: String,

required: [true, 'O endereço é obrigatório']

},

telefone: {

type: String,

required: [true, 'O telefone é obrigatório']

},

foto: {

type: String, // Pode ser uma URL ou caminho de arquivo

required: [true, 'A foto é obrigatória']

}

}, {

timestamps: true

});


module.exports = mongoose.model('Contato', contatoSchema);