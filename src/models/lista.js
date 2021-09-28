const mongoose = require('mongoose')
const Schema = mongoose.Schema

const lista= new Schema({
    nome: String,
    logo: String,
    categoria: String,
    datainicio: String,
    datafim: String,
    destaque: Number,
    location: Object,
    recipient_id: String,


});

module.exports = mongoose.model('Lista', lista);
