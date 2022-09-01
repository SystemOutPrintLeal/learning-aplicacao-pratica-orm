import express from 'express'
import pessoas from './PessoaRoute.js'
import turmas from './TurmasRoute.js'
import niveis from './NiveisRoute.js'

export default async function routes(app)
{
    app.use(express.json())
    app.use(pessoas)
    app.use(turmas)
    app.use(niveis)
    
}