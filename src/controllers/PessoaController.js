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
    const { pk } = req.params
    try{
        const onePeople = await PessoaDB.findOne({
            where: {
                id: Number(pk)
                }
            })
        return res.status(200).json(onePeople)
    }catch(error){
        return res.status(500).json(error.message)
    }
}

async function createPerson(req,res){
    const body = req.body
    try{
        await PessoaDB.create(body)
        return res.status(200).json({message : "Succeed"})
    }catch(error)
    {
        return res.status(500).json(error.message)
    }

}

async function updatePerson(req,res){
    const body = req.body
    const { pk } = req.params
    try{
        await PessoaDB.update(body,
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

async function deletePerson(req,res){
    const { pk } = req.params
    try{
        await PessoaDB.destroy({
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

async function getMatricula(req, res){
    const { pk, matriculaId } = req.params
    try{
        const matricula = await MatriculasDB.findOne({
            where: {
                id: Number(matriculaId),
                estudante_id : Number(pk)
                }
            })
        return res.status(200).json(matricula)
    }catch(error){
        return res.status(500).json(error.message)
    }
}

async function createMatricula(req,res){
    const { pk } = req.params
    const body = { ...req.body , estudante_id: Number(pk)}
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
    const { pk , matriculaId} = req.params
    try{
        await MatriculasDB.update(body,
            {
                where:{
                    id : Number(matriculaId),
                    estudante_id: Number(pk)
                }
            })
        const matricula =  await MatriculasDB.findOne({where:{id: matriculaId}})

        return res.status(200).json(matricula)
    }catch(error)
    {
        return res.status(500).json(error.message)
    }
}

async function deleteMatricula(req,res){
    const { pk, matriculaId } = req.params
    try{
        await MatriculasDB.destroy({
            where:{
                id : Number(matriculaId),
                estudante_id: Number(pk)
            }
        })
        return res.status(200).json({message : "Succeed"}) 
    }catch(error)
    {
        console.log(error)
        return res.status(500).json(error.message)
    }
}


export default { getAll, getById, createPerson, updatePerson, deletePerson, getMatricula,createMatricula,updateMatricula,deleteMatricula}
