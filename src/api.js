import express from 'express'
import database from './database/database.js'
// import PESSOA from './database/models/Pessoas.js'
const PORT = 8080
await database.sync()

const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200).send({message :'ok'})
})

app.listen(PORT,()=>{
    console.log(`listen in port: ${PORT}`)
}) 