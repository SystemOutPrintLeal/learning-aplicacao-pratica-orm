import sequelize from 'sequelize'
import database from '../database.js'

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
})
await Pessoas.sync();

export default Pessoas