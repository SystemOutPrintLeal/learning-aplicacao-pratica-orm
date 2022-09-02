import express from 'express'
import database from './database/database.js'
import routes from './routes/index.js'
// import PessoasSeed from './database/seeders/PessoasSeed.js'
// import NiveisSeed from './database/seeders/NiveisSeed.js'
// import TurmasSeed from './database/seeders/TurmasSeed.js'
// import MatriculasSeed from './database/seeders/MatriculasSeed.js'


const PORT = 8080
await database.sync()

const app = express()

routes(app)

app.listen(PORT,()=>{
    console.log(`server on fire in:\nhttp://localhost:${PORT}`)
}) 
