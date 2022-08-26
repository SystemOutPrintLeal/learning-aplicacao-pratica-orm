import { Router } from 'express'
import {getAll} from '../controllers/PessoaController.js'

const router = Router()

router.get('/pessoas',getAll)

export default router