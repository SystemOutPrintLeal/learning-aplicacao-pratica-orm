import PessoaDB from '../database/models/Pessoas.js'
import MatriculasDB from '../database/models/Matriculas.js'


async function getAll(req,res){
    try{
        const responseDB = await PessoaDB.findAll()
        return res.status(200).json(responseDB)
    }catch(error){
        return res.status(500).json(error.message)
    }
}

async function getById(req, res){
    const { estudanteID } = req.params
    try{
        const onePeople = await PessoaDB.findOne({
            where: {
                id: Number(estudanteID)
                }
            })
        return res.status(200).json(onePeople)
    }catch(error){
        return res.status(500).json(error.message)
    }
}

async function createPessoa(req,res){
    const body = req.body
    try{
        await PessoaDB.create(body)
        return res.status(200).json({message : "Succeed"})
    }catch(error)
    {
        return res.status(500).json(error.message)
    }

}

async function updatePessoa(req,res){
    const body = req.body
    const { estudanteID } = req.params
    try{
        await PessoaDB.update(body,
            {
                where:{
                    id : Number(estudanteID)
                }
            })

        return res.status(200).json({message : "Succeed"})
    }catch(error)
    {
        return res.status(500).json(error.message)
    }
}

async function deletePessoa(req,res){
    const { estudanteID } = req.params
    try{
        await PessoaDB.destroy({
            where:{
                id: Number(estudanteID)
            }
        })
        return res.status(200).json({message : "Succeed"}) 
    }catch(error)
    {
        console.log(error)
        return res.status(500).json(error.message)
    }
}

async function getMatricula(req, res){
    const { estudanteID, matriculaID } = req.params
    try{
        const matricula = await MatriculasDB.findOne({
            where: {
                id: Number(matriculaID),
                estudante_id : Number(estudanteID)
                }
            })
        return res.status(200).json(matricula)
    }catch(error){
        return res.status(500).json(error.message)
    }
}

async function createMatricula(req,res){
    const { estudanteID } = req.params
    const body = { ...req.body , estudante_id: Number(estudanteID)}
    try{
        const matricula = await MatriculasDB.create(body)
        return res.status(200).json(matricula)
    }catch(error)
    {
        return res.status(500).json(error.message)
    }

}

async function updateMatricula(req,res){
    const body = req.body
    const { estudanteID , matriculaID} = req.params
    try{
        await MatriculasDB.update(body,
            {
                where:{
                    id : Number(matriculaID),
                    estudante_id: Number(estudanteID)
                }
            })
        const matricula =  await MatriculasDB.findOne({where:{id: matriculaID}})

        return res.status(200).json(matricula)
    }catch(error)
    {
        return res.status(500).json(error.message)
    }
}

async function deleteMatricula(req,res){
    const { estudanteID, matriculaID } = req.params
    try{
        await MatriculasDB.destroy({
            where:{
                id : Number(matriculaID),
                estudante_id: Number(estudanteID)
            }
        })
        return res.status(200).json({message : "Succeed"}) 
    }catch(error)
    {
        console.log(error)
        return res.status(500).json(error.message)
    }
}


export default { getAll, getById, createPessoa, updatePessoa, deletePessoa, getMatricula,createMatricula,updateMatricula,deleteMatricula}
