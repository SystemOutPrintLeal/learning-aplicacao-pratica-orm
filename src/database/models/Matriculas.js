import sequelize from 'sequelize'
import database from '../database.js'
import PESSOAS from '../models/Pessoas.js'
import TURMA from '../models/Turmas.js'

const Matriculas = database.define('matriculas',{
    id: 
    {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    status: 
    {
       type:sequelize.STRING,
       allowNull: false
    }
})

Matriculas.associate = function(){

    Matriculas.belongsTo(PESSOAS,{
        foreignKey: 'estudante_id'
    })
    Matriculas.belongsTo(TURMA,{
        foreignKey: 'turma_id'
    })

}

await Matriculas.sync();

export default Matriculas