import sequelize from 'sequelize'
import database from '../database.js'
import TURMAS from '../models/Turmas.js'
import MATRICULAS from '../models/Matriculas.js'

const Pessoas = database.define('pessoa',{
    id: 
    {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: 
    {
       type:sequelize.STRING,
       allowNull: false
    } ,
    active:
    { 
        type:sequelize.BOOLEAN,
        allowNull: false
    },
    role: 
    {
        type: sequelize.STRING,
    },
    email: 
    {
        type:sequelize.STRING,
        allowNull: false
    },
},{paranoid: true})
Pessoas.associate = function(){
    Pessoas.hasMany(TURMAS,{
        foreignKey: 'docente_id'
    })
    Pessoas.hasMany(MATRICULAS,{
        foreignKey: 'estudante_id'
    })
}
await Pessoas.sync();

export default Pessoas