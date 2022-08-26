import { Router } from 'express'
import PessoaController from '../controllers/PessoaController.js'

const router = Router()

router.get('/pessoas',PessoaController.getAll)
router.get('/pessoas/:pk',PessoaController.getById)
router.post('/pessoas',PessoaController.createPerson)
router.put('/pessoas/:pk',PessoaController.updatePerson)
router.delete('/pessoas/:pk',PessoaController.deletePerson)

export default router