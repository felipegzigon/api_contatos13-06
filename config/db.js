const mongoose = require('mongoose');


function conectarBanco() {

mongoose.connect(process.env.MONGO_URI)

.then(() => console.log('MongoDB conectado com sucesso'))

.catch((err) => {

console.error('Erro ao conectar ao MongoDB:', err);

process.exit(1); // Encerra a aplicação em caso de falha

});

}


module.exports = conectarBanco;