import { Router } from 'express'
import { UserController } from '../controllers/user.controller'
import { authenticateJWT, authorizeRoles } from '../../../middlewares/auth.middleware'

const router = Router()
const controller = new UserController()

// Public routes
router.post('/register', controller.register)
router.post('/login', controller.login)

// Protected routes
router.get('/me', authenticateJWT, controller.getProfile)
router.put('/me', authenticateJWT, controller.update)
router.delete('/me', authenticateJWT, controller.delete)

export default router
