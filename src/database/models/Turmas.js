import sequelize from 'sequelize'
import database from '../database.js'
import MATRICULAS from '../models/Matriculas.js'
import PESSOAS from '../models/Pessoas.js'
import NIVEIS from '../models/Niveis.js'

const Turmas = database.define('turmas',{
    id: 
    {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    data_inicio:
    { 
        type:sequelize.DATEONLY,
        allowNull: false
    }
})
Turmas.associate = function(){
    Turmas.hasMany(MATRICULAS,{
        foreignKey: 'turma_id'
    })

    Turmas.belongsTo(PESSOAS,{
        foreignKey: 'docente_id'
    })
    Turmas.belongsTo(NIVEIS,{
        foreignKey: 'nivel_id'
    })
}

await Turmas.sync();

export default Turmas