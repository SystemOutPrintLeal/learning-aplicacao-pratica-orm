import NiveisDB from "../models/Niveis.js"


export async function UP(){
    await NiveisDB.bulkCreate([
    {
        describe: 'básico', 
    },
    {
        describe: 'intermediário',    
    },
    {
        describe: 'avançado',    
    }
    ],{})
}

export default { UP }