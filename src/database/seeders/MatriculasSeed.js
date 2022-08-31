import MatriculasDB from "../models/Matriculas.js"


export async function UP(){
    await MatriculasDB.bulkCreate([
    {
        status: "confirmado",
        estudante_id: 1,
        turma_id: 1,
    },
    {
        status: "confirmado",
        estudante_id: 2,
        turma_id: 1,
    },
    {
        status: "confirmado",
        estudante_id: 3,
        turma_id: 2,
    },
    {
        status: "confirmado",
        estudante_id: 4,
        turma_id: 3,
    },
    {
        status: "cancelado",
        estudante_id: 1,
        turma_id: 2,
    },
    {
        status: "cancelado",
        estudante_id: 2,
        turma_id: 2,
    }
    ],{})
}

export default { UP }