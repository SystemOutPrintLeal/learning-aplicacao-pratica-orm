import { Router } from 'express'
import PessoaController from '../controllers/PessoaController.js'

const router = Router()

router.get('/pessoas',PessoaController.getAll)
router.get('/pessoas/:estudanteID',PessoaController.getById)
router.post('/pessoas',PessoaController.createPessoa)
router.put('/pessoas/:estudanteID',PessoaController.updatePessoa)
router.delete('/pessoas/:estudanteID',PessoaController.deletePessoa)
router.get('/pessoas/:estudanteID/matricula/:matriculaID',PessoaController.getMatricula)
router.post('/pessoas/:estudanteID/matricula',PessoaController.createMatricula)
router.put('/pessoas/:estudanteID/matricula/:matriculaID',PessoaController.updateMatricula)
router.delete('/pessoas/:estudanteID/matricula/:matriculaID',PessoaController.deleteMatricula)

export default router