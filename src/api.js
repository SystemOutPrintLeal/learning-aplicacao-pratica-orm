import express from 'express'
import database from './database/database.js'
import routes from './routes/index.js'
import pessoaSeed from './database/seeders/PessoasSeed.js'
import MatriculasSeed from './database/seeders/MatriculasSeed.js'
import NiveisSeed from './database/seeders/NiveisSeed.js'
import TurmasSeed from './database/seeders/TurmasSeed.js'

const PORT = 8080
await database.sync()

const app = express()

routes(app)

app.listen(PORT,()=>{
    console.log(`server on fire in:\nhttp://localhost:${PORT}`)
}) 
