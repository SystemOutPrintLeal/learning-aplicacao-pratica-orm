import PessoaDB from "../models/Pessoas.js"


export async function UP(){
    await PessoaDB.create({
        name: "debug",
        active: false,
        role: 'docente',
        email: "debug@email.com"
    })
}

export default { UP }