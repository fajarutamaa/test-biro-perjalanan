import { Router } from 'express'
import { TripController } from '../../trip/controllers/trip.controller'
import { PrismaTripRepository } from '../../trip/repositories/trip.repository.prisma'
import { TripService } from '../../trip/services/trip.service'
import { TripInvoiceService } from '@/modules/invoice/services/invoice.service'
import { PrismaTripInvoiceRepository } from '@/modules/invoice/repositories/invoice.repository.prisma'
import { PrismaPaymentHistoryRepository } from '@/modules/payment-history/repositories/payhist.repository.prisma'
import { TripPayHistoryService } from '@/modules/payment-history/services/payhist.service'
import { authenticateJWT, authorizeRoles } from '@/middlewares/auth.middleware'
import { PrismaMasterDestinationsRepository } from '@/modules/master/repositories/destinations.repository.prisma'
import { MasterDestinationsService } from '@/modules/master/services/destinations.service'
import { UserRepository } from '@/modules/user/repositories/user.repository.prisma'
import { UserService } from '@/modules/user/services/user.service'
import { UserController } from '@/modules/user/controllers/user.controller'

const repo = new PrismaTripRepository()
const repoPayHistory = new PrismaPaymentHistoryRepository()
const repoInvoice = new PrismaTripInvoiceRepository()
const repoDestination = new PrismaMasterDestinationsRepository()
const repoUser = new UserRepository()

const service = new TripService(repo)
const serviceInvoice = new TripInvoiceService(repoInvoice)
const payHisttoryPayment = new TripPayHistoryService(repoPayHistory)
const serviceDestination = new MasterDestinationsService(repoDestination)
const serviceUser = new UserService(repoUser)

const router = Router()

const userController = new UserController()
const tripCcontroller = new TripController(service, serviceInvoice, payHisttoryPayment, serviceDestination, serviceUser)

// user management
router.get('/users', authenticateJWT, authorizeRoles(1, 2), userController.list)

// trip mamangement
router.get('/trips', authenticateJWT, authorizeRoles(1, 2), tripCcontroller.getAll)

export default router
