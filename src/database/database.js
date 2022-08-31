 import sequelize from 'sequelize'
 
const database = new sequelize({
    dialect: 'sqlite',
    storage: './database/db/withFK.sqlite'
  })

export default database