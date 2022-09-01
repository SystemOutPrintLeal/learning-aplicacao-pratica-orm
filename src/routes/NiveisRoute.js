import { Router } from 'express'
import NiveisController from '../controllers/NiveisController.js'

const router = Router()

router.get('/niveis',NiveisController.getAll)
router.get('/niveis/:pk',NiveisController.getById)


export default router