const Lista = require('../models/lista')
const Produto = require('../models/produto')
const balaio= require('./balaio.json')

//database
require('../database')

const addListaeProdutos = async () => {
    try {
        for (let lista of balaio){
            const newLista = await new Lista(lista).save();
            await Produto.insertMany(lista.produtos.map((p)=>({...p, lista_id: newLista._id}))
            );
        }

        console.log('fim do script')

    } catch (err) {
        console.log(err.message)
    }
}

addListaeProdutos();
