import PessoaDB from '../database/models/Pessoas.js'

export async function getAll(req,res){
    try
    {
        const responseDB = await PessoaDB.findAll()
        return res.status(200).json(responseDB)
    }
    catch(error){
        return res.status(500).json(error.message)
    }
}

