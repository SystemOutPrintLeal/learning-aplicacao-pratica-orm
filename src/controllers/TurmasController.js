import TurmasDB from '../database/models/Turmas.js'

async function getAll(req,res){
    try{
        const responseDB = await TurmasDB.findAll()
        return res.status(200).json(responseDB)
    }catch(error){
        return res.status(500).json(error.message)
    }
}

async function getById(req, res){
    const { pk } = req.params
    try{
        const turma = await TurmasDB.findOne({
            where: {
                id: Number(pk)
                }
            })
        return res.status(200).json(turma)
    }catch(error){
        return res.status(500).json(error.message)
    }
}

async function createTurma(req,res){
    const body = req.body
    try{
        await TurmasDB.create(body)
        return res.status(200).json({message : "Succeed"})
    }catch(error)
    {
        return res.status(500).json(error.message)
    }

}

async function updateTurma(req,res){
    const body = req.body
    const { pk } = req.params
    try{
        await TurmasDB.update(body,
            {
                where:{
                    id : Number(pk)
                }
            })

        return res.status(200).json({message : "Succeed"})
    }catch(error)
    {
        return res.status(500).json(error.message)
    }
}

async function deleteTurma(req,res){
    const { pk } = req.params
    try{
        await TurmasDB.destroy({
            where:{
                id: Number(pk)
            }
        })
        return res.status(200).json({message : "Succeed"}) 
    }catch(error)
    {
        console.log(error)
        return res.status(500).json(error.message)
    }
}

export default { getAll, getById, createTurma, updateTurma, deleteTurma }