import NiveisDB from '../database/models/Niveis.js'

async function getAll(req,res){
    try{
        const responseDB = await NiveisDB.findAll()
        return res.status(200).json(responseDB)
    }catch(error){
        return res.status(500).json(error.message)
    }
}

async function getById(req, res){
    const { pk } = req.params
    try{
        const nivel = await NiveisDB.findOne({
            where: {
                id: Number(pk)
                }
            })
        return res.status(200).json(nivel)
    }catch(error){
        return res.status(500).json(error.message)
    }
}

export default { getAll , getById}