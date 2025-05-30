const Contato = require('../models/contatoModel');


exports.getAllContatos = async (req, res) => {

try {

const contatos = await Contato.find();

res.json(contatos);

} catch (err) {

res.status(500).json({ mensagem: 'Erro ao buscar contatos', erro: err.message });

}

};


exports.getContatoById = async (req, res) => {

try {

const contato = await Contato.findById(req.params.id);

if (!contato) return res.status(404).json({ mensagem: 'Contato não encontrado' });

res.json(contato);

} catch (err) {

res.status(500).json({ mensagem: 'Erro ao buscar contato', erro: err.message });

}

};


exports.createContato = async (req, res) => {

try {

const novoContato = new Contato(req.body);

await novoContato.save();

res.status(201).json(novoContato);

} catch (err) {

res.status(400).json({ mensagem: 'Erro ao criar contato', erro: err.message });

}

};


exports.updateContato = async (req, res) => {

try {

const contatoAtualizado = await Contato.findByIdAndUpdate(req.params.id, req.body, { new: true });

if (!contatoAtualizado) return res.status(404).json({ mensagem: 'Contato não encontrado' });

res.json(contatoAtualizado);

} catch (err) {

res.status(400).json({ mensagem: 'Erro ao atualizar contato', erro: err.message });

}

};


exports.deleteContato = async (req, res) => {

try {

const contatoRemovido = await Contato.findByIdAndDelete(req.params.id);

if (!contatoRemovido) return res.status(404).json({ mensagem: 'Contato não encontrado' });

res.status(204).end();

} catch (err) {

res.status(500).json({ mensagem: 'Erro ao excluir contato', erro: err.message });

}

};