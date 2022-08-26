import express from 'express'
import pessoas from './PessoaRoute.js'

export default async function routes(app)
{
    app.use(express.json())
    app.use(pessoas)
    
}