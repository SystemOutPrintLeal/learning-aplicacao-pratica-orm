 import sequelize from 'sequelize'
 
const database = new sequelize({
    dialect: 'sqlite',
    storage: './database/db/database.sqlite'
  })

export default database