import { Router } from 'express'
import TurmasController from '../controllers/TurmasController.js'

const router = Router()

router.get('/turmas',TurmasController.getAll)

export default router