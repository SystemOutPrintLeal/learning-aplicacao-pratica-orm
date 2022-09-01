import TurmasDB from '../database/models/Turmas.js'

async function getAll(req,res){
    try{
        const responseDB = await TurmasDB.findAll()
        return res.status(200).json(responseDB)
    }catch(error){
        return res.status(500).json(error.message)
    }
}

export default { getAll }