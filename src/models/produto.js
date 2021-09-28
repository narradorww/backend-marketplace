const mongoose = require('mongoose')
const Schema = mongoose.Schema

const produto= new Schema({
    lista_id:{
        type: Schema.Types.ObjectId,
        ref: 'Lista'
    },
       
    nome: String,
    capa: String,
    preco: Number,
    avaliacoes: Number,


});

module.exports = mongoose.model('Produto', produto);