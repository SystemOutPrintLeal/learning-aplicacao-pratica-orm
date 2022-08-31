import PessoaDB from "../models/Pessoas.js"


export async function UP(){
    await PessoaDB.bulkCreate([
    {
        name: "debug",
        active: false,
        role: 'docente',
        email: "debug@email.com"   
    },
    {
        name: "Marcos Cintra",
        active: true,
        role: 'estudante',
        email: "marcos@marcos.com"   
    },
    {
        name: "Felipe Cardoso",
        active: true,
        role: 'docente',
        email: "felipe@felipe.com"   
    },
    {
        name: "Sandra Gomes",
        active: true,
        role: 'docente',
        email: "sandra@sandra.com"   
    },

    ],{})
}

export default { UP }