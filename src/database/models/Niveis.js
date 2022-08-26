import sequelize from 'sequelize'
import database from '../database.js'
import TURMAS from '../models/Turmas.js'

const Niveis = database.define('niveis',{
    id: 
    {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    describe: 
    {
       type:sequelize.STRING,
       allowNull: false
    } 
})

Niveis.associate = function(){
    Niveis.hasMany(TURMAS,{
        foreignKey: 'nivel_id'
    })
}
await Niveis.sync();

export default Niveis