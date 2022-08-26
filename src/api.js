import express from 'express'
import database from './database/database.js'
import routes from './routes/index.js'

const PORT = 8080
await database.sync()

const app = express()

routes(app)

app.listen(PORT,()=>{
    console.log(`server on fire in:\nhttp://localhost:${PORT}`)
}) 
