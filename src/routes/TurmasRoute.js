import { Router } from 'express'
import TurmasController from '../controllers/TurmasController.js'

const router = Router()

router.get('/turmas',TurmasController.getAll)
router.get('/turmas/:pk',TurmasController.getById)
router.post('/turmas',TurmasController.createTurma)
router.put('/turmas/:pk',TurmasController.updateTurma)
router.delete('/turmas/:pk',TurmasController.deleteTurma)


export default router