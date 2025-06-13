const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({

nome: { type: String, required: true }, // Nome do usuário

email: { type: String, required: true, unique: true }, // E-mail deve ser único

senha: { type: String, required: true } // Senha será armazenada de forma criptografada

});


// Antes de salvar, criptografa a senha se ela foi modificada

userSchema.pre('save', async function(next) {

if (!this.isModified('senha')) return next();

const salt = await bcrypt.genSalt(10);

this.senha = await bcrypt.hash(this.senha, salt);

next();

});


// Método que permite comparar uma senha digitada com a armazenada no banco

userSchema.methods.compararSenha = function(senhaDigitada) {

return bcrypt.compare(senhaDigitada, this.senha);

};


module.exports = mongoose.model('Usuario', userSchema);