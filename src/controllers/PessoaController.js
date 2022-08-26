import PessoaDB from '../database/models/Pessoas.js'

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

export default { getAll, getById, createPerson, updatePerson, deletePerson}
