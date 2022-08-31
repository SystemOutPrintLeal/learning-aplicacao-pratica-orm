import TurmasDB from "../models/Turmas.js"


export async function UP(){
    await TurmasDB.bulkCreate([
    {
        docente_id: 6, 
        data_inicio: "2020-02-01",
        nivel_id: 1,
    },
    {
        docente_id: 5, 
        data_inicio: "2020-02-01",
        nivel_id: 2,
    },
    {
        docente_id: 6, 
        data_inicio: "2020-02-01",
        nivel_id: 3,
    },
    {
        docente_id: 6, 
        data_inicio: "2020-07-01",
        nivel_id: 3,
    },
    ],{})
}

export default { UP }