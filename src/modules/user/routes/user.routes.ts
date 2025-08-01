import { Router } from 'express'
import { UserController } from '../controllers/user.controller'
import { authenticateJWT, authorizeRoles } from '../../../middlewares/auth.middleware'

const router = Router()
const controller = new UserController()

// Public routes
router.post('/register', controller.register)
router.post('/login', controller.login)

// Protected routes
router.get('/profile', authenticateJWT, controller.getProfile)
router.put('/update-profile', authenticateJWT, controller.update)

router.delete('/delete', authenticateJWT, controller.delete)

export default router
